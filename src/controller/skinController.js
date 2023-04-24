/*
 * @Author       : huangyh
 * @Date         : 2022-10-26
 * @LasterEditor : huangyh
 * @Descriptions  : 皮肤管理
 * @FilePath: /editor/src/views/editor/controller/skinController.js
 */
import skinDefault from '../storage/constant/skinDefault';
import { editorStorage } from '@/views/editor/storage/editorStorage';
// 获取皮肤配置
export function getSkinProperty (enableKey)
{
  
  if (editorStorage.skinDto.property[enableKey] === '1')
  {
    return editorStorage.skinDto.property;
  }
  //  皮肤配置数据
  return skinDefault.property;
}
