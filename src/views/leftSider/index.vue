<!--
 * @Author       : haungyh
 * @Date         : 2022-10-18 22:38:01
 * @LastEditors: honhyhe
 * @LastEditTime: 2022-12-27 21:32:24
 * @Description  : 左侧边栏
 * @FilePath: /editor/src/views/editor/layout/leftSider.vue
-->
<template>
  <aside width="350px" class="material editor-leftSider hide-scrollbar">
    <el-tabs tab-position="left" style="height: 100%" class="demo-tabs">
      <el-tab-pane >
        <template #label>
          <span class="sider-tabs-label">
            <i class="icon icon-zujian"></i>
            <span>基础</span>
          </span>
        </template>
        User
      </el-tab-pane>
      <el-tab-pane >
        <template #label>
          <span class="sider-tabs-label">
            <i class="icon icon-module"></i>
            <span>模块</span>
          </span>
        </template>
        User
      </el-tab-pane>
      <el-tab-pane >
        <template #label>
          <span class="sider-tabs-label">
            <i class="icon icon-report"></i>
            <span>图表</span>
          </span>
        </template>
        User
      </el-tab-pane>
      <el-tab-pane >
        <template #label>
          <span class="sider-tabs-label">
            <i class="icon icon-sucai"></i>
            <span>素材</span>
          </span>
        </template>
        User
      </el-tab-pane>
      <el-tab-pane >
        <template #label>
          <span class="sider-tabs-label">
            <i class="icon icon-tubiao"></i>
            <span>图标</span>
          </span>
        </template>
        User
      </el-tab-pane>
      <el-tab-pane >
        <template #label>
          <span class="sider-tabs-label">
            <i class="icon icon-page"></i>
            <span>页面</span>
          </span>
        </template>
        User
      </el-tab-pane>
      <el-tab-pane >
        <template #label>
          <span class="sider-tabs-label" @click="showDesignHandler">
            <i class="icon icon-page"></i>
            <span>UI规范</span>
          </span>
        </template>
        User
      </el-tab-pane>
      <el-tab-pane >
        <template #label>
          <span class="sider-tabs-label">
            <i class="icon icon-data"></i>
            <span>数据源</span>
          </span>
        </template>
        User
      </el-tab-pane>
    </el-tabs>
    <ul class="sider-bottom">
      <li>
        <el-tooltip
        effect="dark"
        content="帮助"
        placement="right"
      >
      <i class="icon icon-yiwen"></i>
    </el-tooltip>
      </li>
      <li>
        <el-tooltip
        effect="dark"
        content="设置"
        placement="right"
      >
      <i class="icon icon-shezhi"></i>
    </el-tooltip>
      </li>
    </ul>
    <design v-model:show="showDesign" />
  </aside>
</template>
<!-- <div>
  <span class="sider-tabs-label" @click="showDesignHandler">
    <i class="icon icon-page"></i>
    <span>UI规范</span>
  </span>
  <span class="sider-tabs-label">
    <i class="icon icon-data"></i>
    <span>数据源</span>
  </span>
</div> -->
<script setup>
import { ref } from "vue";
import design from './components/design/index.vue';
// import materialTabPanel from '@/views/editor/components/leftSider/materialTabPanel';

// UI规范
const showDesign = ref(false)
function showDesignHandler(evt) {
  evt.stopPropagation();
  showDesign.value = true
}
</script>

<style lang="scss">
  .editor-leftSider {
    height: calc(100vh - 60px);
    width: 250px !important;
    flex: none !important;
    box-sizing: content-box;
    overflow: hidden;
    overflow-y: auto;
    background-color: #161a16;
    position: relative;
    z-index: 10;
    .el-tabs__item {
      text-align: center !important;
      justify-content: center !important;
      height: 50px;
      margin: 6px 0;
      padding:0 16px;
    }
  }
 .sider-tabs-label {
  line-height: 1.2;
  text-align: center;
  .icon {
    font-size: 20px;
    display: block;
  }
  span {
    display: block;
  }
 }
 .sider-bottom {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 71px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  .icon {
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
 }
</style>
