<template>
  <div>
    <el-table
        :data="folderList.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()))"
        highlight-current-row @current-change="handleCurrentChange" @selection-change="handleSelectionChange"
        max-height="800" tooltip-effect="dark" :empty-text="noDataTitle">
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column min-width="300">
        <template slot="header">
          <span>名称&nbsp;（共{{ folderList.length }}项）</span>
        </template>
        <template slot-scope="scope">
          <div class="nameBox">
            <el-image :src="getFileImage(scope.row.extension)"></el-image>
            <div class="font">{{ scope.row.name }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="修改时间" min-width="110" prop="gmtModified"></el-table-column>
      <el-table-column label="大小" min-width="110" prop="size"></el-table-column>
      <el-table-column min-width="130">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="根据名称搜索"/>
        </template>
        <template slot-scope="scope">
          <el-dropdown>
            <el-button type="primary" size="small" @click.stop="detailsButton(scope.$index, scope.row)">
              详细信息
            </el-button>
            <slot :scope="scope.row"></slot>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getFileImage} from "@/utils/baseUtils"

export default {
  name: "FolderTable",
  props: {
    noDataTitle: String,
    isRoute: Boolean,
  },
  data() {
    return {
      // 搜索框
      search: '',
    }
  },
  computed: {
    folderList() {
      return this.$store.getters.getFolderContent
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.$store.commit('setRowsData', val)
    },
    // 选择跳转方法
    handleCurrentChange(val) {
      if (this.isRoute) {
        if (val) {
          if (val.isRoot) {
            // 文件夹
            this.$router.push('/folder/' + val.hash)
          } else {
            // 文件
          }
        }
      }
    },
    // 详细信息按钮方法
    detailsButton(index, row) {
      this.$store.commit('setRowData', row)
      this.$store.commit('setDetailsDialog', true)
    },
    getFileImage(ex) {
      return getFileImage(ex)
    }
  },
}
</script>

<style scoped>
.nameBox {
  display: flex;
  justify-content: left;
  justify-items: center;
}

.nameBox > .el-image {
  width: 32px;
}

.font {
  margin-left: 15px;
  padding-top: 5px;
}
</style>