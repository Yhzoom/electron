/*
 * @Author       : huangyh
 * @Date         : 2022-10-26
 * @LasterEditor : huangyh
 * @Desriptions  : 分组
 * @FilePath     : \editor\src\views\editor\controller\itemGroupsController.js
 */
import { editorStorage } from '../storage/editorStorage';
// 无限key
const infiniteKey = '6';

/**
* @author:huangyh
* @description:
* @return {*}
* @param { object } items
* @param { boolean } isGroupDisplay 是否分组
* @param { number } limit 显示多少行限制
*/
export function getItemGroups (items, isGroupDisplay, limit)
{
  // 无分组id
  const noGroupId = null; // createNumberId();
  // 是不是无限
  const isInfinite = infiniteKey === limit;
  // 数据源-分组
  const { itemGroups } = editorStorage;
  // 分组列表
  let groupList = [];
  // 无分组属性
  let noGroupProperty = {};
  // 重要:分组map,关联itemGroups列表和内置items的项,groupId:Item
  const groupMap = {
    // 无分组
    [noGroupId]: {
      // 分组item数据
      items: [],
      // 显示的条数,用来控制显示分组,为0时不显示该分组
      visibleLength:0
    }
  };
  // 所有item是否有显示的
  let hasVisible = false;
  // 启用分组

  if (isGroupDisplay)
  {
    groupList = [...itemGroups];
    // 初始化关联分组
    itemGroups.forEach((group) =>
    {
      groupMap[group.id] = {
        // 分组item数据
        items: [],
        // 显示的条数,用来控制显示分组,为0时不显示该分组
        visibleLength: 0
      };
    });
    // 内容分组
    items.forEach((item) =>
    {
      // 内容项 ,属于分组 |1 不属于分组,item.groupId为null也是无分组
      const group = groupMap[item.groupId] || groupMap[noGroupId];
      // item是否显示
      let visible = false;

      // item是否有效
      if (item.localAvailable)
      {
        visible = isInfinite ? true : group.visibleLength < limit;
        group.visibleLength++;
        hasVisible = true;
      }
      item.visible = visible;
      group.items.push(item);
    });
    // 所有分组的属性都一样,所以取第一个属性就好了
    noGroupProperty = editorStorage.itemGroups.length && editorStorage.itemGroups[0].property || {};
    let noGroup = {
      'id': noGroupId,
      'title': '无分组',
      'subTitle': null,
      'titleLink': null,
      'subTitleLink': null,
      'property': noGroupProperty
    };

    groupList.push(noGroup);
  }
  // 不用分组
  else
  {
    // 行限制
    let limitCount = 0;

    items.forEach((item) =>
    {
      // item是否显示
      let visible = false;

      // item是否有效
      if (item.localAvailable)
      {
        visible = isInfinite ? true : limitCount < limit;
        limitCount ++;
        hasVisible = true;
      }
      item.visible = visible;
    });
    groupList = items;
  }
  return {
    groupList,
    groupMap,
    hasVisible
  };
}