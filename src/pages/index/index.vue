<script setup lang="ts">
import { ref } from 'vue'
import { getBannerAPI, getHomeCategoryAPI, getHotListAPI } from '@/services/home'
import { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import CostomNavbar from './components/CostomNavbar.vue'
import { useGuessList } from '@/composables/index'
import PageSkeleton from './components/PageSkeleton.vue'
// 轮播图
const imgList = ref<BannerItem[]>([])
const getImagList = async () => {
  const res = await getBannerAPI()
  imgList.value = res.result
}

// 首页分类
const categoryList = ref<CategoryItem[]>([])
const getCategory = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 热门推荐
const hotList = ref<HotItem[]>([])
const getHotList = async () => {
  const res = await getHotListAPI()
  hotList.value = res.result
}
const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true
  await Promise.all([getImagList(), getCategory(), getHotList()])
  isLoading.value = false
})

// 猜你喜欢组合函数调用
const { guessRef, onScrolltolower } = useGuessList()
// 下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开始动画
  isTriggered.value = true
  // 加载数据
  guessRef.value?.restData()
  await Promise.all([getImagList(), getCategory(), getHotList(), guessRef.value?.getMore()])
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CostomNavbar />
  <!-- 滚动容器 -->
  <scroll-view
    enable-back-to-top
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="imgList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef"></XtxGuess>
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
