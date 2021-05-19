import axios from "axios"
import local from "@/store/local"
import router from "@/router"
import {topMimicBox} from "@/utils/mimicbox"

export const baseURL = 'http://localhost:8081'

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Access-Control-Allow-Headers" : "Authorization,Origin, X-Requested-With, Content-Type, Accept",
    'Content-Type': 'application/json',
  }
})

export default instance

// 请求拦截器
instance.interceptors.request.use((config) => {
  if (local.getToken()) {
    config.headers.token = local.getToken()
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use((response) => {
  const res = response.data
  if (response.status === 200) {
    // 服务器响应成功
    if (res.status === 200) {
      // 业务正常
      topMimicBox.success(res.message)
      return response
    } else if (res.status === 401) {
      // 无权限或无认证
      topMimicBox.error(res.message)
      router.push('/sign')
    } else if (res.status === 400 || res.status === 402 || res.status === 500) {
      // 业务异常
      topMimicBox.error(res.message)
      return response
    } else {
      // status不存在: 资源请求业务
      return response
    }
  } else {
    // 服务器响应失败
    topMimicBox.error(res.message)
  }
}, (error) => {
  return Promise.reject(error)
})
