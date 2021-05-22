<template>
  <div>
    <div class="master">
      <div v-for="(item, index) in folderList" :key="index">
        <grid-card-item :item="item" :router="isRoute">
          <slot :scope="item"></slot>
        </grid-card-item>
      </div>
    </div>
    <div v-if="folderList.length === 0" class="no-data">{{ noDataTitle }}</div>
  </div>
</template>

<script>
import GridCardItem from "@/components/common/GridCardItem"

export default {
  name: "FolderGrid",
  components: {GridCardItem},
  props: {
    noDataTitle: String,
    isRoute: Boolean,
  },
  computed: {
    folderList() {
      return this.$store.getters.getFolderContent
    },
    // rowsData() {
    //   return this.$store.getters.getRowsData
    // }
  },
  // methods: {
  //   checkChange(val, item) {
  //     let rowsData = this.rowsData
  //     // 如果为true则删除
  //     if (val) {
  //       rowsData.push(item)
  //     } else {
  //       for (let i = 0; i < rowsData.length; i++) {
  //         if (rowsData[i].id === item.id) {
  //           rowsData.splice(i, 1)
  //         }
  //       }
  //     }
  //     this.$store.commit('setRowsData', rowsData)
  //   },
  // },
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