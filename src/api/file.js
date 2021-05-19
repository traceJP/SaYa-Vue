import request, {baseURL} from '@/api/base/axios_config'

const uploadUrl = baseURL + '/file/upload'
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

export function deleteFile(hash) {
  return request({
    url: '/file/delete',
    method: 'delete',
    params: {
      hash: hash,
    },
  })
}

