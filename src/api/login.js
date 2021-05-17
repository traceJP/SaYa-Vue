import request from '@/api/base/axios_config'
import local from "@/store/local"
import {resetRouter} from "@/router"
import router from "@/router"

export function login(data) {
  return request({
    url: '/login/pwd',
    method: 'post',
    data: data,
  })
}

export function getLoginSms(phone) {
  return request({
    url: '/login/get',
    method: 'get',
    param: {
      'phone' : phone,
    },
  })
}

// 登录成功方法
export function afterLogin(response) {
    local.setToken(response.headers['token'])
    local.setUserInfo(response.data.data)
    resetRouter()
    router.push('/index')
}
