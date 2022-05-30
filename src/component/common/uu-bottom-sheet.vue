<template>
  <view>
    <view :class="$style.top" @touchmove.stop.prevent="" @tap="onShow"></view>
    <view
      :class="$style.bottom"
      @touchstart.stop="onTouchStart"
      @touchmove.stop="onTouchMove"
      @touchend.stop="onTouchEnd"
      >
      <view class=" w-full flex-center" style="height: 28px;">
        <view :class="$style.bottomLine"></view>
      </view>

      <slot>
      </slot>
    </view>
  </view>
</template>
<script setup lang="ts">
/**
 * css v-bind变量 bottomHeight
 * 定义伸缩的最大最小值
 * startY: 上一个点，
 * latest: 最新点
 * _height: 差值的绝对值
 * bottomHeight的数字部分，加或者减_height
 * 最后一步是将最新点的值latest赋值给上一个点的位置startY
 */
  import {computed, inject, onBeforeUpdate, onMounted, onUpdated, Ref, ref, toRefs, InjectionKey } from 'vue'

  interface Props {
    /** 是否可滚动 */
    scroll: boolean,
    /** 宽度 */
    width: string,
    /** 高度 */
    height: string,
    content: object
  }
  interface Emits {
    (e: 'updateShow', show: boolean): void;
  }
  const props = withDefaults(defineProps<Props>(), {
    scroll: false,
    width:'100%',
    height:'332px',
    content: () => {
      return {}
    }
  })

  const { width, height, scroll} = toRefs(props)

  /** bottom-sheet显示与否 */
  const emit = defineEmits<Emits>();

  const onShow = () => {
    emit('updateShow', false);
  }

  // 底部的 bottom-sheet 的高度
  let bottomHeight = ref<string>('0px')
  onMounted(() => {
    bottomHeight.value = height.value
  })

  // 前一个点
  var startY = 0;
  // 最新点
  var latest = 0;
  // 最大值
  var maxHeight = 0;
  // 最小值
  var minHeight = 82;

  // 系统信息，获取最大值
  let systemInfo = wx.getSystemInfoSync();
    maxHeight = systemInfo.windowHeight - 200

  let onTouchStart = (e:any) => {
    console.log(e)
    startY = latest = e.changedTouches[0].pageY || e.touches[0].pageY
  }

  let onTouchMove = (e:any) => {
    latest  = e.changedTouches[0].pageY || e.touches[0].pageY;
    // 当前点与上一个点的差值
    let _height = Math.abs(latest - startY);
    // 将string转number进行计算
    let num = parseFloat(bottomHeight.value.substring(0,bottomHeight.value.length - 2))

    // 向上
    if (startY > latest) {
      bottomHeight.value = Math.min(maxHeight, num + _height) + 'px'
    }
    // 向下
    if (startY < latest) {
      bottomHeight.value = Math.max(minHeight, num - _height) + 'px'
    }

    // 将当前这个点赋值给开始点，计算差值，不然会叠加计算
    startY = latest
  }
  let onTouchEnd = (e:any) => {
    // 防止特殊情况，这里应该跟move中一致，并添加transition
  }

  if (!scroll.value) {
    onTouchStart = () => {}
    onTouchMove = () => {}
    onTouchEnd = () => {}
  }

</script>

<style lang='less' module>
.top{
  z-index: 98;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100%;
  background:rgba(0,0,0,0.6)
}
.bottom{
  z-index: 99;
  position: fixed;
  width: v-bind(width);
  height: v-bind(bottomHeight);
  transition: all .2s;
  bottom: 0px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(32, 32, 32, 0.06);
  border-radius: 32px 32px 0 0;
  .bottomLine{
    // position: absolute;
    width: 40px;
    height: 4px;
    // top: 12px;
    // left: calc(50% - 20px);
    background: #E9EBED;
    border-radius: 24px;
  }
}

</style>
