/*
 * @Author       : huangyh
 * @Date         : 2022-10-26
 * @LasterEditor : huangyh
 * @Desriptions  : layoutMap,入口打开方式选择页面时和页面映射,{[item.id]:layout.id},选其他选项时 delete editorStorage.layoutMap[item.id]
 * @FilePath: /editor/src/views/editor/controller/layoutMapController.js
 */

import { editorStorage } from '../storage/editorStorage';
// 数据源字典
import {
  redirectConstant
} from '@/views/editor/storage/constant/configConstants';

/**
*@author:huangyh
*@description:绑定和删除选中页面
*@return {*}
*@param {*} params
*/
export function layoutMapBind (item)
{
// 选中是页面添加映射否则删除
  if (String(item.redirectType) === redirectConstant.page.value)
  {
    // 查找页面id
    const page = editorStorage.layouts.find((layout) => layout.code === item.redirectUrl);

    if (page)
    {
      editorStorage.layoutMap[item.id] = page.id;
    }
  }
  else if (editorStorage.layoutMap.hasOwnProperty(item.id))
  {
    delete editorStorage.layoutMap[item.id];
  }
}

/**
* @author:huangyh
* @description:删除item时 删除绑定
* @return {*}
* @param {*} item
*/
export function layoutMapUnBind (item)
{
  if (editorStorage.layoutMap.hasOwnProperty(item.id))
  {
    delete editorStorage.layoutMap[item.id];
  }
}