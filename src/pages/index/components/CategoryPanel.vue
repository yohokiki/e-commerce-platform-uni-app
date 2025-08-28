<script setup lang="ts">
import { CategoryItem } from '@/types/home'

defineProps<{ list: CategoryItem[] }>()
</script>

<template>
  <view class="category">
    <navigator
      url="/pages/index/index"
      hover-class="none"
      class="category-item"
      v-for="item in list"
      :key="item.id"
    >
      <image :src="item.icon" mode="scaleToFill" class="icon" />
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;

  .category-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
