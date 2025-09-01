<script lang="ts" setup>
// 需要从后端获取全部数据
const goodsList = []
</script>
<template>
  <view>
    <XtxGoodsItem v-for="value in goodsList" :key="value" :goods="value"></XtxGoodsItem>
  </view>
</template>

<style lang="scss"></style>
