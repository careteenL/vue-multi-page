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
var needDay = false;
var datePicker = function (options) {
    var dateOptions = {
        beginyear: 2017, //日期--年--份开始
        endyear: new Date().getFullYear(), //日期--年--份结束
    }
    needDay = options.needDay;
    return picker(Object.assign({
        getData: cbGetData(dateOptions, needDay)
    }, options));
};
export default datePicker;

const _util = {
    isRealArr(arr) {
        if (arr && arr.length) {

            for (let i = 0; i < arr.length; i++) {
                if (!!arr[i] && arr[i] !== '') {
                    return true;
                }
            }

            return false;
        }

        return false;
    }
}
function cbGetData(dateOptions, needDay) {
    let returnArr = [
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
            let curMonth = 12;
            // 当前年份只能展示到当前月份
            if (id === new Date().getFullYear()) {
                curMonth = new Date().getMonth() + 1;
            }
            for (var i = 1; i <= curMonth; i++) {
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

    if (needDay) {
        return returnArr;
    } else {
        return returnArr.slice(0, 2);
    }
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
