<script setup lang="ts">
import { getPreferenceAPI } from '@/services/hot'
import { PageParams } from '@/types/gobal'
import { HotParams, hotResult, SubTypeItem } from '@/types/hot'
import { onLoad } from '@dcloudio/uni-app'
import { ref, watchEffect } from 'vue'

const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

const query = defineProps<{
  type: string
}>()
// 获取标题
const getHot = hotMap.find((t) => t.type === query.type)
// 设置标题
uni.setNavigationBarTitle({ title: getHot!.title })

//获取URL
const thisURL: string = getHot!.url
//定义页码和页面大小
const reqData: HotParams = {
  // page: import.meta.env.DEV ? 30 : 1,
  page: 1,
  pageSize: 10,
}

// 高亮下标
const isChoose = ref(0)
// 背景图
const backImg = ref('')
// 子类选项
const childList = ref<(SubTypeItem & { finish?: boolean })[]>([])
// 获取当前页信息
const getHotInfo = async () => {
  const res = await getPreferenceAPI(thisURL, reqData)
  backImg.value = res.result.bannerPicture
  childList.value = res.result.subTypes
}

//滑动到底部
const onScrolltolower = async () => {
  // 新增数据到哪一子类下面
  const PageInfo = childList.value[isChoose.value]
  // 分页条件
  if (PageInfo.goodsItems.page < PageInfo.goodsItems.pages) {
    PageInfo.goodsItems.page++
  } else {
    PageInfo.finish = true
    return uni.showToast({ icon: 'none', title: '没有更多数据了~' })
  }
  // 更新数据
  Object.assign(reqData, {
    page: PageInfo.goodsItems.page,
    pageSize: PageInfo.goodsItems.pageSize,
    subType: PageInfo.id,
  })
  // 追加数据
  const res = await getPreferenceAPI(thisURL, reqData)
  const newPageInfo = res.result.subTypes[isChoose.value]
  PageInfo.goodsItems.items.push(...newPageInfo.goodsItems.items)
}

onLoad(() => getHotInfo())
watchEffect(() => {
  console.log(isChoose.value)
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="backImg"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        class="text"
        v-for="(item, index) in childList"
        :key="item.id"
        :class="{ active: index === isChoose }"
        @click="isChoose = index"
        >{{ item.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      scroll-y
      class="scroll-view"
      v-for="(value, index) in childList"
      :key="value.id"
      v-show="isChoose === index"
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in value.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.desc }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">正在加载...</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
