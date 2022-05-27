<template>
  <view :class="$style.container">
    <view class="font-bold mb-4">账户设置</view>
    <view v-for="(item,index) in list" :key="index">
      <uu-cell>
        <template #title>
          {{item.key}}
        </template>
      </uu-cell>
    </view>
  </view>
</template>
<script setup lang="ts">
import uuCell from '@/component/common/uu-cell.vue';
import { reactive } from 'vue';
const list = reactive([
  {
    key:'地址管理',
    value:'',
  },
  {
    key:'我的收藏',
    value:'',
  },
  {
    key:'消息通知',
    value:'',
  },
])
</script>
<style lang="less" module>
  .container {
    width: 100%;
    border-radius: 10px;
    box-shadow: 1px 7px 22px rgba(32, 32, 32, 0.11);
    padding: 15px;
    box-sizing: border-box;
  }
</style>