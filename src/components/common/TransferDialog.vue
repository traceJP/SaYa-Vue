<template>
  <div>
      <!-- TODO:抽象出title标题 -->
    <el-dialog title="移动到其他文件夹" :visible.sync="isVisible" width="30%">
      <el-tree :props="props" :load="loadNode" lazy accordion highlight-current @node-click="handleNodeClick"></el-tree>
      <span slot="footer">
        <el-button @click="isVisible = false">取 消</el-button>
        <!-- TODO:抽象出button标题 -->
        <el-button type="primary" @click="transferButton">移动到此处</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {list, updateFolder} from "@/api/folder"
import {updateFile} from "@/api/file"

export default {
  name: "TransferDialog",
  data() {
    return {
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf',
      },
      // 单选当前行
      currentRow: null,
    }
  },
  computed: {
    isVisible: {
      get() {
        return this.$store.getters.getTransferDialog
      },
      set(val) {
        this.$store.commit('setTransferDialog', val)
      },
    },
  },
  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{name: "根目录", hash: "root"}])
      }
      list(node.data.hash).then((response) => resolve(response.data))
    },
    handleNodeClick(data) {
      this.currentRow = data
    },
    // TODO: 抽象出按钮提交方法，方法传入参数：currentRow , 使用事件处理
    transferButton() {
      let type = this.$store.getters.getCommitType
      let arrayData = []
      // 判断当前对话框是对单选还是多选进行操作
      if (type === 'single') {
        let item = JSON.parse(JSON.stringify(this.$store.getters.getRowData))
        arrayData.push(item)
      } else if (type === 'many') {
        arrayData = JSON.parse(JSON.stringify(this.$store.getters.getRowsData))
      }
      // 遍历发送请求
      arrayData.forEach(v => {
        if (v.isRoot) {
          v.parentHash = this.currentRow.hash
          updateFolder(v)
        } else {
          v.folderHash = this.currentRow.hash
          updateFile(v)
        }
      })
      setTimeout(() =>  this.$emit('refresh-data'), 1000)
      this.isVisible = false
    },
  },
}
</script>

<style scoped>

</style>