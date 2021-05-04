import request from '@/api/base/axios_config'

export function getMenu() {
  return request({
    url: '/menu/list',
    method: 'get',
  })
}
