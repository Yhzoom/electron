/*
 * @Author       : huangyh
 * @Date         : 2022-10-20
 * @LasterEditor : huangyh
 * @Desriptions  : 底部导航navigations默认数据
 * @FilePath     : /src/views/editor/storage/constant/navigationsDefault.js
 */
// item和property共同的属性
const property = {
  'style': 'both_image_text',
  'text_color_selected': 'ff9a9a9a',
  'text_color_normal': 'ff222222',
  'isCustomTextSelect': '1',
  'isCustomTextUnselect': '1'
};

export const navigationsDefault = {
  'sort': 0,
  'alias': '',
  'scan': null,
  'fullscreen': null,
  // 使用 itemDefault
  'item': {
    property:{
      ...property
    }
  },
  'windowRule': {
    'id': null,
    'styleId': null,
    'instCode': null,
    'instType': null,
    'eventTrigger': null,
    'frequency': null,
    'timeInterval': null,
    'defineDate': null,
    'beginTime': null,
    'endTime': null
  },
  'property': {
    'common_module_item_line_type': '0',
    'common_module_background_url_type': '1',
    'common_module_item_corner_radius': '0',
    'image_module_ratio_height': '44',
    'common_module_background_url': '',
    'common_module_item_radius_rect': '1,1,1,1',
    'common_module_item_line_display': '1',
    'customStyleVisible': '0',
    'common_module_item_line_color': 'ffffffff',
    'image_module_ratio_width': '44',
    'common_module_item_line_width': '1',
    'common_module_item_ratio': '1.000',
    'hot_spot_spec': '',
    'common_module_background_color': 'ffffffff',
    ...property
  }
};