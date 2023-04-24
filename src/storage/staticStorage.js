/*
 * @Author       : haungyh
 * @Date         : 2023-03-05 14:14:41
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-03-05 20:36:57
 * @Description  : 
 * @FilePath     : /electron/src/storage/staticStorage.js
 */
import icon from '@/assets/defaultApp.png';
export const staticStorage = {
  // 当前页面UrL, 用于跳转
  url: '',
  // 接口地址to do
  baseUrl: '',
  // 是否在co digger iframe
  isInIframe: self !== top,
  // urL参数
  qurey: {
    // 风格id
    styid: '',
    // 草稿id
    draftid: '',
    // 1在已发布风格上修改2在草稿上修改
    edittarget: '',
    // 系统推送基础上创建system； company to do
    resource: '',
    // true编辑false新建
    isedit: '',
    // 标题
    title: '',
    // 备注
    remark: ''
  },
  // 物料素材配置数据
  materialConfigList: [],
  // 物料素材配置数据对象{code:config}
  materialConfigMap: {},
  // 要切换的风格
  currentStyle: {},
  // 频道列表
  channelList: [],
  // 皮肤列表
  skinList: [],
  // 当前皮肤
  currentSkin: {},
  // 默认图标
  defaultNoIcon: icon
};
