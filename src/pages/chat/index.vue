<template>
  <view :class="$style.container">
    <!--内容-->
		<view @touchstart="togglePanel" class="UpView flex-1"  >
			<scroll-view scroll-y style="height: 100%;">
				<view v-for="(item, index) in 3" :key="index">
            6666
				</view>
			</scroll-view>
		</view>
		<!--输入-->
		<view class="DownView" @tap.prevent.stop="">
			<!--语音切换-->
			<image src="@/static/images/chat/voice.svg" class="icon"></image>
			<!--语音切换-->
			<input :cursor-spacing="8" :adjust-position="true" type="text" class="input" placeholder=""/>
			<!--表情-->
			<image @tap="toggleEmoji" src="@/static/images/chat/emoji.svg" class="icon"></image>
			<!--发送-->
			<!--附件-->
			<image @tap="toggleFile" src="@/static/images/chat/add.svg" class="icon"></image>
		</view>

		<!-- emoji -->
		<view v-if="showEmoji" class="emoji bg-purple-200 h-20 w-full flex flex-col">

		</view>

		<!-- 附件 -->
		<view v-show="showFile" class=" bg-blue-300 h-34 w-full flex flex-col">

		</view>

  </view>
</template>
<script setup lang="ts">import { ref } from 'vue';

/**
 * 上面scroll-view，下面输入框
 * 输入框上移，其实是scroll-view的高度减少
 */
const height = ref<number>(0)
const toggleUp = () => {
  height.value = 100
}
const toggleDown = () => {
  height.value = 0
}

/**
 * 聊天面板
 */
const togglePanel = () => {
	showFile.value = false
	showEmoji.value = false
}

/**
 * emoji
 */
const showEmoji = ref(false)
const toggleEmoji = () => {
	showFile.value = false
	showEmoji.value = true
}

/**
 * emoji
 */
const showFile = ref(false)
const toggleFile = () => {
	showEmoji.value = false
	showFile.value = true
}
</script>
<style lang="less" module>
  .container {
		display: flex;
		flex-direction: column;
		height: 100vh;
  }
</style>

<style lang="less" scoped>
// #9BEA6B  #E5E5E5  #717171
.UpView{
  background: rgb(220, 211, 211);
	// transition: all ease-out 2s;
}
.DownView{
	height: 110upx;
	padding: 0 20upx;
	box-sizing: border-box;
	border-top: 2upx solid #EEE;
	border-bottom: 2upx solid #EEE;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
	background: #F7F7F7;

	.input{
		height: 68upx;
		line-height: 68upx;
		padding: 0 20upx;
		font-size: 28upx;
		border-radius: 10upx;
		background-color: #fff;
		width: calc(100% - 120upx - 20upx - 40upx - 60upx);
	}
	.icon{
		width: 60upx;
		height: 60upx;
	}
}
.emoji{
	transition: all 2s ease-out;
}

</style>