<template>
    <div class="picker-box" v-show="!closed">
          <div class="picker-wrapper">
                <div class="picker-title flex">
                      <div class="cancel-btn cell" @click="close">取消</div>
                      <div class="middle-btn cell" v-if="showMiddleBtn" @click="middleFn">
                          {{middleTxt}}
                      </div>
                      <div class="confirm-btn cell" @click="getVal">确定</div>
                </div>
                <div class="picker-list" :style="{height: height*line +'px'}">

                      <div class="datemark" :style="{top: height*hackLine +'px'}"></div>
                      <div class="datescroll ">
                            <div v-for="(column , index) of getData"
                                :id="'column-' + index"
                                onloadedmetadata=""
                                :style="[{width: (100/columns) + '%'}, {left: (100/columns*index) + '%'}]">
                                <ul >
                                    <li :class="[{'select-item': selects[index] === didx} ]"
                                        v-for="(d, didx) of data[index]"
                                        v-html="d.name"
                                        :data-e="selects[2]">
                                    </li>
                                </ul>
                            </div>
                      </div>
                </div>
          </div>
          <div class="hack-mask" v-if="showHackMask">

          </div>
    </div>

</template>

<script src="./common-picker.js">
</script>

<style lang="scss" scoped src="./common-picker.scss">
</style>
