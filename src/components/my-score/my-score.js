import CommonHeader from 'components/common-header/common-header.vue'
import CommonLoading from 'components/common-loading/common-loading.vue'

import $$myScoreModel from 'server/myScore.js'

import $$util from 'util'

export default {
    name: 'my-score',
    data () {
        return {
            loading: true,
            score: 0,
            scoreObj: {
                '积分使用': [
                    {
                        img: 'jingzhunqianke',
                        descTop: '精准潜客',
                        descBottom: '为您匹配精准线索',
                        link: 'accurate_guest'
                    }
                ],
                '积分获取': [
                    {
                        img: 'fabuzhibo',
                        descTop: '发布楼盘直播',
                        descBottom: '发布有效时长超过10分钟的直播最多可获150积分',
                        link: 'live'
                    },
                    {
                        img: 'fabudongtai',
                        descTop: '发布楼盘销售动态',
                        descBottom: '发布一条高质量的销售动态可获50积分',
                        link: 'dynamic'
                    },
                    {
                        img: 'fabuzixun',
                        descTop: '发布楼盘资讯',
                        descBottom: '发布一条高质量的楼盘资讯可获75积分',
                        link: 'counsel'
                    }
                ]

            }
        }
    },
    components: {
        'common-header': CommonHeader,
        'common-loading': CommonLoading
    },
    beforeMount () {
        document.body.style.backgroundColor = '#f8f8fb';
        document.querySelector('#app').style.backgroundColor = '#f8f8fb';
        this.getData();
    },
    methods: {
        getData () {

            $$myScoreModel.getMyScoreCur((res) => {
                this.loading = false;
                if (res.code === 200) {
                    this.score = res.data.score;
                }else {
                    this.$toast({
                        tip: res.data.msg
                    });
                }
            })

        },
        goBack () {
            /**
             * @desc ！！！在FocusApp 中 回退 唤起 app的页面
             *       App 有对 url 做拦截即可跳转到App指定页面 ，前提是和App同学协商好统一的 url 。
             *       wiki地址：http://wiki.ops.focus.cn/pages/viewpage.action?pageId=9509294
             */
            window.location.href = 'https://jingjiren.focus.cn/backtoapp';
            // if ($$util.isFocusApp()) {
            //
            // } else {
            //     window.history.go(-1);
            // }
        },
        goLink (link) {
            this.$router.push({
                name: 'help',
                params: {
                    type: link
                }
            })
        },
        tipHandle () {
            this.$router.push({
                name: 'help',
                params: {
                    type: 'help'
                }
            })
        },
        goScoreRecord () {
            this.$router.push({
                name: 'record'
            })
        }
    }
}
