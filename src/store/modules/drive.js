import local from "@/store/local"
import {get} from "@/api/drive"

const drive = {

  state: {
    // 用户信息实体
    user: {
      avatar: '',
      driveId: '',
      email: '',
      phone: '',
      sex: '',
      userName: '',
      userType: '',
      hasPassword: false,
    },
    // 对话框显示参数
    editUserDrawer: false,
    editPwdDrawer: false,
  },

  mutations: {
    setEditUserDrawer(state, data) {
      state.editUserDrawer = data
    },
    setEditPwdDrawer(state, data) {
      state.editPwdDrawer = data
    },
  },

  actions: {
    // 请求刷新用户信息
    refreshUser(state) {
      get().then(response => {
        const data = response.data
        state.user = data
        local.setUserInfo(data)
      })
    },
    // 初始化用户信息
    initUser({state, dispatch}) {
      local.getUserInfo() ? state.user = local.getUserInfo() : dispatch('refreshUser')
    },
  },

  getters: {
    getUser(state) {
      return state.user
    },
    getEditUserDrawer(state) {
      return state.editUserDrawer
    },
    getEditPwdDrawer(state) {
      return state.editPwdDrawer
    },
  },

}

export default drive
