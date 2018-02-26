import CommonHeader from 'components/common-header/common-header.vue'

import CommonLoading from 'components/common-loading/common-loading.vue'
import CommonLoadMore from 'components/common-load-more/common-load-more.vue'
import CommonEmpty from 'components/common-empty/common-empty.vue'

import $$myScoreModel from 'server/myScore'
import $$util from 'util'

export default {
    name: 'my-score-record',
    data () {
        return {
            headerFixed: true,

            loading: true,
            hasNextPage: true,
            loadingstatus: false,
            unLoadMore: true,
            isEmpty: false,

            searchDate: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1
            },
            searchParams: {
                pageNum: 1,
                pageSize: 10,
                month: ''
            },
            monthCount: {},
            scoreList: []

        }
    },
    components: {
        'common-header': CommonHeader,
        'common-load-more': CommonLoadMore,
        'common-empty': CommonEmpty,
        'common-loading': CommonLoading
    },
    beforeMount () {
        document.body.style.backgroundColor = '#fff';
        document.querySelector('#app').style.backgroundColor = '#fff';

        this.getData();
    },
    mounted () {
        // window.addEventListener('scroll', this.scrollHandler);
    },
    methods: {
        // 处理接口返回数据
        dealData (month, scoreList, monthCount) {
            // console.log(month);
            var outerYear = +month.split('-')[0];
            var outerMonth = +month.split('-')[1];
            // 将 积分记录 加到 对应 月份中
            scoreList.forEach((item, index) => {

                var innerYear = (new Date(item.createTime)).getFullYear();
                var innerMonth = (new Date(item.createTime)).getMonth() + 1;

                // 年、月份 一样，则将本条记录加入其中的 list
                if (outerYear === innerYear && outerMonth === innerMonth) {

                    monthCount[month].list.push({
                        createTimeStr: $$util.dateFormat(item.createTime, 'yyyy-MM-dd hh:mm'),
                        score: item.score,
                        sourceDesc: item.sourceDesc
                    })
                }
            });
        },
        // 获取所有积分记录
        getData (preParams) {
            // preParams 为时间选择组件携带参数
            this.loadingstatus = true;
            this.isEmpty = false;
            // sb后端不处理数据
            $$myScoreModel.getMyScoreDetail(this.searchParams, (res) => {

                this.loading = false;
                if (200 === res.code) {

                    this.scoreList = res.data.pageInfo.list;

                    if (this.scoreList && this.scoreList.length <= 0) {
                        // 所有积分记录为空时，展示打底图；某个月积分记录为空时，弹窗提示
                        if (this.searchParams.month === '') {
                            this.isEmpty = true;
                        } else {
                            // 为空时 显示上一次的时间和结果
                            if (preParams) {
                                this.searchDate.year = preParams.date_year;
                                this.searchDate.month = preParams.date_month;
                                this.searchParams.pageNum = preParams.pageNum;
                                this.searchParams.month = preParams.month;
                            }
                            this.loadingstatus = false;
                            this.$dialog({
                                tpl: '所选月份暂无积分数据',
                                btns: ['确定'],
                                events: [
                                    function(context){
                                        context.close();
                                    }
                                ]
                            });
                        }
                        return;
                    }

                    this.monthCount = res.data.monthCount;
                    // 将 scoreList 放置到 monthCount 大对象中 ，方便模板遍历
                    for (var month in this.monthCount) {
                        if (this.monthCount.hasOwnProperty(month)) {
                            this.monthCount[month].list = [];
                            this.dealData(month, this.scoreList, this.monthCount);
                        }
                    }
                    // 当前页码
                    this.hasNextPage = res.data.pageInfo.hasNextPage;
                    this.searchParams.pageNum = +res.data.pageInfo.pageNum + 1;
                }else {
                    this.$toast({
                        tip: res.msg
                    })
                }
                this.loadingstatus = false;
            });
        },
        // 分页
        loadmore (cb) {
            let _this = this;
            // 没有下一页时 return
            if (!_this.hasNextPage) {
                return;
            }
            // 正在加载中 return
            if (_this.loadingstatus) {
                return;
            }
            // 状态 置为正在加载中...
            _this.loadingstatus = true;

            // 分页接口
            $$myScoreModel.loadMoreScore(_this.searchParams, (res) => {
                if (200 === res.code) {

                    // 将分页的数据 合并
                    for (var month in res.data.monthCount) {
                        if (res.data.monthCount.hasOwnProperty(month)) {
                            // 处理不同月份
                            if (_this.monthCount[month] && _this.monthCount[month].list) {
                                _this.dealData(month, res.data.pageInfo.list, this.monthCount);
                            }else {
                                _this.monthCount[month] = {};
                                _this.monthCount[month].cost = res.data.monthCount[month].cost;
                                _this.monthCount[month].get = res.data.monthCount[month].get;
                                _this.monthCount[month].list = [];
                                _this.dealData(month, res.data.pageInfo.list, this.monthCount);
                            }

                        }
                    }
                    // 当前页码
                    this.hasNextPage = res.data.pageInfo.hasNextPage;
                    this.searchParams.pageNum = +res.data.pageInfo.pageNum + 1;
                    // 加载完成
                    _this.unLoadMore = false;
                    _this.loadingstatus = false;
                    // 是否还存在下一页
                    if (!_this.hasNextPage) {
                        cb();
                    }
                } else {
                    this.$toast({
                        tip: res.msg
                    })
                }
            });
        },
        // 获取指定月份积分记录
        tipHandle () {
            var _this = this;
            _this.$datePicker({
                select: [+_this.searchDate.year, +_this.searchDate.month],
                line: 5,
                needDay: false,
                showMiddleBtn: true,
                middleTxt: '清空',
                onSelect(val, ids, names, instance) {
                    // 记录选择之前的月份 ，若当前选择没有数据，则展示之前选择的月份的数据
                    let preParams = {
                        date_year: _this.searchDate.year,
                        date_month: _this.searchDate.month,
                        pageNum: _this.searchParams.pageNum,
                        month: _this.searchParams.month
                    };
                    _this.searchDate.year = +val[0].id;
                    _this.searchDate.month = +val[1].id;

                    // 重置 页码参数
                    _this.searchParams.pageNum = 1;
                    _this.searchParams.month = (val[0].id + '-') +
                        ((+val[1].id) < 10 ?
                            ('0' + val[1].id) :
                            ('' + val[1].id));
                    _this.unLoadMore = true;
                    // _this.isEmpty = false;
                    _this.loading = true;

                    _this.getData(preParams);

                    instance.close();
                },
                onMiddleFn(val, ids, names, instance) {
                    // 重置 页码参数
                    _this.searchParams.pageNum = 1;
                    _this.searchParams.month = '';
                    _this.unLoadMore = true;
                    // _this.isEmpty = false;
                    _this.loading = true;

                    _this.searchDate.year = new Date().getFullYear();
                    _this.searchDate.month = new Date().getMonth() + 1;

                    _this.getData();

                    instance.close();
                }
            })
        },
        scrollHandler () {
            let mTop = document.querySelector('.record-month-header').getBoundingClientRect().top;
            // console.log(mTop);
            if (mTop <= 0) {
                this.headerFixed = true;
            }
        }
    },
    filters: {
        formatDate (str) {
            let showStr = str.split('-')[0] + '年' + +(str.split('-')[1]) + '月';
            if (+str.split('-')[0] === new Date().getFullYear() &&
                +(str.split('-')[1]) === new Date().getMonth() + 1) {
                showStr = '本月';
            }
            return showStr;
        },
        absScore (str) {
            return Math.abs(+str);
        },
        itemScore (str) {
            let showStr;
            if (+str < 0) {
                showStr = '- ' + Math.abs(+str);
            } else {
                showStr = '+ ' + str;
            }
            return showStr;
        }
    }
}
