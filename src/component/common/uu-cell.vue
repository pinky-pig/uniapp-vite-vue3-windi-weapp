<template>
  <view class="container">
    <view class="left-icon">
      <text class="iconfont icon-uninterested text-blue-500" ></text>
    </view>
    <view class="des">全部订单</view>
    <view class="right-icon">
      <van-icon name="arrow" size="14" class=" text-gray-400" />
    </view>
  </view>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>

.container {
  display: flex;
  align-items: center;
  flex: 1;
  height: 20px;
  width: 100%;
  margin: 10px 0;
  .left-icon {
    font-weight: bold;
    flex: auto 1 auto;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .des {
    display: flex;
    justify-content: flex-start;
    flex: 1 1 auto;
    font-size: 28rpx;
    color: rgba(0, 0, 0, 0.4);
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