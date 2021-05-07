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
    }
  },

  mutations: {
    setUser(state, user) {
      state.user = user
    },
  },

  actions: {
  },

  getters: {
    getUser(state) {
      return state.user
    },
  },

}

export default drive
