import Vue from 'vue'
import Router from 'vue-router'

import Index from 'components/my-score/my-score.vue'
import ScoreHelp from 'components/my-score-help/my-score-help.vue'
import ScoreRecord from 'components/my-score-record/my-score-record.vue'

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
            // redirect: '/help/help',
            name: 'index',
            component: Index
        },
        {
            path: '/help/:type',
            name: 'help',
            component: ScoreHelp
        },
        {
            path: '/record',
            name: 'record',
            component: ScoreRecord
        }
    ]
})
