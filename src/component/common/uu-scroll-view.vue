<template>
  <scroll-view
    scroll-y
    @touchend="ontouchend"
    @scroll="scroll"
    scroll-with-animation
    :scroll-top="scrollBarTop"
    :data-height="props.scrollHeight.replace(/[^0-9]/ig, '')"
    :style="{height: props.scrollHeight}"
    >
    <slot></slot>

    <view class=" bg-green-200 h-6 w-full ">
      <view>查看更多</view>
    </view>

  </scroll-view>
</template>
<script setup lang="ts">
import { nextTick, ref } from 'vue';

/**
 * @param e.detail.scrollTop 上折叠的滚动高度
 * @param e.detail.scrollHeight 总高度（包括padding，不包括margin）
 * @param e.target.dataset.height scroll-view组件设置的高度
 * 总高度scrollHeight - 上折叠的高度scrollTop - 组件高度height = 最底部折叠高度
 * if 最底部折叠高度 < 最底div的高度 : 说明最底部div显示出来了
 */
const props = defineProps({
  scrollHeight:{
    type: String,
    default: "400px"
  },
})

const scrollBarTop = ref(200)
const scrollValidTop = ref(0)
const active = ref(false)
let old = { scrollTop: 0 }

const scroll = (e:any) => {
  active.value = false
  if ((e.detail.scrollHeight - e.target.scrollTop -  e.target.dataset.height) < 24 ) {
    active.value = true
  }
  old.scrollTop = e.detail.scrollTop
  scrollValidTop.value = e.detail.scrollHeight - e.target.dataset.height - 24
}

const ontouchend = (e:any) => {
  if (active.value) {
    scrollBarTop.value = old.scrollTop
    nextTick(()=>{
      scrollBarTop.value = scrollValidTop.value
    })
    active.value = false
  }
}

</script>
<style lang="less" module>
  .container {

  }
</style>