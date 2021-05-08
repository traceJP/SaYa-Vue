<template>
  <div class="master">
    <el-avatar :size="100" :src="userInfo.avatar"></el-avatar>
    <div class="name">{{ userInfo.name }}</div>
    <div class="icons">
      <el-tooltip effect="dark" :content="'手机号：' + userInfo.phone" placement="top">
        <i class="el-icon-phone-outline"></i>
      </el-tooltip>
      <el-tooltip effect="dark" :content="'邮箱号：' + userInfo.email" placement="top">
        <i class="el-icon-message"></i>
      </el-tooltip>
      <div>
        <el-tooltip v-if="userInfo.sex === '0'" effect="dark" :content="'汉子'" placement="top">
          <i class="el-icon-male"></i>
        </el-tooltip>
        <el-tooltip v-else-if="userInfo.sex === '1'" effect="dark" :content="'妹子'" placement="top">
          <i class="el-icon-female"></i>
        </el-tooltip>
        <el-tooltip v-else effect="dark" :content="'外星人'" placement="top">
          <i class="el-icon-female"></i>
        </el-tooltip>
      </div>
      <div>
        <el-tooltip v-if="userInfo.type === '00'" effect="dark" :content="'系统管理员'" placement="top">
          <i class="el-icon-user"></i>
        </el-tooltip>
        <el-tooltip v-else-if="userInfo.type === '01'" effect="dark" :content="'会员用户'" placement="top">
          <i class="el-icon-user"></i>
        </el-tooltip>
      </div>
    </div>
    <el-divider></el-divider>
  
  </div>
</template>

<script>
import local from "@/store/local"

export default {
  name: "UserInfo",
  data() {
    return {}
  },
  methods: {},
  computed: {
    userInfo: () => {
      let info = local.getUserInfo()
      info.avatar = info.avatar === null ? require('@/assets/images/default-avatar.png') : '//拼接服务器图片地址'
      info.name = info.name === null ? 'Hi, 您还没有昵称呢' : 'Hi, ' + info.name
      info.email = info.email === null ? '诶~还没有邮箱呢' : info.email
      return info
    }
  },
  created() {
  },
  
}
</script>

<style scoped>
.master {
  width: 220px;
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
  /*text-overflow: ellipsis;*/
}

.name {
  padding-top: 20px;
  letter-spacing: 0;
  font-size: 25px;
  font-weight: 600;
  
}

.icons {
  padding-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>