import { GoodsItem } from './gobal'

// 轮播图
export type BannerItem = {
  id: string
  imgUrl: string // banner链接
  hrefUrl: string // 跳转链接
  type: number //跳转类型1，页面2，H5 3，小程序
}

export type CategoryItem = {
  id: string
  name: string
  icon: string
}

export type HotItem = {
  id: string
  title: string // 推荐标题
  type: string //推荐类型
  alt: string // 推荐说明
  pictures: Array<string> // 图片集合
}

export type GusessItem = GoodsItem
