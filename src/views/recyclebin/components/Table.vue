<template>
  <div>
    <el-table
        :data="folderList.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()))"
        @selection-change="handleSelectionChange"
        max-height="800" tooltip-effect="dark" empty-text="您还没有删除文件呢~">
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
            <drop-menu :scope="scope.row"></drop-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import DropMenu from "@/views/recyclebin/components/DropMenu"

export default {
  name: "Table",
  components: {DropMenu},
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
    // 详细信息按钮方法
    detailsButton(index, row) {
      this.$store.commit('setRowData', row)
      this.$store.commit('setDetailsDialog', true)
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