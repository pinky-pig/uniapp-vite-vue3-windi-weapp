<template>
  <view class="content flex-center flex-col">
    <image :class="$style.logo" :src='imgUrl' />
    <view class="text-area">
      <text class="title text-red-300">{{ title }}</text>
      <van-button type="primary">主要按钮</van-button>
      <text class="iconfont icon-uninterested">{{ toolsType }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import imgUrl from '../../static/logo.png'

import { useToolsStore } from '@/store/tools'

const title = ref('hello')
const toolsStore = useToolsStore()
var toolsType = computed(() => toolsStore.getType)

</script>

<style lang='less' module>
@import "@/wxcomponents/@vant/weapp/common/index.wxss";
.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}



</style>
