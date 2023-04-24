/*
 * @Author       : haungyh
 * @Date         : 2022-10-20 23:42:35
 * @LastEditors: honhyhe
 * @LastEditTime: 2022-12-26 21:29:12
 * @Description  : 颜色转换
 * @FilePath: /editor/src/views/editor/utils/colorTransform.js
 */
import opacityHex from '../storage/constant/opacityHex';

/**
 * @author: huangyh
 * @description: 颜色转换 rgba-> hex
 * @return {*}
 * @param {*} color
 */
export function toHex (color)
{
  if (!color)
  {
    return '';
  }
  if (color.indexOf('rgb') > -1)
  {
    let arr = color.split('(')[1].split(')')[0];
    let list = arr.split(',');
    let newColor = '';

    if (list.length > 3)
    {
      for (let i = 0;i < list.length; i++)
      {
        if (i === list.length - 1)
        {
          for (let j = 0; j < opacityHex.length; j++)
          {
            let per = opacityHex[j];

            if (per.value === Number(list[i]))
            {
              newColor = per.text + newColor;
            }
          }
        }
        else
        {
          let str = Number(list[i]).toString(16);

          if (str.length === 1)
          {
            str = '0' + str;
          }
          newColor = newColor + str;
        }
      }
    }
    else
    {
      for (let i = 0; i < list.length; i++)
      {
        newColor = newColor + Number(list[i]).toString(16);
      }
      newColor = 'ff' + newColor;
    }
    return newColor;
  }
  return color.replace(' ', '');
}