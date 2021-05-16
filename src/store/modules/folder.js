import {get, listAll} from "@/api/folder"
import {formatCalculate} from "@/utils/baseUtils"
import local from "@/store/local"

const folder = {

  state: {
    // 当前哈希
    folderHash: '',
    // 文件信息栈
    folderStack: [],
    // 当前文件夹内容
    folderContent: [],
  },

  mutations: {
    setFolderHash(state, hash) {
      state.folderHash = hash
    },
    setFolderContent(state, data) {
      state.folderContent = data
    }
  },

  actions: {
    // 通过当前哈希获取文件所有内容
    listContent({state}) {
      const hash = {
        folderHash: state.folderHash,
      }
      const data = Object.assign(local.getOrder(), hash)
      listAll(data).then((response) => state.folderContent = response.data)
    },
    // 获取当前文件信息直到root目录
    getUntilRoot({state, dispatch}) {
      let oldStack = state.folderStack
      // 从后往前遍历
      for (let i = oldStack.length - 1; i >= 0; i--) {
        if (oldStack[i].hash === state.folderHash) {
          return
        } else {
          oldStack.pop()
        }
      }
      dispatch('recursionToRoot', state.folderHash)
    },
    recursionToRoot({state, dispatch}, hash) {
      get(hash).then((response) => {
        if (response.data.isRoot === '0') {
          // 入栈并递归父节点
          state.folderStack.unshift(response.data)
          dispatch('recursionToRoot', response.data.parentHash)
        }
      })
    },
  },

  getters: {
    getFolderHash(state) {
      return state.folderHash
    },
    getFolderNameByStack(state) {
      return state.folderStack
    },
    getFolderContent(state) {
      let content = state.folderContent
      for (let i = 0; i < content.length; i++) {
        content[i].gmtCreate = content[i].gmtCreate.replace('T', ' / ')
        content[i].gmtModified = content[i].gmtModified.replace('T', ' / ')
        if (content[i].size) {
          content[i].size = formatCalculate(content[i].size)
        }
      }
      return content
    },
  },

}

export default folder
