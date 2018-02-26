import ajax from './fetch.js'
import config from 'config'

let model = {};

/**
 *
 * @desc 获取楼盘排名
 *       wiki：http://wiki.ops.focus.cn/pages/viewpage.action?pageId=9514143
 */
model.getMyLoupanRank = function (cb) {
    ajax({
        url: config.brokerDomain + '/broker/activeness/project/rank',
        type: 'GET',
        withCredentials: true,
        success: function (res) {
            cb && cb(res);
        }
    });
}

export default model;
