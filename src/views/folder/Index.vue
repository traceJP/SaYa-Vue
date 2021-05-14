<template>
  <div>
    <el-container>
      <el-header>
        <Header class="header"></Header>
      </el-header>
      <el-main>
        <Table v-show="layoutType === 'table'"></Table>
        <Grid v-show="layoutType === 'grid'"></Grid>
      </el-main>
    </el-container>
    <!-- 对话框组 -->
    <details-dialog></details-dialog>
    <rename-dialog></rename-dialog>
    <transfer-dialog></transfer-dialog>
    <add-folder-dialog></add-folder-dialog>
    <upload-drawer></upload-drawer>
  </div>
</template>

<script>
import Header from "@/views/folder/components/Header";
import Table from "@/views/folder/components/Table";
import RenameDialog from "@/components/common/RenameDialog";
import DetailsDialog from "@/components/common/DetailsDialog";
import TransferDialog from "@/components/common/TransferDialog";
import AddFolderDialog from "@/components/common/AddFolderDialog";
import UploadDrawer from "@/components/common/UploadDrawer";
import Grid from "@/views/folder/components/Grid";
import local from "@/store/local";

export default {
  name: "Index",
  components: {Grid, UploadDrawer, AddFolderDialog, TransferDialog, Table, Header, RenameDialog, DetailsDialog},
  watch: {
    folderHash: {
      handler(val) {
        this.$store.commit('setFolderHash', val)
        this.$store.dispatch('listContent')
        this.$store.dispatch('getUntilRoot')
      },
      immediate: true,
    },
  },
  computed: {
    folderHash() {
      return this.$route.params.id
    },
    layoutType() {
      return this.$store.getters.getLayoutType
    },
  },
  created() {
    if (local.getLayoutType()) {
      this.$store.commit('setLayoutType', local.getLayoutType())
    }
  }
}
</script>

<style scoped>

</style>