<template>
<view style="background: radial-gradient(#f5f5f5, #fff);">
	<!-- tab -->
	<view class="flex-center" style="width: 100%;height: 80px;">
		<uuTab :tabs="tabs" @clickTab="clickTab" style=" width:90%; margin-top: 20px;">
		</uuTab>
	</view>

	<!-- 日期 -->
	<view class=" flex flex-col items-center justify-around my-8 mx-auto rounded-2xl" style="width: 90vw; height: 130px;box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);">
    <view class="schedule">

		</view>
    <view class="difficult"></view>
	</view>

	<!-- 名称和检索 -->
	<van-sticky :offset-top="0">
		<view :offset-top="50" class=" flex flex-row items-center justify-between px-5 box-border" style="width: 100vw;height: 40px;backdrop-filter:blur(10px)">
			<view class=" font-bold"> Task Inventory</view>
			<image style="width: 30px;height: 30px;" class=" text-gray-400" src="@/static/images/list/search.svg" ></image>
		</view>
	</van-sticky>

	<!-- 列表 -->
	<view style="width: 100vw;background: radial-gradient(#f5f5f5, #fff);">
		<scroll-view class=" px-5 box-border" scroll-y>

			<view class="list-pane">
				<view v-for="(item,index) in list" :key="index" @tap="onPopup(true,item)">
					<uu-cell :height="'80px'" >
						<template #leftIcon>
							<image style="width: 60px;height: 60px;border-radius: 12px;" src="@/static/images/list/placeholder.jpg" ></image>
						</template>
						<template #title>
							<view class=" font-bold mb-1">{{item.key}}</view>
							<view style="font-size: 12px;color:#7B6F72;">10:30</view>
						</template>
						<template #rightIcon>
							<image style="width: 24px;height: 24px;border-radius: 12px;" src="@/static/images/list/circle-right-arrow.svg" ></image>
						</template>
					</uu-cell>
				</view>
			</view>

		</scroll-view>
	</view>

	<!-- 遮罩 -->
	<uuBottomSheet v-if="show" @updateShow="onPopup">
		<view class=" btmSheet">
			<view class=" title ">{{ popupData.title}} </view>
			<view class=" content">{{ popupData.content}} </view>
			<view class=" time ">{{ popupData.time}} </view>
		</view>
	</uuBottomSheet>
</view>

</template>

<script setup lang="ts">
import uuTab from "@/component/common/uu-tab.vue";
import uuCell from '@/component/common/uu-cell.vue';
import uuBottomSheet from '@/component/common/uu-bottom-sheet.vue';
import { reactive, ref, provide } from "vue";

/** 遮罩 */
interface PopupType{
	title:string,
	content:string,
	time:string,
}
const show = ref(false)
const onPopup = (e:any = true, item ?: any) => {
	if (item) {
		popupData.title = item.key
		popupData.content = item.key
		popupData.time = item.time || '2022/5/30'
	}
	show.value = e
}
const popupData = reactive({
	title:'Note1',
	content:'内容',
	time:'2022/5/30',
})

const tabs = reactive([
	{ label: "Basic", value: "1" },
	{ label: "Important", value: "2" },
])
const clickTab = (e:any) => {
	console.log(e,111)
}

const list = reactive([
  {
    key:'吃饭',
    value:'',
  },
  {
    key:'睡觉',
    value:'',
  },
  {
    key:'上厕所',
    value:'',
  },
  {
    key:'烧烤',
    value:'',
  },
	{
    key:'火锅',
    value:'',
  },
	{
    key:'大盘鸡',
    value:'',
  },
	{
    key:'大盘鸡',
    value:'',
  },
	{
    key:'大盘鸡',
    value:'',
  },
])
</script>
<style lang='less' scoped>
.schedule{
	transition: all 1s ease-out;
	width: 80%;
	height: 50px;
	/* Blue-Linear */
	background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
	opacity: 0.2;
	border-radius: 16px;
}
.difficult{
	width: 80%;
	height: 50px;
	/* Purple-Linear */
	background: linear-gradient(274.42deg, #C58BF2 0%, #EEA4CE 124.45%);
	opacity: 0.2;
	border-radius: 16px;
}

.list-pane{
	box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
}

.btmSheet{
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 12px 24px;
	height:90%;
	box-sizing: border-box;
	.title{
		border-bottom: 1px solid #C58BF2;
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

