<script setup lang="ts">
import { getLikeListAPI } from '@/services/home'
import { GoodsItem, PageParams, PageResult } from '@/types/gobal'
import { GusessItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { onMounted, ref } from 'vue'

//-- 猜你喜欢 --
//已结束
const finish = ref(false)
// 获取你可能喜欢列表
const LikeList = ref<GusessItem[]>([])
const reqData: Required<PageParams> = {
  page: 2,
  pageSize: 10,
}
const getLikeList = async () => {
  if (finish.value === true) {
    // 到底了
    return uni.showToast({ icon: 'none', title: '没有更多数据了~' })
  }
  const res = await getLikeListAPI(reqData)
  // 新获取的数据加进来
  LikeList.value.push(...res.result.items)
  if (reqData.page < res.result.pages) {
    reqData.page++
  } else {
    finish.value = true
  }
  // console.log(LikeList.value.items)
}

const restData = () => {
  reqData.page = 1
  LikeList.value = []
  finish.value = false
}

onMounted(() => getLikeList())

defineExpose({
  restData,
  getMore: getLikeList,
})
</script>

<template>
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <XtxGoodsItem
      v-for="value in LikeList"
      :key="value.id"
      :goods="value"
      class="guess-item"
    ></XtxGoodsItem>
  </view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 310rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
