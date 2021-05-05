<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8"><circle-progress :total="100" :use="10">存储空间</circle-progress></el-col>
      <el-col :span="8"><circle-progress :total="1100" :use="241">下载流量</circle-progress></el-col>
      <el-col :span="8"><circle-progress :total="15612305" :use="12312114">暂时流量</circle-progress></el-col>
    </el-row>
  </div>
</template>

<script>
import CircleProgress from "@/components/common/CircleProgress";
export default {
  name: "Volume",
  data() {
    return {
    
    }
  },
  components: {CircleProgress},
  created() {
  
  }
}
</script>

<style scoped>
.el-row {
  margin: 20px 0;
}
</style>