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
