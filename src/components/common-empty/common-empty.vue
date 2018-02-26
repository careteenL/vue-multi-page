<template>
    <div class="global-empty">
        <span :class="['global-empty_bg', emptyBg]"></span>
        <p class="global-empty_tip">{{tip}}</p>
        <a :href="link" class="global-empty_more">{{more}}</a>
        <a href="javascript:;" class="global-empty_more" @click="emptyMoreFn" v-html="moreAction" v-if="!!moreAction"></a>
    </div>
</template>

<script src="./common-empty.js">

</script>

<style lang="scss" scoped src="./common-empty.scss">

</style>
