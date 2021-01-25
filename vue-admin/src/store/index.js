import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status:0,
  },
  mutations: {
    "LOGIN":function(state,payload){
      // console.log(state,payload);
      state.status = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
