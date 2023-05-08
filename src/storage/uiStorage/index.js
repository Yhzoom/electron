/*
 * @Author       : haungyh
 * @Date         : 2023-03-05 14:14:41
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-05-08 10:46:02
 * @Description  : 
 * @FilePath     : /electron/src/storage/uiStorage/index.js
 */
import { defineStore } from 'pinia';
import { pinia } from '../pinia';
import { 
  colorBase,
  primaryColor,
  subColor,
  functionalColor,
  backgroundColor,
  linkColor,
  activeColor,
  activeOpacity,
  disabledOpacity,
  padding,
  textFont,
  textColor,
  fontSize,
  lineHeight,
  borderWidth,
  borderColor,
  borderRadius,
 } from './config';
// 编辑详情,数据绑定,保存时返回给后端
const useUIStorage = defineStore('UIStorage', {
  state: () =>
  {
    return { 
      colorBase,
      primaryColor,
      subColor,
      functionalColor,
      backgroundColor,
      linkColor,
      activeColor,
      activeOpacity,
      disabledOpacity,
      padding,
      textFont,
      textColor,
      fontSize,
      lineHeight,
      borderWidth,
      borderColor,
      borderRadius,
     }
  },
  getters: {
    
  }
});

export const uiStorage = useUIStorage(pinia);
