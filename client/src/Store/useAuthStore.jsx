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
    },
    isUserRegistered: false,
    setisUserRegistered: (userRegisterationStatus) => {
      set((state) => {
        return {
          ...state,
          isUserRegistered: userRegisterationStatus,
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
    isAdmin: false,
    setisAdmin: (adminStatus) => {
      set((state) => {
        return {
          ...state,
          isAdmin: adminStatus,
        }
      })
    },
  }
})

export default useAuthStore
