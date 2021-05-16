import local from "@/store/local"
import {list} from "@/api/recyclebin";

const recyclebin = {

  state: {},

  mutations: {},

  actions: {
    listByRecyclebin({commit}) {
      list(local.getOrder()).then(response => commit('setFolderContent', response.data))
    },

  },

  getters: {},

}

export default recyclebin
