/*
 * @Author       : huangyh
 * @Date         : 2022-10-26
 * @LasterEditor : huangyh
 * @Desriptions  : 保存和发布控制器
 * @FilePath: /editor/src/views/editor/controller/saveAndPubliseController.js
 */

import { ElMessage } from 'element-plus'

// import { registerMessageHandler, messageKey } from '../core/inIframe';
import { storage } from '../storage/storage';
import { staticStorage } from '../storage/staticStorage';
import { editorStorage } from '../storage/editorStorage';
// 自定义入口抽屉
import configEntranceStorage from '../components/rightConfig/drawer/configEntranceDrawer/storage';
//  提示弹窗
import { tipModalStorage } from '../components/modal/tipModal/storage';
import { publiseModalStorage } from '../components/modal/publiseModal/storage';
// 接口请求
import { requestSaveStyle, requestPublishStyle } from '../service';
// 审核
import { getAuditStatus, saveAudit } from '@/views/editor/service'; //  检查审核状态 //  切换/发布审核保存
//  敏感词
// import { finalCheck } from '@/utils/checkWords';
// import { useSensitiveWordsModal } from '@/views/editor/components/modal/sensitiveWordsModal/storage';
// vuex 原来的状态管理
// import store from '@/store/index';
// 初始化排序
import { initResDataSort } from '@/views/editor/core/init';

/**
 * @author:huangyh
 * @description: 保存和发布校验
 * @return {*}
 * @param {*}
 */
async function check ()
{
  //  检查自定义入口抽屉是否打开且有修改
  if (!configEntranceStorage.checkOnHeaderSave())
  {
    return false;
  }
  // 健泉说敏感词先不上
  //  检查敏感词
  // const checkResult = await finalCheck(editorStorage.$state);
  //  关闭loading

  storage.showLoading = false;
  // 有错误,则不通过
  // if (checkResult.error)
  // {
  //   const sensitiveWordsModalStorage = useSensitiveWordsModal();
  //   //  弹出提示框

  //   sensitiveWordsModalStorage.open(checkResult.errorList);
  //   return;
  // }
  // 导航值 底部导航 1,侧边导航2,底部导航＋侧边导航 3,无底部导航和侧边导航4
  // 无底部导航没有设置主页时不能保存 todo
  const { nav_menu_structure, notAppointPage } =
    editorStorage.navigationsProperty;

  if (nav_menu_structure === '4' && notAppointPage === 'true')
  {
    ElMessage.error('导航菜单未设置主页!');
    return false;
  }
  if (nav_menu_structure === '2' && notAppointPage === 'true')
  {
    ElMessage.error('导航菜单未设置主页!');
    return false;
  }
  return true;
}
/**
 * @author:huangyh
 * @description: 保存请求
 * @return {*}
 * @param {Function} callback 成功回调
 */
function saveRequest (callback)
{
  requestSaveStyle(editorStorage.$state)
    .then((resData) =>
    {
      // 执行回调
      callback(resData);
      // 先排序
      initResDataSort(resData);
      //  更新数据原editorStorage,单独赋值
      const layoutMap = resData.layoutMap;

      delete resData.LayoutMap;
      editorStorage.$patch(resData);
      //  每次保存id都会变,要替换
      editorStorage.layoutMap = layoutMap;
      //  更新本地数据Storage
      storage.updateStorage();
    })
    .catch((err) =>
    {
      storage.showLoading = false;
      ElMessage.error(typeof err === 'string' ? err : '保存失败,请重试');
      throw err;
    });
}

/**
 * @author:huangyh
 *@description: 审核弹窗点击提交审核按钮回调
 *@param {*}
 *@return {*}
 */

