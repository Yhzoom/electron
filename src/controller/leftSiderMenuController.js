/*
 * @Author       : huangyh
 * @Date         : 2022-10-26
 * @LasterEditor : huangyh
 * @Desriptions  : 左侧内容菜单切换控制器
 * @FilePath: /editor/src/views/editor/controller/leftSiderMenuController.js
 */

import { computed } from 'vue';
// 数据源
import { storage } from '@/views/editor/storage/storage';
import { editorStorage } from '@/views/editor/storage/editorStorage';
// 数据源-字典
import { navPageCodes } from '@/views/editor/storage/constant/navPage' ;
import siderNavData from '@/views/editor/storage/constant/siderNavData';
import editMode from '@/views/editor/storage/constant/editMode';
/**
* @author:huangyh
* @description:切换菜单,切换编辑器模式
* @return {*}
* @param {*}
*/
export function changeEditorMode (mode, currentData)
{
// 选中菜单key
  let selectedKey = '';
  let currentEditPageCode = null;
  let currentEditWindowCode = null;

  switch (mode)
  {
      case editMode.bottomNav:
        selectedKey = mode;
        break;
      case editMode.siderNav:
        selectedKey = mode;
        break;
      case editMode.page:
        selectedKey = currentData.code;
        currentEditPageCode = currentData.code;
        break;
      case editMode.window:
        selectedKey = currentData.code;
        currentEditWindowCode = currentData.code;
        break;
      default:
        break;
  }
  // 更新模式
  storage.$patch({
    // 选中菜单
    leftSiderSelectedKeys: [selectedKey],
    // 选中编辑模式
    currentEditMode: mode,
    currentEditPageCode,
    currentEditWindowCode,
    currentMaterialCode: null,
    currentMaterialId: null,
    currentItemsId: null
  });
}
/**
  *@author:huangyh
  * @description:页面,页面列表过滤掉navpage和侧边导航数据
  *@return {*}
  */
export const pageList = computed(() =>
{
  return editorStorage.layouts.filter((item) =>
  {
    return !(
      navPageCodes.includes(item.code) || item.code === siderNavData.code
    );
  });
});

/**
  * @author:huangyh
  * @description:设置导航模式
  * 结构[
  * { 'name': '底部导航','value':'1'},
  * { 'name': '侧边导航','value': '2'},
  * { 'name':'底部导航 + 侧边导航','value':'3'},
  * { 'name':'无底部导航和侧边导航','value': '4'}
  * ];
  * 编辑模式:底部导航bottomNav;侧边导航 siderNav;页面 page;弹窗 window,默认第一个底部导航
  * @returh {*}
  * @param {*}
  */
export function setNavMenuStructur (nav_menu_structure)
{
  const { currentEditMode } = storage;

  switch (nav_menu_structure)
  {
      // 结构为底部导航,当前编辑模式为侧边栏时切回底部导航模式
      case '1':
        if (currentEditMode === editMode.siderNav || !currentEditMode)
        {
          changeEditorMode(editMode.bottomNav);
        }
        break;
        // 结构为侧边导航,当前编辑模式为底部导航时切回侧边导航模式
      case '2':
        if (currentEditMode === editMode.bottomNav || !currentEditMode)
        {
          changeEditorMode(editMode.siderNav);
        }
        break;
        // 结构为底部导航 +侧边导航,当前编辑模式为无选中时切回导航模式,
      case '3':
        if (currentEditMode === null)
        {
          changeEditorMode(editMode.bottomNav);
        }
        break;
        // 结构为无底部导航和侧边导航,当前编辑模式为底部导航或导航模式时切回页面模式,
      case '4':
        if (currentEditMode === editMode.bottomNav || currentEditMode === editMode.siderNav || !currentEditMode)
        {
          if (pageList.value.length)
          {
            changeEditorMode(editMode.page, pageList.value[0]);
          }
          else if (editorStorage.windowList.length)
          {
            changeEditorMode(editMode.window, editorStorage.windowList[0]);
          }
          else
          {
            changeEditorMode(null);
          }
        }
        break;
      default:
        break;
  }
}