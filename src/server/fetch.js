import axios from 'axios'

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
