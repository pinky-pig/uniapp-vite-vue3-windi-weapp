<template>
  <view :class="$style.container">
    <view :class="$style.rt" v-for="(item, index) in list" :key="index">
      <view :class="$style.item">
        <view :class="$style.icon">
          <img :src="item.url" style="width: 35px; height: 35px;" alt="">
        </view>
        <view :class="$style.label" >{{ item.label}}</view>
      </view>
    </view>

  </view>
</template>
<script setup lang="ts">
import me from '@/static/images/others/me.svg';
import her from '@/static/images/others/her.svg';
import you from '@/static/images/others/you.svg';
import { reactive } from 'vue';

const list = reactive([
  {
    url:me,
    label:'me'
  },
  {
    url:you,
    label:'you'
  },
  {
    url:her,
    label:'her'
  },
])
</script>
<style lang="less" module>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .rt{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0px;
      width: 95px;
      height: 80px;
      background: #FFFFFF;
      box-shadow: 1px 7px 22px rgba(32, 32, 32, 0.11);
      border-radius: 20px;
      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }

  .item{
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 85rpx;
    text-align: center;
    .icon{
      margin-bottom: 20rpx;
      width: 35px;
      height: 35px;
      position: relative;
      text{
        font-size: 56rpx;
      }
    }
    .label{
      font-size: 24rpx;
      line-height: 32rpx;

      background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
    }
  }
</style>