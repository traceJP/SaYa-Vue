import Vue from "vue"
import Vuex from 'vuex'
import drive from "@/store/modules/drive"
import folder from "@/store/modules/folder"

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {},

  mutations: {},

  actions: {},

  getters: {},

  modules: {
    drive: drive,
    folder: folder,
  },

})

export default store
