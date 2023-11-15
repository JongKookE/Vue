<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { useAuthStore } from './stores/authStore'

const { setLogin } = useAuthStore()
// sessionStorage 에 login 된 상태를 확인하면 sessionStorage 에 있는 값을 이용해서 authStore 를 갱신
let isLogin = sessionStorage.getItem('isLogin')
if (isLogin == 'true') {
  let userName = sessionStorage.getItem('userName')
  let userProfileImageUrl = sessionStorage.getItem('userProfileImageUrl')
  setLogin({
    isLogin: true,
    userName: userName,
    userProfileImageUrl: userProfileImageUrl
  })
}
</script>

<style scoped></style>
