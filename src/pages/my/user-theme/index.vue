<template>
  <view :class="$style.container">
    <view class="font-bold mb-4">主题设置</view>
    <view v-for="(item,index) in 1" :key="index">
      <uu-cell>
        <template #title>
          {{ title }}
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
import { ref } from 'vue';

const title = ref<string>('夜间模式')
const onSwitch = (e:any) => {
  if (e.detail.value) {
    // 选中
    title.value = '白天模式'
  }else{
    // 取消选中
    title.value = '夜间模式'
  }

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