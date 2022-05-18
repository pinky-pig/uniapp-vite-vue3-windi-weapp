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
  import {ref } from 'vue'
  let bottomHeight = ref<string>('332px')
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

  const onTouchStart = (e:any) => {
    startY = latest = e.changedTouches[0].pageY || e.touches[0].pageY
  }

  const onTouchMove = (e:any) => {
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
  const onTouchEnd = (e:any) => {
    // 防止特殊情况，这里应该跟move中一致，并添加transition
  }
</script>

<template>
  <view
    :class="$style.bottom"
    @touchstart.stop="onTouchStart"
    @touchmove.stop="onTouchMove"
    @touchend.stop="onTouchEnd">
    <view :class="$style.bottomLine"></view>
  </view>
</template>

<style lang='less' module>
.bottom{
  position: fixed;
  width: 93%;
  height: v-bind(bottomHeight);
  bottom: 8px;
  z-index: 1;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(32, 32, 32, 0.06);
  border-radius: 32px;
  .bottomLine{
    position: absolute;
    width: 40px;
    height: 4px;
    top: 12px;
    left: calc(50% - 20px);
    background: #E9EBED;
    border-radius: 24px;
  }
}

</style>
