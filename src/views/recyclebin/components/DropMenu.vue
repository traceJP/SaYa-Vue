<template>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item @click.native="restoreButton(scope.$index, scope)">
      还原
    </el-dropdown-item>
    <el-dropdown-item @click.native="deleteButton(scope.$index, scope)" divided style="color: #f56c6c;">
      永久删除
    </el-dropdown-item>
  </el-dropdown-menu>
</template>

<script>
import {deleteFolder} from "@/api/folder"
import {deleteFile} from "@/api/file"
import {restore} from "@/api/recyclebin"

export default {
  name: "DropMenu",
  props: {
    scope: Object,
  },
  methods: {
    restoreButton(index, row) {
      if (row.isRoot) {
        restore({hashId: row.hash, hashType: '2'})
      } else {
        restore({hashId: row.hash, hashType: '1'})
      }
      setTimeout(() => this.$emit('refresh-data'), 1000)
    },
    deleteButton(index, row) {
      row.isRoot ? deleteFolder(row.hash) : deleteFile(row.hash)
      setTimeout(() => this.$emit('refresh-data'), 1000)
    },
  },
}
</script>

<style scoped>

</style>