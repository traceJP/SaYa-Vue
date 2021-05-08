import request from '@/api/base/axios_config'

export function trash(data) {
  return request({
    url: '/recyclebin/trash',
    method: 'post',
    data: data,
  })
}

export function restore(data) {
  return request({
    url: '/recyclebin/restore',
    method: 'delete',
    data: data,
  })
}
