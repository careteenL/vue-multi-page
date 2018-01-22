import Vue from 'vue'
import router from './router/router.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

require('commonUi/normalize.scss')

new Vue({
    el: '#app',
    router
})
