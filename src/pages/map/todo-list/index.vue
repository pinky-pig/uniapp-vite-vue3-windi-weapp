<template>
  <view :class="$style.container">
    <!-- 标题 -->
    <view :class="$style.title">List</view>
    <!-- card -->
    <view :class="$style.content">
      <view :class="$style.left"></view>
      <view :class="$style.right">
        <view :class="$style.rt"></view>
        <view :class="$style.rb"></view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">

</script>
<style lang="less" module>
  .container {
    position: absolute;
    width: 93%;
    .title{
      width: 97px;
      margin-left: 10px;
      height: 23px;
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 600;
      font-size: 19px;
      line-height: 23px;
      color: #2E2E31;
      margin-bottom: 10px;
    }
  }
  .content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left{
      width: 250px;
      height: 192px;
      background: #FFFFFF;
      box-shadow: 1px 7px 22px rgba(32, 32, 32, 0.11);
      border-radius: 20px;
    }
    .right{
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .rt{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 95px;
        height: 93px;
        background: #FFFFFF;
        box-shadow: 1px 7px 22px rgba(32, 32, 32, 0.11);
        border-radius: 20px;
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
      }
      .rb{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;

        width: 95px;
        height: 93px;

        background: #FFFFFF;
        box-shadow: 1px 7px 22px rgba(32, 32, 32, 0.11);
        border-radius: 20px;

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;
      }
    }
  }
</style>