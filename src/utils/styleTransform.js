/*
 * @Author       : haungyh
 * @Date         : 2022-10-20 23:55:55
 * @LastEditors  : huangyh
 * @LastEditTime : 2022-10-21 00:11:17
 * @Description  : 样式转换
 * @FilePath     : \editor\src\views\editor\utils\styleStansform.js
 */
// 字典
import {
  fontWeightMap,
  borderStyleMap
} from '@/views/editor/storage/constant/configConstants';
/* eauthor:huangyh
* edescription:样式margin，padding转换:
* 后端值:'1,1,1,1'对应 上，左，下，右
* css对应值是'1,1,1,1'对应 上，右，下，左
* @return { string } css对应值
* eparam { string } value 后端值 '1,1,1,1'
*/
export function marginPaddingTransform (value)
{
  let top = '0px';
  let left = '0px';
  let bottom = '0px';
  let right = '0px';

  if (value)
  {
    [top, left, bottom, right] = value.split(',').map((val) =>
    {
      return `${val}px`;
    });

  }
  return `${top} ${right} ${bottom} ${left}`;
}
/* @author:huangyh
* @description:样式backgroundSize值:
* @return { string } css对应值
* eparam { string } value 后端值 '1' ， '2'
*/
export function backgroundSizeTransform (value)
{
  let type;

  if (value == '1')
  {
    type = 'cover';
  }
  else if (value === '2')
  {
    type = 'contain';
  }
  else
  {
    type = '100% 100%' ;
  }
  return type;
}

/* Gauthor:huangyh
* adescription:背景图
*@return { string } css对应值
* @param { string } key 后端值
*/
export function backgroundImageTransform (url)
{
  return url ? `url(${url})` : '';
}

/* @author:huangyh
* edescription:颜色，后端是透明度放在前面，前端样式是放在后面 如黑色透明度为1:后端ff000000，前端000000ff，嘿
* @return { string } css对应值
* eparam { string } key 后端值 color hex
*/
export function colorTransform (value)
{
  let color = value;

  if (color && !color.includes('rgb' ) )
  {
    if (color.length === 8)
    {
      // 换为值
      color = color.substr(2, 6) + color.substr(0, 2);
    }
    color = '#' + color;
  }
  return color;
}

/* @author:huangyh
* @description:字体加粗，统一转成 string
* @return { string } css对应值
* eparam { string } key 后端值
*/
export function fontWeightTransform (key)
{
  return fontWeightMap[String(key)];
}

/* @author:huangyh
* @description:边框
* @return { string } css对应值
* eparam { string } widthValue 后端值
* eparam { string } styleType 后端值
*@param { string } colorValue 后端值
*/

export function borderTransform (widthValue, styleType, colorValue)
{
  let width = widthValue || '0';
  let style = borderStyleMap[styleType] || 'none';
  let color = colorTransform(colorValue) || 'transparent';

  return `${width}px ${style} ${color}`;
}

/* @author:huangyh
* @description:样式圆角值转换:
* 后端值:'1,1,1,1'对应 上左，上右，下左，下右
*css对应值是'1,1,1,1”对应 上左，上右，下右，下左
*下面的左右反了，要是能对上写法更简单
* @return { string } '10px 10px 10px 10px'
* eparam { number } value 对应的值
* eparam { string } engine 1 启用，0禁用，'
*/
export function borderRadiusTransform (value, engines)
{
  let topLeft = '0px';
  let topRight = '0px';
  let bottomLeft = '0px';
  let bottomRight = '0px';

  if (engines && value)
  {
    [topLeft, topRight, bottomLeft, bottomRight] = engines
      .split(',')
      .map((engine) =>
      {
        return `${engine === '1' ? value : 0}px`;
      });
  }
  return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
}