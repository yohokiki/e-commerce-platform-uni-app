import { GoodsItem } from './gobal'

// 商品详情
export type DetailItem = {
  id: string
  name: string //商品名称
  spuCode: string //spu编码
  desc: string
  price: string //当前价格
  oldPrice: string //原价
  discount: number //折扣
  inventory: number //库存
  brand: BrandItem //品牌信息
  salesCount: number //销量
  commentCount: number //评价数量
  collectCount: number //收藏数量
  mainVideos: Array<string> //主图视频集合
  videoScale: number //主图视频比例,1为1:1/16:9，2为3:4
  mainPictures: Array<string> //主图图片集合

  specs: SpecsItem[] //可选规格集合备注：规格集合一定要和skus集合下的specs 顺序保持一致
  skus: SkusItem[] //sku集合

  categories: CategoriesItem[] //所属分类，多级以数组形式体现，如[一级分类，二级分类，三级分类]
  details: DetailInfoItem //商品详情

  isPreSale: Boolean //是否为预售商品

  isCollect: null

  recommends: null

  userAddresses: null //用户收货地址列表

  evaluationInfo: null

  similarProducts: GoodsItem[] //同类商品

  hotByDay: GoodsItem //24小时热销
}

//品牌信息
type BrandItem = {
  id: string //品牌id
  name: string //品牌名称
  nameEn: string //品牌英文名称
  picture: string //图片
  logo: string //logo
  type: null
  desc: null
  place: null
}

// 可选
type SpecsItem = {
  id: string
  name: string
  values: OptionalValue[]
}
// 可选集合
type OptionalValue = {
  name: string
  picture: string
  available?: Boolean
  desc: string
}

//Sku集合
type SkusItem = {
  id: string
  skuCode: string
  price: string
  oldPrice: string
  inventory: number
  picture: string
  specs: {
    name: string
    valueName: string
  }
}

// 所属分类
type CategoriesItem = {
  id: string
  name: string
  layer: number
  parent: null | CategoriesItem
}

// 商品详情
type DetailInfoItem = {
  properties: { name: string; value: string }[]
  pictures: Array<string>
}
