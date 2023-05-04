<!--
 * @Author       : haungyh
 * @Date         : 2023-03-04 17:25:39
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-04-24 19:53:26
 * @Description  : 
 * @FilePath     : /electron/src/App.vue
-->
<template>
  <div id="editor" class="dark">
      <div class="loadingMask" v-if="storage.showLoading">
        <img src="@/assets/loading.gif" class="loading-img" />
      </div>
      <editorHeader />
      <section class="editor-container">
        <leftSider />
        <editorMain />
        <propertyConfig />
      </section>
    <!-- 点击发布时弹窗 -->
    <!-- <publiseModal /> -->
    <!--共用提示弹窗-->
    <!-- <tipModal /> -->
  </div>
</template>

<script setup>
import {
  reactive,
  onBeforeMount,
  onBeforeUnmount,
  getCurrentInstance
} from 'vue';

// 页面布局
import editorHeader from './views/header/index.vue';
import leftSider from './views/leftSider/index.vue';
import editorMain from './views/main/index.vue';
import propertyConfig from './views/propertyConfig/index.vue';
// 弹窗
// import publiseModal from './components/modal/publiseModal';
// window 事件
// import { beforeunloadHandler, addEventListenerFn } from './core/windowEvent';
// 数据源
import { storage } from './storage/storage';
import { staticStorage } from './storage/staticStorage';
// 初始化数据源
// import { initStorage } from './core/init';
// 注册组件
// import { registerComponent } from './config/registerComponent';
// 注册组件
// registerComponent();

// 页面初始化
onBeforeMount(() =>
{
  // 页面实例／this
  const instance = getCurrentInstance().proxy;
  // 初始化数据源
  // initStorage(instance);
});
</script>
<style scoped>

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
<style lang="scss">
#editor {
  height: 100vh;
  background-color: #1f2520;
  overflow: hidden;
}
.editor-container {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  position: relative;
  z-index: 2;
  &.is-vertical {
    flex-direction: column;
  }
}
.loadingMask {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  text-align: center;
}
.hide-scrollbar::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
}
.text-red {
  color: #f5222d;
}
</style>