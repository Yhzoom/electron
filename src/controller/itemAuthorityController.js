/*
 * @Author       : huangyh
 * @Date         : 2022-10-26
 * @LasterEditor : huangyh
 * @Desriptions  : 入口item可见控制，勾选生效 或者 有效期内，且勾选的设备和头部选中的类型匹配上才显示到中间预览区，然后右侧item名称标红色
 * @FilePath     : /src/views/editor/controller/itemAuthorityController.js
 */

// 时间插件
import moment from 'moment';
// 数据源
import { storage } from '@/views/editor/storage/storage';

/**
 * @author:huangyh
 * @description：设备选中
 * @return {*}
 * @param {*} iosEnable
 * @param {*} androidEnable
 * @param {*} type 头部选中设备类型
 */
function checkDevice (iosEnable, androidEnable, type)
{
  return iosEnable && type === 'ios' || androidEnable && type === 'android';
}

/**
 *@author:huangyh
 *@description：企业管理后台
 * @return {*}
 * @param {*} items
 *@param {*} type
 */
function company (items, type, options)
{
  let now = moment();
  const newItems = [];

  items.forEach((item) =>
  {
    // 生效开始 生效结束 是否生效 ｜底部导航的item是 nav.item
    let { beginTime, endTime, available, iosEnable, androidEnable } = item.item ?
      item.item :
      item;
    // 是否可见
    let localAvailable = false;
    // 是否生效

    if (available)
    {
      // 判断有没有生效时间
      if (beginTime && endTime)
      {
        // 判断是否在时间范围内
        if (moment(beginTime).isBefore(now) && moment(now).isBefore(endTime))
        {
          // 判断设备勾选及当前机型
          if (checkDevice(iosEnable, androidEnable, type))
          {
            localAvailable = true;
          }
        }
      }
      // 没有生效时间就判断是否开启ios或android，且对应上顶部导航的设备类型
      else if (checkDevice(iosEnable, androidEnable, type))
      {
        localAvailable = true;
      }
    }
    const newItem = { ...item, localAvailable };
    // 是否用过滤，过滤的情况用在中间视图区显示，不过滤是右边配置区显示所有数据

    if (options.filter)
    {
      if (localAvailable)
      {
        newItems.push(newItem);
      }
    }
    else
    {
      newItems.push(newItem);
    }
  });

  return newItems;
}

/**
 * @author:huangyh
 * @description：综合运营平台
 * @return {*}
 * @param {*} items
 * @param {*} type
 */
function system (items, type, options)
{
  const newItems = [];

  items.forEach((item) =>
  {
    // 是否有效
    let localAvailable = false;
    // 安卓 IOS ｜底部导航的item是 nav.item
    let { iosEnable, androidEnable } = item.item ? item.item : item;

    // 判断设备勾选及当前机型
    if (checkDevice(iosEnable, androidEnable, type))
    {
      localAvailable = true;
    }
    const newItem = { ...item, localAvailable };
    // 是否用过滤，过滤的情况用在中间视图区显示，不过滤是右边配置区显示所有数据

    if (options.filter)
    {
      if (localAvailable)
      {
        newItems.push(newItem);
      }
    }
    else
    {
      newItems.push(newItem);
    }
  });
  return newItems;
}

/**
 * @author:huangyh
 * @description:
 * @return {*}
 * @param {*} items
 * @param {*} options filter 是否过滤调不可见
 */
export function itemAuthority (items = [], options = {})
{
  // 头部选中设备类型ios|| android
  const { type } = storage.currentEditorSize;

  // platform===1是企业后台 platform===2是运营后台
  if (globalData.platform === 1)
  {
    return company(items, type, options);
  }
  return system(items, type, options);
}

/**
 * @author:huangyh
 * @description：获取可见的item
 * @return {*}
 * @param {*} items
 * @param {*} options
 */
export function getItemAvailable (items)
{
  return itemAuthority(items, { filter: true });
}
