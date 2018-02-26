import CommonHeader from 'components/common-header/common-header.vue'
import $$util from 'util'

export default {
    name: 'my-score-help',
    data () {
        return {
            type: '',
            title: '',
            showList: [],
            helpList: [
                {
                    'lable': '什么是积分',
                    'info': '积分是焦点卖房APP针对用户发布直播、动态、资讯等行为的奖励，积分仅可在焦点卖房APP内使用，可进行线索购买。'
                }, {
                    'lable': '如何获得积分',
                    'info': '积分可通过提高自身活跃度及贡献更多优质内容获得：<br/>' +
                            '- 每日登录APP可获5积分（每日1次）。<br/>' +
                            '<p style="padding-left: 10px; text-indent: -10px">- 发布已绑定楼盘的资讯并通过审核可获75积分（每日2次）；发布未绑定楼盘的资讯并通过审核可获50积分。</p>' +
                            '<p style="padding-left: 10px; text-indent: -10px">- 发布绑定自身楼盘的直播（时长需超过10分钟）并通过审核可获得75积分（每日2次）。</p>' +
                            '<p style="padding-left: 10px; text-indent: 26px">发布未绑定自身楼盘的直播（时长需超过10分钟）并通过审核可获得50积分（每日2次）。</p>' +
                            '<p style="padding-left: 10px; text-indent: 26px">每场有效直播的观看人次超过20人，可额外获得25积分。</p>' +
                            '<p style="padding-left: 10px; text-indent: 26px">每场有效直播的独立评论数超过20，可额外获得25积分。</p>' +
                            '- 发布楼盘销售动态可获25积分（每日2次）。'
                }, {
                    'lable': '积分用来做什么',
                    'info': '- 积分可在精准潜客页购买线索。<br/>' +
                            '- 每一通绑定楼盘的400电话转接会消耗35积分。<br/>' +
                            '- 当积分为负时，仍可以接听400转接电话，但是不能继续购买线索。'
                }
            ],
            accurateGuestList: [
                {
                    'lable': '如何获取精准潜客',
                    'info': '用户可在焦点卖房APP首页获取精准潜客。'
                }
            ],
            liveList: [
                {
                    'lable': '如何发布楼盘直播',
                    'info': '- 用户需要下载焦点看房APP。<br/>' +
                            '- 通过手机号登录焦点看房APP，即可发布楼盘直播。'
                }
            ],
            dynamicList: [
                {
                    'lable': '如何发布楼盘销售动态',
                    'info': '用户可在焦点卖房APP首页发布楼盘销售动态。'
                }
            ],
            counselList: [
                {
                    'lable': '如何发布楼盘资讯',
                    'info': '- 用户需要登录搜狐焦点开放平台：<br/>' +
                            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; https://mp.focus.cn<br/>' +
                            '- 通过手机号登录开放平台，点击【资讯管理】，即可发布资讯。'
                }
            ]
        }
    },
    components: {
        'common-header': CommonHeader
    },
    beforeMount () {
        document.body.style.backgroundColor = '#fff';
        document.querySelector('#app').style.backgroundColor = '#fff';

        let params = this.$route.params;
        this.type = params.type ? params.type : '';
        switch (this.type) {
            case 'help':
                this.title = '了解积分';
                this.showList = this.helpList;
                break;
            case 'accurate_guest':
                this.title = '精准潜客';
                this.showList = this.accurateGuestList;
                break;
            case 'live':
                this.title = '发布楼盘直播';
                this.showList = this.liveList;
                break;
            case 'dynamic':
                this.title = '发布楼盘销售动态';
                this.showList = this.dynamicList;
                break;
            case 'counsel':
                this.title = '发布楼盘资讯';
                this.showList = this.counselList;
                break;
            default:
                this.title = '';
                this.showList = [];

        }
    },
    methods: {
        goBack () {
            window.location.href = 'https://jingjiren.focus.cn/backtoapp';

            // if ($$util.isFocusApp()) {
            //     window.location.href = 'https://jingjiren.focus.cn/backtoapp';
            // } else {
            //     this.$router.push({
            //         name: 'index'
            //     })
            // }
        }
    }
}
