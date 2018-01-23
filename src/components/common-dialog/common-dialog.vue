<template>
    <transition name="fade">
        <div class="global-dialog-wrap" v-show="!closed">
            <div class="dialog">
                <div class="hd" v-if="!!title">{{title}}</div>
                <div class="bd" v-if="!!tpl" v-html="tpl"></div>
                <div class="ft" v-if="btns.length > 0">
                    <span class="btn" v-for="(item, index) of btns" @click="trigger(index)">
                        {{item}}
                    </span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script src="./common-dialog.js">

</script>

<style lang="scss" scoped src="./common-dialog.scss">
</style>
