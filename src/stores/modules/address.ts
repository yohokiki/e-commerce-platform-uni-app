import { getAddressAPI } from '@/services/address'
import { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore(
  'address',
  () => {
    // 地址列表
    const addressList = ref<AddressItem[]>([])
    // 选择的地址列表
    const changeAddress = ref<AddressItem>()

    // 获取地址列表
    const getAddressList = async () => {
      const res = await getAddressAPI()
      addressList.value = res.result
    }

    // 订单页选择地址
    const setChangeAddress = (item: AddressItem) => {
      changeAddress.value = item
    }

    return {
      addressList,
      changeAddress,
      getAddressList,
      setChangeAddress,
    }
  },
  // TODO: 持久化
  {
    // 配置持久化
    persist: {
      // 调整为兼容多端的API
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      },
    },
  },
)
