<template>
  <div class="container">
    <div class="mb-3 mt-5 d-flex justify-content-center">
      <h1 class="display-4"></h1>
    </div>
    <div class="mb-3">
      <h2>Login</h2>
    </div>
    <div class="mb-3">
      <label for="userEmail" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="userEmail"
        name="userEmail"
        v-model="authStore.userEmail"
      />
    </div>
    <div class="mb-3">
      <label for="userPassword" class="form-label">제목</label>
      <input
        type="password"
        class="form-control"
        id="userPassword"
        name="userPassword"
        v-model="authStore.userPassword"
      />
    </div>
    <div>
      <button id="btnLogin" @click="login" class="btn btn-primary">로그인</button> &nbsp;
      <router-link to="/users" class="btn btn-success">회원가입</router-link>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/authStore'
import http from '@/common/axios.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const { authStore, setLogin } = useAuthStore()

const login = async () => {
  let loginObj = {
    userPassword: authStore.userPassword,
    userEmail: authStore.userEmail
  }
  try {
    let { data } = await http.post('/login', loginObj)
    if (data.result == 'success') {
      sessionStorage.setItem('isLogin', 'true')
      sessionStorage.setItem('userName', data.userName)
      sessionStorage.setItem('userProfileImageUrl', data.userProfileImageUrl)
      setLogin({
        isLogin: true,
        userName: data.userName,
        userProfileImageUrl: data.userProfileImageUrl
      })
      console.log(data)
      router.push('/board')
    } else if (data.result == 'fail') {
      alert('이메일 또는 비밀번호를 입력하세요')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
