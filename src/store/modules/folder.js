import {get, list} from "@/api/folder";

const folder = {

  state: {
    // 当前哈希
    folderHash: '',
    // 文件信息栈
    folderStack: [],
    // 当前文件夹内容
    folderContent: '',
  },

  mutations: {
    setFolderHash(state, hash) {
      state.folderHash = hash
    },
  },

  actions: {
    // 通过当前哈希获取文件所有内容
    listContent({state}) {
      list(state.folderHash).then((response) => state.folderContent = response)
    },
    // 获取当前文件信息直到root目录
    getUntilRoot({state, dispatch}) {
      let oldStack = state.folderStack
      // 从后往前遍历
      for (let i = oldStack.length - 1; i >= 0; i--) {
        if (oldStack[i].folderHash === state.folderHash) {
          return
        } else {
          oldStack.pop()
        }
      }
      dispatch('recursionToRoot', state.folderHash)
    },
    recursionToRoot({state, dispatch}, hash) {
      get(hash).then((response) => {
        if (response.folderRoot === '0') {
          // 入栈并递归父节点
          state.folderStack.unshift(response)
          dispatch('recursionToRoot', response.folderParentHash)
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
      return state.folderContent
    },
  },

}

export default folder
