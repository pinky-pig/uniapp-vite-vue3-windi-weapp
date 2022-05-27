<template>
  <view class=" overflow-hidden">
    <view :class="$style.title">
      <view class=" text-3xl font-bold ">Todo</view>
    </view>
    <scroll-view
      scroll-y="true"
      style="height: calc(95vh - 80px);"
      >

      <view class="content flex-center flex-col">
        <view :class="$style['map-card']">
          <view :class="$style.mapContainer">
            <map
              id="mapPage1"
              class="map"
              style="width: 100%;height: 100%;"
              :latitude="latitude"
              :longitude="longitude"
              :subkey="MAPSUBKEY_WHITE"
            ></map>
          </view>
          <view :class="$style.contentContainer" class=" flex-1 flex-col justify-between">
            <view :class="$style.top" @touchstart="goWebView"></view>
            <view :class="$style.btm" @touchstart="onMapTap">
              在地图上查看
              <text class="iconfont icon-arrow-right"></text>
            </view>
          </view>
        </view>
        <view :class="$style['list-card']">
          <todo-list></todo-list>
        </view>
      </view>

    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { MAPSUBKEY_WHITE } from '@/config'
import { ref , onMounted} from 'vue'
import todoList from "./todo-list/index.vue"
const latitude = ref<number>(23.099994)
const longitude = ref<number>(113.324520)
let mapCtx = null
onMounted(() => {
  mapCtx = wx.createMapContext('mapId')
})
const onMapTap = () => {
  uni.navigateTo({
    url: '/pages/map/components/expand-map/index',
  })
}
const goWebView = () => {
  uni.navigateTo({
    url: '/pages/map/webview-map/index',
  })
}


// 下拉刷新
let isOpenRefresh = ref(true)
</script>

<style lang='less' module>
.title{
  width: 100%;
  height: 60px;
  padding-left: 24px;
  padding-top: 40px;
  background: rgba(250, 250, 250, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1;
}
.map-card{
  width: 93%;
  height: 150px;
  margin-top: 30px;
  background: #FFFFFF;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 0 30px 1px rgb(0 0 0 / 15%);
  // box-shadow: 1px 7px 22px rgba(32, 32, 32, 0.11);
  border-radius: 32px;
  overflow: hidden;
  transform: translateY(0); /* ios map 圆角 不生效解决方案 */

  display: flex;
  flex-direction: row;
  align-items: center;

  .mapContainer{
    width: 144px;
    height: 90%;
    margin-left: 15px;
    border-radius: 28px;
    overflow: hidden;
    transform: translateY(0); /* ios map 圆角 不生效解决方案 */
  }
  .contentContainer{
    display: flex;
    justify-content: space-between;
    height: 90%;
    padding: 0 10px;
    .top{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0px;
      width: 100%;
      height: 95px;

      background: #FFFFFF;
      box-shadow: 1px 7px 22px rgba(32, 32, 32, 0.11);
      border-radius: 20px;
      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }
    .btm{
      margin-left: 5px;
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      color: #323432;
    }
  }
}

.list-card{
  width: 93%;
  height: 400px;
  margin-top: 30px;
}
</style>
