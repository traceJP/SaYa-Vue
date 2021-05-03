<template>
  <div class="index-box">
    <div class="main">
      <div class="logoBox">
        <img alt="沙耶云盘" src="../../assets/logo-vue.png"/>
        <span>沙耶云盘</span>
      </div>
      <el-tabs :stretch="true" style="height: 100%;" type="border-card">
        <el-tab-pane label="短信登录">
          <sms-msg></sms-msg>
        </el-tab-pane>
        <el-tab-pane label="账号登录">
          <account></account>
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
    background-color: #ECEFFF;
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
    font-family: 'Helvetica Neue', serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .logoBox img {
    width: 31px;
    margin-right: 0.3rem;
  }
</style>