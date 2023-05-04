import { computed } from 'vue';
import { defineStore } from 'pinia';
import { pinia } from './pinia';
// 字典数据
import pageMode from './constant/pageMode';
import editMode from './constant/editMode';
import editorSizeList from './constant/editorSizeList';
// 编辑数据
import { editorStorage } from './editorStorage';
// 响应数据
export const useReactiveStorage = defineStore('storage', {
  state: () =>
  {
    return {
      // 是否已修改,修改后关闭页面弹出提示
      isModified: false,
      // 没有指定主页
      notAppointPage: false,
      // 加载提示
      loadingTips: '',
      // 显示加载
      showLoading: false,
      // 预览弹窗
      showPreviewModal: false,
      // 是否编辑页面,编辑页面不展示截图保存
      isEditPage: false,
      // 打开选择菜单入口弹窗
      showMenuSelectModal: false,
      // 左侧内容菜单选中
      leftSiderSelectedKeys: [],
      // 页面显示模式:编辑模式edit, 地图模式map
      currentPageMode: pageMode.constant.edit,
      // 地图模式缩放
      currentMapZoom: 100,
      // 编辑模式:底部导航bottomNav; 侧边导航siderNav; 页面page; 弹窗window, 默认第一个底部导航
      currentEditMode: editMode.page, // null
      // 当前编辑的页面Code
      currentEditPageCode: null,
      // 当前编辑的弹窗Code
      currentEditWindowCode: null,
      // 当前视图区选中的素材Code
      currentMaterialCode: null,
      // 当前视图区选中的素材Id
      currentMaterialId: null,
      // 当前视图区选中的item的id
      currentItemsId: null,
      // 当前配置区编辑的数据
      currentConfigData: {
        moduleProperty: {}
      },
      // 编辑器窗口尺寸,默认第一个
      currentEditorSize: {
        width: editorSizeList[0].width,
        height: editorSizeList[0].height,
        type: editorSizeList[0].type
      }
    };
  },
  getters: {
    /**
     * @description: 当前页面
     * @return {*}
     */
    currentEditPage (state)
    {
      const { currentEditPageCode } = state;
      let current = {
        paneLs: []
      };

      editorStorage.layouts.some((page) =>
      {
        if (page.code === currentEditPageCode)
        {
          current = page;
          return true;
        }
      });
      return current;
    },
    /* author;huang yh
    @description;当前编辑弹窗数据
    *@return{object} current Window
    */
    currentEditWindow (state)
    {
      const { currentEditWindowCode } = state;
      let current = {};

      editorStorage.windowList.some((win) =>
      {
        if (win.code === currentEditWindowCode)
        {
          current = win;
          return true;
        }
      });
      return current;
    },
    /**
    @author;huang yh
    @description;侧边栏导航
    @return{object}
    */
    currentEditSiderNav ()
    {
      let current = {
        property: {}
      };

      editorStorage.layouts.some((page) =>
      {
        if (page.code === 'LEFT_DRAWER')
        {
          current = page;
        }
      });
      return current;
    }
  },
  actions: {
    setCurrentModuleProperty (property)
    {
      Object.assign(this.currentConfigData.moduleProperty, property);
    },
    /**
     * @description: 保存后更新
     * @return {*}
     */
    updateStorage ()
    {
      // 编辑模式:底部导航bottom Nav; 侧边导航side rNav; 页面page; 弹窗window， 默认第一个底部导航 //由于保存后素材id会变所以清空选中
      switch (this.currentEditMode)
      {
          case editMode.page || editMode.siderNav:
            this.currentMaterialCode = null;
            this.currentMaterialId = null;
            this.currentItemsId = null;
            break;
          default:
            break;
      }
    }
  }
});

// 响应数据
export const storage = useReactiveStorage(pinia);

/** C author：huang yh * @description：当前要配置的属性数据
 *避免写太多层v-model="storage.current Config Data.mod ute Property.some Property";
 * 为什么不放在getters?因为取值不直接前套多层，
 * v-model="storage.current Module Property.some Property"，
 * const{current Module Property} =storage解构形式则切换current Config Data后失去响应;
 * 最优v-model="current Mod ute Property.some Property";
 *缺点import多引入一个current Mod ute Property， 某些场景current Module Property.value.some Property;
@return{*}
@param{object} property
*/
export const currentModuleProperty = computed(
  () => storage.currentConfigData.moduleProperty
);
