<!--
 * @Author       : haungyh
 * @Date         : 2022-10-18 22:38:01
 * @LastEditors: honhyhe
 * @LastEditTime: 2022-12-27 11:49:56
 * @Description  : 中间画布内容
 * @FilePath: /editor/src/views/editor/layout/editor-main.vue
-->
<template>
  <main class="editor-main hide-scrollbar">
    <canvasArea />
    <!-- <changeSkin /> -->
    <!-- <bottomNavEditor
      v-if="storage.currentEditMode === editMode.bottomNav"
      :style="{ width: size.width }"
    />
    <div v-else-if="storage.currentEditMode" class="editor-cavans" :style="size">
      <pageEditor v-if="storage.currentEditMode === editMode.page" />
      <siderNavEditor v-else-if="storage.currentEditMode === editMode.siderNav" />
      <windowEditor v-else-if="storage.currentEditMode === editMode.window" />
    </div> -->
  </main>
</template>
<script setup>
import { computed } from 'vue';
import canvasArea from '../components/others/canvas.vue';
// 编辑内容
// import bottomNavEditor from '../components/editor/bottomNavEditor';
// import pageEditor from '../components/editor/pageEditor';
// import siderNavEditor from '../components/editor/siderNavEditor';
// import windowEditor from '../components/editor/windowEditor';
// 切换皮肤
// import changeskin from '../components/centerCavans/changeSkin';
// 数据源
import { storage } from '../storage/storage';
import editMode from '../storage/constant/editMode';
const size = computed(() =>
{
  const { width, height } = storage.currentEditorSize;
  const ss = 's';

  return {
    width: width + 'px',
    height: height + 'px'
  };
});

</script>
<style>

.editor-cavans {
  position: relative;
  background-color: #fff;
}
.editor-main {
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  overflow-y: auto;
  height: calc(100vh - 60px);
}
</style>
