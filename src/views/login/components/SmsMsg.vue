<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" class="demo-ruleForm" ref="ruleForm" status-icon>
      <el-form-item prop="phone">
        <el-input autocomplete="off" placeholder="请输入手机号码" v-model="ruleForm.phone"/>
      </el-form-item>
      <el-form-item prop="smsCode">
        <el-input autocomplete="off" placeholder="请输入验证码" v-model="ruleForm.smsCode"/>
      </el-form-item>
      <el-form-item style="padding: 1rem 3.5rem">
        <el-button @click="submitForm('ruleForm')" type="primary">登录</el-button>
        <el-button :disabled="smsButtonStatus" @click="askSmsCode()">{{ content }}</el-button>
      </el-form-item>
    </el-form>
    <div class="fontInfo">
      <div>未注册手机登录时会自动创建新账号且代表</div>
      <div>您已同意
        <router-link to="/">沙耶云盘用户协议</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {getLoginSms, login, afterLogin} from "@/api/login";

export default {
  name: "SmsMsg",
  data() {
    // 手机号输入框校验
    let validatePhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入手机号码'))
      }
      let regular = /^1[3456789]\d{9}$/
      if (!(regular.test(value))) {
        callback(new Error('手机号码格式不正确，请重新输入'))
      }
      callback()
    }
    // 验证码输入框校验
    let validateSmsCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      }
      let regular = /^\d{6}$/
      if (!(regular.test(value))) {
        callback(new Error('验证码格式错误，请重新输入'))
      }
      callback()
    }
    
    return {
      content: '获取验证码',
      smsButtonStatus: false,
      ruleForm: {
        phone: '',
        smsCode: '',
      },
      rules: {
        phone: [
          {validator: validatePhone, trigger: 'blur'}
        ],
        smsCode: [
          {validator: validateSmsCode, trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    // 登录按钮方法
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm)
              .then((response) => response.data.status === 200 ? afterLogin(response) : this.ruleForm.smsCode = '')
        }
      })
    },
    // 发送验证码按钮方法
    askSmsCode() {
      getLoginSms(this.ruleForm.phone)
          .then((response) => {
            if (response.data.status === 200) {
              this.smsCountdown()
            }
          })
    },
    // 短信倒计时方法
    smsCountdown() {
      this.smsButtonStatus = true
      let count = 60
      let timer = setInterval(() => {
        this.content = (count--) + '秒后重发'
        if (count < 0) {
          this.content = '获取验证码'
          this.smsButtonStatus = false
          clearInterval(timer)
        }
      }, 1000)
    },
  }
}
</script>

<style scoped>
  .fontInfo {
    font-size: 12px;
    color: #DCDFE6;
    text-align: center;
  }
</style>