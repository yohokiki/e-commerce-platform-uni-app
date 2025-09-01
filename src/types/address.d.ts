// 收货地址
export type AddressItem = {
  id: string //收货地址id
  receiver: string //收货人姓名
  contact: string //联系方式
  provinceCode: string //所在省份编码
  cityCode: string //所在城市编码
  countyCode: string //所在区/县编码
  fullLocation: string //省市区(县)
  address: string //详细地址
  isDefault: number //是否为默认，1为是，0为否
}
