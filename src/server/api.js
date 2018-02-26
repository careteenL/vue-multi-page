import ajax from './fetch.js'
import config from 'config'

let model = {};

/**
 *
 * @desc test
 *       wiki：xxx
 */
model.xxx = function (cb) {
    ajax({
        url: 'xxx',
        type: 'GET',
        withCredentials: true,
        success: function (res) {
            cb && cb(res);
        }
    });
}

export default model;
