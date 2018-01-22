import Vue from 'vue'
import Router from 'vue-router'

import LoupanRank from 'components/loupan-rank/loupan-rank.vue'
import loupanRankHelp from 'components/loupan-rank-help/loupan-rank-help.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/index',
            name: 'index',
            component: LoupanRank
        },
        {
            path: '/help',
            name: 'help',
            component: loupanRankHelp
        }
    ]
})
