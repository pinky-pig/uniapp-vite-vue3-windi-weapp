<template>
  <view :class="$style.container">
    <!-- title -->
    <view :class="$style.title" >
      <view :class="$style.name">我的订单</view>
      <view :class="$style.des">全部订单</view>
      <view :class="$style.arrow">
        <van-icon name="arrow" size="14" class=" text-gray-400" />
      </view>
    </view>
    <!-- icon-list -->
    <view :class="$style.content">
      <!-- item -->
      <view :class="$style.item" v-for="item in list" :key="item.id">
        <!-- icon -->
        <view :class="$style.icon">
          <van-icon size="23" :name="item.icon" :badge="99" />
        </view>
        <!-- label -->
        <view :class="$style.label">{{ item.label }}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";

const list = reactive([
  {
    id:1,
    label:'待付款',
    icon:'chat-o',
  },
  {
    id:2,
    label:'待付款',
    icon:'chat-o',
  },
  {
    id:3,
    label:'待付款',
    icon:'chat-o',
  },
  {
    id:4,
    label:'待付款',
    icon:'chat-o',
  },
  {
    id:5,
    label:'待付款',
    icon:'chat-o',
  },
])

uni.request({
  url: 'http://httpbin.org/get', //仅为示例，并非真实接口地址。
  data: {
      text: 'uni.request'
  },
  header: {
      'custom-header': 'hello' //自定义请求头信息
  },
  success: (res) => {
      console.log(res.data);
  }
});
wx.request({
  url: 'http://httpbin.org/get', //仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success (res) {
    console.log(res.data)
  }
})
</script>

<style lang='less' module>
.container{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250rpx;
  margin-bottom: 24rpx;
  background-color: #ffffff;
  border-radius: 16rpx 16rpx 0 0;
  padding: 24rpx 18rpx 24rpx 32rpx;
  box-sizing: border-box;
  font-size: 32rpx;
}
.title{
  display: flex;
  align-items: center;
  flex: 1;
  margin-bottom: 30rpx;
  .name{
    font-weight: bold;
    flex: 1 1 auto;
  }
  .des{
    display: flex;
    justify-content: flex-end;
    flex: 1 1 auto;
    font-size: 28rpx;
    color: rgba(0, 0, 0, 0.4);
  }
  .arrow{
    width: 48rpx;
    height: 40rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.content{
  display: flex;
  flex-direction: row;
  flex: auto;
  .item{
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 85rpx;
    .icon{
      margin-bottom: 20rpx;
      width: 56rpx;
      height: 56rpx;
      position: relative;
      text{
        font-size: 56rpx;
      }
    }
    .label{
      font-size: 24rpx;
      color: #666;
      line-height: 32rpx;
    }
  }

}
</style>