<template>
  <div>
    <el-table
        :data="folderList.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()))"
        @selection-change="handleSelectionChange"
        max-height="800" tooltip-effect="dark" empty-text="您还没有分享文件呢~">
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column min-width="300">
        <template slot="header">
          <span>名称&nbsp;（共{{ folderList.length }}项）</span>
        </template>
        <template slot-scope="scope">
          <div class="nameBox">
            <el-image :src="fileImage(scope.row.extension)"></el-image>
            <div class="font">{{ scope.row.name }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="分享时间" min-width="110" prop="gmtCreate"></el-table-column>
      <el-table-column label="有效时间" min-width="110" prop="expiry"></el-table-column>
      <el-table-column label="状态" min-width="110" prop="status"></el-table-column>
      <el-table-column min-width="130">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="根据名称搜索"/>
        </template>
        <template slot-scope="scope">
          <el-dropdown>
            <el-button type="primary" size="small" @click.stop="detailsButton(scope.$index, scope.row)">
              操作
            </el-button>
            <!-- TODO:下拉菜单：取消分享，复制链接 -->
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getFileImage} from "@/utils/baseUtils";

export default {
  name: "Table",
  data() {
    return {
      // 搜索框
      search: '',
    }
  },
  methods: {
    fileImage(ex) {
      return getFileImage(ex)
    }
  },
}
</script>

<style scoped>

</style>