import axios from 'axios'

/**
 *
 * @desc 封装axios，减少学习成本，参数基本跟jq ajax一致
 * @param {String} type [default: GET]                     请求的类型
 * @param {String} url			                           请求地址
 * @param {String} time  [default: 10s]			           超时时间
 * @param {Object} data		               	               请求参数
 * @param {Boolean} withCredentials  [default: false]	   是否携带cookie
 * @param {String} dataType         		               预期服务器返回的数据类型，xml html json ...
 * @param {Object} headers          		               自定义请求headers
 * @param {Function} success            	               请求成功后，这里会有两个参数,服务器返回数据，返回状态，[data, res]
 * @param {Function} error		                           发送请求前
 * @return {Promise}
 */

let ajax = function (config) {
    let configs = config || {};
    if (!configs.url) {
        console.error('请填写接口地址');
        return false;
    }
    axios({
        method: configs.type || 'get',
        url: configs.url,
        params: configs.data || {},
        header: configs.headers || {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        // baseURL: '',
        withCredentials: configs.withCredentials || false,
        timeout: configs.time || 10 * 1000,
        responseType: configs.dataType || 'json'
    }).then(function(res) {
        if (200 == res.status) {
            if (configs.success) {
                configs.success(res.data, res);
            }
        } else {
            if (data.error) {
                configs.error(error)
            } else {
                console.error('[timeout] 访问人数过多，请稍后重试');
            }
        }
    }).catch(function(error) {
        console.error(error);
        if (configs.error) {
            configs.error(error);
        } else {
            console.error('[timeout] 访问人数过多，请稍后重试');
        }
    });

}
export default ajax;
