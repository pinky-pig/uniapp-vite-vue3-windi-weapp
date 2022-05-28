<template>
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
	<view class=" flex flex-row items-center justify-between px-5 box-border" style="width: 100vw;height: 40px">
		<view class=" font-bold"> Task Inventory</view>
		<image style="width: 30px;height: 30px;" class=" text-gray-400" src="@/static/images/list/search.svg" ></image>
	</view>

	<!-- 列表 -->
	<view style="width: 100vw;">
		<scroll-view class=" px-5 box-border" scroll-y>

			<view class="list-pane">
				<view v-for="(item,index) in list" :key="index">
					<uu-cell :height="'80px'">
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

</template>

<script setup lang="ts">
import uuTab from "@/component/common/uu-tab.vue";
import todoList from "./todo-list/index.vue";
import uuCell from '@/component/common/uu-cell.vue';
import { reactive } from "vue";

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
])
</script>
<style lang='less' scoped>
.schedule{
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
</style>

