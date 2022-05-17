<template>
  <view :class="$style.container">
    <user-info></user-info>
    <view :class="$style.pageBottom">
      <order-group></order-group>
      <other-tools></other-tools>
    </view>
  </view>
</template>

<script setup lang="ts">
import userInfo from "./user-info/index.vue"
import orderGroup from "./order-group/index.vue"
import otherTools from "./other-tools/index.vue"
import OtherTools from "./other-tools/index.vue";

</script>

<style lang='less' module>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  .pageBottom{
    margin-top: 340rpx;
    position: relative;
    padding: 0 30rpx;
  }
}

</style>
