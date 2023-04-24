<!--
 * @Author       : huangyh
 * @Date         : 2022-10-17
 * @LasterEditor : huangyh
 * @Desriptions  :
 * @FilePath: /editor/src/views/editor/layout/rightConfig.vue
-->
<template>
  <aside id="editor-config-area"  v-drag="{ handle: '#config-drag-handle' }">
    <div class="editor-config-box" :class="{'is-close': isClose }">
      <div id="config-drag-handle">
        <i class="icon icon-drag"></i>
        <div class="editor-config-title">属性设置</div>
      </div>
      <div class="editor-config-toggle" @click="isClose = !isClose"><i class="icon icon-down"></i></div>
      
      <div class="editor-config-container hide-scrollbar" >
        <!--弹窗配置 -->
        <windowConfig v-if="storage.currentEditMode === editMode.window" />
        <!-- 底部导航配置 -->
        <bottomNavConfig
          v-else-if="storage.currentEditMode === editMode.bottomNav"
        />
        <!--头部标题 -->
        <toolBarConfig
          v-else-if="storage.currentMaterialCode === editMode.toolbar"
        />
        <!--页面二楼-->
        <secondFloorConfig
          v-else-if="storage.currentMaterialCode === editMode.secondFloor"
        />
        <!--页面悬浮 -->
        <floatingWindowConfig
          v-else-if="storage.currentMaterialCode === editMode.floatingWindow"
        />
        <!-- 页面编辑和侧边导航编辑的素材组件配置 -->
        <!-- <div v-else-if="storage.currentMaterialCode">
          <headTitle
            :title="
              staticStorage.materialConfigMap[storage.currentMaterialCode].title
            "
          />
          <component :is="storage.currentMaterialCode + '_CONFIG'" />
        </div> -->
        <!-- 侧边导航配置 -->
        <!-- <siderNavConfig v-else-if="storage.currentEditMode === editMode.siderNav" />
        -->
      </div> 
      <!--下面是公共的抽屉和弹窗-->
      <!-- 自定义入口抽屉 -->
      <!-- <configEntranceDrawer /> -->
      <!-- 分组管理 -->
      <!-- <groupManageDrawer /> -->
      <!--选择菜单入口弹窗-->
      <!-- <menuSelectModal /> -->
    </div>
  </aside>
</template>
<script setup>
import { ref, computed } from 'vue';
// 编辑模式组件
// import bottomNavConfig from '../components/editor/bottomNavEditor/config';
// import siderNavConfig from '../components/editor/siderNavEditor/config';
// import windowConfig from '../components/editor/windowEditor/config';
// import secondFloorConfig from '../components/editor/secondFloorEditor/config';
// import floatingWindowConfig from '../components/editor/floatingWindowEditor/config';
// //  页面标题
// import toolBarConfig from '../components/editor/toolbarEditor/config';
// //  公共的抽屉和弹窗
// import configEntranceDrawer from '../components/rightConfig/drawer/configEntranceDrawer'; //  自定义入口抽屉
// import groupManageDrawer from '../components/rightConfig/drawer/groupManageDrawer'; //  分组管理
// import menuSelectModal from '../components/rightConfig/modal/menuSelectModal'; //  选择菜单入口弹窗
// //  标题
// import headTitle from '../components/rightConfig/headTitle';
// 数据源
import editMode from '../storage/constant/editMode';
import { staticStorage } from '../storage/staticStorage';
import { storage } from '../storage/storage';

const isClose = ref(true);

</script>
<style lang="scss">

#editor-config-area {
  position: absolute;
  top: 50px;
  left: calc(100% - 200px);
  width: 180px;
  .ant-form-item {
    margin: 0;
    margin-top: 5px;
    display: flex;
    color: #fff;
  }
  .ant-radio-wrapper {
    color: #fff;
  }
  .ant-form {
    color: #fff;
  }
  .ant-form-item-label {
    width: 20%;
    text-align: left;
    float: left;
    min-width: 120px;
  }
  .item-indent {
    padding-left: 20%;
  }
  .second-module {
    .item-indent {
      margin-left: -10px;
    }
  }
  .ant-form-item-control-wrapper {
    width: 65%;
    float: left;
    // flex: 1;
  }
  .row-span-2 {
    .ant-form-item-label {
      width: 41%;
    }
    .ant-form-item-control-wrapper {
      width: 58%;
    }
  }
}
.editor-config-box {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 6px;
  background-color: rgba(0,0,0,.2);
  box-shadow: 2px 2px 10px rgba(255,255,255,.1);
  overflow: hidden;
  width: 350px;
  transition: all .3s;
  &.is-close {
    height: 30px;
    width: 180px;
    overflow: hidden;
    .editor-config-toggle {
      transform: rotate(0);
    }
  }   
}
.editor-config-container {
  position: relative;
  z-index: 1;
  height: calc(100vh - 140px);
  overflow: hidden;
  overflow-y: auto;
  padding: 0 20px 20px;
  margin-top: 30px;
  
}
#config-drag-handle {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  cursor: grab;
  text-align: right;
  padding-top: 2px;
  .icon {
    position: absolute;
    top: 4px;
    left: 4px;
  }
}
.editor-config-toggle {
  position: absolute;
  top: 4px;
  right: 10px;
  cursor: pointer;
  transition: transform .3s;
  transform: rotate(180deg);
}
.editor-config-title {
  font-size: 12px;
  line-height: 30px;
  text-align: center;
}
</style>
