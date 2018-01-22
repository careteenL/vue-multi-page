/**
this.$datePicker({
    select: [1991, 1, 21],
    onSelect(val, ids, names, instance) {
        console.log(val, ids, names);
    },
    line: 5,
    showMiddleBtn: true,
    middleTxt: '保密',
    onMiddleFn(val, ids, names, instance) {
        console.log(val, ids, names);
    }
})
*/

import picker from '../common-picker/index.js';

var datePicker = function (options) {
    var dateOptions = {
        beginyear: 1970, //日期--年--份开始
        endyear: 2017, //日期--年--份结束
    }

    return picker(Object.assign({
        getData: cbGetData(dateOptions)
    }, options));
};
export default datePicker;

function cbGetData(dateOptions) {
    return [
        (id, name) => { // 异步数据用promise

            let tmp = [];
            for (var i = dateOptions.beginyear; i <= dateOptions.endyear; i++) {
                tmp.push({
                    id: i,
                    name: i + '年'
                })
            }
            return tmp
        }, (id, name) => {

            let tmp = [];
            for (var i = 1; i <= 12; i++) {
                tmp.push({
                    id: i,
                    name: i + '月'
                })
            }
            return tmp
        }, (id, name, val) => {

            let curYear = val[0].id;

            let tmp = [];
            for (var i = 1; i <= checkdays(curYear, id); i++) {
                tmp.push({
                    id: i,
                    name: i + '日'
                })
            }
            return tmp
        }
    ]
}

function checkdays(year, month) {
    var new_year = year; //取当前的年份
    var new_month = month++; //取下一个月的第一天，方便计算（最后一天不固定）
    if (month > 12) //如果当前大于12月，则年份转到下一年
    {
        new_month -= 12; //月份减
        new_year++; //年份增
    }
    var new_date = new Date(new_year, new_month, 1); //取当年当月中的第一天
    return (new Date(new_date.getTime() - 1000 * 60 * 60 * 24)).getDate(); //获取当月最后一天日期
}
