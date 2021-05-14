<template>
  <div class="master">
    <div>
      <!-- 导航面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="'/folder/root'">文件</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index" :to="'/folder/' + item.hash">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
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
      <!-- 批量操作按钮组, 收藏 删除 移动 -->
      <transition name="el-fade-in-linear">
        <span v-show="rowsData.length !== 0" class="batchGroup">
        <el-button v-if="isAllStarred" @click="starButton" icon="el-icon-star-on" circle type="primary"></el-button>
        <el-button v-else @click="starButton" icon="el-icon-star-off" circle type="primary"></el-button>
        <el-popconfirm @confirm="deleteButton" title="确定批量删除所选文件吗？" icon="el-icon-warning" icon-color="#E6A23C"
                       confirm-button-type="warning">
          <el-button icon="el-icon-delete" circle type="primary" slot="reference"></el-button>
        </el-popconfirm>
        <el-button @click="transferButton" icon="el-icon-place" circle type="primary"></el-button>
      </span>
      </transition>
      <!-- 查询按钮 -->
      <el-button icon="el-icon-search" circle disabled></el-button>
      <!-- 新建按钮 -->
      <el-dropdown>
        <el-button icon="el-icon-plus" circle type="primary"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="newFolderButton">新建文件夹</el-dropdown-item>
          <el-dropdown-item @click.native="uploadListButton" divided>上传文件</el-dropdown-item>
          <el-dropdown-item disabled>上传文件夹</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {updateFolder} from "@/api/folder";
import {updateFile} from "@/api/file";
import {trash} from "@/api/recyclebin";

export default {
  name: "Header",
  computed: {
    breadcrumb() {
      return this.$store.getters.getFolderNameByStack
    },
    rowsData() {
      return this.$store.getters.getRowsData
    },
    isAllStarred() {
      const rows = this.$store.getters.getRowsData
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].starredFlag === '0') {
          return false
        }
      }
      return true
    },
  },
  methods: {
    newFolderButton() {
      this.$store.commit('setAddFolderDialog', true)
    },
    uploadListButton() {
      this.$store.commit('setUploadDrawer', true)
    },
    starButton() {
      let data = JSON.parse(JSON.stringify(this.rowsData))
      if (this.isAllStarred) {
        // 全部取消收藏
        for (let i = 0; i < data.length; i++) {
          data[i].starredFlag = '0'
          data[i].isRoot ? updateFolder(data[i]) : updateFile(data[i])
        }
      } else {
        // 全部收藏
        for (let i = 0; i < data.length; i++) {
          if (data[i].starredFlag === '0') {
            data[i].starredFlag = '1'
            data[i].isRoot ? updateFolder(data[i]) : updateFile(data[i])
          }
        }
      }
      setTimeout(() => this.$store.dispatch('listContent'), 1000)
    },
    deleteButton() {
      let data = JSON.parse(JSON.stringify(this.rowsData))
      for (let i = 0; i < data.length; i++) {
        if (data[i].isRoot) {
          trash({hashId: data[i].hash, hashType: '2'})
        } else {
          trash({hashId: data[i].hash, hashType: '1'})
        }
      }
      setTimeout(() => this.$store.dispatch('listContent'), 1000)
    },
    transferButton() {
      this.$store.commit('setTransferDialog', true)
      this.$store.commit('setCommitType', 'many')
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

.layout-group {
  margin: auto 20px;
}

.batchGroup {
  margin-right: 20px;
}

.batchGroup > span {
  padding: 0 10px;
}

.el-dropdown {
  margin-left: 20px;
}
</style>