/*
 * @Author       : huangyh
 * @Date         : 2022-10-25
 * @LasterEditor : huangyh
 * @Desriptions  : 页面处理事件方法
 * @FlePath     : /src/views/editor/core/windowEvent.js
 */

/**
 * @author:huangyh
 * @description：离开页面提示
 * @return {*}
 * @param {*} e
 */
export function beforeunloadHandler (e)
{
  const message = '数据未保存,确认离开?';

  e = e || window.event;
  if (e)
  {
    e.returnValue = message;
    return e;
  }
  return message;
}

/**
 * @author:huangyh
 * @description：键盘事件 -不知用途
 * @return {*}
 */
export function addEventListenerFn ()
{
  document.addEventListener('keydowm', (e) =>
  {
    if (
      (e.ctrlKey === true || e.metaKey === true) &&
      (e.which === 61 ||
        e.which === 107 ||
        e.which == 173 ||
        e.which === 109 ||
        e.which === 187 ||
        e.which === 189)
    )
    {
      e.preventDefault();
    }
  });
  // chrome IE 360
  window.addEventListener('mousewheel', (e) =>
  {
    if (e.ctrlKey = true || e.metaKey)
    {
      e.preventDefault();
    }
  });
  // firefox
  document.addEventListener(
    'DOMMouseScroll',
    (e) =>
    {
      if (e.ctrlKey === true || e.metaKey)
      {
        e.preventDefault();
      }
    },
    { passive: false }
  );
}
