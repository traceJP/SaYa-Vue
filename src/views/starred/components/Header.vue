<template>
  <table-grid-header :fixed-breadcrumb="false" title="收藏夹" @change="change">
      <folder-batch-group @refresh-data="change"></folder-batch-group>
  </table-grid-header>
</template>

<script>
import FolderBatchGroup from "@/views/folder/components/FolderBatchGroup"
import TableGridHeader from "@/components/common/TableGridHeader"
export default {
  name: "Header",
  components: {TableGridHeader, FolderBatchGroup},
  methods: {
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