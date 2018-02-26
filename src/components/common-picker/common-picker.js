require('lib/iscroll');

import $$util from 'util'

export default {
    name: 'picker',
    data: function () {
        return {
            closed: true,
            select: [],
            getData: [],
            data: [],
            result: [],
            scrolls: [],
            selects: [],
            showHackMask: false,  // hack
            showMiddleBtn: false, // 中间按钮 是否展示
            middleTxt: '保密',  // 中间按钮 文本
            needDistrict: false,
            height: 45, // 每行height
            line: 5 // 显示几行
        }
    },
    watch: {
        closed: function(newVal, oldVal) {
            !newVal ? $$util.lockScreen() : $$util.unLockScreen();
        }
    },
    computed: {
        columns() {
            return this.getData.length;
        },

        hackLine() {
            return parseInt((this.line - 1) / 2)
        }
    },

    methods: {

        close() {
            this.closed = true;
            setTimeout(() => {
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            }, 100);

        },

        init() {
            let that = this;
            that.getData.forEach((item, seq) => {

                this.selects[seq] = '';

                that.scrolls[seq] = new iScroll(`column-${seq}`, {
                    snap: "li",
                    vScrollbar: false,
                    onScrollEnd: function () {

                        let indexY = Math.ceil((this.y / 45) * (-1) + that.hackLine);

                        that.selects[seq] = indexY;

                        that.$set(that.selects, seq, indexY);

                        let curItem = that.data[seq][indexY];
                        that.result[seq] = curItem;

                        if (seq >= that.columns - 1) {
                            return
                        }

                        that.setData(seq + 1, {
                            id: curItem.id,
                            name: curItem.name
                        }).then(() => {
                            that.scrolls[seq + 1].refresh();

                            if (!this.load) {
                                // 设置第seq列默认值
                                that.setVal(seq + 1);
                                this.load = true;
                            } else {
                                that.scrolls[seq + 1].scrollTo(0, 0, 100, false); // 重置，回第一条
                            }

                        })

                    }
                });

            })
            //  设置第一列 默认值
            that.setVal(0)

        },

        // 根据select设置某列选中
        setVal(seq) {

            let valIndex = -1;

            if (this.select && this.select.length) {

                this.data[seq].map((item, index) => {
                    if (this.select[seq] && item.id == this.select[seq]) {
                        valIndex = index;
                    }
                })
            }

            this.scrolls[seq].scrollTo(0, (valIndex - this.hackLine) * 45, 100, true);

        },
        // 确定
        getVal() {
            let ids = [], names = [];
            this.result.forEach((item, seq) => {
                ids.push(this.result[seq].id);
                names.push(this.result[seq].name);
            })
            // this.onSelect && this.onSelect(this.result, ids, names);
            this.onSelect && this.onSelect(this.result, ids, names, this);
        },

        // 设置UI数据
        setData(seq, options = {
            id: null,
            name: null
        }) {

            return new Promise((resolve) => {

                let getData = this.getData[seq](
                    options.id, options.name, this.result
                );

                // promise获取数据？
                if (getData.then) {
                    getData.then((val) => {

                        this.$set(this.data, seq, val)
                        this.hackData(this.data[seq]);
                        // 解决 滑动不顺畅
                        this.$nextTick(() => {
                            resolve()
                        })

                    });

                } else {

                    this.$set(this.data, seq, getData)

                    this.hackData(this.data[seq])
                    // 解决 滑动不顺畅
                    this.$nextTick(() => {
                        resolve()
                    })
                }

            })

        },

        // iscroll hack前后2条数据
        hackData(data) {
            for (let i = 0; i < this.hackLine; i++) {
                data.unshift({
                    id: `hack-${i}`,
                    name: '&nbsp;'
                })
            }
            for (let i = 0; i < this.line - this.hackLine - 1; i++) {
                data.push({
                    id: `hack-tail-${i}`,
                    name: '&nbsp;'
                })
            }

        },
        middleFn() {
            let ids = [], names = [];
            this.result.forEach((item, seq) => {
                ids.push(this.result[seq].id);
                names.push(this.result[seq].name);
            })
            this.onMiddleFn && this.onMiddleFn(this.result, ids, names, this);
        },

        destroyInstance() {
            !this.closed && this.close();
        },
        // 监听浏览器自带前进后退事件 -- destroy picker 实例
        onPopStateFn(){
            if(window.history && window.history.pushState) {
                window.addEventListener('popstate', this.destroyInstance, false);
            }
        },
        offPopStateFn() {
            if(window.history && window.history.pushState) {
                window.removeEventListener('popstate', this.destroyInstance, false);
            }
        },
        /**
         *
         * @desc 防止两个手指进行操作 年后优化
         */
        touchendHander (e) {
            // alert(e.touches.length)
            if (e.touches.length > 1) {
                this.showHackMask = true;
                setTimeout(() => {
                    this.showHackMask = false;
                }, 100);
                e.preventDefault();
            }
        }
    },

    mounted() {
        this.setData(0).then(() => {
            this.init();
        })
        this.onPopStateFn();

        // window.addEventListener('click', this.touchendHander, false);
        // window.addEventListener('touchstart', this.touchendHander, false);
        // window.addEventListener('touchmove', this.touchendHander, false);
        // window.addEventListener('touchend', this.touchendHander, false);
    },
    destroyed() {
        this.offPopStateFn();
    }
};
