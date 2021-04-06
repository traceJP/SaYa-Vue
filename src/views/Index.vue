<template>
    <div class="master">
        <el-container>
            <el-aside>
                <Sidebar/>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
name: "Index",
    components: {Sidebar}
}
</script>

<style scoped>
.master, .el-container {
    height: 100%;
}
.el-aside {
    width: 240px !important;
    background-color: #F5F5F6;
    color: #333;
    text-align: center;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
}
</style>