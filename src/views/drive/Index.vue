<template>
  <div>
    <grid-layout
        :layout.sync="layout"
        :col-num="layoutBox.colNum"
        :row-height="layoutBox.rowHeight"
        :is-draggable="layoutBox.isDraggable"
        :is-resizable="layoutBox.isResizable"
        :margin="layoutBox.margin"
    >
      <!-- 流量展示框 -->
      <grid-item :x="layout[0].x" :y="layout[0].y" :w="layout[0].w" :h="layout[0].h" :i="layout[0].i">
        <Volume></Volume>
      </grid-item>
      <!-- xx展示框 -->
      <grid-item :x="layout[1].x" :y="layout[1].y" :w="layout[1].w" :h="layout[1].h" :i="layout[1].i">
        <span class="text">222</span>
      </grid-item>
      <!-- xx展示框 -->
      <grid-item :x="layout[2].x" :y="layout[2].y" :w="layout[2].w" :h="layout[2].h" :i="layout[2].i">
        <span class="text">333</span>
      </grid-item>
  
      <!-- 用户信息展示框 -->
      <grid-item :x="layout[3].x" :y="layout[3].y" :w="layout[3].w" :h="layout[3].h" :i="layout[3].i">
        <user-info></user-info>
      </grid-item>
      
    </grid-layout>
  </div>
</template>

<script>
import {GridLayout, GridItem} from "vue-grid-layout"
import Volume from "@/views/drive/components/Volume";
import UserInfo from "@/views/drive/components/UserInfo";
export default {
  name: "Index",
  components: {
    UserInfo,
    Volume,
    GridLayout,
    GridItem,
  },
  data() {
    return {
      // 布局配置
      layoutBox: {
        colNum: 24,
        rowHeight: 10,
        isDraggable: false,
        isResizable: false,
        margin: [30, 30],
      },
      layout: [
        {"x": 0, "y": 0, "w": 18, "h": 7, "i": "0"},
        {"x": 0, "y": 1, "w": 9, "h": 7, "i": "1"},
        {"x": 9, "y": 1, "w": 9, "h": 7, "i": "2"},
        {"x": 18, "y": 0, "w": 6, "h": 20, "i": "3"},
      ],
    }
  },
}
</script>

<style scoped>
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #d3dce6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 12px;
}
</style>