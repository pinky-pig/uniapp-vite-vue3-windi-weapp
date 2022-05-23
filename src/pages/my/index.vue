<template>
  <view :class="$style.container">
    <user-info></user-info>
    <view :class="$style.pageBottom">
      <user-tag class=" mb-6"></user-tag>
      <user-setting class=" mb-6"></user-setting>
      <user-theme class=" mb-6"></user-theme>
    </view>
  </view>
</template>

<script setup lang="ts">
import userInfo from "./user-info/index.vue"
import userTag from "./user-tag/index.vue"
import userSetting from "./user-setting/index.vue"
import userTheme from "./user-theme/index.vue"

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
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    border-radius: 10px;
    padding: 20px 10px;
    box-sizing: border-box;
    background: radial-gradient(#f5f5f5, #fff);
  }
}

</style>
