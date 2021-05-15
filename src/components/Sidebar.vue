<template>
  <div>
    <div class="logoBox">
      <img src="../assets/logo.png" alt="纱耶云盘">
      <span>纱耶云盘</span>
    </div>
    <el-menu :default-active="$route.name" :background-color="'#F5F5F6'" router>
      <el-menu-item v-for="item in menu" :key="item.id" :index="item.remake" :route="item.url">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {getMenu} from "@/api/menu";

export default {
  name: "Sidebar",
  data() {
    return {
      menu: [{
        id: '',
        name: '',
        type: '',
        perms: '',
        url: '',
        icon: '',
        parent_id: '',
        order_num: '',
        remake: '',
      }],
    }
  },
  created() {
    // 菜单栏资源请求
    getMenu().then(response => this.menu = response.data)
  }
}
</script>

<style scoped>
.logoBox {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.2rem;
  font-family: 'Helvetica Neue', sans-serif;
}

.logoBox img {
  width: 24px;
  margin-right: 5px;
}
</style>