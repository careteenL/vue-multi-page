import Vue from 'vue'
import Router from 'vue-router'

import LoupanRank from 'components/loupan-rank/loupan-rank.vue'
import loupanRankHelp from 'components/loupan-rank-help/loupan-rank-help.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/index',
            /**
             *
             * @desc APP第一次发版（2.6）但index页数据为空，为了AppStore审核通过，重定向到介绍页。
             *       等APP发版通过后（2.8），去掉重定向逻辑。
             */
            // redirect: '/help',
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
