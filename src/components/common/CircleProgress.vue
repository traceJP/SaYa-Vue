<template>
  <div class="master">
    <el-progress
        type="circle"
        :percentage="percentage"
        :color="color"
        :format="setContent"
    >
    </el-progress>
    <div class="text">
      <slot></slot>
    </div>
    <div>{{ formatUse + ' / ' + formatTotal }}</div>
  </div>
</template>

<script>
export default {
  name: "CircleProgress",
  data() {
    return {
      color: '',
      percentage: 0,
      formatTotal: '',
      formatUse: '',
    }
  },
  props: {
    // 总数
    total: Number,
    // 已使用数
    use: Number,
  },
  watch: {
    total: {
      handler(val) {
        this.percentage = Math.round(this.use / val * 100)
        this.formatTotal = this.formatCalculate(val)
      },
      immediate: true
    },
    use: {
      handler(val) {
        this.percentage = Math.round(val / this.total * 100)
        this.formatUse = this.formatCalculate(val)
      },
      immediate: true
    },
    percentage: {
      handler(val) {
        // 越大越告警
        if (val <= 10) {
          this.color = '#6f7ad3'
        } else if (val <= 30) {
          this.color = '#1989fa'
        } else if (val <= 60) {
          this.color = '#5cb87a'
        } else if (val <= 80) {
          this.color = '#e6a23c'
        } else if (val <= 100) {
          this.color = '#f56c6c'
        }
      },
      immediate: true
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