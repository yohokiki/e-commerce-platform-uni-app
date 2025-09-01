import { TopCategoryItem } from '@/types/category'
import { http } from '@/utils/http'

//获取全部一级分类
export const getCategoryAPI = () => {
  return http<TopCategoryItem[]>({
    url: '/category/top',
    method: 'GET',
  })
}
