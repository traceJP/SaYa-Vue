const local = {

  // token
  setToken(token) {
    localStorage.setItem("token", token)
  },
  getToken() {
    return localStorage.getItem("token")
  },

  // 用户实体
  setUserInfo(userInfo) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  },
  getUserInfo() {
    if (localStorage.getItem("userInfo")) {
      return JSON.parse(localStorage.getItem("userInfo"))
    } else {
      return null
    }
  },

  // 布局样式
  setLayoutType(type) {
    localStorage.setItem("layoutType", JSON.stringify(type))
  },
  getLayoutType() {
    if (localStorage.getItem("layoutType")) {
      return JSON.parse(localStorage.getItem("layoutType"))
    } else {
      return null
    }
  },

  // 文件或文件夹排序规则
  setOrder(order) {
    localStorage.setItem("order", JSON.stringify(order))
  },
  getOrder() {
    if (localStorage.getItem("order")) {
      return JSON.parse(localStorage.getItem("order"))
    } else {
      return null
    }
  },


  // 清空本地保存
  clear() {
    localStorage.clear()
  },

}

export default local
