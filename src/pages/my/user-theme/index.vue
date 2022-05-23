<template>
  <view :class="$style.container">
    <view class="font-bold mb-4">夜间模式</view>
    <view v-for="(item,index) in 1" :key="index">
      <uu-cell>
        <template #title>
          夜间模式
        </template>
        <template #rightIcon>
          <switch  color="#95ADFE" style="transform: scale(0.8,0.8);"  @change="onSwitch" />
        </template>
      </uu-cell>
    </view>
  </view>
</template>
<script setup lang="ts">
import uuCell from '@/component/common/uu-cell.vue';

const onSwitch = (e:any) => {
  console.log(e)
}
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