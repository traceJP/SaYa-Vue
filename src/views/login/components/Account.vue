<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="account">
                <el-input
                    placeholder="请输入邮箱 / 手机号"
                    v-model="ruleForm.account"
                    autocomplete="off"
                />
            </el-form-item>
            <el-form-item prop="pass">
                <el-input
                    type="password"
                    placeholder="登录密码"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                />
            </el-form-item>
            <el-form-item style="padding: 1rem 5rem">
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "account",
    data() {
        let validateAccount = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('邮箱/手机号不能为空'));
            }
            callback()
        }
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('密码不能为空'));
            }
            callback()
        }
        return {
            ruleForm: {
                account: '',
                pass: '',
            },
            rules: {
                account: [
                    { validator: validateAccount, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}

</script>

<style scoped>

</style>
