import request from '@/api/base/axios_config'

export function create(data) {
  return request({
    url: '/folder/create',
    method: 'post',
    data: data
  })
}

export function remove(folderHash) {
  return request({
    url: '/folder/delete',
    method: 'delete',
    params: {
      folderHash: folderHash,
    },
  })
}

export function update(data, folderHash) {
  return request({
    url: '/folder/update',
    method: 'put',
    data: data,
    params: {
      folderHash: folderHash,
    },
  })
}

export function get(folderHash) {
  return request({
    url: '/folder/get',
    method: 'get',
    params: {
      folderHash: folderHash,
    },
  })
}

export function list(folderHash) {
  return request({
    url: '/folder/list',
    method: 'get',
    params: {
      folderHash: folderHash,
    },
  })
}
