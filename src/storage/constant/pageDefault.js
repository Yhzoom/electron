/*
 * @Author       : haungyh
 * @Date         : 2022-10-20 22:30:01
 * @LastEditors: honhyhe
 * @LastEditTime: 2022-12-27 16:30:25
 * @Description  : 创建页面默认数据
 * @FilePath: /editor/src/views/editor/storage/constant/pageDefault.js
 */
export default {
  'backGroundImage':'', // 页面背景图
  'backgroundcolor': 'fff0f8f0', // 页面背景色
  'scale': '1', // 背景图适配方式
  'id': null,
  'code': null,
  'title':'',
  'headingType': '2',
  'selfHeading': '',
  'opacity': false,
  'rightRedirect': 0,
  'scan': false,
  'panels': [],
  'property': {
    'common_module_background_color_type': '1',
    'common_module_background_url_custom_type': '1'
  },
  'secondFloor': {
    'title':'页面二楼',
    'available': false,
    'redirectType': 1,
    'redirectUrl': '',
    'property': {
      'common_module_background_url_type': '1',
      'common_module_background_url': ''
    },
    'rule': {
      'styleId': null,
      'instCode': '',
      'instType': 2,
      'eventTrigger': '1',
      'frequency': '1',
      'timeInterval': 1,
      'defineDate': '',
      'beginTime': null,
      'endTime': null
    }
  },
  'floatingWindow': {
    'title': '页面悬浮',
    'available': false,
    'redirectType': 1,
    'redirectUrl': '',
    'property': 0,
    'floatingwindow_streamer_style': '0',
    'float_window_show_close': '0',
    'common_module_background_url_type': '1',
    'common_module_background_url': '',
    'float_window_close_url': ''
  },
  'toolbar': {
    'title': '',
    'display': true,
    'headingType': 2,
    'selfHeading': '',
    'property': {
      'left_maximum_display_item_count': '0',
      'title_align': '2',
      'title_background_transparent': '0',
      'title_text_color': 'ffffffff',
      'title_background_url': '',
      'title_background_color': 'ff08c4be',
      'title_text_size': '16',
      'middle_items': '1',
      'title_text_type': '1',
      'title_background_display_mode': '1',
      'common_module_background_color_type': '1',
      'common_module_background_url_custom_type': '1',
      'maximum_display_item_count': '0'
    }
  },
  'leftMoreItems': [],
  'rightMoreItems': []
};