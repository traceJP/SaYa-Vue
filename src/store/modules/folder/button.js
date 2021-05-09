const button = {

  state: {
    // 元素行数据
    rowData: '',
    rowsData: [],
    // 当前提交类型 single many
    commitType: '',

    // 对话框显示状态
    detailsDialog: false,
    renameDialog: false,
    transferDialog: false,
    addFolderDialog: false,
  },

  mutations: {
    setRowData(state, data) {
      state.rowData = data
    },
    setRowsData(state, data) {
      state.rowsData = data
    },
    setCommitType(state, data) {
      state.commitType = data
    },
    setDetailsDialog(state, data) {
      state.detailsDialog = data
    },
    setRenameDialog(state, data) {
      state.renameDialog = data
    },
    setTransferDialog(state, data) {
      state.transferDialog = data
    },
    setAddFolderDialog(state, data) {
      state.addFolderDialog = data
    },
  },

  actions: {},

  getters: {
    getRowData(state) {
      return state.rowData
    },
    getRowsData(state) {
      return state.rowsData
    },
    getCommitType(state) {
      return state.commitType
    },
    getDetailsDialog(state) {
      return state.detailsDialog
    },
    getRenameDialog(state) {
      return state.renameDialog
    },
    getTransferDialog(state) {
      return state.transferDialog
    },
    getAddFolderDialog(state) {
      return state.addFolderDialog
    },
  },

}

export default button
