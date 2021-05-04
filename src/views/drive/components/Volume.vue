<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div>
          <circle-progress :total="100" :use="10">存储空间</circle-progress>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <circle-progress :total="1100" :use="10">下载流量</circle-progress>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
        
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CircleProgress from "@/components/common/CircleProgress";
export default {
name: "Volume",
  components: {CircleProgress}
}
</script>

<style scoped>
.el-row {
  margin: 20px 0;
}
</style>