<template>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item :disabled="!!scope.isRoot" @click.native="downloadButton(scope.$index, scope)">
      下载
    </el-dropdown-item>
    <el-dropdown-item disabled>分享</el-dropdown-item>
    <el-dropdown-item
        v-if="scope.starredFlag === '0'"
        @click.native="starButton(scope.$index, scope)"
        :icon="'el-icon-star-off'">收藏
    </el-dropdown-item>
    <el-dropdown-item
        v-else-if="scope.starredFlag === '1'"
        @click.native="starButton(scope.$index, scope)"
        :icon="'el-icon-star-on'">取消收藏
    </el-dropdown-item>
    <el-dropdown-item @click.native="renameButton(scope.$index, scope)">重命名</el-dropdown-item>
    <el-dropdown-item @click.native="transferButton(scope.$index, scope)">移动</el-dropdown-item>
    <el-dropdown-item @click.native="removeButton(scope.$index, scope)" divided style="color: #f56c6c;">
      移到回收站
    </el-dropdown-item>
  </el-dropdown-menu>
</template>

<script>
import {updateFolder} from "@/api/folder"
import {updateFile} from "@/api/file"
import {trash} from "@/api/recyclebin"

export default {
  name: "DropMenu",
  props: {
    scope: Object,
  },
  methods: {
    // 下载按钮方法
    downloadButton(index, row) {
      this.$store.dispatch('download', row.hash)
    },
    // 收藏按钮方法
    starButton(index, row) {
      let info = JSON.parse(JSON.stringify(row))
      info.starredFlag = info.starredFlag === '1' ? '0' : '1'
      if (info.extension) {
        // 文件
        updateFile(info)
      } else {
        // 文件夹
        updateFolder(info)
      }
      setTimeout(() => this.$emit('refresh-data'), 1000)
    },
    // 重命名按钮方法
    renameButton(index, row) {
      this.$store.commit('setRowData', row)
      this.$store.commit('setRenameDialog', true)
    },
    // 移动按钮方法
    transferButton(index, row) {
      this.$store.commit('setCommitType', 'single')
      this.$store.commit('setRowData', row)
      this.$store.commit('setTransferDialog', true)
    },
    // 移动到回收站方法
    removeButton(index, row) {
      if (row.extension) {
        trash({hashId: row.hash, hashType: '1'})
      } else {
        trash({hashId: row.hash, hashType: '2'})
      }
      setTimeout(() => this.$emit('refresh-data'), 1000)
    },
  },
}
</script>

<style scoped>

</style>