<template>
  <div>
    <el-table
        :data="folderList.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()))"
        @selection-change="handleSelectionChange" max-height="800" tooltip-effect="dark">
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column label="名称" min-width="300" prop="name"></el-table-column>
      <el-table-column label="修改时间" min-width="110" prop="gmtModified"></el-table-column>
      <el-table-column label="大小" min-width="110" prop="size"></el-table-column>
      <el-table-column min-width="130">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="根据文件名搜索"/>
        </template>
        <template slot-scope="scope">
          <el-dropdown @click="detailsButton(scope.$index, scope.row)" size="small" split-button type="primary">
            <span>详细信息</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                  :disabled="!scope.row.isRoot"
                  @click.native="downloadButton(scope.$index, scope.row)">下载
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
              <el-dropdown-item>移动</el-dropdown-item>
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
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
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
            .then((response) => {
              if (response.data.status === 200) {
                this.$store.dispatch('listContent')
              }
            })
      } else {
        // 文件
        updateFile(info)
            .then((response) => {
              if (response.data.status === 200) {
                this.$store.dispatch('listContent')
              }
            })
      }
    },
    // 重命名按钮方法
    renameButton(index, row) {
      this.$store.commit('setRowData', row)
      this.$store.commit('setRenameDialog', true)
    },
    // 移动按钮方法
    
    // 移动到回收站方法
    removeButton(index, row) {
      if (row.isRoot) {
        trash({hashId: row.hash, hashType: '2'})
            .then(() => {
              this.$store.dispatch('listContent')
            })
      } else {
        trash({hashId: row.hash, hashType: '1'})
            .then(() => {
              this.$store.dispatch('listContent')
            })
      }
      
    },
  },
}
</script>

<style scoped>

</style>