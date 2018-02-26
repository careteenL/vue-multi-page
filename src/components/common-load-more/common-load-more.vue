<template>
    <div class="loading-wrapper" node-type="loading-wrapper" v-if="!hide || hasMore === 'true'">
        <div class="pubilc-loading clearfix">
            <div :class="['icon', statusClass]" node-type="loading-icon"></div>
            <p class="text" node-type="loading-text" >{{statusTxt}}</p>
        </div>
    </div>
</template>

<script src="./common-load-more.js">

</script>

<style lang="scss" scoped src="./common-load-more.scss">

</style>
