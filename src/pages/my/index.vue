<template>
  <view :class="$style.container">
    <user-info></user-info>
    <view :class="$style.pageBottom">
      <!-- <order-group></order-group>
      <other-tools></other-tools> -->
      <user-setting></user-setting>
    </view>
  </view>
</template>

<script setup lang="ts">
import userInfo from "./user-info/index.vue"
import userSetting from "./user-setting/index.vue"
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
  // padding: 0 10px;

  .pageBottom{
    position: relative;
    width: 100%;
    border-radius: 10px;
    padding: 20px 10px;
    box-sizing: border-box;
    background: radial-gradient(#f5f5f5, #fff);
  }
}

</style>
