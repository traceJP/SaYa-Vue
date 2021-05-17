import Vue from "vue"
import Vuex from 'vuex'
import drive from "@/store/modules/drive"
import folder from "@/store/modules/folder"
import file from "@/store/modules/file"
import button from "@/store/modules/button"
import recyclebin from "@/store/modules/recyclebin"
import starred from "@/store/modules/starred"

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {},

  mutations: {},

  actions: {},

  getters: {},

  modules: {
    drive: drive,
    folder: folder,
    file: file,
    starred: starred,
    recyclebin: recyclebin,
    button: button,
  },

})

export default store
