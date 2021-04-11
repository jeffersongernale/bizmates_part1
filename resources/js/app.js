require('./bootstrap');


import Vue from 'vue'
import axios from 'axios'
import App from './views/app'
import Navbar from './components/navbar'
import store from './store'
import PageFooter from './components/pageFooter'
import { BootstrapVue, IconsPlugin,BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

axios.defaults.baseURL = 'http://localhost/bizmates/public/api/';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)


const app = new Vue({
    el: '#app',
    store,
    components: { App, Navbar, PageFooter }
});
