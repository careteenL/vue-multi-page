import Vue from 'vue'
import Router from 'vue-router'

import xxx from 'components/xxx/xxx.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'xxx',
            component: xxx
        }
    ]
})
