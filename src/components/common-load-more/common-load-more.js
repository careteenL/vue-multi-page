// 用于 普通分页
module.exports = {
    data () {
        return {
            // 0:下拉加载 1:加载中 2:没有更多
            status: 0
        }
    },
    props: {

        callback: {
            type: Function,
            default () {
                console.log('loading more...');
            }
        },
        hide: {
            type: Boolean,
            default: false
        },
        hasMore: {
            type: String,
            default: 'false'
        }
    },
    computed: {
        statusClass (val) {
            return this.status===1 ?
                'loading' :
                (this.status === 2 ? 'no-more' : '')
        },
        statusTxt (val) {
            return this.status===1 ?
                '加载中' :
                (this.status === 2 ? '没有啦': '滑动加载更多')
        }
    },

    watch: {
        hasMore (val) {
            if (!val || val === 'false') {
               this.status = 2;
            }
        }

    },
    beforeMount () {
        this.cb = this.cb.bind(this);
        window.addEventListener('scroll', this.cb);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.cb);
    },
    methods: {
        cb () {
            var _this = this;
            var scrollTop = window.scrollY || document.body.scrollTop,
                innerHeight = window.innerHeight ||  document.documentElement.clientHeight,
                scrollHeight = document.body.scrollHeight || document.body.offsetHeight;
            var hack = 0;

            let stop = (document.querySelector('.loading-wrapper').getBoundingClientRect().top);

            /* 华为、vivo底部带虚拟工具栏 sb */
            if (/huawei|vivo/ig.test(window.navigator.userAgent)) {
                hack = 70;
            }

            if ( _this.status !==2 && hack + scrollTop + innerHeight  >= scrollHeight) {
                // 触发加载数据
                _this.status = 1;
                _this.callback(function nomore() {
                    _this.status = 2;
                }.bind(_this));
            }
        }
    }

};
