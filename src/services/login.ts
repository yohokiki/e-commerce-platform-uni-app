import { LoginParams } from '@/types/login'
import { MemberInfoItem } from '@/types/member'
import { http } from '@/utils/http'

/**
 * 小程序登录请求
 * @param data 登录参数
 * @returns 登录
 */
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}

/**
 * 内测登录
 * @param phoneNumber 电话号码
 * @returns 登录
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<MemberInfoItem>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: { phoneNumber },
  })
}
