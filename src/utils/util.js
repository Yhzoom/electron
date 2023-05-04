/*
 * @Author: hyh
 * @Date: 2022-12-07 15:58:26
 * @LastEditors: honhyhe
 * @LastEditTime: 2023-01-05 16:41:08
 * @Description: util
 * @FilePath: /editor/src/views/editor/utils/util.js
 */
// import moment from 'moment';

/**
 * @description: 防抖
 */
export function debounce (fn, wait){
  let timer = null;

  return function (...args) {
    if (timer)clearInterval(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
/**
 * @description: 深拷贝
 * @return {*}
 */
export const deepClone = function (data)
{
  return data ? JSON.parse(JSON.stringify(data)) : {};
};

/**
 * @description: 生成UUID
 * @return {*}
 */
export const generateUUID = () =>
{
  let d = new Date().getTime();

  if (window.performance && typeof window.performance.now === 'function')
  {
    d += performance.now(); // use high-precision timer if available
  }
  let uuid = 'xxxxxxxx'.replace(/[xy]/g, function (c)
  {
    let r = (d + Math.random() * 16) % 16 | 0;

    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });

  return uuid;
};

/**
 * @description: 唯一ID数字
 * @return {*}
 */
export const createNumberId = () =>
{
  let tick = parseInt(Date.now() / 1000),
    max = 1e+9,
    rand = parseInt((1 + Math.random()) * max);

  return tick.toString(16) + rand.toString(16);
};

export const sortTransform = () =>
{

};

export const stringToMoment = (str) =>
{
  return str
  // return moment(str);
};

export const momentToString = (m, type = 'YYYY-MM-DD hh:mm:ss') =>
{
 
  return m
  // return moment(m).format(type);
};

/**
 * @description: 只能输入数字
 * @param {*} str
 * @return {*}
 */
export const numberFormat = (str) =>
{
  return str;
};

/**
 * @description: 只能输入数字blur时校验
 * @param {*} str
 * @return {*}
 */
export const numberFormatBlur = (str) =>
{
  return str;
};


/**
 * @description: px转rpx, app使用2倍像素
 * @param {*} str
 * @return {*}
 */
export const toRpx = (px) =>
{
  return px / 2 + 'px';
};

/**
 * @description: 排序
 * @param {*} str
 * @return {*}
 */
export const sortValueTransform = (str) =>
{
  return str;
};
