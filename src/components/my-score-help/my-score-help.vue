<template>
    <div>
        <common-header :title="title" link="/index"></common-header>
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
