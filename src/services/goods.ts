import { DetailItem } from '@/types/goods'
import { http } from '@/utils/http'

export const getDetailAPI = (id: string) => {
  return http<DetailItem>({
    url: '/goods',
    method: 'GET',
    data: { id },
  })
}
