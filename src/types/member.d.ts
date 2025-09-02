// 用户信息
export type MemberInfoItem = {
  id: string
  mobile: string //手机号码
  token: string //令牌
  nickname: string //昵称
  avatar: string //头像
  account: string //用户名
}

/** 个人信息 用户详情信息 */
export type ProfileDetail = MemberInfoItem & {
  /** 性别 */
  gender?: Gender
  /** 生日 */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
}
/** 性别 */
export type Gender = '女' | '男'

/** 个人信息 修改请求体参数 */
export type ProfileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  /** 省份编码 */
  provinceCode?: string
  /** 城市编码 */
  cityCode?: string
  /** 区/县编码 */
  countyCode?: string
}
