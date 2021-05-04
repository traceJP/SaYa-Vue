<template>
  <div>
    <Header :item-data="breadcrumbData" :title="'文件'" class="header"/>
    <Table/>
  </div>
</template>

<script>
import Header from "@/views/folder/components/Header";
import Table from "@/views/folder/components/Table";

export default {
  name: "Index",
  components: {Table, Header},
  data() {
    return {
      breadcrumbData: [{name: 1, id: 123}, {name: 2, id: 666}]
      //{name: 1, id: 123}, {name: 2, id: 666}
    }
  },
  created() {
    // alert(this.$route.params.id)
  },
  methods: {},
  
}
</script>

<style scoped>
.header {
  margin: 20px 0;
}
</style>