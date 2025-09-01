import { GoodsItem, PageResult } from './gobal'
import { PageParams } from '@/types/gobal'
// 子类选项goodsItems
export type SubTypeItem = {
  id: string
  title: string // 子类选项名称
  goodsItems: PageResult<GoodsItem>
}

// 子类选项合集
export type hotResult = {
  id: string // id
  title: string //活动标题
  bannerPicture: string // 活动图片
  subTypes: SubTypeItem[] //子类选项合集
}

export type HotParams = PageParams & { subType?: string }
