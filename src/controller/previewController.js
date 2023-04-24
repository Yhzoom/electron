/*
 * @Author       : huangyh
 * @Date         : 2022-10-26
 * @LasterEditor : huangyh
 * @Desriptions  : 预览
 * @FilePath     : /src/views/editor/controller/previewController.js
 */
// import { registerMessageHandler, messageKey } from '../core/inIframe';
// 数据源
import { storage } from '../storage/storage';

/**
 * @author:huangyh
 * @description：预览
 * @return {*}
 * @param {*}
 */
export const preview = function ()
{
  storage.showPreviewModal = true;
  storage.isEditPage = true;
};
// 注册codigger通信事件
// registerMessageHandler(messageKey.preview, preview);
