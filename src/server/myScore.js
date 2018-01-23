import ajax from './fetch.js'
import config from 'config'

let model = {};

// 获取积分记录
model.getMyScoreRecord = function (params, cb) {
    params = {
        cityId: 1,
        search: 'w'
    };
    ajax({
        url: config.brokerDomain + '/nameAndGroupList',
        type: 'GET',
        data: params,
        success: function (res) {
            console.log(res);
            cb && cb(res);
        }
    });
}

export default model;
