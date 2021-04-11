<template>
  <div>
    <b-card  class="mb-2">
        <div class="image-container">
            <div class="image-title">
                {{title}}
                <div class="title-description">
               {{location_address}} <br>
               has the top {{venue_count}} places that you should visit. 
                <br>
               <b-button @click="redirect_url" class="btn-read-more" v-b-toggle="'collapse-'+title"> <b-icon icon="geo-alt-fill" scale="0.8"></b-icon> Read more</b-button>
                </div>
            </div>
            <img :src="'images/'+image_file+'.jpg'" alt="Location Image" class="card-image" v-b-toggle="'collapse-'+title" @click="redirect_url"/> 
        </div>
        
       
    </b-card>
     <b-collapse :id="'collapse-'+title" class="mt-2">
        <div class="top-places" v-for="places in location_data" :key="places.referralId">
            <a class="near-place-link" v-b-modal.modal-1 @click="modal_data_change(places)"><b-icon icon="geo-alt-fill" scale="0.8"></b-icon> {{places.venue.name}}</a>
        </div>
    </b-collapse>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Cards",
  props: {
      image_file : String,
      title: String,
      id: String,
  },
  data(){
        return {
            location_address : null,
            venue_count : 0, 
            location_data : [],
            active_place : [],
            location_info: [],
        }
  },
  computed:{
      ...mapGetters([''])
  },
  mounted(){
    this.sync_latest_venue_details()
  },
  methods: {

    redirect_url(){
        window.location.href='#'+this.id
    },

    sync_latest_venue_details(){
        this.$store.dispatch('getVenue', {location: this.id})
        .then(response=>{
            // console.log(response)
            this.location_info = response
            this.location_address = response.response.geocode.displayString
            this.venue_count = response.response.groups[0].items.length
            this.location_data = response.response.groups[0].items
        })
    },

    modal_data_change(data){

        this.$store.dispatch('modal_data_change', data)
        .finally(()=>{
            this.sync_latest_weather_details(data)
        })
    },

    sync_latest_weather_details(data){
            let params = {
                lat: data.venue.location.lat,
                lng: data.venue.location.lng,
            }
            this.$store.dispatch('getWeather',params )
            .then(response => {
                console.log(response)
            })
        }
  }
};
</script>

<style scoped>
.card-image {
    width:100%;
    height: 300px;
}
.card-body {
    padding: 0px;
    transition: 1s ease-in-out;
}
.image-title {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.426);
    color: rgb(240, 238, 238);
    width: 100%;
    font-size: xx-large;
    text-align: center;
    padding: 20px;
}
.title-description  {
    font-size: small;
    color: rgb(175, 175, 175);
}
.title-description .btn-read-more {
    font-size: small;
    background-color: #327be9ee;
    border-color: unset;
    border: none;
    box-shadow: 0 0 3px rgb(206, 206, 206);
    margin-top:5px;
    color: rgb(240, 238, 238);
    padding: 5px;
}
.top-places {
    font-size: small
}

.near-place-link {
    color: rgb(75, 73, 89);
}
.near-place-link:hover {
    text-decoration: underline;
}
</style>