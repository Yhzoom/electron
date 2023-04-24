<template>
  <el-header class="editor-header">
    <div class="header-left flex">
      <h1 class="editor-title">H5 Visual Editor</h1>
        <span class="preject-name text-hidden">项目名称</span>
        <span class="save-status">
        <i class="icon icon-save-ok "></i> 已保存
      </span>
    </div>
    <div class="header-control flex">
      <el-tooltip
        effect="dark"
        content="撤回"
        placement="bottom"
      >
      <i class="icon icon-prev"></i>
    </el-tooltip>
    <el-tooltip
        effect="dark"
        content="恢复"
        placement="bottom"
      >
      <i class="icon icon-next"></i>
    </el-tooltip>
    <el-tooltip
        effect="dark"
        content="电脑"
        placement="bottom"
      >
      <i class="icon icon-pc"></i>
    </el-tooltip>
    <el-tooltip
        effect="dark"
        content="平板"
        placement="bottom"
      >
      <i class="icon icon-ipad"></i>
    </el-tooltip>
    <el-tooltip
        effect="dark"
        content="手机"
        placement="bottom"
      >
      <i class="icon icon-mobile"></i>
    </el-tooltip>
    </div>
    <ul class="header-right flex">
      <li class="item-content item-icon">
      <el-tooltip
        effect="dark"
        content="预览"
        placement="bottom"
      >
        <i class="icon icon-yulan"></i>
      </el-tooltip>
      </li>
      <li class="item-content item-icon">
      <el-tooltip
        effect="dark"
        content="保存"
        placement="bottom"
      >
        <i class="icon icon-save"></i>
      </el-tooltip>
      </li>
      <li class="item-content item-icon">
      <el-tooltip
        effect="dark"
        content="发布"
        placement="bottom"
      >
        <i class="icon icon-fabu"></i>
      </el-tooltip>
      </li>
      <li class="item-content item-icon">
      <el-tooltip
        effect="dark"
        content="分享"
        placement="bottom"
      >
        <i class="icon icon-fenxiang"></i>
      </el-tooltip>
      </li>
      <li class="item-content">
      <a href="" class="user-avator">
        <i class="icon icon-huiyuan"></i>
      </a>
      </li>
    </ul>
    <!----编辑风格名称 -->
    <!-- <editStyleNameModal ref="editStyleNameModalRef" /> -->
    <!----帮助提示 -->
    <!-- <helpView ref="showHelpView" /> -->
  </el-header>
</template>

<script setup>
import { ref } from 'vue';
// 页面模式/编辑器下拉选项
import pageMode from '../storage/constant/pageMode';
import editorSizeList from '../storage/constant/editorSizeList';
// 数据源
import { storage } from '../storage/storage';
import { editorStorage } from '../storage/editorStorage';
import { staticStorage } from '../storage/staticStorage';
// control 保存，发布，预览
// import { save, publish } from '../controller/saveAndPubliseController';
// 编辑风格名称
// import editStyleNameModal from '../components/modal/editStyleNameModal';
// 搜索抽屉
// import searchDrader from '../components/header/searchDrader';
// 帮助提示
// import helpView from '../components/header/helpView';
// 搜索面板框
// import advanceSearch from '../components/header/advanceSearch';
// 是否时编辑模式
const isEditMode = storage.currentPageMode === pageMode.constant.edit;
// 风格名称编辑实例
const editStyleNameModalRef = ref();
// 帮助提示实例
// const showHelpView = ref();
// 搜索面板框实例
const searchPannel = ref();

/*
 * @author:huangyh
 * @description: 风格名称编辑
 *@return {*}
 */

function styleNameEdit (params)
{
  editStyleNameModalRef.value.open();
}
// 编辑器尺寸
const currentEditorSize = ref(0);
/*
 *@author:huangyh
 * @description: 切换尺寸
 * @return {*}
 */

function changeEditorSize (index)
{
  const { width, height, type } = editorSizeList[index];

  storage.currentEditorSize = { width, height, type };
}

/*
 * @author:huangyh
 * @description: 切换皮肤
 * @return {*}
 * @author:huangyh
 */
function skinChangeHandle (item)
{
  staticStorage.currentskin = item;
}

/*
 * @author:huangyh
 * @description: 显示帮助
 * @return {*}
 * @param {*} params
 */
function showHelp ()
{
  // showHelpView.value.showHelp();
}
</script>
<style lang="scss">
.editor-header {
  background-color: rgba(0,0,0,.2);
  color: #93b6be;
  position: relative;
  z-index: 10;
}
.header-left {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
  }
.editor-title {
  margin: 0;
  font-size: 20px;
  background: linear-gradient(to bottom, #ee8585, #bc3dae, #8ee3e3, #509be8, #409eff);
  -webkit-background-clip: text;
  color: transparent;
  margin-right: 20px;
}
.preject-name {
  margin-right: 12px;
  display: inline-block;
  max-width: 130px;
}
.save-status {
  position: relative;
  top: 2px;
  color: var(--el-color-info);
}
.save-status,.icon-save-ok {
  font-size: 12px;
}
.header-control {
  padding-left: 250px;
  height: 100%;
  .icon {
    font-size: 20px;
    margin: 0 8px;
    cursor: pointer;
    &:hover {
      color: var(--el-color-primary);
    }
  }
}
.editor-header-content {
  align-items: center;
}

.header-right {
  position: absolute;
  top: 0;
  right: 20px;
  height: 100%;
  .item-content {
    margin: 0 3px;
    height: 30px;
    width:30px;
    text-align: center;
    line-height: 30px;
    border-radius: 4px;
  }
  .item-icon {
    cursor: pointer;
    &:hover,&.active {
      background-color: rgba(255,255,255,.1);
    }
  }
  .icon {
    font-size: 20px;
  }
}
.user-avator {
  height: 30px;
  width: 30px;
  display: block;
  margin-left: 10px;
  background-color: #bc3dae;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
}
</style>