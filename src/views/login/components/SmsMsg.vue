<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="phone">
                <el-input
                    placeholder="请输入手机号码"
                    v-model="ruleForm.phone"
                    autocomplete="off"
                />
            </el-form-item>
            <el-form-item prop="smsCode">
                <el-input
                    placeholder="请输入验证码"
                    v-model="ruleForm.smsCode"
                    autocomplete="off"
                />
            </el-form-item>
            <el-form-item style="padding: 1rem 3.5rem">
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button :disabled="smsButtonStatus" @click="askSmsCode()">{{ content }}</el-button>
            </el-form-item>
        </el-form>
        <div class="fontInfo">
            <div>未注册手机登录时会自动创建新账号且代表</div>
            <div>您已同意<router-link to="/">沙耶云盘用户协议</router-link></div>
        </div>
    </div>
</template>

<script>

import {mimicBox} from "@/utils/mimicbox";

export default {
    name: "SmsMsg",
    data() {
        let validatePhone = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号码'))
            }
            let regular = /^1[3456789]\d{9}$/
            if(!(regular.test(value))) {
                callback(new Error('手机号码格式不正确，请重新输入'))
            }
            callback()
        }
        let validateSmsCode = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('验证码不能为空'))
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
                    { validator: validatePhone, trigger: 'blur' }
                ],
                smsCode: [
                    { validator: validateSmsCode, trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // TODO: 发送登录请求
                }
            })
        },
        askSmsCode() {
            // TODO: 发送验证码请求... 2021.4.4
            mimicBox.success('短信验证码已发送，可能会有延后请耐心等待')
            this.smsButtonStatus = true
            let count = 60
            let timer = setInterval(() => {
                this.content = (count--) + '秒后重发'
                if(count < 0) {
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