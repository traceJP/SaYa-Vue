<template>
  <div>
    <el-dialog title="新建文件夹" :visible.sync="isVisible" width="25%">
      <div class="master">
        <el-image :src="require('@/assets/images/folder-img.png')"></el-image>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" @focus="selectContent($event)"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isVisible = false">取 消</el-button>
        <el-button type="primary" @click="newFolderButton">创 建</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {createFolder} from "@/api/folder";

export default {
  name: "AddFolderDialog",
  data() {
    return {
      ruleForm: {
        name: '',
      },
      rules: {
        name: [{required: true, message: '请输入文件夹名', trigger: 'blur'},]
      }
    }
  },
  computed: {
    isVisible: {
      get() {
        return this.$store.getters.getAddFolderDialog
      },
      set(val) {
        this.$store.commit('setAddFolderDialog', val)
      },
    },
  },
  watch: {
    isVisible() {
      this.ruleForm.name = '新建文件夹'
    }
  },
  methods: {
    newFolderButton() {
      const parentHash = this.$store.getters.getFolderHash
      createFolder({name: this.ruleForm.name, parentHash: parentHash})
          .then(() => {
            this.$emit('refresh-data')
          })
      this.isVisible = false
    },
    selectContent(e) {
      e.currentTarget.select()
    },
  },
}
</script>

<style scoped>
.master {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
}

.el-image {
  width: 100px;
  margin: 0 auto;
}

.el-form-item {
  width: 200px;
  margin: 40px auto 0;
}
</style>