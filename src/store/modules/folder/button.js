const button = {

  state: {
    // 元素行数据
    rowData: '',

    // 对话框显示状态
    detailsDialog: false,
    renameDialog: false,

  },

  mutations: {
    setRowData(state, data) {
      state.rowData = data
    },
    setDetailsDialog(state, data) {
      state.detailsDialog = data
    },
    setRenameDialog(state, data) {
      state.renameDialog = data
    }
  },

  actions: {},

  getters: {
    getRowData(state) {
      return state.rowData
    },
    getDetailsDialog(state) {
      return state.detailsDialog
    },
    getRenameDialog(state) {
      return state.renameDialog
    }
  },

}

export default button
