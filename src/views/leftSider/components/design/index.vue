<!--
 * @Author       : haungyh
 * @Date         : 2023-04-25 10:26:00
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-05-08 10:49:02
 * @Description  : UI规范配置
 * @FilePath     : /electron/src/views/leftSider/components/design/index.vue
-->
<template >
  <el-drawer :model-value="show" direction="ltr" :modal="false" append-to-body @closed="cancelClick">
    <template #header>
      <h4>UI规范配置</h4>
    </template>
    <div class="title">色彩</div>
    <div class="">
      <el-row>
        <el-col :span='12'>
          <div class="card main-color">
            <div class="color" :style="{ backgroundColor: uiStorage.primaryColor.value }"></div>
            <div class="card-foot">{{ uiStorage.primaryColor.name }}</div>
          </div>
        </el-col>
        <el-col :span='12'>
          <div class="card main-color">
            <div class="color" :style="{ backgroundColor: uiStorage.subColor.value }"></div>
            <div class="card-foot">{{ uiStorage.subColor.name }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div>
    </template> -->
  </el-drawer>
</template>
<script setup>
  import { ref } from "vue";
  import { uiStorage } from "@/storage/uiStorage/index";
  console.log(uiStorage);
  defineProps({
    show: {
      type: Boolean,
      default: false
    }
  })
  
  const emit = defineEmits(['update:show'])
  // const show = ref(true)
  
  function cancelClick() {
    emit('update:show', false)
  }
  function confirmClick() {
    show.value = false
  }
  
</script>
<style lang="scss" scoped>
  .main-color {
    .color {
      height: 100px;
      border-radius: 8px;
    }
  }
</style>