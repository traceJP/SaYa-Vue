<template>
  <el-upload
      title="点击修改头像"
      class="avatar-uploader"
      name="avatar"
      :action="actionUrl"
      :show-file-list="false"
      :on-success="handleAfter"
      :before-upload="beforeUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="加载中..."/>
    <div class="hover-photo">
      <span>修&nbsp;改头&nbsp;像</span>
    </div>
  </el-upload>
</template>

<script>

import {topMimicBox} from "@/utils/mimicbox"
import updateURL from "@/api/drive"

export default {
  name: "UserAvatar",
  props: {
    avatar: String,
  },
  computed: {
    actionUrl() {
      return updateURL
    },
    imageUrl() {
      return this.avatar === null ? this.avatar : require('@/assets/images/default-avatar.png')
    },
  },
  methods: {
    handleAfter(res) {
      if (res.data.status === 200) {
        this.$store.dispatch('refreshUser')
      } else {
        topMimicBox.error('头像修改失败')
      }
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 3
      if (!isJPG) {
        topMimicBox.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        topMimicBox.error('上传头像图片大小不能超过 3MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped>

.avatar-uploader /deep/ .el-upload {
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.el-upload:hover .hover-photo {
  display: block;
}

.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.hover-photo {
  display: none;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  margin-left: -50px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  text-align: center;
}

.hover-photo > span {
  padding: 32px 33px 32px 36px;
  font-size: 13px;
  color: #fff;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

</style>