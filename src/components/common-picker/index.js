/**
 *
 * @desc Picker 支持同步|异步数据 数据完全自定义,复用性ok
 * @param {Array} select 当前选中值 选填
 * @param {Function} onSelect 选中值回调
 * @param {Array} getData ui数据，数组长度=ui列数
 * @example
             ```
                // 先在页面入口处 将picker挂载到Vue原型上
                Vue.prototype.$picker = Picker;
                // 在使用
                this.$picker({@select, @onSelect, @getData});
                 // events中 摧毁
                 context.close();
             ```
 * @todo 组件|接口缓存；更合理的配置；样式可配置；头尾热插拔
 * @author Careteen
 * @recentUpdate 2018-01-23
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
