<template>
    <div>
        <common-header title="了解楼盘排名"
            class="common-header-cur"
            :action="true"
            @goBack="goBack">
        </common-header>
        <div class="score-help">
            <dl class="help-item">
                <dt class="help-item_lable">
                    什么是楼盘排名
                </dt>
                <dd class="help-item_info">
                    平台会根据经纪人在该楼盘下的活跃度以及服务能力进行经纪人排名展示，拥有更高活跃度以及更好的服务能力的经纪人将优先展示在楼盘页面。
                </dd>
                <dd class="help-item_more" @click="toggleMore(true)">查看展示 ></dd>
            </dl>
            <dl class="help-item" v-for="(hlit, hlidx) of helpList">
                <dt class="help-item_lable">
                    {{hlit.lable}}
                </dt>
                <dd class="help-item_info" v-html="hlit.info"></dd>
            </dl>
            <div class="more-swiper" v-if="showSwiper">
                <i class="more-swiper_close" @click="toggleMore(false)"></i>
                <swiper :options="swiperOption" ref="mySwiper" class="more-swiper_wrap">
                    <!-- slides -->
                    <swiper-slide>
                        <div class="help-img img-one"></div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="help-img img-two"></div>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
                </swiper>

            </div>

        </div>
    </div>
</template>

<script src="./loupan-rank-help.js">

</script>

<style lang="scss" scoped src="./loupan-rank-help.scss">
</style>
