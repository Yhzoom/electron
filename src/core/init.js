import { ElMessage } from 'element-plus'

// 工具方法
import { deepClone, createNumberId, sortTransform } from '../utils/util';
// 数据源-配置
import skinDefault from '../storage/constant/skinDefault';
import { navigationsProperty } from '../storage/constant/navigationsPropertyDefault';
import { navPageList } from '../storage/constant/navPage';
//  数据源
import { staticStorage } from '../storage/staticStorage';
import { editorStorage } from '../storage/editorStorage';
import { storage } from '../storage/storage';
//  接口
import {
  requestGetStyle,
  requestGetStyleFromZHY
} from '../service';
import { getChannelList } from '../controller/channelController';
// import { getSkinList } from '../controller/skinController';
//  控制器
import { setNavMenuStructur } from '@/views/editor/controller/leftSiderMenuController';

/*
 * @author:huangyh
 * @description：添加原生页面
 * @return {*}
 * @param {*}
 */
function getNativePage ()
{
  return navPageList.map((item) =>
  {
    return {
      // backGroundImage:'',
      backgroundColor: skinDefault.property.page_common_module_background_color,
      code: item.code,
      id: createNumberId(),
      opacity: true,
      panels: [],
      property: {
        common_module_background_color_type: '1',
        common_module_background_url_custom_type: '1'
      },
      rightRedirect: 0,
      scan: false,
      title: item.name
      // toolbar:null,
      // secondFloor:null
    };
  });
}


/*
 * @author:huangyh
 *@description：初始化＆保存后处理后端返回的数据排序，前端托拉拽后保存到后端跟返回的顺序不一样，
 *所以初始化时根据sort字段进行排序，sort在编辑时已做排序
 * @return {*}
 * @param ｛*｝ resData 后端返回的数据
 */
export function initResDataSort (resData)
{
  const { itemGroups, navigations, layouts } = resData;
  //  分组排序

  sortTransform(itemGroups);
  //  导航排序
  sortTransform(navigations);
  //  页面
  layouts.forEach((layout) =>
  {
    layout.panels.forEach((panel) =>
    {
      // 素材组件items排序
      sortTransform(panel.items);
    });
    // 素材组件排序
    sortTransform(layout.panels);
  });
}

/*
 * @author:huangyh
 * @description：item的面向所有赋值
 * @return {*}
 * @param {*} item
 * @param ｛*｝isSystem 是否是系统
 */
function setOrientedType (item, isSystem)
{
  // 基于系统风格创建时初始化要把入口面向用户设置成面向所有
  if (isSystem)
  {
    item.orientedType = true;
  }
  // 企业端在页面加载时做数据兼容，默认要钩上面上所有
  else if (
    item.orientedType === null &&
    item.itemOrientedDtoList.length === 0
  )
  {
    item.orientedType = true;
  }
}
/*
 * @author:huangyh
 * @description：基于系统风格创建时初始化要把入口面向用户设置成面向所有
 * @return {*}
 *＠param ｛*｝ resData 后端返回的数据
 */
function setItemEntrance (resData, isSystem)
{
  const { navigations, layouts } = resData;
  //  导肮

  if (navigations)
  {
    navigations.forEach((nav) =>
    {
      if (nav.item === null)
      {
        nav.item = {
          orientedType: null,
          itemOrientedDtoList: []
        };
      }
      setOrientedType(nav.item, isSystem);
    });
  }
  //  页面
  layouts.forEach((layout) =>
  {
    layout.panels.forEach((panel) =>
    {
      const { items, toolbar } = panel;

      // 素材组件items
      items.forEach((item) =>
      {
        setOrientedType(item, isSystem);
      });
      // 标题栏
      if (toolbar)
      {
        toolbar.leftMoreItems.forEach((item) =>
        {
          setOrientedType(item, isSystem);
        });
        toolbar.rightMoreItems.forEach((item) =>
        {
          setOrientedType(item, isSystem);
        });
      }
    });
  });
}

