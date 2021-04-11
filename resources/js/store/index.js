import Vue from 'vue'
import Vuex from 'vuex'
import FourSquare from './foursquare'
import OpenWeather from './openweather'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    FourSquare,
    OpenWeather
  }
})
