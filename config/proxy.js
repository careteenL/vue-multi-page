var path = require('path')

var mutilPageConf = require('./mutil-page-config.js')

var map = mutilPageConf.proxyTable;

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
                // "*": "10.0.121.169"
                "*": mutilPageConf.url
            }
        }
    }
}

module.exports = proxyTable
