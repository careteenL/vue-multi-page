<template>
    <div>
        <common-header title="积分记录"
            class="common-header-cur"
            link="/index"
            tipAction="icon-date"
            @tipHandle="tipHandle">
        </common-header>
        <div class="score-record" v-if="!isEmpty">
            <!-- <div :class="['record-date_icon']" @touchstart="tipHandle"></div> -->
            <div class="record-month" v-for="(val, key, index) in monthCount">
                <div :class="['record-month-header']">
                    <p class="record-month-header_time">
                        {{key | formatDate}}
                    </p>
                    <p class="record-month-header_num">
                        获取积分 {{val.get}}  使用积分 {{val.cost | absScore}}
                    </p>
                </div>
                <ul class="record-month-list">
                    <li class="record-month-item flex" v-for="(vit, vidx) of val.list">
                        <div class="month-item-info cell">
                            <p class="month-item-info_title">
                                {{vit.sourceDesc}}
                            </p>
                            <p class="month-item-info_time">
                                {{vit.createTimeStr}}
                            </p>
                        </div>
                        <span class="record-month-item_num">
                            <span class="num_bigger">{{vit.score | itemScore}}</span> 分
                        </span>
                    </li>
                </ul>
            </div>
            <common-load-more :callback="loadmore.bind(this)" v-if="!unLoadMore || hasNextPage"></common-load-more>
        </div>
        <common-empty v-else tip="暂无积分记录"></common-empty>
        <common-loading v-if="loading"></common-loading>
    </div>
</template>

<script src="./my-score-record.js">

</script>

<style lang="scss" scoped src="./my-score-record.scss">
</style>
