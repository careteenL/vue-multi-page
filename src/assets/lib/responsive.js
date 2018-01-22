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
