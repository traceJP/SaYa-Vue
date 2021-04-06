<template>
    <div>
        <div class="logoBox">
            <img src="../assets/logo.png" alt="纱耶云盘">
            <span>纱耶云盘</span>
        </div>
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            :background-color="'#F5F5F6'"
            :router="true"
        >
            <!-- TODO: 后端请求菜单项 -->
            <!-- 暂时写死 -->
            <el-menu-item index="1" :route="'/user'">
                <i class="el-icon-menu"></i>
                <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    methods: {

    }
}
</script>

<style scoped>
    .logoBox {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content:center;
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