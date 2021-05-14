<template>
  <div class="item-box">
    <!-- 元素展示组 -->
    <div class="grid-item" @click="routerTo">
      <div>
        <el-image v-if="item.isRoot" :src="require('@/assets/images/folder-img.png')"></el-image>
        <el-image v-else-if="item.extension === '.mp3'" :src="require('@/assets/images/music-img.png')"></el-image>
        <el-image v-else :src="require('@/assets/images/orther-img.png')"></el-image>
      </div>
      <div>{{ itemName }}</div>
      <div class="time-font">{{ itemModifiedTime }}</div>
    </div>
    <!-- 按钮组 -->
    <div class="button-group">
      <div><!-- 多选按钮:element-ui中表格组件多选不是响应式绑定，此需求暂时无法进行 --></div>
      <!-- <el-checkbox :style="checkStyle" @change="check" :checked="isSelection"></el-checkbox> -->
      <!-- 下拉菜单-->
      <el-dropdown class="drop-down">
        <span>
          <i class="el-dropdown-link el-icon-more"></i>
        </span>
        <slot></slot>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {beautySub} from "@/utils/baseUtils"

export default {
  name: "GridCardItem",
  // data() {
  //   return {
  //     isSelection: false,
  //     checkStyle: {
  //       display: '',
  //     },
  //   }
  // },
  props: {
    item: Object,
    // rows: Array,
  },
  computed: {
    itemName() {
      return beautySub(this.item.name, 8)
    },
    itemModifiedTime() {
      return this.item.gmtModified.split('/')[0]
    },
  },
  // watch: {
  //   rows: {
  //     handler(val) {
  //       for (let i = 0; i < val.length; i++) {
  //         if (val[i].id === this.item.id) {
  //           this.isSelection = true
  //           this.checkStyle.display = 'block'
  //           return
  //         }
  //       }
  //       this.isSelection = false
  //       this.checkStyle.display = ''
  //     },
  //     immediate: true,
  //   },
  // },
  methods: {
    routerTo() {
      if (this.item.isRoot) {
        this.$router.push(`/folder/${this.item.hash}`)
      }
    },
    // check(val) {
    //   this.checkStyle.display = val ? 'block' : ''
    //   this.$emit('checkChange', val, this.item)
    // },
  },
}
</script>

<style scoped>

.item-box {
  height: 145px;
}

.grid-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  color: #909399;
}

.grid-item:hover {
  background-color: #E4E7ED;
  border-radius: 10px;
}

.button-group {
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  position: relative;
  bottom: 135px;
}

.item-box:hover > .button-group > .drop-down {
  display: inline;
}
.item-box:hover > .button-group > .el-checkbox {
  display: inline;
}

.el-checkbox {
  display: none;
}

.time-font {
  font-size: 11px;
}

.drop-down {
  display: none;
  width: 20px;
  font-size: 18px;
  text-align: center;
}

.drop-down:hover {
  background-color: #DCDFE6;
  border-radius: 4px;
}

</style>