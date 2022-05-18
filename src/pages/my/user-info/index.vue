<template>
  <view :class="$style.container">
    <!-- 未登录的情况 -->
    <block v-if="!isLogin" @touchstart="onLogin">
      <view class="user-center-card__header">
        <img :src="userInfo.avatarUrl" class="user-center-card__header__avatar" />
        <view class="user-center-card__header__name">{{'请登录'}}</view>
      </view>
    </block>
    <!-- 已登录的情况 -->
    <block v-else>
      <view class="user-center-card__header" @click="toPage('pages/my/person-edit/index')">
        <img :src="userInfo.avatarUrl" class="user-center-card__header__avatar" />
        <view class="user-center-card__header__name">{{ userInfo.nickName || '微信用户'}} 🐱‍🚀</view>
      </view>
    </block>
  </view>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue';
import { getUserInfo } from '@/mock/userCenter'
let isLogin = ref(true)
let {userInfo} = getUserInfo()

// 登录
const onLogin = () => {

}
// 跳转修改个人信息
const toPage = (path:any) => {
  uni.navigateTo({
    url: '/pages/my/person-edit/index',
  })
}

</script>

<style lang='less' module>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 480rpx;
  background-image: url('https://cdn-we-retail.ym.tencent.com/miniapp/template/user-center-bg-v1.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 24rpx;
  box-sizing: border-box;
}
</style>
<style lang='less' scoped>
.user-center-card__header {
  margin-top: 192rpx;
  margin-bottom: 48rpx;
  height: 96rpx;
  line-height: 48rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #333;
  position: relative;
}
.user-center-card__header__avatar {
  width: 96rpx;
  height: 96rpx;
  border-radius: 48rpx;
  overflow: hidden;
}

.user-center-card__header__name {
  font-size: 36rpx;
  line-height: 48rpx;
  color: #333;
  font-weight: bold;
  margin-left: 24rpx;
  margin-right: 16rpx;
}
</style>