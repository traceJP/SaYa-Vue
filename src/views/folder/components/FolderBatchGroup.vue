<template>
  <transition name="el-fade-in-linear">
    <span v-show="rowsData.length !== 0" class="batchGroup">
      <el-button v-if="isAllStarred" @click="starButton" icon="el-icon-star-on" circle type="primary"></el-button>
      <el-button v-else @click="starButton" icon="el-icon-star-off" circle type="primary"></el-button>
      <el-popconfirm @confirm="deleteButton" title="确定批量删除所选文件吗？" icon="el-icon-warning" icon-color="#E6A23C"
                     confirm-button-type="warning">
        <el-button icon="el-icon-delete" circle type="primary" slot="reference"></el-button>
      </el-popconfirm>
      <el-button @click="transferButton" icon="el-icon-place" circle type="primary"></el-button>
    </span>
  </transition>
</template>

<script>
import {updateFile} from "@/api/file"
import {updateFolder} from "@/api/folder"
import {trash} from "@/api/recyclebin"

export default {
  name: "FolderBatchGroup",
  computed: {
    rowsData() {
      return this.$store.getters.getRowsData
    },
    isAllStarred() {
      const rows = this.$store.getters.getRowsData
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].starredFlag === '0') {
          return false
        }
      }
      return true
    },
  },
  methods: {
    starButton() {
      let data = JSON.parse(JSON.stringify(this.rowsData))
      if (this.isAllStarred) {
        // 全部取消收藏
        for (let i = 0; i < data.length; i++) {
          data[i].starredFlag = '0'
          data[i].extension ? updateFile(data[i]) : updateFolder(data[i])
        }
      } else {
        // 全部收藏
        for (let i = 0; i < data.length; i++) {
          if (data[i].starredFlag === '0') {
            data[i].starredFlag = '1'
            data[i].extension ? updateFile(data[i]) : updateFolder(data[i])
          }
        }
      }
      setTimeout(() => this.$emit('refresh-data'), 1000)
    },
    deleteButton() {
      let data = JSON.parse(JSON.stringify(this.rowsData))
      for (let i = 0; i < data.length; i++) {
        if (data[i].extension) {
          trash({hashId: data[i].hash, hashType: '1'})
        } else {
          trash({hashId: data[i].hash, hashType: '2'})
        }
      }
      setTimeout(() => this.$emit('refresh-data'), 1000)
    },
    transferButton() {
      this.$store.commit('setTransferDialog', true)
      this.$store.commit('setCommitType', 'many')
    },
  },
}
</script>

<style scoped>
.batchGroup > span {
  padding: 0 10px;
}
</style>