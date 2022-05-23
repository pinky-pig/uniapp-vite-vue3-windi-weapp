<template>
  <view :class="$style.container" class=" w-full py-5 flex flex-col justify-center items-center" >
    <block v-if="auth.isLogin">
      <!-- 已登录 -->
      <view class="w-16 h-16 rounded-full object-cover" style="border: 2px solid #95ADFE; padding: 3px;">
        <img class="w-16 h-16 rounded-full object-cover" :src="auth.userInfo.avatarUrl"  />
      </view>
      <view style="font-style: normal;font-weight: 700; font-size: 16px;line-height: 30px;">Monica Gamage</view>
      <view style="font-style: normal; font-weight: 400; font-size: 12px; line-height: 18px; color: #7B6F72;">Lose a fat program</view>
      <van-button class="v-btn" @tap="onLogout" color="linear-gradient(to right,#92A3FD,#9DCEFF)" round >logout</van-button>
    </block>

    <block v-else>
      <!-- 未登录 -->
      <view class="w-16 h-16 rounded-full object-cover" style="border: 2px solid #95ADFE; padding: 3px;">
        <img class="w-16 h-16 rounded-full object-cover" :src="logo"  />
      </view>
      <view style="font-style: normal;font-weight: 700; font-size: 16px;line-height: 30px;">Monica Gamage</view>
      <view style="font-style: normal; font-weight: 400; font-size: 12px; line-height: 18px; color: #7B6F72;">Lose a fat program</view>
      <van-button class="v-btn" @tap="onLogin" color="linear-gradient(to right,#92A3FD,#9DCEFF)" round >login</van-button>
    </block>
  </view>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store';
import logo from '@/static/logo.png'
/**
 * 🍔获取手机号，只需要走手机号 getPhoneNumber api 就行，不再需要 wx.login 只针对非个人开发者
 * https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html
 * 1.判断已授权调取接口并获取openId
 * 2.调用后台接口，获取token
 * 3.判断用户，跳转页面
 */
const auth = useAuthStore();
const { simpleLogin, resetAuthStore } = useAuthStore();
const onLogin = () => {
  wx.getUserProfile({
    desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
      simpleLogin({
        userId: '1',
        avatarUrl: res.userInfo.avatarUrl,
        nickName: res.userInfo.nickName,
        status: 'Lv1',
        userMobile: '1382550699x',
      })
    }
  })
}
const onLogout = () => {
  wx.showModal({
    title: '提示',
    content: '确认退出登录',
    success (res) {
      if (res.confirm) {
        resetAuthStore()
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
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
  width: 100%;
  box-sizing: border-box;
}
</style>
<style lang='less' scoped>
  /deep/.v-btn{
    button{
      margin-top: 10px;
      width: 83px;
      height: 30px;
    }
  }
</style>
