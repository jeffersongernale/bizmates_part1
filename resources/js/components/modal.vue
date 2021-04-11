<template>
<div>
    <b-modal id="modal-1" hide-footer hide-header size="lg">
    <div class="modal-title" v-if="get_modal_data != undefined">{{get_modal_data.venue.name}}</div>
    <div class="blue-line"></div>
    <div class="subtext">
        <b-icon icon="geo-alt" scale="0.8"></b-icon> {{get_modal_data.venue.location.address}}, {{get_modal_data.venue.location.city}}, {{get_modal_data.venue.location.state}}
        , {{get_modal_data.venue.location.country}} <br>
        <b-icon icon="map" scale="0.8"></b-icon> <b>LATITUDE:</b> {{get_modal_data.venue.location.lat}} <br>
        <b-icon icon="map" scale="0.8"></b-icon> <b>LONGHITUDE:</b> {{get_modal_data.venue.location.lng}} <br>
        <b-icon icon="sun" scale="0.8"></b-icon> <b>SUNRISE:</b> {{Date(get_weather.city.sunrise)}} <br>
        <b-icon icon="sun" scale="0.8"></b-icon> <b>SUNSET:</b> {{Date(get_weather.city.sunset)}} <br>
        <b-icon icon="cloud" scale="0.8"></b-icon> <b>WEATHER:</b> {{get_weather.list[0].weather[0].description}} <br>
        <b-icon icon="cloud-check" scale="0.8"></b-icon> <b>WIND:</b> {{get_weather.list[0].wind.speed}} meter/sec,  {{get_weather.list[0].wind.deg}}º <br>
        
    </div>
    <iframe width="100%" height="400px"
    :src="'https://www.google.com/maps/embed/v1/view?key='+GOOGLE_API_KEY+'&center='+get_modal_data.venue.location.lat+
    ','+get_modal_data.venue.location.lng+'&maptype=roadmap&zoom=15'"></iframe>
  </b-modal>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Modal',
    computed:{
        ...mapGetters(['get_modal_data','get_weather'])
    },
    data(){
        return {
            GOOGLE_API_KEY: 'AIzaSyD8DgYAFI2aZpe4kIcFVZRrzEQdn8nXyQQ'
        }
    }
}
</script>

<style scoped>
    .modal-title{
        font-size: x-large;
        margin-bottom: 10px;
    }

    .blue-line
    {
        border-bottom: 3px solid #1459c2ee;
        width: 0%;
        animation: blueLine 1s;
        animation-fill-mode: forwards;
    }

    .subtext {
        padding-top: 15px;
        color: rgb(98, 98, 99);
        text-align: left;
        line-height: 18px;
        font-size: 13px;
    }

    @keyframes blueLine {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
</style>
