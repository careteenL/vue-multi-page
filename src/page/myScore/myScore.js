import Vue from 'vue'

import router from './router/router.js'

import Picker from 'components/common-picker/index.js'
import DatePicker from 'components/common-picker-date/common-picker-date.js'

Vue.config.productionTip = false;

Vue.prototype.$picker = Picker;
Vue.prototype.$datePicker = DatePicker;

require('commonUi/normalize.scss')

new Vue({
    el: '#app',
    router
})

// new Vue({
//     router
// }).$mount('#app')
