import { reactive } from 'vue'
import { defineStore } from 'pinia'
import http from '@/common/axios.js'
import { useRouter } from 'vue-router'

import notloginUserProfileImageUrl from '@/assets/noProfile.png'
// store 에서 라우터를 사용하려면 defineStore 안에 선언을 해야한다.
export const useBoardStore = defineStore('boardStore', () => {
  const router = useRouter()
  const boardStore = reactive({
    limit: 10,
    offset: 0,
    list: []
  })

  const setBoardList = (list) => {
    boardStore.list = list
    console.log(boardStore.list)
  }

  //로그인 여부, 사용자 이름, 프로필 이미지, 로그인 항목
  const boardList = async () => {
    let params = {
      limit: boardStore.limit,
      offset: boardStore.offset
    }
    try {
      let { data } = await http.get('/boards', { params }) // {params : param}
      console.log(data)
      if (data.result == 'login') {
        router.push('/login')
      } else {
        setBoardList(data.list)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return { boardStore, boardList }
})
