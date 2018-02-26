<template>
    <div>
        <common-header class="common-header-cur" :title="title" link="/index"></common-header>
        <!-- <common-header title="了解积分"
            class="common-header-cur"
            :action="true"
            @goBack="goBack">
        </common-header> -->
        <div class="score-help">
            <dl class="help-item" v-for="(hlit, hlidx) of showList">
                <dt class="help-item_lable">
                    {{hlit.lable}}
                </dt>
                <dd class="help-item_info" v-html="hlit.info">
                </dd>
            </dl>
        </div>
    </div>
</template>

<script src="./my-score-help.js">

</script>

<style lang="scss" scoped src="./my-score-help.scss">
</style>
