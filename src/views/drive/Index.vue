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
      <!-- 激活码表单展示框 -->
      <grid-item :x="layout[2].x" :y="layout[2].y" :w="layout[2].w" :h="layout[2].h" :i="layout[2].i">
        <redemption-code></redemption-code>
      </grid-item>
      <!-- 时钟展示框 -->
      <grid-item :x="layout[3].x" :y="layout[3].y" :w="layout[3].w" :h="layout[3].h" :i="layout[3].i">
        <clock-box></clock-box>
      </grid-item>
      <!-- 用户信息展示框 -->
      <grid-item :x="layout[4].x" :y="layout[4].y" :w="layout[4].w" :h="layout[4].h" :i="layout[4].i">
        <user-info></user-info>
      </grid-item>
    </grid-layout>
    <!-- 弹出框组 -->
    <edit-user-info></edit-user-info>
    <edit-password></edit-password>
  </div>
</template>

<script>
import {GridLayout, GridItem} from "vue-grid-layout"
import Volume from "@/views/drive/components/Volume"
import UserInfo from "@/views/drive/components/UserInfo"
import EditUserInfo from "@/views/drive/components/EditUserInfo"
import ClockBox from "@/views/drive/components/ClockBox"
import RedemptionCode from "@/views/drive/components/RedemptionCode"
import EditPassword from "@/views/drive/components/EditPassword"

export default {
  name: "Index",
  components: {
    EditPassword,
    RedemptionCode,
    EditUserInfo,
    UserInfo,
    Volume,
    GridLayout,
    GridItem,
    ClockBox,
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
        {"x": 0, "y": 1, "w": 13, "h": 11, "i": "1"},
        {"x": 13, "y": 1, "w": 11, "h": 6, "i": "2"},
        {"x": 13, "y": 1, "w": 5, "h": 5, "i": "3"},
        {"x": 18, "y": 0, "w": 6, "h": 12, "i": "4"},
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