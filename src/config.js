/*
 ** 全局域名等变量维护
 ** 127.0.0.1  127.0.0.1  proxy
 ** focus-dev  .focus-dev || .focustest
 ** focus-dev  .focus-dev || .focustest
 ** focus  .focus
 */

var byProxy = false;
var mainDomain, oldMainDomain, loginUrl, loginDomain;

/* 本地开发走proxy */
if (/\d+\.\d+\.\d+\.\d+/.test(location.host)) {
    byProxy = true;
    //loginUrl = "//login.focus-dev.cn/login";
}
/* 测试线上等环境 */
if (!byProxy) {
    var hostArr = location.hostname.split('.');

    // 旧项目测试环境 .focustest  新项目.focus-dev||.focus-test等
    mainDomain = "." + hostArr[hostArr.length - 2] + '.' + hostArr[hostArr.length - 1];

    if (/(focus-(.*))/.test(location.host)) {
        oldMainDomain = ".focustest.cn";
        loginUrl = "//login" + mainDomain + "/login";

        var matched = /(focus-test\.cn|focus-dev\.cn)/.exec(
            location.host);
        if (matched && matched[0]) {
        } else { //比如feature走fe
            loginUrl = "//fe" + mainDomain + "/login";
            loginDomain = "//fe" + mainDomain;

        }
    } else {
        oldMainDomain = ".focus.cn";
        loginUrl = "//login.focus.cn/login";

    }

}

module.exports = {
    mainDomain: byProxy ? "127.0.0.1" : mainDomain,
    oldMainDomain: oldMainDomain,

    // 生态接口拼图规则
    PHOTO_DOMAIN: "https://t4.focus-img.cn",
    PHOTO_STYLE_L: "sh345x190sh",
    PHOTO_STYLE_LIVE: "sh373x373sh",

    /* 直播 */
    PHOTO_STYLE_A: "sh210x150sh",
    /* 文章 */
    PHOTO_STYLE_H: "sh50x50sh",

    brokerDomain: byProxy ? "" : "//jingjiren" + mainDomain


}
