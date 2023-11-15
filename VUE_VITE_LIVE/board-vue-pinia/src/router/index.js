import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '@/views/UsersView.vue'
import LoginView from '@/views/LoginView.vue'
import BoardView from '@/views/BoardView.vue'
import { useAuthStore } from '../stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Board',
      component: BoardView,
      // next는 갈지 말지에 관한 함수?
      beforeEnter: (to, from, next) => {
        // store 에서 isLogin 확인 후 분기
        const { authStore } = useAuthStore()
        let ssLogin = sessionStorage.getItem('isLogin')

        if (authStore.isLogin && ssLogin) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/users',
      name: 'Users',
      component: UsersView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/board',
      name: 'Board',
      component: BoardView,
      // next는 갈지 말지에 관한 함수?
      beforeEnter: (to, from, next) => {
        // store 에서 isLogin 확인 후 분기
        const { authStore } = useAuthStore()
        let ssLogin = sessionStorage.getItem('isLogin')

        if (authStore.isLogin || ssLogin) {
          next()
        } else {
          next('/login')
        }
      }
    }
  ]
})

export default router
