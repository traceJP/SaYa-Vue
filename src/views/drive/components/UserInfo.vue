<template>
  <div class="master">
    <!-- 用户信息展示框 -->
    <div class="user-info">
      <user-avatar :avatar="userInfo.avatar"></user-avatar>
      <div class="name">{{ userInfo.name }}</div>
      <div class="icons">
        <el-tooltip effect="dark" :content="'手机号：' + userInfo.phone" placement="top">
          <i class="el-icon-phone-outline"></i>
        </el-tooltip>
        <el-tooltip effect="dark" :content="'邮箱号：' + userInfo.email" placement="top">
          <i class="el-icon-message"></i>
        </el-tooltip>
        <el-tooltip effect="dark" :content="userInfo.sexName" placement="top">
          <i :class="userInfo.sexIcon"></i>
        </el-tooltip>
        <el-tooltip effect="dark" :content="userInfo.type" placement="top">
          <i class="el-icon-user"></i>
        </el-tooltip>
      </div>
    </div>
    <!-- 按钮组 -->
    <div class="button-box">
      <el-button @click="$store.commit('setEditUserDrawer', true)" type="primary" plain round>
        修改信息
      </el-button>
    </div>
    <div class="button-box">
      <el-button @click="$store.commit('setEditPwdDrawer', true)" type="primary" plain round>
        {{ userInfo.hasPassword ? '修改密码' : '设置密码' }}
      </el-button>
    </div>
  </div>
</template>

<script>
import UserAvatar from "@/views/drive/components/UserAvatar"

export default {
  name: "UserInfo",
  components: {UserAvatar},
  data() {
    return {}
  },
  methods: {},
  computed: {
    userInfo() {
      const info = JSON.parse(JSON.stringify(this.$store.getters.getUser))
      info.avatar = info.avatar === null ? require('@/assets/images/default-avatar.png') : '//拼接服务器图片地址'
      info.name = info.name === null ? 'Hi, 您还没有昵称呢' : 'Hi, ' + info.name
      info.email = info.email === null ? '诶~还没有邮箱呢' : info.email
      switch (info.sex) {
        case '0':
          info.sexName = '汉子'
          info.sexIcon = 'el-icon-male'
          break
        case '1':
          info.sexName = '妹子'
          info.sexIcon = 'el-icon-female'
          break
        default:
          info.sexName = '保密'
          info.sexIcon = 'el-icon-female'
      }
      switch (info.type) {
        case '00':
          info.type = '系统管理员'
          break
        case '01':
          info.type = '会员用户'
          break
        default:
      }
      return info
    },
  },
  created() {
    this.$store.dispatch('initUser')
  },
}
</script>

<style scoped>
.master {
  /*width: 100%;*/
  /*margin: 0 auto;*/
  padding: 25px;
  display: flex;
  flex-direction: column;
}

.user-info {
  margin-bottom: 15px;
  text-align: center;
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

.button-box {
  margin: 10px 0;
}

.button-box .el-button {
  width: 100%;
}

</style>