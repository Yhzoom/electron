<!--
 * @Author       : haungyh
 * @Date         : 2023-04-25 10:26:00
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-04-25 23:29:20
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
          <div class="card">
            <div class="color"></div>
            <div class="card-foot">主色</div>
          </div>
        </el-col>
        <el-col :span='12'>
          <div class="card">
            <div class="color"></div>
            <div class="card-foot">辅助色（用于强调、标签等位置）</div>
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
  defineProps({
    show: {
      type: Boolean,
      default: false
    }
  })
  const color = {
    main: {
      color: '#3E7BF0',
      label: '主色'
    },
    main: {
      color: '#3E7BF0',
      label: '主色'
    }
  }
  const emit = defineEmits(['update:show'])
  // const show = ref(true)
  
  function cancelClick() {
    emit('update:show', false)
  }
  function confirmClick() {
    show.value = false
  }
  
</script>
<style lang="">
  
</style>