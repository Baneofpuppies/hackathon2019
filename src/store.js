import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: null,
    userToken: null

  },
  getters: {
    isAuthenticated: function (state) {
      return state.userToken
    }
  },
  mutations: {

  },
  actions: {

  }
})
