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
    return JSON.parse(localStorage.getItem("userInfo"))
  },

  // 布局样式
  setLayoutType(type) {
    localStorage.setItem("layoutType", JSON.stringify(type))
  },
  getLayoutType() {
    return JSON.parse(localStorage.getItem("layoutType"))
  },

  // 文件或文件夹排序规则
  setOrder(order) {
    localStorage.setItem("order", JSON.stringify(order))
  },
  getOrder() {
    return JSON.parse(localStorage.getItem("order"))
  },


  // 清空本地保存
  clear() {
    localStorage.clear()
  },

}

export default local
