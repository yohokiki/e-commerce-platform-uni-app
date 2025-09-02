import { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

/**
 * 获取收货地址列表
 * @returns 地址列表
 */
export const getAddressAPI = () => {
  return http<AddressItem[]>({
    url: '/member/address',
    method: 'GET',
  })
}

/**
 * 获取详细地址信息
 * @param id 地址id
 * @returns 详细地址
 */
export const getAddressDetailAPI = (id: string) => {
  return http<AddressItem>({
    url: `/member/address/${id}`,
    method: 'GET',
  })
}

/**
 * 修改收货地址
 * @param id 收货地址id
 */
export const putAddressAPI = (id: string, data: AddressParams) => {
  return http({
    url: `/member/address/${id}`,
    method: 'PUT',
    data,
  })
}

/**
 * 根据id删除收货地址
 * @param id 收货地址id
 */
export const delAddress = (id: string) => {
  return http({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}

export const postAddress = (data: AddressParams) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data,
  })
}
