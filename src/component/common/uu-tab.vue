<template>
  <view class="tab-pane">
    <view
      @click="onTapItem(item, index)"
      v-for="(item, index) in props.tabs"
      class="item"
      :style="{ color: active == index ? '#ffffff' : 'gray' }"
      :key="index"
    >
      <view> {{ item.label }} </view>
    </view>

    <view class="bg flex-center">
      <view class="tabItemBg"></view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue"
/**
 * 容器内两个dom节点。
 * 1.tab的项，自动填满
 * 2.背景色，长宽跟tab的一样
 * 容器relative，背景dom absolute
 * (100 / (props.tabs.length) 是背景的宽度，(  * index)也是背景的left。
 */

type tabsType = {
  label: string
  value: string
}
interface Props {
  /** tab */
  tabs: Array<tabsType>
}
const props = withDefaults(defineProps<Props>(), {
  tabs: () => [
    { label: "item1", value: "1" },
    { label: "item2", value: "2" },
  ],
})

/** 背景移动 */
const active = ref(0)

const bgWidth: Ref<string> = ref("100%")

bgWidth.value = 100 / props.tabs.length + "%"

const bgLeft: Ref<string> = ref("0px")

/** emit点击事件 */
interface Emits {
	/** 点击tab项 */
  (e: 'click-tab',value: any): void;
}

const emit = defineEmits<Emits>();

const onTapItem = (item: object, index: number) => {
  bgLeft.value = (100 / props.tabs.length) * index + "%"
  active.value = index

	emit('click-tab', item);
}



</script>
<style lang="less" scoped>
.tab-pane {
  width: 100%;
  height: 72rpx;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  // box-sizing: border-box;
  background-color: #f7f8f8;
  border-radius: 30px;
	padding: 10px 0;

  .item {
    flex: 1;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 30px;
    height: 100%;
    // border: 1px solid #9dceff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .bg {
    position: absolute;
    top: 0;
    left: v-bind(bgLeft);
    width: v-bind(bgWidth);
    box-sizing: border-box;
    padding: 5px 8px;
    height: 100%;
    transition: all 0.5s;
  }

  .tabItemBg {
    border-radius: 30px;
    height: 80%;
    width: 100%;
    background: linear-gradient(274.42deg, #92a3fd 0%, #9dceff 124.45%);
  }
}
</style>
