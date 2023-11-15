<template>
  <nav class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0 float-end">
            <li class="nav-item pt-2">
              <img
                v-bind:src="authStore.userProfileImageUrl"
                alt=""
                style="width: 24px; height: 24px; border-radius: 50%"
              />
            </li>
            <li class="nav-item" v-show="!authStore.isLogin">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item" v-show="authStore.isLogin">
              <a class="nav-link" href="#" @click="logout()">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script setup>
import http from '@/common/axios.js'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import notloginUserProfileImageUrl from '@/assets/noProfile.png'

const router = useRouter()
const { authStore, setLogin } = useAuthStore()

const logout = async () => {
  try {
    let { data } = await http.get('/logout')
    console.log(data)
    if (data.result == 'success') {
      sessionStorage.removeItem('isLogin')
      sessionStorage.removeItem('userName')
      sessionStorage.removeItem('userProfileImageUrl')
      setLogin({
        isLogin: false,
        userName: '',
        userProfileImageUrl: notloginUserProfileImageUrl
      })
      router.push('/login')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
