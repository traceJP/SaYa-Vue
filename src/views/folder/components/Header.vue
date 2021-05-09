<template>
  <div class="master">
    <div>
      <!-- 导航面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="'/folder/root'">文件</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index" :to="'/folder/' + item.hash">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <!-- 查询按钮 -->
      <el-button icon="el-icon-search" circle></el-button>
      <!-- 新建按钮 -->
      <el-dropdown>
        <el-button icon="el-icon-plus" circle type="primary"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="newFolderButton">新建文件夹</el-dropdown-item>
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
  computed: {
    breadcrumb() {
      return this.$store.getters.getFolderNameByStack
    },
  },
  methods: {
    newFolderButton() {
      this.$store.commit('setAddFolderDialog', true)
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