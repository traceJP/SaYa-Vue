<template>
  <div>
    <el-dialog title="重命名" :visible.sync="isVisible" width="20%">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" :placeholder="rowData.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import {updateFile} from "@/api/file";
import {updateFolder} from "@/api/folder";

export default {
  name: "RenameDialog",
  data() {
    return {
      ruleForm: {
        name: '',
      },
      rules: {
        name: [{required: true, message: '请输入文件名', trigger: 'blur'},]
      }
    }
  },
  computed: {
    isVisible: {
      get() {
        return this.$store.getters.getRenameDialog
      },
      set(val) {
        this.$store.commit('setRenameDialog', val)
      },
    },
    rowData() {
      return this.$store.getters.getRowData
    }
  },
  watch : {
    // 表单清空
    isVisible() {
      this.ruleForm.name = ''
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let info = JSON.parse(JSON.stringify(this.rowData))
          info.name = this.ruleForm.name
          if (this.rowData.isRoot) {
            // 文件夹
            updateFolder(info).then((response) => {
              if (response.data.status === 200) {
                this.isVisible = false
                this.$store.dispatch('listContent')
              }
            })
          } else {
            // 文件
            updateFile(info).then((response) => {
              if (response.data.status === 200) {
                this.isVisible = false
                this.$store.dispatch('listContent')
              }
            })
          }
        }
      })
    },
  },
}
</script>

<style scoped>

</style>