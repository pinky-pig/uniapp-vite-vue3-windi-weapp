<template>
  <view :class="$style.container">
    <!--内容-->
		<view @touchstart="togglePanel" class="UpView flex-1"  >
			<scroll-view scroll-y style="height: 100%;" :style="{maxHeight: `calc(100vh - 110rpx - ${maxScrollHeight}px)`}" >
				<view v-for="(item, index) in 8" :key="index" >
					<view class=" w-full h-20 bg-light-100 " style="border-bottom: 1px solid black;"></view>
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
		<view v-show="showEmoji">
			<view class="bottom-panel" >
				<view class="box-item" v-for="(item, index) in 8" :key="index">
					<text >😀</text>
				</view>
			</view>
		</view>

		<!-- 附件 -->
		<view v-show="showFile" >
			<view class="bottom-panel" >
				<view class="box-item" v-for="(item, index) in fileList" :key="index">
					<view class="icon">
						<img style="width: 60rpx;height: 60rpx;" :src="item.icon" alt="">
					</view>
					<text class="label">{{item.label}}</text>
				</view>
			</view>
		</view>

  </view>
</template>
<script setup lang="ts">import { reactive, ref } from 'vue';
import image from '@/static/images/chat/image.svg';
import camera from '@/static/images/chat/camera.svg';
import videoCamera from '@/static/images/chat/video-camera.svg';
import location from '@/static/images/chat/location.svg';
import file from '@/static/images/chat/file.svg';
/**
 * 上面scroll-view，下面输入框
 * 输入框上移，其实是scroll-view的高度减少
 * 布局用的是flex column scroll-view自动填充 flex-grow: 1
 * scroll-view有个最大高度，最大高度也是有两个值
 * 下面的固定，控制显示与否，最大高度也是两个变化
 *
 */
const height = ref<number>(0)
const maxScrollHeight = ref<number>(0)
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
	maxScrollHeight.value = 0
}

/**
 * emoji
 */
const showEmoji = ref(false)
const toggleEmoji = () => {
	showFile.value = false
	showEmoji.value = true
	maxScrollHeight.value = 200
}

/**
 * 附件
 */
const showFile = ref(false)
const toggleFile = () => {
	showEmoji.value = false
	showFile.value = true
	maxScrollHeight.value = 200
}
const fileList = reactive([
	{
		id:'1',
		icon: image,
		label:'图片'
	},
	{
		id:'2',
		icon: camera,
		label:'拍摄'
	},
	{
		id:'3',
		icon: videoCamera,
		label:'视频通话'
	},
	{
		id:'4',
		icon: location,
		label:'位置'
	},
	{
		id:'5',
		icon: file,
		label:'文件'
	},
])
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

.bottom-panel{
	width: 100%;
	height: 200px;
	background: #F7F7F7;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	// display: grid;
	// grid-template-columns: repeat(4,25%);
	// grid-template-rows: repeat(2,autofill);
}
// 附件子项
.box-item{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 25%;
	font-size: 10px;
	.icon{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24rpx;
		background: #ffffff;
		border-radius: 24rpx;
		text-align: center;
		font-size: 48rpx;
		margin-bottom: 5px;
	}
	.label{
		font-size: 24rpx;
		font-weight: 400;
		color: rgba(39,40,50,0.5);
		line-height: 34rpx;
	}
}

</style>