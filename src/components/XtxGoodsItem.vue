<script setup lang="ts">
import { GoodsItem } from '@/types/gobal'

defineProps<{ goods: GoodsItem }>()
</script>

<template>
  <navigator
    :url="`/pages/Detail/Detail?id=${goods.id}`"
    open-type="navigate"
    hover-class="navigator-hover"
    class="goods"
  >
    <image :src="goods.picture" mode="aspectFill" class="image" />
    <view class="name">{{ goods.desc }}</view>
    <view class="price">
      <text class="small">￥</text>
      <text>{{ goods.price }}</text>
    </view>
  </navigator>
</template>

<style lang="scss">
.goods {
  width: 310rpx;
  padding: 24rpx 20rpx 20rpx;
  margin-bottom: 20rpx;
  border-radius: 10rpx;
  overflow: hidden;
  background-color: #fff;
  .image {
    width: 290rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
</style>
