<template>
  <view :class="$style.container">
    <!-- 标题 -->
    <view :class="$style.title" >
      <view :class="$style.name">我的服务</view>
    </view>
    <!-- 内容 -->
    <view :class="$style.content">
      <view :class="$style.item" v-for="item in list" :key="item.id">
        <view :class="$style.icon">
          <van-icon size="23" :name="item.icon" badge="99+" />
        </view>
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
  {
    id:6,
    label:'待付款',
    icon:'chat-o',
  },
  {
    id:7,
    label:'待付款',
    icon:'chat-o',
  },
  {
    id:8,
    label:'待付款',
    icon:'chat-o',
  },
])
</script>

<style lang='less' module>
.container{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
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
}

.content{
  display: grid;
  grid-template-columns: repeat(4,25%);
  grid-template-rows: repeat(4,autofill);

  .item{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    height: 155rpx;

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