import { http } from '@/utils/http'
import { BannerItem, CategoryItem, GusessItem, HotItem } from '@/types/home'
import { PageParams, PageResult } from '@/types/gobal'

export const getBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}

export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

export const getHotListAPI = () => {
  return http<HotItem[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}
export const getLikeListAPI = (data?: PageParams) => {
  return http<PageResult<GusessItem>>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data,
  })
}
