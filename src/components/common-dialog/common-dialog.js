// var $$util = require('lib/util.js');
import $$util from 'util'
export default {
    name: 'dialog',
    data: function() {
        return {
            closed: true,
            title: '',
            tpl: '',
            btns: [],
            events: []
        }
    },
    watch: {
        closed: function(newVal, oldVal) {
            !newVal ? $$util.lockScreen() : $$util.unLockScreen();
        }
    },
    methods:{

        trigger: function(index) {
            var that = this;
            if (that.btns.length > 0) {
                that.events[index] && that.events[index](that);
            }
        },
        close: function(){
            this.closed = true;
            setTimeout(() => {
                this.$destroy(true);
                !!this.$el && this.$el.parentNode.removeChild(this.$el);
            }, 100);
        },
        destroyInstance: function() {
            !this.closed && this.close();
        },
        // 监听浏览器自带前进后退事件 -- destroy dialog 实例
        onPopStateFn: function(){
            if(window.history && window.history.pushState) {
                window.addEventListener('popstate', this.destroyInstance, false);
            }
        },
        offPopStateFn: function() {
            if(window.history && window.history.pushState) {
                window.removeEventListener('popstate', this.destroyInstance, false);
            }
        }

    },
    mounted: function() {
        // this._bindEvents();
        this.onPopStateFn();

    },
    destroyed: function() {
        this.offPopStateFn();
    }
};
