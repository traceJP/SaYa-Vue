import request from '@/api/base/axios_config'

export function createFolder(data) {
  return request({
    url: '/folder/create',
    method: 'post',
    data: data
  })
}

export function removeFolder(folderHash) {
  return request({
    url: '/folder/delete',
    method: 'delete',
    params: {
      folderHash: folderHash,
    },
  })
}

export function updateFolder(data) {
  return request({
    url: '/folder/update',
    method: 'put',
    data: data,
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
