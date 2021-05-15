import request from '@/api/base/axios_config'

const uploadUrl = 'http://localhost:8081/file/upload'
export default uploadUrl

export function download(fileHash) {
  return request({
    url: '/file/download/' + fileHash,
    method: 'get',
    responseType: 'blob',
    timeout: 0,
  })
}

export function updateFile(data) {
  return request({
    url: '/file/update',
    method: 'put',
    data: data
  })
}

