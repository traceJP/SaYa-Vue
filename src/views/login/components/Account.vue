<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" class="demo-ruleForm" ref="ruleForm" status-icon>
      <el-form-item prop="phone">
        <el-input autocomplete="off" placeholder="请输入手机号" v-model="ruleForm.phone"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input autocomplete="off" placeholder="登录密码" type="password" v-model="ruleForm.password"/>
      </el-form-item>
      <el-form-item style="padding: 1rem 5rem">
        <el-button @click="submitForm('ruleForm')" type="primary">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login, afterLogin} from "@/api/login"

export default {
  name: "account",
  data() {
    // 账号输入框校验
    let validateAccount = (rule, value, callback) => {
      if (!value) {
        callback(new Error('手机号不能为空'));
      }
      let regular = /^1[3456789]\d{9}$/
      if (!(regular.test(value))) {
        callback(new Error('手机号码格式不正确，请重新输入'))
      }
      callback()
    }
    return {
      ruleForm: {
        phone: '',
        password: '',
      },
      rules: {
        phone: [
          {validator: validateAccount, trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    // 登录方法
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm)
              .then((response) => response.data.status === 200 ? afterLogin(response) : this.ruleForm.pass = '')
        }
      })
    },
    // 表单重置
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}

</script>

<style scoped>

</style>