/*
 *@author:huangyh
 * @description：获取风格
 * @return {*}
 */
function initData (resData, type)
{
  //  来源是系统推送
  let isSystem = type === 'system';

  // if (isSystem)
  // {
  //   // 赋值风格名称
  //   resData.title = staticStorage.query.title;
  //   //  风格描述
  //   resData.remark = staticStorage.query.remark;
  // }
  // 1．基于系统风格创建时初始化要把入口面向用户设置成面向所有，
  //  2．企业端初始化的时候处理兼容就数据，没设置过的要设置成面向所有
  setItemEntrance(resData, isSystem);

  //  新建风格时，navigationsProperty：null
  if (!resData.skinDto)
  {
    resData.skinDto = deepClone(skinDefault);
    resData.skinId = 0;
  }
  //  新建风格时，navigationsProperty：｛｝
  if (!Object.keys(resData.navigationsProperty).length)
  {
    resData.navigationsProperty = deepClone(navigationsProperty);
  }
  //  新建风格时没有 layouts：［］，要添加原生页面
  if (!resData.layouts.length)
  {
    resData.layouts = getNativePage();
  }
  // 先排序
  initResDataSort(resData);
  //  放到数据源
  editorStorage.$patch(resData);
  // 根据导航结构初始化设置选中模式
  setTimeout(() =>
  {
    setNavMenuStructur(resData.navigationsProperty.nav_menu_structure);
  }, 10);
}

/*
 * @author:huangyh
 * ＠description：初始化返回的数据
 * @return {*}
 * @param {*} res
 */
function getStyle (params)
{
  storage.showLoading = true;
  requestGetStyle(params)
    .then((res) =>
    {
      staticStorage.isModified = false;
      initData(res);
    })
    .catch((err) =>
    {
      ElMessage.error('获取风格数据失败!');
      throw err;
    })
    .finally(() =>
    {
      storage.showLoading = false;
    });
}

/*
 * @author:huangyh
 * @description：基于系统推送的风格创建时获取风格
 * @return {*}
 */
function getStyleZHY (params)
{
  // storage.showLoading = true;
  // requestGetStyleFromZHY(params, {})
  //   .then((res) =>
  //   {
  //     initData(res, 'system');
  //   })
  //   .catch((err) =>
  //   {
  //     ElMessage.error('获取风格数据失败!');
  //     throw err;
  //   })
  //   .finally(() =>
  //   {
  //     storage.showLoading = false;
  //   });
}

/*
 * @author:huangyh
 * @description：初始化
 *@return {*}
 * @param {*}
 */
export const initStorage = function (instance)
{
  const { query } = instance.$route;
  //  url参数

  staticStorage.query = query;
  // 记住url
  staticStorage.url = decodeURIComponent(window.location.href);
  // 获取皮肤列表
  // getSkinList();
  // 获取频道列表
  getChannelList();
  // 判断是否被coddigger的iframe内嵌
  if (staticStorage.isInIframe)
  {
    // 通知父组件id变更
    top.postMessage(
      {
        type: 'command',
        content: 'unload',
        data: query.styid || query.draftid
      },
      '*'
    );
  }
  //  新增风格
  //  true 编辑 false 新建
  if (query.isedit === 'false')
  {
    // initAddStyleData();
  }
  //  编辑风格
  else
  {
    // 风格id
    const params = {
      id: query.edittarget === '1' ? query.styid : query.draftid
    };

    // 获取风格数据
    getStyle(params.id);
    //  平台：企业端

    // if (globalData.platform === 1)
    // {
    //   //  来源company
    //   if (query.resource == 'company')
    //   {
    //     // 获取风格数据
    //     getStyle(params);
    //   }
    //   //  来源system
    //   else
    //   {
    //     // 获取智慧云风格详情
    //     getStyleZHY(params);
    //   }
    // }
    // // 运营平台
    // else
    // {
    //   // 获取风格数据
    //   getStyle(params.id);
    // }
  }
};
