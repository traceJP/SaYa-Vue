<template>
  <el-drawer title="修改个人信息" :visible.sync="isVisible" direction="rtl" ref="drawer">
    <div class="master">
      <el-form class="form-box" label-position="top" :model="form" :rules="rules" ref="ruleForm">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择您的性别">
            <el-option label="男生" value="0"></el-option>
            <el-option label="女生" value="1"></el-option>
            <el-option label="保密" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="button-group">
        <el-button @click="isVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">修 改</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import {updateInfo} from "@/api/drive"

export default {
  name: "EditUserInfo",
  data() {
    let checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      setTimeout(() => {
        mailReg.test(value) ? callback() : callback(new Error('请输入正确的邮箱格式'))
      }, 100)
    }
    return {
      form: {
        name: '',
        email: '',
        sex: '',
      },
      rules: {
        name: [
          {required: true, message: '请输入昵称', trigger: 'blur'},
          {max: 8, message: '长度在不能大于 8 个字符', trigger: 'blur'},
        ],
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'},
          {validator: checkEmail, trigger: 'blur'},
        ],
        sex: [
          {required: true, message: '请选择性别', trigger: 'blur'},
        ],
      }
    }
  },
  computed: {
    isVisible: {
      get() {
        return this.$store.getters.getEditUserDrawer
      },
      set(val) {
        this.$store.commit('setEditUserDrawer', val)
      },
    },
    info() {
      return JSON.parse(JSON.stringify(this.$store.getters.getUser))
    }
  },
  watch: {
    info: {
      handler(val) {
        this.form.name = val.name
        this.form.email = val.email
        this.form.sex = val.sex
      },
      immediate: true,
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          updateInfo(this.form).then(() => {
            this.$store.dispatch('refreshUser')
          })
          this.isVisible = false
        }
      })
    },
  },
}
</script>

<style scoped>
.master {
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.form-box {
  flex: 1;
}

.form-box .el-form-item /deep/ .el-select {
  width: 100%;
}

.button-group {
  display: flex;
}

.button-group .el-button {
  width: 100%;
}
</style>