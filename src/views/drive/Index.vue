<template>
    <div>
        <Header class="header" :title="'文件'" :item-data="breadcrumbData"/>
        <Table/>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Table from "@/views/drive/components/Table";
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
    methods: {

    },

}
</script>

<style scoped>
    .header {
        margin: 20px 0;
    }
</style>