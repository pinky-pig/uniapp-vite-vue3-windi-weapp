<template>
  <van-search v-model="keyword" placeholder="请输入搜索关键词" />
  <uuScrollView>

    <view class="content flex-center flex-col">
      <image :class="$style.logo" :src='imgUrl' />
      <view class="text-area">
        <text class="title text-red-300">{{ title }}</text>
        <van-button type="primary">主要按钮</van-button>
        <text class="iconfont icon-uninterested">{{ toolsType }}</text>
      </view>
    </view>
    <view class=" bg-pink-100 h-96 w-full"></view>

  </uuScrollView>
</template>

<script setup lang="ts">
import { computed, nextTick, reactive, ref } from 'vue'
import imgUrl from '../../static/logo.png'
import uuScrollView from "@/component/common/uu-scroll-view.vue"
import { useToolsStore } from '@/store/tools'

const title = ref('hello')
const toolsStore = useToolsStore()
var toolsType = computed(() => toolsStore.getType)
const keyword = ref('')
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

