import Vue from 'vue'
import router from './router/rankRouter.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import Dialog from 'components/common-dialog/index.js'
import Toast from 'components/common-toast/index.js'

import $$userInfoModel from 'server/userInfo.js'
import $$config from 'config'
import $$util from 'util'

Vue.config.productionTip = false

Vue.prototype.$dialog = Dialog;
Vue.prototype.$toast = Toast
Vue.use(VueAwesomeSwiper)

require('commonUi/normalize.scss')

router.beforeEach((to, from, next) => {
    /**
     *
     * @desc 当前路由控制两个页面（index、help），由于app有两个入口分别到index、help。
     *          当app进入index时，正常路由；
     *          当app进入help时，回退需要唤起app。
     *       所以页面入口埋上 window.focus_referrer，若从index到help将 window.focus_referrer 置空；
     *       window.focus_referrer 写死，不需后端直出。
     */
    if (from.name === 'index' && to.name === 'help') {
        window.focus_referrer = '';
    }
    if (!$$util.isFocusApp()) {

        $$userInfoModel.getUserInfo((res) => {
            if (200 === res.code) {
                /**
                *
                * @desc 登录成功，当身份为经纪人时，才能访问此页面
                *      wiki：http://wiki.ops.focus.cn/pages/viewpage.action?pageId=4169507
                */
                window.focus_uid = res.data.uid;
                window.userInfo = res.data;
                if (1 === res.data.accreditStatus ) {
                    let tmp = +res.data.accreditRoleType;

                    if (tmp > 10000) { // 经纪人 + 其他角色
                        tmp = tmp % 10000;
                    } else if (tmp !== 10000 && tmp > 1000) {
                        tmp = tmp % 1000;
                    }
                    // 身份为经纪人
                    if (tmp === 201) {
                        next && next();
                    } else {
                        // 提示：前往焦点卖房APP查看个人楼盘排名
                        Vue.prototype.$dialog({
                            tpl: '前往焦点卖房APP查看个人楼盘排名',
                            btns: ['确定'],
                            events: [
                                function(context) {
                                    window.location.href = 'http://broker-app.focus.cn/qrCode';
                                    context.close();
                                }
                            ]
                        });
                    }

                }
            } else if (401 === res.code) { // 未登录
                window.location.href = $$config.loginUrl +
                '?ru=' +
                encodeURIComponent(window.location.href);
            } else if (1005 === res.code) { // 登陆了但不是经纪人身份
                // 提示：前往焦点卖房APP查看个人楼盘排名
                Vue.prototype.$dialog({
                    tpl: '前往焦点卖房APP查看个人楼盘排名',
                    btns: ['确定'],
                    events: [
                        function(context) {
                            window.location.href = 'http://broker-app.focus.cn/qrCode';
                            context.close();
                        }
                    ]
                });
            } else {
                Vue.prototype.$toast({
                    tip: res.msg
                });
            }
        });
    } else {

        next && next();

    }
});

new Vue({
    el: '#app',
    router
})
