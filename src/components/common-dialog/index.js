/**
 *
 * @desc Dialog
 * @param {String} title 头部文字 不传或者传空则不显示
 * @param {String|HTML} tpl 可以传一段html或者文字，这是dialog的主内容区
 * @param {Array} btns btns里的每一项都会成为dialog的按钮，数组长度大于0
 * @param {Array} events events里的每一项对应dialog按钮的点击事件，多传无效
 * @example 先在页面入口处 将toast挂载到Vue原型上 Vue.prototype.$dialog = Dialog;
 *          在使用 this.$dialog({@title, @tpl, @btns, @events});
 *          events中 摧毁 context.close();
 * @author Careteen
 * @recentUpdate 2018-01-23
 */

import Vue from 'vue'
var dialogCmp = Vue.extend(require('./common-dialog.vue'));
var instance;

var Dialog = function(options) {
    options = options || {};
    instance = new dialogCmp({
        data: options
    });
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.closed = false;
    return instance.vm;
};
export default Dialog;
