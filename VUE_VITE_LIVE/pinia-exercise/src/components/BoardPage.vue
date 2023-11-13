<template>
  <h1>BoradPage.vue</h1>
  <input type="text" v-model="boardState.searchWord" /> <br />
  limit:{{ boardState.limit }} &nbsp; offset:{{ boardState.offset }}&nbsp; totalCount:
  {{ totalCount }}
  <br />
  <button @click="search()">검색</button>
  <button @click="nextPage()">다음 페이지</button>
  <button @click="changeTotalCount()">총 건수 바꾸기</button>

  <h4>목록</h4>
  <table>
    <tr
      v-for="board in boardState.boardListData"
      :key="board.boardId"
      @click="detailBoard(board.boardId)"
    >
      <td>{{ board.boardId }}</td>
      <td>{{ board.userSeq }}</td>
      <td>{{ board.title }}</td>
      <td>{{ board.content }}</td>
    </tr>
  </table>
  <button @click="listBoard()">목록 가져오기</button>
  <h4>상세</h4>
  <table>
    <tr>
      <td>{{ boardState.boardData.boardId }}</td>
      <td>{{ boardState.boardData.userSeq }}</td>
      <td>{{ boardState.boardData.title }}</td>
      <td>{{ boardState.boardData.content }}</td>
    </tr>
  </table>
</template>

<script setup>
import { useBoardStore } from '../stores/boardStore'
import { storeToRefs } from 'pinia'
const store = useBoardStore()
console.log(store)

const { boardState, listBoard, detailBoard, totalCount } = store
// const { totalCount } = storeToRefs(store)

const search = () => {
  console.log(boardState)
}
const nextPage = () => {
  boardState.offset = boardState.limit + boardState.offset
}

// value는 오브젝트에서만 사용할 수 있는데 BoardStore.js에서 초기화를 단순 숫자로 초기화해서 그렇대
// 그래서 storeToRefs를 사용해서 넘겨줘야 한다! -> ref를
const changeTotalCount = () => (totalCount = 100)
</script>
