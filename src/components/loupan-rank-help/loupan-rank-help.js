import CommonHeader from 'components/common-header/common-header.vue'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import $$util from 'util'

require('swiper/dist/css/swiper.css')

export default {
    name: 'loupan-rank-help',
    data () {
        return {
            helpList: [
                {
                    'lable': '什么样的经纪人才有楼盘排名',
                    'info': '甲方销售类型的经纪公司旗下的经纪人才有楼盘排名，可咨询运营人员如何申请成为甲方销售类型的经纪公司。'
                }, {
                    'lable': '楼盘排名有什么好处',
                    'info': '较高的楼盘排名可以帮助您：<br/>' +
                            '- 获得更多的IM咨询<br/>' +
                            '- 获得更多400转接电话<br/>' +
                            '- 更多经纪人信息曝光等'
                }, {
                    'lable': '如何提高楼盘排名',
                    'info': '提升楼盘排名需要您在平时多进行楼盘相关操作，比如：<br/>' +
                            '- 发布楼盘资讯<br/>' +
                            '- 发布楼盘销售动态<br/>' +
                            '- 发布相关的直播<br/>' +
                            '- 尽可能多的分享楼盘信息等<br/><br/>' +

                            '楼盘排名提升同时需要您提升自己的服务态度和服务能力，比如：<br/>' +
                            '- 尽可能快的响应IM会话及400转接电话<br/>' +
                            '- 认真耐心解答用户提问等<br/>'
                }
            ],
            showSwiper: false,
            swiperOption: {
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，
                // 组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，
                // 假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                // autoplay: 3000,
                // direction : 'vertical',
                effect: "flip",
                grabCursor : true,
                loop: true,
                setWrapperSize: true,
                // autoHeight: true,
                // paginationType:"bullets",
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                // paginationClickable: true,
                // prevButton:'.swiper-button-prev',
                // nextButton:'.swiper-button-next',
                // scrollbar:'.swiper-scrollbar',
                //mousewheelControl : true,
                observeParents:true
            }

        }
    },
    components: {
        'common-header': CommonHeader,
        swiper,
        swiperSlide
    },
    beforeMount () {
        document.body.style.backgroundColor = '#fff';
        document.querySelector('#app').style.backgroundColor = '#fff';
    },
    methods: {
        toggleMore (flag) {
            this.showSwiper = !this.showSwiper;
            flag ? $$util.lockScreen() : $$util.unLockScreen();

        }
    }
}
