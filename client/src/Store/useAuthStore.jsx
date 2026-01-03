import { create } from 'zustand'

const useAuthStore = create((set) => {
  return {
    userInfo: null,
    setUserInfo: (userDetails) => {
      set((state) => {
        return {
          ...state,
          userInfo: { ...userDetails },
        }
      })
    }
  }
})

export default useAuthStore
