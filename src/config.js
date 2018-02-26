/**
 *
 * @desc 全局域名等变量维护
 */

var byProxy = false;
var mainDomain;

/* 本地开发走proxy */
if (/\d+\.\d+\.\d+\.\d+/.test(location.host)) {
    byProxy = true;
}
/* 测试线上等环境 */
if (!byProxy) {
    var hostArr = location.hostname.split('.');
    mainDomain = "." + hostArr[hostArr.length - 2] + '.' + hostArr[hostArr.length - 1];
}
module.exports = {
    mainDomain: byProxy ? "127.0.0.1" : mainDomain,

    testDomain: byProxy ? "" : "//test" + mainDomain
}
