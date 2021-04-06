<template>
    <div>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            @selection-change="handleSelectionChange"
            max-height="800"
        >
            <el-table-column type="selection" width="45"></el-table-column>
            <el-table-column prop="name" label="名称" min-width="300"></el-table-column>
            <el-table-column prop="date" label="修改时间" min-width="110"></el-table-column>
            <el-table-column prop="address" label="大小" min-width="110"></el-table-column>
            <el-table-column label="操作" min-width="130">
                <template>
                    <el-dropdown size="small" split-button type="primary">
                        详细信息
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>下载</el-dropdown-item>
                            <el-dropdown-item disabled>分享</el-dropdown-item>
                            <el-dropdown-item>收藏</el-dropdown-item>
                            <el-dropdown-item>重命名</el-dropdown-item>
                            <el-dropdown-item>移动</el-dropdown-item>
                            <el-dropdown-item style="color: #F56C6C;" divided>移到回收站</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "Table",
    data() {
        return {
            multipleSelection: []
        }
    },
    props: {
        tableData: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    },
}
</script>

<style scoped>

</style>