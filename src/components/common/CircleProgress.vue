<template>
  <div class="master">
    <el-progress type="circle" :percentage="percentage" :color="color" :format="setContent"></el-progress>
    <div class="text">
      <slot></slot>
    </div>
    <div>{{formatUse + ' / ' + formatTotal }}</div>
  </div>
</template>

<script>
import {formatCalculate} from "@/utils/baseUtils"

export default {
  name: "CircleProgress",
  props: {
    // 总数
    total: Number,
    // 已使用数
    use: Number,
  },
  computed: {
    formatTotal() {
      return formatCalculate(this.total)
    },
    formatUse() {
      return formatCalculate(this.use)
    },
    percentage() {
      return Math.round(this.use / this.total * 100)
    },
    color() {
      let percentage = this.percentage
      if (percentage <= 10) {
        return '#6f7ad3'
      } else if (percentage <= 30) {
        return '#1989fa'
      } else if (percentage <= 60) {
        return '#5cb87a'
      } else if (percentage <= 80) {
        return '#e6a23c'
      } else {
        return '#f56c6c'
      }
    },
  },
  methods: {
    setContent(percentage) {
      return '已使用' + percentage + '%'
    },
  },
}
</script>

<style scoped>
.master {
  text-align: center;
}

.text {
  margin-top: 0.6rem;
  font-weight: 800;
}
</style>