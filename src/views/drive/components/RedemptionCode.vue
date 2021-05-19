<template>
  <div>
    <div class="form-box">
      <div class="font-title">
        <el-tooltip class="item" effect="dark" content="通过福利码可以兑换临时流量~" placement="top-start">
          <i class="el-icon-paperclip"></i>
        </el-tooltip>
        <span>兑换激活码</span>
      </div>
      <div class="el-form">
        <el-input v-model="activation" placeholder="请输入激活码"></el-input>
        <el-button type="primary" @click="onSubmit">兑换</el-button>
      </div>
    </div>
    <div class="form-box">
      <div class="font-title">
        <el-tooltip class="item" effect="dark" content="输入文件分享码即可保存他人文件~" placement="top-start">
          <i class="el-icon-paperclip"></i>
        </el-tooltip>
        <span>文件分享码</span>
      </div>
      <div class="el-form">
        <el-input v-model="share" placeholder="请输入分享码"></el-input>
        <el-button type="primary" @click="onSubmit">兑换</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RedemptionCode",
  data() {
    return {
      // 激活码
      activation: '',
      // 分享码
      share: '',
    }
  },
  methods: {
    activationButton() {
    
    },
    shareButton() {
    
    },
  },
}
</script>

<style scoped>

.form-box {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.font-title {
  color: #909399;
  font-size: 17px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  Arial, sans-serif;
  font-weight: bold;
}

.el-form {
  display: flex;
}

.el-form .el-input {
  width: 70%;
  margin-right: 5%;
}

.el-form .el-button {
  width: 25%;
}

</style>