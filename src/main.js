import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'bootstrap';
import './assets/app.scss';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
 import Vuesax from 'vuesax'
 import 'vuesax/dist/vuesax.css'
window.axios = require('axios');
import Carousel3d from 'vue-carousel-3d';



Vue.use(Carousel3d);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.use(Vuesax)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  vuetify,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App),
}).$mount('#app')
