<template>
  <div>
    <el-table :data="folderList" @selection-change="handleSelectionChange" max-height="800" ref="multipleTable"
              tooltip-effect="dark">
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column label="名称" min-width="300" prop="name"></el-table-column>
      <el-table-column label="修改时间" min-width="110" prop="date"></el-table-column>
      <el-table-column label="大小" min-width="110" prop="address"></el-table-column>
      <el-table-column label="操作" min-width="130">
        <template>
          <el-dropdown size="small" split-button type="primary">
            详细信息
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>下载</el-dropdown-item>
              <el-dropdown-item disabled>分享</el-dropdown-item>
              <el-dropdown-item>收藏</el-dropdown-item>
              <el-dropdown-item>重命名</el-dropdown-item>
              <el-dropdown-item>移动</el-dropdown-item>
              <el-dropdown-item divided style="color: #F56C6C;">移到回收站</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Table",
  computed: {
    // 分文件夹和文件获取content中的内容
    folderList() {
      return this.$store.getters.getFolderContent
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
  },
}
</script>

<style scoped>

</style>