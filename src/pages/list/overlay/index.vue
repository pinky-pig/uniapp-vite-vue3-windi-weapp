<template>
  <uuBottomSheet @updateShow="onPopup">
		<view class=" btmSheet">
			<view class=" title ">Getting Started </view>
			<view class=" content">内容内容内容内容内容 </view>
			<view class=" time ">2022/5/30 </view>
		</view>
	</uuBottomSheet>
</template>
<script setup lang="ts">
import uuBottomSheet from '@/component/common/uu-bottom-sheet.vue';

interface Emits {
  (e: 'updateShow', show: boolean): void;
}
const emit = defineEmits<Emits>();
const onPopup = (e:any) => {
  emit('updateShow', false);
}

</script>
<style lang="less" scoped>
.btmSheet{
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 12px 24px;
	height:90%;
	box-sizing: border-box;
	.title{
		border-bottom: 1px solid gray;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 40px;
		font-family: 'Nunito Sans';
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: 0.216992px;
		color: #1C2121;
	}
	.content{
		flex: 1;
		padding: 5px 0;
		font-family: 'Nunito Sans';
		font-style: normal;
		font-weight: 300;
		font-size: 14px;
		line-height: 16px;
		letter-spacing: 0.125rem;
		color: #1C2121;
	}
	.time{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 40px;
		font-family: 'Nunito Sans';
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 18px;
		letter-spacing: 0.216992px;
		color: #1C2121;
	}
}
</style>