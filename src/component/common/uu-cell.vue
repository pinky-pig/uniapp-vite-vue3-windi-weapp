<template>
  <view class="container">
    <view class="left-icon" name="leftIcon">
      <slot name="leftIcon" >
        <text class="iconfont icon-uninterested text-blue-500" ></text>
      </slot>
    </view>

    <view class="title">
      <slot name="title" >666</slot>
    </view>

    <slot name="rightIcon" class="right-icon">
      <van-icon name="arrow" size="14" class=" text-gray-400" />
    </slot>
  </view>
</template>
<script setup lang="ts">


interface Props {
  /** tab */
  height: string
}
const props = withDefaults(defineProps<Props>(), {
  height:'60px'
})

</script>
<style lang="less" scoped>

.container {
  // border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  // flex: 1;
  height: v-bind(height);
  width: 100%;
  .left-icon {
    font-weight: bold;
    flex: auto 1 auto;
    // width: 32rpx;
    // height: 32rpx;
    font-size: 38rpx;
    margin-right: 10px;
  }
  .title {
    display: flex;
    justify-content: flex-start;
    flex: 1 1 auto;
    font-size: 32rpx;
    // color: rgba(0, 0, 0, 0.4);
  }
  .right-icon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>