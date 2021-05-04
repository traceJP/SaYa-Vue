<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">管理中心</el-menu-item>
      <el-menu-item index="2">我的信息</el-menu-item>
      <el-menu-item index="3">{{ nowTimeTitle }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import local from "@/store/local"

export default {
  name: "Header",
  data() {
    return {
      // 菜单元素索引
      activeIndex: '1',
      activeIndex2: '2',
      // 时钟
      nowTimeTitle: '',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    // 时钟标题方法
    clockTitle() {
      let hours = new Date().getHours()
      if (hours < 12) {
        this.nowTimeTitle = '上午好'
      } else if (hours < 14) {
        this.nowTimeTitle = '中午好'
      } else if (hours < 18) {
        this.nowTimeTitle = '下午好'
      } else if (hours < 25) {
        this.nowTimeTitle = '晚上好'
      }
      this.nowTimeTitle += ',' + local.getUserInfo().userName
    },
  },
  created() {
    this.clockTitle()
    setInterval(() => {
      this.clockTitle()
    }, 60000)
  },
}
</script>

<style scoped>

</style>