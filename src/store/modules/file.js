import {download} from "@/api/file";

const file = {

  state: {},

  mutations: {},

  actions: {
    // 下载方法
    download(hash) {
      download(hash).then((response) => {
        // 调用浏览器下载
        let url = window.URL.createObjectURL(response.data)
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        // 获取响应头文件名
        let filename = response.headers['content-disposition'].split('=')[1]
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
      })
    }
  },

  getters: {},

}

export default file
