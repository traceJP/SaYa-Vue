import request from '@/api/base/axios_config'

export function download(fileHash) {
  return request({
    url: '/file/download',
    method: 'get',
    responseType: 'blob',
    timeout: 0,
    params: {
      fileHash: fileHash,
    },
  })
}

export function createFile(data) {
  return request({
    url: '/file/create',
    method: 'post',
    data: data
  })
}

export function updateFile(data) {
  return request({
    url: '/file/update',
    method: 'put',
    data: data
  })
}

