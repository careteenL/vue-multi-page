<template>
    <div>
        <common-header title="我的楼盘排名" tipAction="icon-help" @tipHandle="tipHandle"></common-header>
        <div class="loupan-rank">
            <ul class="rank-list">
                <li class="rank-item flex">
                    <span class="rank-item_name cell">
                        北京时代广场
                    </span>
                    <span class="rank-item_num">
                        当前排名：1
                    </span>
                    <i class="rank-item_type icon-rank-up"></i>
                </li>
            </ul>
            <p class="loupan-rank_help" @click="tipHandle">如何快速提高排名 ></p>
        </div>
    </div>
</template>

<script src="./loupan-rank.js">

</script>

<style lang="scss" scoped src="./loupan-rank.scss">

</style>
