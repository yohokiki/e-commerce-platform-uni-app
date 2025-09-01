import { GoodsItem } from './gobal'

// 二级分类集合
export type SubCategoryItem = {
  id: string
  name: string // 二级分类名称
  picture: string //二级分类图片
  parentId: null
  parentName: null
  goods: GoodsItem[] //商品集合
  categories: null
  brands: null
  saleProperties: null
}

// 一级分类
export type TopCategoryItem = {
  id: string
  name: string
  picture: string //一级分类图片
  imageBanners: Array<string> //一级分类图片集
  children: SubCategoryItem[] //二级分类集合
}
