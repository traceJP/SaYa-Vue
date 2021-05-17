import request from '@/api/base/axios_config'

export function createFolder(data) {
  return request({
    url: '/folder/create',
    method: 'post',
    data: data
  })
}

export function deleteFolder(hash) {
  return request({
    url: '/folder/delete',
    method: 'delete',
    params: {
      hash: hash,
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

export function listByStar(data) {
  return request({
    url: '/folder/list_star',
    method: 'post',
    data: data
  })
}

export function listAll(data) {
  return request({
    url: '/folder/list',
    method: 'post',
    data: data,
  })
}
