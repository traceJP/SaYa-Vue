import request from '@/api/base/axios_config'
import local from "@/store/local"
import {resetRouter} from "@/router"
import router from "@/router"

export function loginByPwd(phone, password) {
  return request({
    url: '/login/pwd',
    method: 'post',
    params: {
      'phone' : phone,
      'password' : password,
    },
  })
}

export function loginBySms(phone, code) {
  return request({
    url: '/login/sms',
    method: 'post',
    params: {
      'phone' : phone,
      'code' : code,
    },
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
