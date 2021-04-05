<template>
    <div>
        <el-row>
            <el-col :md="24" :sm="24">
                <div class="grid-content bg-title">
                    存储到云端更畅快
                </div>
            </el-col>
            <el-col v-for="(item, index) in items" :key="index" :md="12" :sm="24">
                <space-item class="itemPst" :color="item.color" :img-url="item.imgUrl">
                    <div slot="title-p1">{{ item.titleP1 }}</div>
                    <div slot="title-p2">{{ item.titleP2 }}</div>
                    <div slot="content-p1">{{ item.contentP1 }}</div>
                    <div slot="content-p2">{{ item.contentP2 }}</div>
                </space-item>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import SpaceItem from "@/components/common/SpaceItem";
export default {
    name: "Space",
    components: {SpaceItem},
    data() {
        return {
            items: [
                {
                    color: '#fff5cf',
                    imgUrl: require("@/assets/images/space-img1.png"),
                    titleP1: '尽享极速',
                    titleP2: '上传下载',
                    contentP1: '体验触手可及的快，支持极速上传下载、',
                    contentP2: '秒传和大文件快速传输。',
                },
                {
                    color: '#dbe0ff',
                    imgUrl: require("@/assets/images/space-img2.png"),
                    titleP1: '自动备份',
                    titleP2: '手机相册',
                    contentP1: '一键开启，照片和视频自动同步到云',
                    contentP2: '盘，珍贵记忆永不丢失。',
                },
                {
                    color: '#daf1ff',
                    imgUrl: require("@/assets/images/space-img3.png"),
                    titleP1: '不被打搅的',
                    titleP2: '干净空间',
                    contentP1: '没有广告和弹窗，只有沟通反馈的',
                    contentP2: '入口一直向你敞开。',
                },
                {
                    color: '#daf1ff',
                    imgUrl: require("@/assets/images/space-img4.png"),
                    titleP1: '你的资产',
                    titleP2: '非常安全',
                    contentP1: '全球的数据校验、冗余存储和分布式存',
                    contentP2: '储技术，保障文件完好放在云端。',
                },
            ]
        }
    },
}
</script>

<style scoped>
    .el-row {
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
    }
    .itemPst {
        margin: 60px auto;
    }
    .bg-title {
        margin: 220px 0 100px;
        font-style: normal;
        font-weight: 800;
        font-size: 54px;
        line-height: 72px;
        text-align: center;
        letter-spacing: 1px;
        color: #0b0e51;
    }
</style>