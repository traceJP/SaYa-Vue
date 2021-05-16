<template>
  <div class="master">
    <div><!-- flex左 --></div>
    <div class="button-group">
      <!-- 布局切换按钮 -->
      <div class="layout-group">
        <el-button v-if="$store.getters.getLayoutType === 'table'"
                   @click="$store.commit('setLayoutType', 'grid')"
                   size="mini" type="primary" icon="el-icon-menu"></el-button>
        <el-button v-else-if="$store.getters.getLayoutType === 'grid'"
                   @click="$store.commit('setLayoutType', 'table')"
                   size="mini" type="primary" icon="el-icon-s-data"></el-button>
      </div>
      <!-- 排序下拉菜单 -->
      <order-drop-menu @change="orderChange"></order-drop-menu>
      <!-- 批量操作按钮组, 还原 删除 -->
      <div>
        <transition name="el-fade-in-linear">
          <span v-show="rowsData.length !== 0" class="batchGroup">
            <el-popconfirm @confirm="restoreButton" title="确定还原所选文件吗？" icon="el-icon-warning" icon-color="#E6A23C"
                           confirm-button-type="warning">
              <el-button icon="el-icon-magic-stick" circle type="primary" slot="reference"></el-button>
            </el-popconfirm>
            <el-popconfirm @confirm="deleteButton" title="确定删除所选文件吗？" icon="el-icon-warning" icon-color="#E6A23C"
                           confirm-button-type="warning">
              <el-button icon="el-icon-delete" circle type="primary" slot="reference"></el-button>
            </el-popconfirm>
          </span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDropMenu from "@/components/common/OrderDropMenu"
import {deleteFolder} from "@/api/folder"
import {deleteFile} from "@/api/file"
import {restore} from "@/api/recyclebin"

export default {
  name: "Header",
  components: {OrderDropMenu},
  computed: {
    rowsData() {
      return this.$store.getters.getRowsData
    },
  },
  methods: {
    orderChange() {
      this.$store.dispatch('listByRecyclebin')
    },
    restoreButton() {
      const data = JSON.parse(JSON.stringify(this.rowsData))
      for (let i = 0; i < data.length; i++) {
        if (data[i].isRoot) {
          restore({hashId: data[i].hash, hashType: '2'})
        } else {
          restore({hashId: data[i].hash, hashType: '1'})
        }
      }
      setTimeout(() => this.$store.dispatch('listByRecyclebin'), 1000)
    },
    deleteButton() {
      const data = JSON.parse(JSON.stringify(this.rowsData))
      for (let i = 0; i < data.length; i++) {
        if (data[i].isRoot) {
          deleteFolder(data[i].hash)
        } else {
          deleteFile(data[i].hash)
        }
      }
      setTimeout(() => this.$store.dispatch('listByRecyclebin'), 1000)
    },
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