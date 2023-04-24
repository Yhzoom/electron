/*
 * @Author       : haungyh
 * @Date         : 2023-03-05 14:14:41
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-03-05 20:35:00
 * @Description  : 
 * @FilePath     : /electron/src/storage/editorStorage.js
 */
import { defineStore } from 'pinia';
import { pinia } from './pinia';
import { navigationsProperty } from './constant/navigationsPropertyDefault';
// 编辑详情,数据绑定,保存时返回给后端
const useEditorStorage = defineStore('editorStorage', {
  state: () =>
  {
    // 初始化数据结构
    return {
      // 主键
      id: '',
      // 是否草稿, 0-no, 1-yes
      draft: '',
      // 是否当前风格,0-否,1-是
      enable: '',
      // 标题
      title: '',
      // 备注
      remark: '',
      // code
      code: '',
      // 皮肤id
      skinId: '',
      // 使用的皮肤包
      skinDto: {},
      // 皮肤包初始化用skin Default.js
      skinDefault: {
        colorBase: '',
        title: ''
      },
      // 皮肤是否推送给用户, true-是、false-否
      skinRecommendable: false,
      // 若是草稿,此字段指向对应的已发布的风格id
      styleId: '',
      // 截图
      previewImages: [],
      // 应用分组
      itemGroups: [],
      // 入口打开方式选择页面时和页面映射, {[item.id] :layout.id} , 选其他选项时delete editor Storage.layout Map[item.id]
      layoutMap: {},
      // 布局列表
      layouts: [],
      // 页面弹窗
      windowList: [],
      // 一级导航列表
      navigations: [],
      // 底部导航属性
      navigationsProperty: { ...navigationsProperty }
    };
  },
  getters: {
    // 结构有导航
    hasBottomNav ()
    {
      const nav_menu_structure = this.navigationsProperty.nav_menu_structure;

      return nav_menu_structure === '1' || nav_menu_structure === '3';
    },
    // 结构有侧边导航
    hasSiderNav ()
    {
      const nav_menu_structure = this.navigationsProperty.nav_menu_structure;

      return nav_menu_structure === '2' || nav_menu_structure === '3';
    }
  }
});

export const editorStorage = useEditorStorage(pinia);
