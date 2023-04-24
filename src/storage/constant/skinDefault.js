/*
 * @Author       : haungyh
 * @Date         : 2022-10-20 22:51:17
 * @LastEditors  : huangyh
 * @LastEditTime : 2022-10-20 22:58:01
 * @Description  : 默认皮肤数据
 * @FilePath     : \editor\src\views\editor\storage\constant\skinDefault.js
 */
export default {
  colorBase:'ff1084f8', // 颜色基调
  id: null,
  property: {
  // 标题栏样式
    toolbar_common_module_text_color: 'ffffffff', // 标题栏标题字体颜色
    toolbar_common_module_title_text_size: '16', // 标题栏标题字号
    toolbar_common_module_title_align: '2', // 标题栏标题位置（1:居左,2:居中,3:居右）
    toolbar_common_module_background_color: 'ff08c4b0', // 标題栏背景色
    toolbar_common_module_background_url: '', // 标题栏背景图
    toolbar_common_module_background_url_type:'1', // 标题栏背景图类型（1:自动适配,2:等比例缩放居中,3:拉伸填满）
    // 页面样式
    page_common_module_background_color: 'fffef8f0', // 页面背景色
    page_common_module_background_url: '', // 页面背景图
    page_common_module_background_url_type: '1', // 页面背景图类型（1:自动适配,2:等比例缩放居中,3:拉伸填满）
    // 模块样式
    module_common_module_text_color: 'ff222222', // 模块标题字体颜色
    module_common_module_title_text_size:'14', // 模块标題字号
    module_common_module_title_align: '1', // 模块标题位置（1:居左,2:居中,3:居右）
    module_common_module_text_font_weight: '0', // 模块标题字粗（0:不加粗,1:加粗）
    module_common_module_sub_title_text_size: '12', // 模块副标题字号
    module_common_module_sub_title_text_color: 'ff999999', // 模块副标题字体颜色
    module_common_module_sub_name_font_weight: '0', // 模块副标题字体加粗
    module_common_module_title_background_color: 'fff8fcf8', // 模块标题背景色
    module_common_module_title_background_url: '', // 模块标题背景图
    module_common_module_title_background_url_type: '1', // 模块标题背景图类型（1:自动适配,2:等比例缩放居中,3:拉伸填满）
    module_common_module_background_color: 'fff8fcf8', // 模块内容背景色
    module_common_module_background_url:'', // 模块内容背景图
    module_common_module_background_url_type: '1', // 模块内容背景图类型（1:自动适配,2:等比例缩放居中,3:拉伸填满）
    module_common_module_group_title_text_color: 'ff333333', // 模块分组标题字体颜色
    module_common_module_group_title_title_text_size:'12', // 模块分组标题字号
    module_common_module_group_title_text_font_weight: '0', // 模块分组标题字粗（0:不加粗,1:加粗）
    module_common_module_group_title_background_color: 'fff8fcf8', // 模块分组背景色
    module_common_module_group_sub_title_text_color: 'ff999999', // 模块分组副标题字体颜色
    module_common_module_group_sub_title_title_text_size:'10', // 模块分组副标题字号
    module_common_module_group_sub_title_text_font_weight: '0', // 模块分组副标题字粗（0:不加粗,1:加粗）
    module_common_module_group_background_color: 'fff8fcf8', // 模块分组内容背景色
    module_common_module_item_title_color: 'ff333333', // 入口名称字体颜色
    module_common_module_item_title_font: '12', // 入口名称字体字号
    module_common_module_item_sub_title_color: 'ff999999', // 入口描述字体颜色
    module_common_module_item_sub_title_font: '10', // 入口描述字体字号
    // 底部导航菜单样式
    bottom_common_module_background_color: 'fffef8f0', // 底部导航背景色
    bottom_common_module_background_url:'', // 底部导航背景图
    bottom_common_module_background_url_type: '1', // 底部导航背景图类型（1:自动适配,2:等比例缩放居中,3:拉伸填满）
    bottom_select_title_color: 'ff222222', // 底部导航选中字体颜色
    bottom_unselect_title_color: 'ff9a9a9a', // 底部导航未选中字体颜色
    // 加载图样式
    skin_switch_account_url:'', // 切换账号Loading图标
    skin_check_update_url:'', // 检查更新Loading图标
    skin_page_load_url:'', // 页面加载Loading图标
    skin_page_refresh_url:'', // 界面刷新Loading图标
    // toast样式
    skin_toast_title_size: '14', // toast字体大小
    skin_toast_title_color: 'ffffffff', // toast字体颜色
    skin_toast_background_color: 'cc000000', // toast背景颜色
    skin_toast_title_align_type: '2' // toast对齐方式（0:居中,1:上,2:下）
    // 确认窗口样式
    // confirm_window_style: '1', // 确认窗口样式（1:没标题,2:有标题）
    // confirm_window_button_text_color: 'ff333333', // 确认窗口按钮字体
    // 入口图标
    // iconAlbum:[]
  },
  publishTime: null, // 发布时间
  skinId:null, // 已发布的皮肤的id
  status:null, // 状态,0-默认,1-草稿,2-已发布,3-被引用
  title:'默认皮肤', // 皮肤名称
  updateTime:null, // 更新时间
  previewImages: [
    // 预览图片
    {
      imageLoop: 0,
      sort:0,
      url:''// 预览图片地址
    }
  ],
  iconAlbumbto: {} // 入口图标
};