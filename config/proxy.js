var path = require('path')

var map = {
    "/api/v1": "http://u.focus-test.cn/api/v1"

};

var proxyTable = {};
for (var url in map) {
    if (map.hasOwnProperty(url)) {
        proxyTable[url] = {
            target: map[url],
            changeOrigin: true,
            pathRewrite: {
                ['^' + url]: ''
            },
            cookieDomainRewrite: {
                // "*": "127.0.0.1"
                "*": "10.0.121.169"
            }
        }
    }
}

module.exports = proxyTable
