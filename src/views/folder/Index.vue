<template>
  <div>
    <el-container>
      <el-header>
        <Header class="header"></Header>
      </el-header>
      <el-main>
        <Table></Table>
        <!-- 除了table布局还可以使用flex布局，可以根据vuex中的状态进行选择，而子组件如Header中可以对vuex中的状态进行改变 -->
      </el-main>
    </el-container>
    <!-- 对话框组 -->
    <details-dialog></details-dialog>
    <rename-dialog></rename-dialog>
    <transfer-dialog></transfer-dialog>
    <add-folder-dialog></add-folder-dialog>
  </div>
</template>

<script>
import Header from "@/views/folder/components/Header";
import Table from "@/views/folder/components/Table";
import RenameDialog from "@/components/common/RenameDialog";
import DetailsDialog from "@/components/common/DetailsDialog";
import TransferDialog from "@/components/common/TransferDialog";
import AddFolderDialog from "@/components/common/AddFolderDialog";

export default {
  name: "Index",
  components: {AddFolderDialog, TransferDialog, Table, Header, RenameDialog, DetailsDialog},
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
    }
  },
}
</script>

<style scoped>

</style>