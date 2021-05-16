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
  </div>
</template>

<script>
import Header from "@/views/recyclebin/components/Header"
import Table from "@/views/recyclebin/components/Table"
import DetailsDialog from "@/components/common/DetailsDialog"
import Grid from "@/views/recyclebin/components/Grid"
import local from "@/store/local"

export default {
  name: "Index",
  components: {Grid, Table, Header, DetailsDialog},
  computed: {
    layoutType() {
      return this.$store.getters.getLayoutType
    },
  },
  created() {
    this.$store.dispatch('listByRecyclebin')
    if (local.getLayoutType()) {
      this.$store.commit('setLayoutType', local.getLayoutType())
    }
  }
}
</script>

<style scoped>

</style>