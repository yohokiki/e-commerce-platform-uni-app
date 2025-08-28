import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/component'
/**
 * 猜你喜欢组合式函数
 */
export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()

  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
    console.log('我到底部了')
  }

  return {
    guessRef,
    onScrolltolower,
  }
}
