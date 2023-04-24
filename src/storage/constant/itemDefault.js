/*
 * @Author       : huangyh
 * @Date         : 2022-10-20
 * @LasterEditor : Do not edit
 * @Desriptions  : 默认item数据
 * @FilePath: /editor/src/views/editor/storage/constant/itemDefault.js
 */
const defaultItem = {
  'id': null,
  'styleId': null,
  'itemId': null,
  'panelId': null,
  'sort': null,
  'platform': null,
  'dataSource': 1, // 打开方式
  'groupId': null,
  'bubble': false, // 气泡
  'editable': null,
  'erasable': null,
  'visible': null,
  'powerdude': false, // 是否支持遥感
  'titleCn': '',
  'titleEn':'',
  'iconSelect':'',
  'iconUnSelect': '',
  'available': true, // 是否生效
  'beginTime': null, // 生效开始时间
  'endTime': null, // 生效结束时间
  'redirectType':'0', // 打开方式
  'redirectUrl': '',
  'remark': '',
  'mark': null,
  'createTime': null,
  'updateTime': null,
  'iosEnable': true,
  'androidEnable': true,
  'orientedType': true, // Boolean 面向所有用户
  'realId': null,
  'publishId': null,
  'itemOrientedDtoList': [],
  'iconSelectLoop': null,
  'iconUnSelectLoop': null,
  'advert': false,
  'property': {}
};

const property = {
  'customStyleVisible': '0', // 样式是否显示
  'common_module_background_color': 'ffffffff', // 背景色,
  'common_module_background_url': '', // 背景图
  'common_module_background_url_type': '1', // 背景图类型
  'common_module_item_radius_rect': '1,1,1,1', // 圆角半径
  'common_module_item_corner_radius': '0', // 圆角半径
  'common_module_item_line_display': 'false', // 自定以线框
  'common_module_item_line_color': 'ffffffff', // 线框颜色
  'common_module_item_line_width': '1', // 线框粗细
  'common_module_item_line_type': '0', // 线框类型
  'common_module_title_background_color': 'ffffffff', // 标题背景色
  'image_module_ratio_width': '1', // 图片宽高比（宽）
  'image_module_ratio_height': '1' // 图片宽高比（高）
};

export function getItemDefault (type)
{
  let otherProperty = {};

  if (type === 'bottomNav' )
  {
    otherProperty = {
      'style': 'both_image_text',
      'text_color_selected': 'ff9a9a9a',
      'text_color_normal': 'ff222222',
      'isCustomTextSelect': '1',
      'isCustomTextUnselect': '1'
    };
  }
  return {...defaultItem, property: {...property, ...otherProperty}};
}
