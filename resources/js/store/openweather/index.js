
import axios from "axios";
export default {
  state: {
    weather_details: {
      city:{
        sunrise:null,
        sunset:null
      },
     
      list:[{
        wind:{
          speed:null,
          deg: null
        },
        weather:[{
          description: null
        }],
      }]
    }
  },

  mutations: {
    set_weather_details(state, response){
        state.weather_details = response
    }
  },

  actions: {

    async getWeather({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.get('weather', {params:payload})
            .then(response => {
                commit('set_weather_details', response.data)
                resolve(response.data)
            })
            .catch(error => {
                reject(error.response)
            })
        })
    }
  },

  getters: {
    get_weather: state => state.weather_details
  }

}
