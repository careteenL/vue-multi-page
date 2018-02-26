<template>
    <div>
        <common-header title="我的楼盘排名"
            class="common-header-cur"
            tipAction="icon-help"
            :action="true"
            @goBack="goBack"
            @tipHandle="tipHandle">
        </common-header>
        <div class="loupan-rank" v-if="!isEmpty">
            <ul class="rank-list">
                <li class="rank-item flex" v-for="(rlit, rlidx) of rankList">
                    <span class="rank-item_name cell">
                        {{rlit.projectName}}
                    </span>
                    <span class="rank-item_num no-type">
                        当前排名：{{rlit.curRank}}
                    </span>
                    <!-- <i class="rank-item_type icon-rank-up"></i> -->
                </li>
            </ul>
            <p class="loupan-rank_help" @click="tipHandle">如何快速提高排名 ></p>
        </div>
        <common-empty v-else
            tip="暂无楼盘排名"
            moreAction="如何快速提高排名 >"
            @emptyMoreFn="tipHandle">
        </common-empty>
        <common-loading v-if="loading"></common-loading>
    </div>
</template>

<script src="./loupan-rank.js">

</script>

<style lang="scss" scoped src="./loupan-rank.scss">

</style>
