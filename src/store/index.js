import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import viewPage from './modules/viewPage'

const store = new Vuex.Store({
  modules: {
    viewPage
  },
  strict: false
})

export default store
