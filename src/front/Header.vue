<template>
  <div>
    <el-row>
      <el-col :md="9" :sm="24">
        <div class="grid-content bg-purple">
          <div class="logoBox">
            <img src="../assets/logo.png" alt="纱耶云盘"/>
            <span>纱耶云盘</span>
          </div>
          <div class="leftTitle">你的数字世界</div>
          <div class="leftContent">
            纱耶云盘是一款速度快、不打扰、够安全、易于分享的网盘，
            你可以在这里存储、管理和探索内容，尽情打造丰富的数字世界。
          </div>
          <div class="leftButton">
            <el-button type="primary">
              <router-link to="/sign" tag="div">
                开始使用
              </router-link>
            </el-button>
          </div>
        </div>
      </el-col>
      <el-col :md="15" class="hidden-sm-only">
        <div class="grid-content bg-purple-light">
          <img src="../assets/images/aliyun-header.png" alt=""/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.el-row {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*align-items: center;*/
}

.grid-content {
  height: 100%;
}

.bg-purple {
}

.bg-purple-light {
  margin: 200px 0 0 150px;
}

.bg-purple-light img {
  width: 70%;
  height: 70%;
  margin: 0 auto;
}

.logoBox {
  margin-top: 3rem;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.leftTitle {
  margin: 10rem auto 2rem;
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
}

.leftContent {
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: #4154b5;
  margin-bottom: 2rem;
}

.leftButton {
  text-align: center;
}
</style>