function auditConfirm ()
{
  //  防止重复点击
  if (storage.showLoading)
  {
    return;
  }
  //  打开loading
  storage.loadingTips = '正在提交审核';
  storage.showLoading = true;
  //  先保存数据
  saveRequest((resData) =>
  {
    const params = {
      id: resData.id,
      type: 1, //  1 发布,2切换
      desc: publiseModalStorage.publishDesc
    };
    //  提交审核

    saveAudit(params)
      .then(({ data }) =>
      {
        if (data.code === 0)
        {
          ElMessage.success('提交审核成功!');
        }
        else
        {
          ElMessage.error(data.message || '提交审核失败!');
        }
      })
      .catch((err) =>
      {
        ElMessage.error('提交审核失败!');
        throw err;
      })
      .finally(() =>
      {
        storage.showLoading = false;
      });
  });
}

/**
 *@author:huangyh
 *@description: 检查审核状态
 * @param {*}
 * @return {*}
 */
async function checkeAudit (formatobj)
{
  const res = await getAuditStatus();

  if (res.data.code === 0)
  {
    // 有正在审核中的风格,不能发布
    if (res.data.data.illegal)
    {
      ElMessage.warning('当前有正在审核中的风格,无法发布');
      return false;
    }
  }
  // 当前企业需要审核则弹出审核弹窗
  if (res.data.data.validatedAudit)
  {
    publiseModalStorage.audit(auditConfirm);
    return false;
  }
  // 可以直接发布
  return true;
}

/**
 * @description: 发布后需要重定向
 * @param {*} id 风格id
 * @return {*}
 * @author: 罗志鹏
 */
function redirectStyle (id)
{
  let path =
    window.location.href.split('?')[0] +
    '?edittarget=1&resource=company&isedit=true&styid=' +
    id;
  //  重新刷新页面

  location.href = path;
}

/**
 * @author:huangyh
 * @description: 发布弹窗点击确回调--先保存数据再请求发布接口
 * @return {*}
 */
function publiseConfirm ()
{
  storage.loadingTips = '正在保存';
  storage.showLoading = true;
  //  保存风格请求
  saveRequest((resData) =>
  {
    // 处理返回的数据
    staticStorage.qurey.draftid = resData.id;
    staticStorage.qurey.styid = resData.styleId;
    let obj = {
      id: resData.id,
      desc: publiseModalStorage.publishDesc
    };

    requestPublishStyle(obj)
      .then((res) =>
      {
        storage.showLoading = false;

        // 提示
        tipModalStorage.open({
          content: '发布成功',
          onOk: () =>
          {
            redirectStyle(resData.id);
          },
          onCancel: () =>
          {
            redirectStyle(resData.id);
          }
        });
        //  codigger 交互
        if (staticStorage.isInIframe)
        {
          top.postMessage({ type: 'command', content: 'published' }, '*');
        }
      })
      .catch((err) =>
      {
        storage.showLoading = false;
        tipModalStorage.open({
          content: typeof err === 'string' ? err : '发布失败,请重试'
        });
        throw err;
      });
  });
}

/**
 *@author:huangyh
 *@description: 发布
 * @return {*}
 * @param {*}
 */
export const publish = async function ()
{
  const isOk = await check();

  if (!isOk)
  {
    return;
  }
  const { nav_menu_structure, notAppointPage } =
    editorStorage.navigationsProperty;
  // 有底部导航时校验需判断有没有内容

  if (editorStorage.hasBottomNav)
  {
    //  没有包含内容
    if (!editorStorage.navigations.length)
    {
      ElMessage.error('底部导航菜单还没有配置导航项!');
      return;
    }
  }
  // 无底部导航没有设置主页
  if (nav_menu_structure && notAppointPage === 'true')
  {
    ElMessage.error('导航菜单未设置主页!');
    return;
  }
  // 判断当前时在企业端并且已升级审核功能,进行审核校验,发布是否需要审核
  // && store.state.app.isAuditUpdate
  if (globalData.platform === 1 )
  {
    const flag = await checkeAudit();
    //  走审核流程

    if (!flag)
    {
      return;
    }
  }
  //  走发布流程-弹出发布填写描述弹窗
  publiseModalStorage.publise(publiseConfirm);
};

/**
 * @author:huangyh
 * @description: 保存
 *@return {*}
 */
export const save = async function ()
{
  console.log(editorStorage.$state);
  return;
};
