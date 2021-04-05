<template>
    <div>
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            :background-color="'#F5F5F6'"
        >
            <el-menu-item index="1" :route="'/aaa'">
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

</style>