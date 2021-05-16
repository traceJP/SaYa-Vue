<template>
  <div>
    <div class="master">
      <div v-for="(item, index) in folderList" :key="index">
        <grid-card-item :item="item" :router="false">
          <drop-menu :scope="item"></drop-menu>
        </grid-card-item>
      </div>
    </div>
    <div v-if="folderList.length === 0" class="no-data">您还没有删除文件呢~</div>
  </div>
</template>

<script>
import GridCardItem from "@/components/common/GridCardItem"
import DropMenu from "@/views/recyclebin/components/DropMenu"

export default {
  name: "Grid",
  components: {DropMenu, GridCardItem},
  computed: {
    folderList() {
      return this.$store.getters.getFolderContent
    },
  },
}
</script>

<style scoped>
.master {
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 24px;
  /* 相对定位导致元素超出容器 */
  overflow: hidden;
}

.no-data {
  text-align: center;
  color: #909399;
  font-size: 18px;
}

</style>