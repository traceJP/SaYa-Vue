import request, {baseURL} from "@/api/base/axios_config"

const updateURL = baseURL + '/user/update/info'
export default updateURL

export function get() {
  return request({
    url: '/user/get',
    method: 'get',
  })
}

export function updateInfo(data) {
  return request({
    url: updateURL,
    method: 'put',
    data: data,
  })
}

export function updatePassword(data) {
  return request({
    url: '/user/update/pwd',
    method: 'put',
    data: data,
  })
}
