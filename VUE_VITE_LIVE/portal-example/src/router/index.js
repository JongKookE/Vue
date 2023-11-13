import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import CafePage from '@/components/CafePage.vue'
import BlogPage from '@/components/BlogPage.vue'
import MailPage from '@/components/MailPage.vue'
import MainPage from '@/components/MainPage.vue'
import TellMe from '@/components/TellMe.vue'
import LoginPage from '@/components/LoginPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/cafe',
      component: CafePage
    },
    {
      path: '/blog',
      component: BlogPage,
      beforeEnter: (to, from, next) => {
        console.log('/blog - beforeEnter')
        let userRole = '1'
        if (userRole != '') {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/mail/:from/:content',
      name: 'Mail',
      component: MailPage
    },
    {
      path: '/tellme',
      component: TellMe
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    }
  ]
})

// Global Navigation Guard
// without next
// router.beforeEach((to, from) => {
//   let isLogin = false

//   if (isLogin || to.path == '/' || to.name == 'Login') {
//     return true
//   } else {
//     console.log('router - beforeEach - else')
//     return {
//       name: 'Login'
//     }
//   }
// })

// router.beforeEach((to, from, next) => {
//   let isLogin = false

//   if (isLogin || to.path == '/' || to.name == 'Login') {
//     next()
//   } else {
//     console.log('router - beforeEach - else')
//     next('/login')
//     // next({name:"Login"});
//   }
// })

export default router
