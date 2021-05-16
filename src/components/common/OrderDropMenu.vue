<template>
  <el-dropdown>
    <el-button type="primary" size="mini">
      选择排序<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(item, index) in orderBy" :key="item.name" :disabled="index === currentOrderBy"
                        :icon="index === currentOrderBy ? 'el-icon-check' : ''"
                        :class="index === currentOrderBy ? 'selection' : ''"
                        @click.native="edit(index, 'orderBy')">
        {{ item.name }}
      </el-dropdown-item>
      <el-dropdown-item v-for="(item, index) in orderDirection" :key="item.name"
                        :disabled="index === currentOrderDirection" :divided="index === 0"
                        :icon="index === currentOrderDirection ? 'el-icon-check' : ''"
                        :class="index === currentOrderDirection ? 'selection' : ''"
                        @click.native="edit(index, 'orderDirection')">
        {{ item.name }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import local from "@/store/local"

export default {
  name: "OrderDropMenu",
  data() {
    return {
      // 当前选中
      currentOrderBy: 0,
      currentOrderDirection: 0,
      
      // 按什么排序
      orderBy: [
        {
          id: 'NAME',
          name: '名称',
        },
        {
          id: 'FILE_SIZE',
          name: '文件大小',
        },
        {
          id: 'CREATE_TIME',
          name: '创建时间',
        },
        {
          id: 'MODIFY_TIME',
          name: '修改时间',
        },
      ],
      // 排序规则
      orderDirection: [
        {
          id: 'ASC',
          name: '升序',
        },
        {
          id: 'DESC',
          name: '降序',
        },
      ],
    }
  },
  methods: {
    edit(index, type) {
      if (type === 'orderBy') {
        this.currentOrderBy = index
      } else if (type === 'orderDirection') {
        this.currentOrderDirection = index
      }
      local.setOrder({
        orderBy: this.orderBy[this.currentOrderBy].id,
        orderDirection: this.orderDirection[this.currentOrderDirection].id,
      })
      this.$emit('change')
    },
  },
  created() {
    const order = local.getOrder()
    this.orderBy.forEach((v, index) => {
      if (v.id === order.orderBy) {
        this.currentOrderBy = index
      }
    })
    this.orderDirection.forEach((v, index) => {
      if (v.id === order.orderDirection) {
        this.currentOrderDirection = index
      }
    })
  }
}
</script>

<style scoped>
.selection {
  color: #409EFF;
}
</style>