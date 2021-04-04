<template>
    <div class="index-box">
        <div class="main">
            <div class="logoBox">
                <img src="../../assets/logo.png" alt="沙耶云盘">
                <span>沙耶云盘</span>
            </div>
            <el-tabs type="border-card" :stretch="true" style="height: 100%;">
                <el-tab-pane label="短信登录">
                    <sms-msg/>
                </el-tab-pane>
                <el-tab-pane label="账号登录">
                    <account/>
                </el-tab-pane>
                <el-tab-pane :disabled="true" label="扫码登录">
                    扫码登录
                </el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>

<script>
import Account from "@/views/login/components/Account"
import SmsMsg from "@/views/login/components/SmsMsg";

export default {
    name: "Index",
    components: {SmsMsg, Account},
}
</script>

<style scoped>
    .index-box {
        height: 100%;
        background-color: rgb(236,239,255);
    }
    .main {
        width: 348px;
        height: 338px;
        position: absolute;
        left: 50%;
        top: 35%;
        transform: translate(-50%, -50%);
    }
    .logoBox {
        margin-bottom: 1.5rem;
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 0.2rem;
        font-family: 'Helvetica Neue';
        display: flex;
        align-items: center;
        justify-content:center;
    }
    .logoBox img {
        width: 31px;
        margin-right: 0.3rem;
    }
</style>