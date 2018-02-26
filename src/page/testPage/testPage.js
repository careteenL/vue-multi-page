
import Vue from 'vue'
import router from './router/testPage.js'
Vue.config.productionTip = false

require('commonUi/normalize.scss')

new Vue({
    el: '#app',
    router
})

