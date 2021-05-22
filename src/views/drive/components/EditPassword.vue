<template>
  <div>
    <el-drawer :title="hasPassword ? '修改我的密码' : '设置新密码'" :visible.sync="isVisible" direction="rtl" ref="drawer">
      <div class="master">
        <el-form class="form-box" label-position="top" :model="form" :rules="rules" ref="ruleForm">
          <el-form-item v-if="hasPassword" label="旧密码" prop="oldPassword">
            <el-input v-model="form.oldPassword" show-password></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input v-model="form.newPassword" show-password></el-input>
          </el-form-item>
          <transition name="el-fade-in-linear">
            <el-form-item v-show="form.newPassword" label="确认新密码" prop="checkPassword">
              <el-input v-model="form.checkPassword" show-password></el-input>
            </el-form-item>
          </transition>
        </el-form>
        <div class="button-group">
          <el-button @click="isVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">
            {{ hasPassword ? '修 改' : '设 置' }}
          </el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>

import {updatePassword} from "@/api/drive";

export default {
  name: "EditPassword",
  data() {
    let validatePassword = (rule, value, callback) => {
      // 包含字母+数字
      const mailReg = /(?=.*[0-9])(?=.*[a-zA-Z])+/
      if (!mailReg.test(value)) {
        callback(new Error('新密码需要包含字母和数字'))
      }
      // 退出后清空表单，密码校验动态
      if (this.form.checkPassword !== '') {
        this.$refs['ruleForm'].validateField('checkPassword')
      }
      callback()
    }
    let validateCheckPassword = (rule, value, callback) => {
      if (value !== this.form.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        checkPassword: '',
      },
      rules: {
        // 校验
        oldPassword: [
          {required: true, message: '请输入原始密码', trigger: 'blur'},
        ],
        newPassword: [
          {required: true, message: '请输入新密码', trigger: 'blur'},
          {min: 8, message: '长度在不能小于 8 个字符', trigger: ['change', 'blur']},
          {validator: validatePassword, trigger: ['change', 'blur']},
        ],
        checkPassword: [
          {required: true, message: '请再次输入新密码', trigger: 'blur'},
          {validator: validateCheckPassword, trigger: ['change', 'blur']},
        ],
      }
    }
  },
  computed: {
    isVisible: {
      get() {
        return this.$store.getters.getEditPwdDrawer
      },
      set(val) {
        this.$store.commit('setEditPwdDrawer', val)
      },
    },
    hasPassword() {
      return this.$store.getters.getUser.hasPassword
    },
  },
  watch: {
    // 表单清空
    isVisible() {
      this.$refs['ruleForm'].resetFields()
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          updatePassword(this.form)
          this.$store.dispatch('refreshUser')
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