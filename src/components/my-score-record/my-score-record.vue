<template>
    <div>
        <common-header title="积分记录" link="/index" tipAction="icon-date" @tipHandle="tipHandle"></common-header>
        <div class="score-record">
            <div class="record-month">
                <div class="record-month-header">
                    <p class="record-month-header_time">
                        2018年1月
                    </p>
                    <p class="record-month-header_num">
                        获取积分 125  使用积分 500
                    </p>
                </div>
                <ul class="record-month-list">
                    <li class="record-month-item flex">
                        <div class="month-item-info cell">
                            <p class="month-item-info_title">
                                发布低质量直播扣除
                            </p>
                            <p class="month-item-info_time">
                                2017-12-24 12:00
                            </p>
                        </div>
                        <span class="record-month-item_num">
                            - <span class="num_bigger">100</span> 分
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script src="./my-score-record.js">

</script>

<style lang="scss" scoped src="./my-score-record.scss">
</style>
