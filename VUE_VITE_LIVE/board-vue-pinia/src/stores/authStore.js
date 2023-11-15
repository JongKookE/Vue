import { reactive } from 'vue'
import { defineStore } from 'pinia'

import notloginUserProfileImageUrl from '@/assets/noProfile.png'
export const useAuthStore = defineStore('authStore', () => {
  //로그인 여부, 사용자 이름, 프로필 이미지, 로그인 항목

  const authStore = reactive({
    isLogin: false,
    userName: '',
    userProfileImageUrl: notloginUserProfileImageUrl,
    userEmail: '종국@com',
    userPassword: '1234'
  })
  //로그인 후 변경

  const setLogin = (payload) => {
    console.log(payload)
    authStore.isLogin = payload.isLogin
    authStore.userName = payload.userName
    authStore.userProfileImageUrl = payload.userProfileImageUrl
    console.log(authStore)
  }

  return { authStore, setLogin }
})
