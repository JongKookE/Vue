<template>
  <div class="container mt-3">
    <!-- mt-3 추가 -->

    <h4 class="text-center">게시판 - Main</h4>

    <div class="input-group mb-3 mt-3">
      <!-- mb-3 mt-3  추가 -->
      <input id="inputSearchWord" type="text" class="form-control" placeholder="Search" />
      <button id="btnSearchWord" class="btn btn-success" type="button">Search</button>
    </div>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일시</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody id="boardTbody">
        <tr v-for="(board, index) in boardStore.list" :key="index">
          <td>{{ board.boardId }}</td>
          <td>{{ board.userTitle }}</td>
          <td>{{ board.userName }}</td>
          <td>
            {{
              util.makeDateStr(board.regDt.date, '/') +
              ' ' +
              util.makeTimeStr(board.regDt.time, ':')
            }}
          </td>
          <td>{{ board.readCount }}</td>
        </tr>
      </tbody>
    </table>

    <div id="paginationWrapper"></div>
    <PaginationUI></PaginationUI>
    <insert-modal></insert-modal>
    <detail-modal></detail-modal>
    <UpdateModal></UpdateModal>

    <button class="btn btn-sm btn-primary" id="btnBoardInsertUI">글쓰기</button>
  </div>
</template>

<script setup>
// components를 import
import PaginationUI from '../components/PaginationUI.vue'
import InsertModal from '../components/modals/InsertModal.vue'
import DetailModal from '../components/modals/DetailModal.vue'
import UpdateModal from '../components/modals/UpdateModal.vue'
import util from '@/common/util'
import { useBoardStore } from '../stores/boardStore'
// import { useRouter } from 'vue-router'

// const router = useRouter()

const { boardStore, boardList } = useBoardStore()
boardList()

// const login = async () => {
//   let loginObj = {
//     userPassword: authStore.userPassword,
//     userEmail: authStore.userEmail
//   }
//   try {
//     let { data } = await http.post('/login', loginObj)
//     if (data.result == 'success') {
//       sessionStorage.setItem('isLogin', 'true')
//       sessionStorage.setItem('userName', data.userName)
//       sessionStorage.setItem('userProfileImageUrl', data.userProfileImageUrl)
//       setLogin({
//         isLogin: true,
//         userName: data.userName,
//         userProfileImageUrl: data.userProfileImageUrl
//       })
//     } else if (data.result == 'fail') {
//       alert('이메일 또는 비밀번호를 입력하세요')
//     }
//     console.log(data)
//     router.push('/board')
//   } catch (error) {
//     console.log(error)
//   }
// }
</script>
