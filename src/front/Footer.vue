<template>
    <div>
        <div class="content">
            <div>开始使用，由崎纱耶云盘</div>
            <el-button type="primary">
                <router-link to="/index" tag="div">
                    前往使用
                </router-link>
            </el-button>
        </div>
        <div class="tail">
            <p>纱耶云盘项目</p>
            <p>作者：LJP</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    .content {
        font-style: normal;
        font-weight: 800;
        font-size: 54px;
        line-height: 60px;
        text-align: center;
        letter-spacing: 1px;
        color: #0b0e51;
        padding-top: 200px;
    }
    .tail {
        width: 100%;
        margin-top: 150px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #8286a6;
    }
</style>