
import axios from "axios";
export default {
  state: {
    venueDetails: [],
    modal_data: {
      venue: {
        name: null,
        location:{
          address:null,
          city:null,
          state:null,
          country:null,
          lat:null,
          lng:null,
        }
      }
    }
  },

  mutations: {
    set_venue_details(state, response){
        state.venueDetails = response
    },
    set_modal_data(state, payload)
    {
      state.modal_data = payload
    }
  },

  actions: {

    async getVenue({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.get(`venue`, {params: payload})
            .then(response => {
                commit('set_venue_details', response)
                resolve(response.data)
            })
            .catch(error => {
                reject(error.response)
            })
        })
    },
    async modal_data_change({commit}, payload) {
      commit('set_modal_data', payload)
    }
  },

  getters: {
    get_venue_details: state => state.venueDetails,
    get_modal_data   : state => state.modal_data,
  }

}
