<template>
  <div>
    <el-container>
      <el-header>
        <Header class="header" @refresh-data="refreshData"></Header>
      </el-header>
      <el-main>
        <FolderTable v-show="layoutType === 'table'" v-slot="props" :is-route="false" no-data-title="您还没有删除文件呢~">
          <drop-menu :scope="props.scope" @refresh-data="refreshData"></drop-menu>
        </FolderTable>
        <FolderGrid v-show="layoutType === 'grid'" v-slot="props" :is-route="false" no-data-title="您还没有删除文件呢~">
          <drop-menu :scope="props.scope" @refresh-data="refreshData"></drop-menu>
        </FolderGrid>
      </el-main>
    </el-container>
    <!-- 对话框组 -->
    <details-dialog></details-dialog>
  </div>
</template>

<script>
import Header from "@/views/recyclebin/components/Header"
import FolderTable from "@/components/common/FolderTable"
import DetailsDialog from "@/components/common/DetailsDialog"
import FolderGrid from "@/components/common/FolderGrid"
import DropMenu from "@/views/recyclebin/components/DropMenu"
import local from "@/store/local"

export default {
  name: "Index",
  components: {DropMenu, FolderGrid, FolderTable, Header, DetailsDialog},
  computed: {
    layoutType() {
      return this.$store.getters.getLayoutType
    },
  },
  methods: {
    refreshData() {
      this.$store.dispatch('listByRecyclebin')
    }
  },
  mounted() {
    this.refreshData()
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