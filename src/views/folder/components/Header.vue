<template>
  <div class="master">
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="'/index'">{{ title }}</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in itemData" :key="index" :to="'/user/folder/' + item.id">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <!-- 查询按钮 -->
      <el-button icon="el-icon-search" circle/>
      <!-- 新建按钮 -->
      <el-dropdown v-if="createButton">
        <el-button icon="el-icon-plus" circle type="primary"/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>新建文件夹</el-dropdown-item>
          <el-dropdown-item divided>上传文件</el-dropdown-item>
          <el-dropdown-item disabled>上传文件夹</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // 当传入的title是文件时，展示头部的创建按钮
      createButton: this.title === '文件'
    }
  },
  props: {
    title: String,
    itemData: {
      type: Array,
      default: () => [],
    },
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

.el-dropdown {
  line-height: 100%;
  margin-left: 20px;
}
</style>