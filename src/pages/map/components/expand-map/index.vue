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
      :polyline="polyline"
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

/**
 * 开通微信定位功能，需要再manifest中开通
 * 并且再微信小程序中申请权限
 * "permission": {
      "scope.userLocation": {
        "desc": "小程序将使用定位功能"
      }
    }
 */
const latitude = ref<number>(0)
const longitude = ref<number>(0)
wx.authorize({
  scope: 'scope.userLocation',
  success: function (res) {
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        latitude.value = res.latitude
        longitude.value = res.longitude
      }
    })
  },
  fail: function (data) {
    console.log(data);
  }
})

const {markers} = getMarkers()
const polyline = [{
  points: [
    {
      id: 1,
      latitude: 36.8131,
      longitude: 118.0548,
      iconPath: '../../../../static/images/map/marker.png',
    },
    {
      id: 2,
      latitude: 36.8231,
      longitude: 118.0548,
      iconPath: '../../../../static/images/map/marker.png',
    },
  ],//是一个数组形式的坐标点[{lat,log}]
  // color:"#AEFA24",//线条的颜色
  color:"#68B887",//线条的颜色
  width: 6,//宽度
  // borderColor:'#AEFA2490',
  // arrowLine: true,//是否带箭头
  borderWidth:0//线的边框宽度，还有很多参数，请看文档
}]

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
