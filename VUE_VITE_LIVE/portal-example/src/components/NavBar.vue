<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">home</router-link>
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
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <router-link to="/cafe" class="nav-link">Cafe</router-link>
          </li>

          <li class="nav-item">
            <!-- <router-link to="/mail/:from/:content" class="nav-link">mail</router-link> -->
            <!-- Named Route -->
            <router-link
              :to="{ name: 'Mail', params: { from: '홍길동', content: '내용입니다.' } }"
              class="nav-link"
              >mail</router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/blog" class="nav-link">Blog</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/tellme" class="nav-link">TellMe</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchKeyword"
          />
          <button class="btn btn-outline-success" @click.prevent="clickSearch()">Search</button>
          <ul class="navbar-nav ms-5 mb-lg-0 mt-2">
            <li class="nav-item">
              <img
                :src="userData.userProfileImageUrl"
                alt=""
                width="30"
                height="24"
                style="width: 24px; height: 24px; border-radius: 50%"
              />
            </li>

            <li class="nav-item" v-show="isLogin">
              <a class="nav-link" href="#"> {{ userData.userName }} Logout</a>
            </li>

            <li class="nav-item" v-show="!isLogin">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, reactive } from 'vue'
// vite 가 static content 에 대해 대신 hard-coding 방식으로 처리해준다.
import notLoginUserProfileImageUrl from '/src/assets/noProfile.png'
const searchKeyword = ref('')
const clickSearch = () => {
  alert(searchKeyword.value)
}

// 로그인 여부
// 로그인을 했을경우에는 사용자 data 가 필요함 (userName, userProfileImageUrl)

const isLogin = ref(false)
const userData = reactive({
  userName: '',
  userProfileImageUrl: notLoginUserProfileImageUrl
})
</script>
