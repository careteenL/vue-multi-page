<template>
    <div>
        <common-header title="我的积分" tipAction="icon-help" @tipHandle="tipHandle"></common-header>
        <div class="my-score">
            <div class="score-balance">
                <p class="score-balance_tip">积分余额</p>
                <p class="score-balance-detail">
                    <span class="score-balance-detail_num">2000</span>
                    <span class="score-balance-detail_record" @click="goScoreRecord">积分记录</span>
                </p>
            </div>
            <div class="score-info">
                <div class="score-info-wrap" v-for="(val, key, index) in scoreObj">
                    <p class="score-info-wrap_lable">{{key}}</p>
                    <ul class="info-list">
                        <li class="info-list_item flex" v-for="(vli, vidx) of val" @click="goLink(vli.link)">
                            <span class="info-item_img" :class="'img-' + vli.img"></span>
                            <div class="info-item-desc cell">
                                <p class="info-item-desc_top">{{vli.descTop}}</p>
                                <p class="info-item-desc_bottom">{{vli.descBottom}}</p>
                            </div>
                            <span class="info-item-next icon-right"></span>
                        </li>
                    </ul>
                </div>

                <p class="score-info_tip">如违规刷积分，我们有权扣除您的积分并取消您的积分获取资格。本活动最终解释权归搜狐焦点所有</p>
            </div>

        </div>
    </div>
</template>

<script src="./my-score.js">

</script>

<style lang="scss" scoped src="./my-score.scss">

</style>
