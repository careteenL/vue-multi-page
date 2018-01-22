/**
 * picker 支持同步|异步数据 数据完全自定义,复用性ok
 * 调用 this.$picker({@select, @onSelect, @getData});
 * 具体见demo.md
 */

 /**
 * 参数：
 * @select {array} 当前选中值 选填
 * @onSelect {function} 选中值回调
 * @getData {array} ui数据，数组长度=ui列数
*/

/**
* todo: 组件|接口缓存；更合理的配置；样式可配置；头尾热插拔
*/

import Vue from 'vue'
var pickerCmp = Vue.extend(require('./common-picker.vue'));
var instance;

var picker = function(options) {
    options = options || {};
    instance = new pickerCmp({
        data: options
    });
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);

    instance.vm.closed = false;
    return instance.vm;
};
export default picker;
