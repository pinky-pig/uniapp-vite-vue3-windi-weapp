<template>
  <view class="content flex-center flex-col">
    <view :class="$style.close" class="flex-center" @touchend="onReturn">
      <text class="iconfont icon-arrow-left"></text>
    </view>
    <view :class="$style.setting" class="flex-center">
      <text class="iconfont icon-setting-fill"></text>
    </view>
    <view :class="$style.bottom">
      <operate-panel></operate-panel>
    </view>

    <map
      id="mapId"
      class="map"
      style="width: 100%;height: 100vh;"
      :latitude="latitude"
      :longitude="longitude"
      :markers="markers"
      :subkey="MAPSUBKEY_WHITE"
      @markertap="onMarkerTap"
      @callouttap="onCalloutTap"
      @labeltap="onLabelTap"
    >
    </map>
  </view>
</template>

<script setup lang="ts">
import { ref ,onMounted} from 'vue'
import { MAPSUBKEY_WHITE } from '@/config'
import { getMarkers } from '@/mock/markers'
import operatePanel from "../operate-panel/index.vue";
const onReturn = () => {
  uni.switchTab({
    url: '/pages/map/index',
  })
}
const latitude = ref<number>(23.099994)
const longitude = ref<number>(113.324520)
const {markers} = getMarkers()

let mapCtx:any = null
onMounted(() => { mapCtx = wx.createMapContext('mapId') })
const onMarkerTap = () => { console.log(1) }
const onCalloutTap = () => { console.log(2) }
const onLabelTap = () => { console.log(3) }

</script>

<style lang='less' module>
.close {
  position: absolute;
  width: 48px;
  height: 48px;
  left: 8px;
  top: 42px;
  z-index: 1;
  background: #FFFFFF;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 0 30px 1px rgb(0 0 0 / 15%);
  border-radius: 15px;
  font-size: 20px;
}
.setting {
  position: absolute;
  width: 48px;
  height: 48px;
  left: 8px;
  top: 102px;
  z-index: 1;
  background: #FFFFFF;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 0 30px 1px rgb(0 0 0 / 15%);
  border-radius: 15px;
  font-size: 20px;
}
.bottom{
  position: fixed;
  width: 93%;
  bottom: 8px;
  z-index: 1;
}

</style>
