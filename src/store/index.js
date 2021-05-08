import Vue from "vue"
import Vuex from 'vuex'
import drive from "@/store/modules/drive"
import folder from "@/store/modules/folder/folder"
import file from "@/store/modules/file"

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {},

  mutations: {},

  actions: {},

  getters: {},

  modules: {
    drive: drive,
    folder: folder,
    file: file
  },

})

export default store
