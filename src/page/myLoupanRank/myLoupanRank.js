import Vue from 'vue'
import router from './router/router.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import Toast from 'components/common-toast/index.js'

Vue.config.productionTip = false

Vue.prototype.$toast = Toast
Vue.use(VueAwesomeSwiper)

require('commonUi/normalize.scss')

new Vue({
    el: '#app',
    router
})
