<template>
  <view :class="$style.container">
    <web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html"></web-view>
    <view>66666666666666666</view>
  </view>
</template>
<script setup lang="ts">
  const webviewStyles = {
    progress: {
      color: '#FF3333'
    }
  }
</script>
<style lang="less" module>
  .container {

  }
</style>