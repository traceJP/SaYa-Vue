<template>
  <div>
    <el-table
        :data="folderList.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()))"
        highlight-current-row @current-change="handleCurrentChange" @selection-change="handleSelectionChange"
        max-height="800" tooltip-effect="dark" empty-text="暂无数据,快去上传文件把~">
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column min-width="300">
        <template slot="header">
          <span>名称&nbsp;（共{{ folderList.length }}项）</span>
        </template>
        <template slot-scope="scope">
          <div class="nameBox">
            <el-image v-if="scope.row.isRoot" :src="require('@/assets/images/folder-img.png')"></el-image>
            <el-image v-else-if="scope.row.extension === '.mp3'"
                      :src="require('@/assets/images/music-img.png')"></el-image>
            <el-image v-else :src="require('@/assets/images/orther-img.png')"></el-image>
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
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :disabled="!!scope.row.isRoot" @click.native="downloadButton(scope.$index, scope.row)">
                下载
              </el-dropdown-item>
              <el-dropdown-item disabled>分享</el-dropdown-item>
              <el-dropdown-item
                  v-if="scope.row.starredFlag === '0'"
                  @click.native="starButton(scope.$index, scope.row)"
                  :icon="'el-icon-star-off'">收藏
              </el-dropdown-item>
              <el-dropdown-item
                  v-else-if="scope.row.starredFlag === '1'"
                  @click.native="starButton(scope.$index, scope.row)"
                  :icon="'el-icon-star-on'">取消收藏
              </el-dropdown-item>
              <el-dropdown-item @click.native="renameButton(scope.$index, scope.row)">重命名</el-dropdown-item>
              <el-dropdown-item @click.native="transferButton(scope.$index, scope.row)">移动</el-dropdown-item>
              <el-dropdown-item @click.native="removeButton(scope.$index, scope.row)" divided style="color: #f56c6c;">
                移到回收站
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {updateFolder} from "@/api/folder";
import {updateFile} from "@/api/file";
import {trash} from "@/api/recyclebin";

export default {
  name: "Table",
  components: {},
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
      if (val) {
        if (val.isRoot) {
          // 文件夹
          this.$router.push('/folder/' + val.hash)
        } else {
          // 文件
        }
      }
    },
    // 详细信息按钮方法
    detailsButton(index, row) {
      this.$store.commit('setRowData', row)
      this.$store.commit('setDetailsDialog', true)
    },
    // 下载按钮方法
    downloadButton(index, row) {
      this.$store.dispatch('download', row.hash)
    },
    // 收藏按钮方法
    starButton(index, row) {
      let info = JSON.parse(JSON.stringify(row))
      info.starredFlag = info.starredFlag === '1' ? '0' : '1'
      if (info.isRoot) {
        // 文件夹
        updateFolder(info)
      } else {
        // 文件
        updateFile(info)
      }
      setTimeout(() => this.$store.dispatch('listContent'), 1000)
    },
    // 重命名按钮方法
    renameButton(index, row) {
      this.$store.commit('setRowData', row)
      this.$store.commit('setRenameDialog', true)
    },
    // 移动按钮方法
    transferButton(index, row) {
      this.$store.commit('setCommitType', 'single')
      this.$store.commit('setRowData', row)
      this.$store.commit('setTransferDialog', true)
    },
    // 移动到回收站方法
    removeButton(index, row) {
      if (row.isRoot) {
        trash({hashId: row.hash, hashType: '2'})
      } else {
        trash({hashId: row.hash, hashType: '1'})
      }
      setTimeout(() => this.$store.dispatch('listContent'), 1000)
    },
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