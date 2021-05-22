<template>
  <div>
    <el-container>
      <el-header>
        <Header class="header" @refresh-data="refreshData"></Header>
      </el-header>
      <el-main>
        <FolderTable v-show="layoutType === 'table'" v-slot="props" :is-route="true" no-data-title="您还没有上传文件呢，快去上传文件把~">
          <drop-menu :scope="props.scope" @refresh-data="refreshData"></drop-menu>
        </FolderTable>
        <FolderGrid v-show="layoutType === 'grid'" v-slot="props" :is-route="true" no-data-title="您还没有上传文件呢，快去上传文件把~">
          <drop-menu :scope="props.scope" @refresh-data="refreshData"></drop-menu>
        </FolderGrid>
      </el-main>
    </el-container>
    <!-- 对话框组 -->
    <details-dialog></details-dialog>
    <rename-dialog @refresh-data="refreshData"></rename-dialog>
    <transfer-dialog @refresh-data="refreshData"></transfer-dialog>
    <add-folder-dialog @refresh-data="refreshData"></add-folder-dialog>
    <upload-drawer></upload-drawer>
  </div>
</template>

<script>
import Header from "@/views/folder/components/Header";
import FolderTable from "@/components/common/FolderTable";
import RenameDialog from "@/components/common/RenameDialog";
import DetailsDialog from "@/components/common/DetailsDialog";
import TransferDialog from "@/components/common/TransferDialog";
import AddFolderDialog from "@/components/common/AddFolderDialog";
import UploadDrawer from "@/components/common/UploadDrawer";
import FolderGrid from "@/components/common/FolderGrid";
import local from "@/store/local";
import DropMenu from "@/views/folder/components/DropMenu";

export default {
  name: "Index",
  components: {
    DropMenu,
    FolderGrid,
    UploadDrawer,
    AddFolderDialog,
    TransferDialog,
    FolderTable,
    Header,
    RenameDialog,
    DetailsDialog
  },
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
  methods: {
    refreshData() {
      this.$store.dispatch('listContent')
    }
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