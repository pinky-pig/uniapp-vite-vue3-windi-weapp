<template>
  <view class="content flex-center flex-col">
    <map
      id="mapId"
      class="map"
      style="width: 100%;height: 100vh;"
      bindmarkertap="onMarkerTap"
      bindcallouttap="onCalloutTap"
      bindlabeltap="onLabelTap"
      :latitude="latitude"
      :longitude="longitude"
      :markers="markers"
    ></map>
  </view>
</template>

<script setup lang="ts">
import { computed, ref , reactive,onMounted} from 'vue'

type MarkerType = {
  id: number,
  latitude: number,
  longitude: number,
  iconPath: string,
  callout: object,
}
const latitude = ref<number>(23.099994)
const longitude = ref<number>(113.324520)
const markers = ref<Array<MarkerType>>([{
  id: 1,
  latitude: 23.098994,
  longitude: 113.322520,
  iconPath: '../../static/location.png',
  callout: {
    content: '文本内容',
    color: '#ff0000',
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000000',
    bgColor: '#fff',
    padding: 5,
    display: 'ALWAYS',
    textAlign: 'center'
  },
}])

let mapCtx = null
onMounted(() => {
  mapCtx = wx.createMapContext('mapId')
})

</script>

<style lang='less' module>
@import "@/wxcomponents/@vant/weapp/common/index.wxss";
.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}



</style>
