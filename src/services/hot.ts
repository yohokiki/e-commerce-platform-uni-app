import { HotParams, hotResult } from '@/types/hot'
import { http } from '@/utils/http'

export const getPreferenceAPI = (url: string, data?: HotParams) => {
  return http<hotResult>({
    method: 'GET',
    url,
    data,
  })
}
