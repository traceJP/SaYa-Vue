<template>
  <table-grid-header :fixed-breadcrumb="true" title="文件" route-to="/folder" @change="change">
    <!-- 批量操作按钮组, 收藏 删除 移动 -->
    <folder-batch-group @refresh-data="change"></folder-batch-group>
    <!-- 查询按钮 -->
    <div>
      <el-button icon="el-icon-search" circle disabled></el-button>
    </div>
    <!-- 新建按钮 -->
    <el-dropdown>
      <el-button icon="el-icon-plus" circle type="primary"></el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="newFolderButton">新建文件夹</el-dropdown-item>
        <el-dropdown-item @click.native="uploadListButton" divided>上传文件</el-dropdown-item>
        <el-dropdown-item disabled>上传文件夹</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </table-grid-header>
</template>

<script>
import TableGridHeader from "@/components/common/TableGridHeader"
import FolderBatchGroup from "@/views/folder/components/FolderBatchGroup"

export default {
  name: "Header",
  components: {FolderBatchGroup, TableGridHeader},
  methods: {
    newFolderButton() {
      this.$store.commit('setAddFolderDialog', true)
    },
    uploadListButton() {
      this.$store.commit('setUploadDrawer', true)
    },
    change() {
      this.$emit('refresh-data')
    }
  },
}
</script>

<style scoped>
.master {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button-group {
  display: flex;
  justify-content: space-around;
  justify-items: center;
}

.button-group > div {
  margin: auto 10px;
}

.batchGroup > span {
  padding: 0 10px;
}

.el-dropdown {
  margin-left: 20px;
}
</style>