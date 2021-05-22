<template>
  <div class="master">
    <div>
      <!-- 导航面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="routeTo">{{ title }}</el-breadcrumb-item>
        <span v-if="fixedBreadcrumb">
          <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index" :to="'/folder/' + item.hash">
            {{ item.name }}
          </el-breadcrumb-item>
        </span>
      </el-breadcrumb>
    </div>
    <div class="button-group">
      <!-- 布局切换按钮 -->
      <div>
        <el-button v-if="$store.getters.getLayoutType === 'table'"
                   @click="$store.commit('setLayoutType', 'grid')"
                   size="mini" type="primary" icon="el-icon-menu"></el-button>
        <el-button v-else-if="$store.getters.getLayoutType === 'grid'"
                   @click="$store.commit('setLayoutType', 'table')"
                   size="mini" type="primary" icon="el-icon-s-data"></el-button>
      </div>
      <!-- 排序下拉菜单 -->
      <order-drop-menu @change="orderChange"></order-drop-menu>
      <!-- 批量按钮组插槽 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import OrderDropMenu from "@/components/common/OrderDropMenu"

export default {
  name: "TableGridHeader",
  components: {OrderDropMenu},
  props: {
    fixedBreadcrumb: Boolean,
    title: String,
    routeTo: String,
  },
  computed: {
    breadcrumb() {
      return this.$store.getters.getFolderNameByStack
    },
  },
  methods: {
    orderChange() {
      this.$emit('change')
    }
  },
}
</script>

<style scoped>
.master {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button-group {
  display: flex;
  justify-content: space-around;
  justify-items: center;
}

.button-group > div {
  margin: auto 10px;
}

.batchGroup > span {
  padding: 0 10px;
}

.el-dropdown {
  margin-left: 20px;
}
</style>