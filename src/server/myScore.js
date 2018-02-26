import ajax from './fetch.js'
import config from 'config'

let model = {};

/**
 *
 * @desc 获取积分余额
 *       wiki：http://wiki.ops.focus.cn/pages/viewpage.action?pageId=9514124
 */
model.getMyScoreCur = function (cb) {
    ajax({
        url: config.brokerDomain + '/broker/score/cur',
        type: 'GET',
        withCredentials: true,
        success: function (res) {
            cb && cb(res);
        }
    });
};

/**
 *
 * @desc 获取经纪人历史积分详情
 *       wiki：http://wiki.ops.focus.cn/pages/viewpage.action?pageId=9514203
 */
model.getMyScoreDetail = function (params, cb) {
    ajax({
        url: config.brokerDomain + '/broker/score/detail',
        type: 'GET',
        data: params,
        withCredentials: true,
        success: function (res) {
            cb && cb(res);
        }
    });
};

/**
 *
 * @desc 分页 获取经纪人历史积分详情
 *       wiki：http://wiki.ops.focus.cn/pages/viewpage.action?pageId=9514203
 */
model.loadMoreScore = function (params, cb) {
    ajax({
        url: config.brokerDomain + '/broker/score/detail',
        type: 'GET',
        data: params,
        withCredentials: true,
        success: function (res) {
            cb && cb(res);
        }
    });
};

export default model;
