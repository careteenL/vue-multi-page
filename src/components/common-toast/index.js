/**
 *
 * @desc Toast
 * @param {String|HTML} tip 提示语，可为html片段
 * @param {Number} duration [default: 2000] 提示语持续显示时间，单位为毫秒
 * @example
             ```js
                // 先在页面入口处 将toast挂载到Vue原型上
                Vue.prototype.$toast = Toast;
                // 再使用
                this.$toast({tip: 'error', duration: 3000});
             ```
 *
 * @author Careteen
 * @recentUpdate 2018-01-23
 */

import Vue from 'vue'
var toastCmp = Vue.extend(require('./common-toast.vue'));
var instance;

var Toast = function(options) {
    options = options || {};
    instance = new toastCmp({
        data: options
    });
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    return instance.vm;
};
export default Toast;
