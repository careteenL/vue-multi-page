import CommonHeader from 'components/common-header/common-header.vue'
import CommonLoading from 'components/common-loading/common-loading.vue'

import $$myScoreModel from 'server/myScore.js'

export default {
    name: 'my-score',
    data () {
        return {
            loading: true,
            scoreObj: {},
            scoreObj2: {
                '积分使用': [
                    {
                        img: 'jingzhunqianke',
                        descTop: '精准潜客',
                        descBottom: '为您匹配精准线索',
                        link: '/jingzhunqianke'
                    }
                ],
                '积分获取': [
                    {
                        img: 'fabuzhibo',
                        descTop: '发布直播',
                        descBottom: '发布有效时长超过10分钟的直播最多可获150积分',
                        link: 'live'
                    },
                    {
                        img: 'fabudongtai',
                        descTop: '发布动态',
                        descBottom: '发布一条高质量的销售动态可获50积分',
                        link: 'dynamic'
                    },
                    {
                        img: 'fabuzixun',
                        descTop: '发布楼盘资讯',
                        descBottom: '发布一条高质量的销售动态可获50积分',
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
        document.body.style.backgroundColor = '#f8f8f8';
        document.querySelector('#app').style.backgroundColor = '#f8f8f8';
        this.getData();
    },
    methods: {
        getData () {
            var parmas = {};
            $$myScoreModel.getMyScoreRecord(parmas, (res) => {
                console.log(res);
            });

            setTimeout(() => {
                this.scoreObj = JSON.parse(JSON.stringify(this.scoreObj2));
                this.loading = false;
            }, 1000)
        },
        goBack () {
            console.log(1111);
            // window.location.history.go(-1);
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
