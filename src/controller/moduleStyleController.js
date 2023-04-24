/*
 * @Author       : huangyh
 * @Date         : 2022-10-26
 * @LasterEditor : huangyh
 * @Descriptions  : 共模块属性转换css style控制器
 * @FilePath: /editor/src/views/editor/controller/moduleStyleController.js
 */
import { computed } from 'vue';
// 数据源-字典
import {
  alignMap,
  valueToCheckedMap
} from '@/views/editor/storage/constant/configConstants';
// 数据源
import { editorStorage } from '@/views/editor/storage/editorStorage';
// 工具
import { toRpx } from '@/views/editor/utils/util';
import {
  borderRadiusTransform,
  marginPaddingTransform,
  backgroundSizeTransform,
  backgroundImageTransform,
  fontWeightTransform,
  colorTransform,
  borderTransform
} from '@/views/editor/utils/styleTransform';

/**
 * @author:huangyh
 * @description：模块样式-
 * @param ｛Array｝ engines 不传时获取所有，如果传数组则返回对应的样式［＇wrap＇］
 * @return {*}
 */
export function getModuleStyle (panel, engines, options)
{
  // items 是否用到
  let wrap = {};
  let titleWrap = {};
  let title = {};
  let titleSub = {};
  let itemStyle = {};
  let content = {};
  let moduleProperty = panel.moduleProperty;
  // 模块外框样式

  if (!engines || engines.includes('wrap'))
  {
    wrap = {
      margin: marginPaddingTransform(moduleProperty.common_module_outside),
      // borderTransform 参数对应，css顺序 1px solid ＃fff
      border:
        valueToCheckedMap[moduleProperty.common_module_item_line_display] &&
          borderTransform(
            moduleProperty.common_module_item_line_width,
            moduleProperty.common_module_item_line_type,
            moduleProperty.common_module_item_line_color
          ) ||
        'none',
      'border-radius': borderRadiusTransform(
        moduleProperty.common_module_item_corner_radius,
        moduleProperty.common_module_item_radius_rect
      ),
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-color': colorTransform(
        moduleProperty.common_module_background_color
      ),
      'background-size': backgroundSizeTransform(
        moduleProperty.common_module_background_url_type
      ),
      'background-image': backgroundImageTransform(
        moduleProperty.common_module_background_url
      )
    };
    // 模块内边距
    content = {
      padding: marginPaddingTransform(moduleProperty.common_module_padding)
    };
  }
  if (!engines || engines.includes('titleWrap'))
  {
    // 左右边距，有圆角大于20时用 圆角／2＋10
    let paddingLR =
      moduleProperty.common_module_item_radius_rect > 20 ?
        moduleProperty.common_module_item_corner_radius / 2 + 10 :
        10;

    titleWrap = {
      display: 'flex',
      'align-items': 'center',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-color': colorTransform(
        moduleProperty.common_module_title_background_color
      ),
      'background-size': backgroundSizeTransform(
        moduleProperty.common_module_title_background_url_type
      ),
      'background-image': backgroundImageTransform(
        moduleProperty.common_module_title_background_url
      ),
      padding: `5px ${paddingLR}px`,
      // 有副标题时左对齐
      justifyContent: moduleProperty.common_module_sub_title ?
        'space-between' :
        alignMap[moduleProperty.common_module_title_align].value
    };
  }
  if (!engines || engines.includes('title'))
  {
    title = {
      color: colorTransform(moduleProperty.common_module_text_color),
      'font-size': toRpx(moduleProperty.common_module_title_text_size),
      'font-weight': fontWeightTransform(
        moduleProperty.common_module_text_font_weight
      )
    };
  }
  if (!engines || engines.includes('titleSub'))
  {
    titleSub = {
      color: colorTransform(moduleProperty.common_module_sub_title_text_color),
      'font-weight': fontWeightTransform(
        moduleProperty.common_module_sub_name_font_weight
      ),
      'font-size': toRpx(moduleProperty.common_module_sub_title_text_size)
    };
  }
  if (!engines || engines.includes('itemStyle'))
  {
    let itemBackground = 'grid_module_item_background';

    if (options && options.useItemBackgroundModule)
    {
      itemBackground = 'common_module_item_background'; // options.itemBackground
    }
    itemStyle = {
      border:
        valueToCheckedMap[moduleProperty.common_module_items_line_display] &&
          borderTransform(
            moduleProperty.common_module_items_line_width,
            moduleProperty.common_module_items_line_type,
            moduleProperty.common_module_items_line_color
          ) ||
        'none',
      'border-radius': borderRadiusTransform(
        moduleProperty.common_module_items_corner_radius,
        moduleProperty.common_module_items_radius
      ),
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      // N0920修改以下三个字段 之前取值取的是模块的字段
      'background-color': colorTransform(moduleProperty[itemBackground]),
      'background-size': backgroundSizeTransform(
        moduleProperty[itemBackground + '_img_type']
      ),
      'background-image': backgroundImageTransform(
        moduleProperty[itemBackground + '_img']
      )
    };
  }
  return {
    wrap,
    content,
    titleWrap,
    title,
    titleSub,
    itemStyle
  };
}

/**
 * @description：自定义item样式
 * @param {*} item
 * @return {*}
 * @author：罗志鹏
 */
export function getItemCustomStyle (item)
{
  return {
    'background-color': colorTransform(
      item.property.common_module_background_color
    ),
    'background-size': backgroundSizeTransform(
      item.property.common_module_background_url_type
    ),
    'background-image': backgroundImageTransform(
      item.property.common_module_background_url
    ),
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    border:
      valueToCheckedMap[item.property.common_module_item_line_display] &&
        borderTransform(
          item.property.common_module_item_line_width,
          item.property.common_module_item_line_type,
          item.property.common_module_item_line_color
        ) ||
      'none',
    'border-radius': borderRadiusTransform(
      item.property.common_module_item_corner_radius,
      item.property.common_module_item_radius_rect
    )
  };
}

/**
 * @author:huangyh
 * @description：分组样式
 * @return {*}
 */

export const groupStyle = computed(() =>
{
  const itemGroups = editorStorage.itemGroups;
  let wrap = {};
  let item = {};
  let content = {};
  let titleWrap = {};
  let title = {};
  let titleSub = {};

  if (itemGroups && itemGroups.length)
  {
    const property = itemGroups[0].property;
    const margin = property.grid_module_line_spacing ?
      property.grid_module_line_spacing :
      0;

    wrap = {
      'margin-top': -margin + 'px'
    };
    item = {
      'margin-top': margin + 'px'
    };
    titleWrap = {
      display: 'flex',
      'background-color': colorTransform(
        property.common_module_title_background_color
      ),
      justifyContent: 'space-between'
    };
    title = {
      color: colorTransform(property.common_module_text_color),
      'font-size': toRpx(property.common_module_title_text_size),
      'font-weight': fontWeightTransform(
        property.common_module_text_font_weight
      )
    };
    titleSub = {
      color: colorTransform(property.common_module_sub_title_text_color),
      'font-weight': fontWeightTransform(
        property.common_module_sub_name_font_weight
      ),
      'font-size': toRpx(property.common_module_sub_title_text_size)
    };
    content = {
      'background-color': colorTransform(
        property.common_module_background_color
      ),
      padding: marginPaddingTransform(property.common_module_padding)
    };
  }
  return {
    wrap,
    item,
    titleWrap,
    title,
    titleSub,
    content
  };
});
