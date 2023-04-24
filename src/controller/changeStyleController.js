/*
 * @Author       : huangyh
 * @Date         : 2022-10-26
 * @LasterEditor : huangyh
 * @Desriptions  : 切换风格,在codigger用
 * @FilePath     : /electron/src/controller/changeStyleController.js
 */

import { ElMessage } from 'element-plus'
// 提示弹窗
import { tipModalStorage } from '../components/modal/tipModal/storage';
// 数据源
import { storage } from '../storage/storage';
// 注册codigger交互事件
import { registerMessageHandler, messageKey } from '../core/inIframe';
// 接口请求
import { requestChangeChaMeleonSkin } from '../service'; //  切换风格
import { getAuditStatus } from '@/views/audit/service'; //  检查审核状态
import { saveAudit } from '@/views/changeStyle/service'; //  切换/发布审核保存
// 要切换的数据
let currentStyle = {};
/**
 * @author:huangyh
 * @description:切换风格审核流程弹窗-点击提交审核对调
 * @param {*}
 * @return {*}
 */

function auditConfirm ()
{
  const params = {
    id: currentStyle.id,
    type: 2 // 1 发布,2切换
  };

  storage.showLoading = true;
  saveAudit(params)
    .then(({ data }) =>
    {
      if (data.code == 0)
      {
        ElMessage.success('提交审核成功!');
      }
      else
      {
        ElMessage.error(data.message || '提交审核失败!');
      }
    })
    .finally(() =>
    {
      storage.showLoading = false;
    });
}

/**
 * @author:huangyh
 * @description:切换风格-保存
 * @return {*}
 */
function saveConfirm ()
{
  const params = {
    id: currentStyle.id
  };

  storage.showLoading = true;
  requestChangeChaMeleonSkin(params)
    .then((res) =>
    {
      message.success('切换成功');
      top.postMessage({ type: 'command', content: 'published' }, '*');
    })
    .finally(() =>
    {
      storage.showLoading = false;
    });
}

/**
 * @author:huangyh
 * @description:codigger 点击切换风格
 * @return {*}
 */
export function changeStyle (style)
{
  getAuditStatus()
    .then((res) =>
    {
      if (res.data.code === 0)
      {
        // 有正在审核中的风格
        if (res.data.data.illegal)
        {
          message.warning('当前有正在审核中的风格, 无法切换');
          return;
        }
        currentStyle = style;
        //  validatedAudit 该企业需要审核 ＆＆status( null 没有审核记录或 2 审核不通过),则需要弹窗审核;undefined 旧版本 ,1 通过 可进行切换
        //  3 审核中时,illegal 必定则为true,走不到这
        if (res.data.data.validatedAudit)
        {
          // 走审核流程-弹出审核提示
          tipModalStorage.open({
            title: '切换风格',
            okText: '提交审核',
            onOk: auditConfirm,
            content: `<strong>您确认切换为该风格吗？</strong>
            <p>说明:目前切换风格需要经过审核,点击＂提交审核＂后平台会尽快审核。</p>`
          });
        }
        else
        {
          //  走切换流程-弹出切换提示
          tipModalStorage.open({
            title: '切换风格',
            okText: '切换风格',
            onOk: saveConfirm,
            content:
              '切换风格后,可能存在部分应用丢失,需要您到千人千面进行编辑,是否确定继续切换？'
          });
        }
      }
      else
      {
        message.warning('检测审核状态失败,无法切换');
        return;
      }
    })
    .catch((err) =>
    {
      message.warning('检测审核状态失败,无法切换');
      throw err;
    });
}

// 注册codigger通信事件
registerMessageHandler(messageKey.changeUseStyle, changeStyle);
