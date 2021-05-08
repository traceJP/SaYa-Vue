<template>
  <div>
    <el-dialog title="详细信息" :visible.sync="isVisible" width="25%">
      <div class="content">
        <div>
          <i class="el-icon-info"></i>
          <span>{{ data.name }}</span>
          <div>{{ data.size }}</div>
        </div>
        <div>
          <i class="el-icon-place"></i>
          <span>文件位置</span>
          <div>
            <span>文件&nbsp;/&nbsp;</span>
            <span v-for="(item, index) in folderStack" :key="index">{{ item.name + '/' }}</span>
            <span>{{ data.name }}</span>
          </div>
        </div>
        <div>
          <i class="el-icon-time"></i>
          <span>创建时间</span>
          <div>{{ data.gmtCreate }}</div>
        </div>
        <div>
          <i class="el-icon-edit"></i>
          <span>修改时间</span>
          <div>{{ data.gmtModified }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "DetailsDialog",
  computed: {
    isVisible: {
      get() {
        return this.$store.getters.getDetailsDialog
      },
      set(val) {
        this.$store.commit('setDetailsDialog', val)
      },
    },
    data() {
      return this.$store.getters.getRowData
    },
    folderStack() {
      return this.$store.getters.getFolderNameByStack
    },
  }
}
</script>

<style scoped>

.content > div {
  padding: 10px 0;
}

.content > div > i {
  padding-right: 30px;
}

.content > div > span, i {
  color: #303133;
  font-size: 16px;
}

.content > div > div {
  margin-left: 46px;
  color: #909399;
  font-size: 15px;
}

</style>