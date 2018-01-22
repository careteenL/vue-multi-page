<template>
    <div class="common-header">
        <router-link :to="link" v-if="!action" class="common-header_back"></router-link>
        <a v-else href="javascript:;" class="common-header_back" @click="goBack"></a>

        <a :href="titleLink" class="common-header_title" v-if="!!titleLink" v-html="title"></a>
        <span class="common-header_title" v-else v-html="title"></span>

        <a class="common-header_tip" v-if="!!tip" v-html="tip" :href="tipLink"></a>
        <span class="common-header_tip" :class="tipClass" v-if="!!tipAction" v-html="tipActionReal" @click="tipHandle"></span>
    </div>
</template>

<script src="./common-header.js">

</script>

<style lang="scss" scoped src="./common-header.scss">
</style>
