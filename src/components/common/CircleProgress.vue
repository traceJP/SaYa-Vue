<template>
  <div class="master">
    <el-progress type="circle" :percentage="percentage" :color="color" :format="setContent"></el-progress>
    <div class="text">
      <slot></slot>
    </div>
    <div>{{ formatUse + ' / ' + formatTotal }}</div>
  </div>
</template>

<script>
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
      return this.formatCalculate(this.total)
    },
    formatUse() {
      return this.formatCalculate(this.use)
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
    // byte转换为合理单位
    formatCalculate(val) {
      let count = 0
      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (val < 1024) {
          val = Math.round(val)
          if (count === 0) {
            return val + 'byte'
          } else if (count === 1) {
            return val + 'KB'
          } else if (count === 2) {
            return val + 'MB'
          } else if (count === 3) {
            return val + 'GB'
          } else {
            return val + 'TB'
          }
        }
        val /= 1024
        count++
      }
    }
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