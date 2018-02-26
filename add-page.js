const fs = require('fs');
const path = require('path');
const beautify = require('js-beautify').js_beautify;

let pageName = process.argv[2];
let hasRouter = process.argv[3];

if (!pageName) {
    console.log('输入page名：node add-page.js pageName');
    return;
}

let src = path.resolve('src');

if (isDir(path.join(__dirname, 'src/page', pageName))) {
    return;
}
fs.mkdirSync(path.join(__dirname, 'src/page', pageName));

fs.writeFileSync(path.join(__dirname, 'src/page', pageName, `${pageName}.html`),
`
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="[当前项目关键词]" />
    <meta name="description" content="[当前项目描述]" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <!-- 隐藏ios下Safari地址栏 -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- 设置ios下Safari顶端状态条的样式。取值可选default、black、black-translucent -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta content="telephone=no" name="format-detection"/>
    <meta name="apple-mobile-web-app-title" content="testPage">

    <link rel="apple-touch-icon" sizes="57x57" href="[当前项目图标]">

    <title>${pageName}</title>
</head>

<script type="text/javascript">
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' :
    'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        // 大于640,就应该去访问pc站了
        if (clientWidth > 640) clientWidth = 640;
        // 页面中换算比例 : rem = px/75, 设计稿按750来
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
    };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

})(window.document, window)

</script>
<body>
    <div id="app">
        <router-view></router-view>
    </div>
    <!-- built files will be auto injected -->
</body>
</html>

`, 'utf8')

fs.writeFileSync(path.join(__dirname, 'src/page', pageName, `${pageName}.js`),
`
import Vue from 'vue'
import router from './router/${pageName}.js'
Vue.config.productionTip = false

require('commonUi/normalize.scss')

new Vue({
    el: '#app',
    router
})

`, 'utf8')
if (isDir(path.join(__dirname, 'src/page', pageName, 'router'))) {
    return;
}
fs.mkdirSync(path.join(__dirname, 'src/page', pageName, 'router'));

fs.writeFileSync(path.join(__dirname, 'src/page', pageName, 'router', `${pageName}Router.js`),
`
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: []
})
`, 'utf8')

let config = require('./config/mutil-page-config.js');

if (!config.pageMap[pageName]) {
    config.pageMap[pageName] = {
        aliasPage: `${pageName}`,
        realPage: `${pageName}.html`
    }

    fs.writeFileSync(path.join(__dirname, 'config/mutil-page-config.js'),
        beautify('module.exports = ' + JSON.stringify(config)), 'utf8')
}

function exists(path) {
    return fs.existsSync(path);
}

function isFile(path) {
    return exists(path) && fs.statSync(path).isFile();
}

function isDir(path) {
    return exists(path) && fs.statSync(path).isDirectory();
}
