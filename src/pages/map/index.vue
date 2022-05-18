<template>
  <view class="content flex-center flex-col">
    <view :class="$style['map-card']">
      <map
        id="mapPage1"
        class="map"
        style="width: 100%;height: 100%;"
        :latitude="latitude"
        :longitude="longitude"
        :subkey="MAPSUBKEY_WHITE"
        @tap="onMapTap"
        @bindmarkertap="onMarkerTap"
        @bindcallouttap="onCalloutTap"
        @bindlabeltap="onLabelTap"
      ></map>
    </view>
  </view>
</template>

<script setup lang="ts">
import { MAPSUBKEY_WHITE } from '@/config'
import { computed, ref , reactive,onMounted} from 'vue'

const latitude = ref<number>(23.099994)
const longitude = ref<number>(113.324520)
let mapCtx = null
onMounted(() => {
  mapCtx = wx.createMapContext('mapId')
})
const onMapTap = () => {
  uni.navigateTo({
    url: '/pages/map/expand-map/index',
  })
}
const onMarkerTap = () => { console.log(1) }
const onCalloutTap = () => { console.log(2) }
const onLabelTap = () => { console.log(3) }
</script>

<style lang='less' module>
.map-card{
  position: absolute;
  width: 93%;
  height: 150px;
  top: 120px;
  background: #FFFFFF;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 0 30px 1px rgb(0 0 0 / 15%);
  border-radius: 32px;
  overflow: hidden;
  transform: translateY(0); /* ios map 圆角 不生效解决方案 */
}
</style>
