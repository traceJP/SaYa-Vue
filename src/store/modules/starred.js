import local from "@/store/local"
import {listByStar} from "@/api/folder";

const starred = {

  state: {},

  mutations: {},

  actions: {
    listByStar({commit}) {
      listByStar(local.getOrder()).then(response => commit('setFolderContent', response.data))
    },
  },

  getters: {},

}

export default starred
