<template>
  <view :class="$style.container">
    <view class="font-bold mb-4">主题设置</view>
    <view v-for="(item,index) in list" :key="index">
      <uu-cell>
        <template #title>
          {{ item.label }}
        </template>
        <template #rightIcon>
          <switch  color="#95ADFE" style="transform: scale(0.8,0.8);"  @change="event=>onSwitch(event,item)" />
        </template>
      </uu-cell>
    </view>
  </view>
</template>
<script setup lang="ts">
import uuCell from '@/component/common/uu-cell.vue';
import { ref,reactive, toRaw } from 'vue';

const title = ref<string>('夜间模式')

const list = reactive([
  {
    label:'夜间模式',
    value:1
  },
  {
    label:'中文',
    value:2
  },
])
const onSwitch = (e:any,obj:any) => {

  const val= toRaw(obj)

  const changeTheme = () => {
    if (e.detail.value) {
      // 选中
      list[0].label = '白天模式'
    }else{
      // 取消选中
      list[0].label = '夜间模式'
    }
  }
  const changeLanguage = () => {
    if (e.detail.value) {
      // 选中
      list[1].label = '英文'
    }else{
      // 取消选中
      list[1].label = '中文'
    }
  }

  switch (val.value) {
    case 1:
      changeTheme()
      break;
    case 2:
      changeLanguage()
      break;

    default:
      break;
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