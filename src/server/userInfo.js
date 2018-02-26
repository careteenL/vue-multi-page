import ajax from './fetch.js'
import config from 'config'

let model = {};

/**
 *
 * @desc 获取用户登录信息
 *       wiki：http://wiki.ops.focus.cn/pages/viewpage.action?pageId=7374223
 */
model.getUserInfo = function (cb) {
    ajax({
        url: config.brokerAppDomain + '/broker/getBrokerInfo',
        type: 'GET',
        withCredentials: true,
        success: function (res) {
            cb && cb(res);
        }
    });
}

export default model;
