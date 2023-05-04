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
    <ruler />
    <div class="drag-canvas-mark" id="dragCanvasMark"></div>
    <!-- <changeSkin /> -->
    <!-- <bottomNavEditor
      v-if="storage.currentEditMode === editMode.bottomNav"
      :style="{ width: size.width }"
    />
    -->
    <div class="editor-cavans" id="editorCavans" >
      <div :style="size">
        <pageEditor  />
      </div>
      <!-- 
      <siderNavEditor v-else-if="storage.currentEditMode === editMode.siderNav" />
      <windowEditor v-else-if="storage.currentEditMode === editMode.window" /> -->
    </div> 
  </main>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import ruler from './components/ruler/index.vue';
// 编辑内容
// import bottomNavEditor from '../components/editor/bottomNavEditor';
import pageEditor from './components/editor/pageEditor.vue';
// import siderNavEditor from '../components/editor/siderNavEditor';
// import windowEditor from '../components/editor/windowEditor';
// 切换皮肤
// import changeskin from '../components/centerCavans/changeSkin';
// 数据源
import { storage } from '@/storage/storage';
import editMode from '@/storage/constant/editMode';

const size = computed(() =>
{
  const { width, height } = storage.currentEditorSize;

  return {
    width: width + 'px',
    height: height + 'px'
  };
});
// 拖拽效果
let dragCanvasMark
let editorCavansDom
let clientX = 0,clientY = 0;//定义用于接收鼠标坐标的变量
let editorCavansX = 0,editorCavansY = 0;//用于存当前editorCavansDom的偏移量
let x = 0,y = 0;// 拖拽时editorCavansDom的位移量
// 按下鼠标记住当前鼠标位置并绑定事件
function mousedownHandler(e) {
  clientX=e.clientX;    
  clientY=e.clientY; 
  dragCanvasMark.addEventListener("mousemove",mousemoveHandler) 
  dragCanvasMark.addEventListener("mouseup",mouseupHandler)  //如果有鼠标移动或松开事件的发生再次执行mouseHandler函数
}
// 松开鼠标，记住editorCavansDom当前的位移，解除事件绑定
function mouseupHandler(e) {
  dragCanvasMark.removeEventListener("mousemove",mousemoveHandler);
  dragCanvasMark.removeEventListener("mouseup",mouseupHandler);  //删除鼠标移动和鼠标松开事件
  editorCavansX = x
  editorCavansY = y
}
// 鼠标移动更新editorCavansDom位置
const mousemoveHandler = function (e) {
  // 拖动后的editorCavansDom位移 = editorCavansDom当前位移 + (当前鼠标位置 - 鼠标开始移动的位置)
  x = editorCavansX + (e.clientX - clientX) 
  y = editorCavansY + (e.clientY - clientY);
  editorCavansDom.style.transform = `translate(${x}px,${y}px)`; 
}
onMounted(() => {
  dragCanvasMark = document.getElementById('dragCanvasMark')
  editorCavansDom = document.getElementById('editorCavans')
  dragCanvasMark.addEventListener("mousedown",mousedownHandler);
})

</script>
<style>
.drag-canvas-mark {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: grab;
  z-index: 1;
}
.editor-cavans {
  position: relative;
  background-color: #fff;
  z-index: 3;
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
