import CommonHeader from 'components/common-header/common-header.vue'
import CommonLoading from 'components/common-loading/common-loading.vue'
import CommonEmpty from 'components/common-empty/common-empty.vue'

import $$rankModel from 'server/myLoupanRank.js'

import $$util from 'util'

export default {
    name: 'my-score',
    data () {
        return {
            isEmpty: false,
            loading: true,
            rankList: []
        }
    },
    components: {
        'common-header': CommonHeader,
        'common-loading': CommonLoading,
        'common-empty': CommonEmpty
    },
    beforeMount () {
        document.body.style.backgroundColor = '#f8f8fb';
        document.querySelector('#app').style.backgroundColor = '#f8f8fb';
        // 回到顶部
        setTimeout(function() {
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            scrollBy(0,-top);
        }, 0)
        this.getData();
    },
    methods: {
        getData () {
            $$rankModel.getMyLoupanRank((res) => {
                this.loading = false;
                if (200 === res.code) {
                    if (res.data && res.data.length === 0) {
                        this.isEmpty = true;
                    } else {
                        this.rankList = res.data;
                    }
                } else {
                    this.toast({
                        tip: res.msg
                    });
                }
            });
        },
        goBack () {
            /**
            * @desc ！！！在FocusApp 中 回退 唤起 app的页面
            *       App 有对 url 做拦截即可跳转到App指定页面 ，前提是和App同学协商好统一的 url 。
            *       wiki地址：http://wiki.ops.focus.cn/pages/viewpage.action?pageId=9509294
            */
            window.location.href = 'https://jingjiren.focus.cn/backtoapp';
            // if ($$util.isFocusApp()) {
            //     window.location.href = 'https://jingjiren.focus.cn/backtoapp';
            // } else {
            //     window.history.go(-1);
            // }
        },
        tipHandle () {
            this.$router.push({
                name: 'help',
            })
        }
    }
}
