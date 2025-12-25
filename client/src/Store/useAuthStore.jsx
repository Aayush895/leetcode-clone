import { create } from 'zustand'

const useAuthStore = create((set) => {
  return {
    userInfo: {},
    setUserInfo: (userDetails) => {
      set((state) => {
        return {
          ...state,
          userInfo: { ...userDetails },
        }
      })
    },
    isUserLoggedIn: false,
    setisUserLoggedIn: (userLoginStatus) => {
      set((state) => {
        return {
          ...state,
          isUserLoggedIn: userLoginStatus,
        }
      })
    },
  }
})

export default useAuthStore
