<template>
    <b-container>
        <div class="banner">
            <b-row>
                <b-col sm="12" md="12" lg="6" class="mb-5">
                    <img src="images/banner.svg" alt="Banner Image" class="banner-image">
                </b-col>
                 <b-col sm="12" md="12" lg="6" class="text-center">
                     <div class="banner-title">
                        TOURIST <br> WEATHER APP
                         <!-- <img src="images/banner2.svg" alt="Banner Image" class="banner-image-2"> -->
                     </div>
                    <div class="blue-line"></div>
                    <div class="subtext">
                        Get the latest information of different JAPAN  tourist places in just one tap.
                         Weather? Location? Place Information? we got it all here. 
                    </div>
                </b-col>
            </b-row>
        </div>
        <b-row>
            <b-col sm="12" md="6" lg="4"><Card id="tokyo" image_file="tokyo" title="Tokyo" @click.native="sync_latest_venue_details('tokyo')"/></b-col>
            <b-col sm="12" md="6" lg="4"><Card id="yokohama" image_file="yokohama" title="Yokohama" @click.native="sync_latest_venue_details('yokohama')"/></b-col>
            <b-col sm="12" md="6" lg="4"><Card id="kyoto" image_file="kyoto" title="Kyoto" @click.native="sync_latest_venue_details('kyoto')"/></b-col>
            <b-col sm="12" md="6" lg="4"><Card id="osaka" image_file="osaka" title="Osaka" @click.native="sync_latest_venue_details('osaka')"/></b-col>
            <b-col sm="12" md="6" lg="4"><Card id="sapporo" image_file="sapporo" title="Sapporo" @click.native="sync_latest_venue_details('sapporo')"/></b-col>
            <b-col sm="12" md="6" lg="4"><Card id="nagoya" image_file="nagoya" title="Nagoya" @click.native="sync_latest_venue_details('nagoya')"/></b-col>
        </b-row>
        <Modal></Modal>
    </b-container>
</template>

<script>
import Card from '../components/cards'
import Modal from '../components/modal'
import {mapGetters} from 'vuex'
export default {
    name: "App",
    components: {
        Card,
        Modal
    },
    methods: {
        sync_latest_venue_details(location){
            console.log(location)
            this.$store.dispatch('getVenue', location)
            .then(response=>{
                // console.log(response)
            })
        },
       
    },
    computed: {
        ...mapGetters(['get_venue_details'])
    }
}
</script>

<style scoped>


    .banner {
        margin-bottom: 50px;
        margin-top: 50px;
    }

    .banner-image {
        width: 100%;
        height: 400px;
    }

    .banner-image-2 {
        width: 80%;
        height: 100px;
        position: absolute;
        left: 20%;
        top: -2%;
    }

    .banner-title {
        font-size: 50px;
        font-family: 'Montserrat-Regular';
        color: rgb(75, 73, 89);
        text-align: left;
        line-height: 50px;
    }

    .blue-line
    {
        border-bottom: 3px solid #1459c2ee;
        width: 0%;
        margin: 0 auto;
        animation: blueLine 1s;
        animation-fill-mode: forwards;
    }

    .subtext {
        padding-top: 15px;
        color: rgb(98, 98, 99);
        text-align: left;
        line-height: 18px;
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