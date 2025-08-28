//通用类型
//商品类型
type GoodsItem = {
  id: string
  name: string //商品名
  desc: string //商品描述
  price: number //商品价格
  picture: string //商品图片
  discount: number //商品折扣
  orderNum: number //商品已下单数量
}

//分页结果
export type PageResult<T> = {
  counts: number //总条数
  pageSize: number //每页条数
  pages: number //总页数
  page: number // 当前页数
  items: T[] //当前页数据
}

/** 通用分页参数类型 */
export type PageParams = {
  /** 页码：默认值为 1 */
  page?: number
  /** 页大小：默认值为 10 */
  pageSize?: number
}
