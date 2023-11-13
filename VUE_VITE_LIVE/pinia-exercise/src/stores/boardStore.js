import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('boardStore', () => {
  // state
  const boardState = reactive({
    limit: 10,
    offset: 0,
    searchWord: 'ssafy',
    boardData: { boardId: 0, userSeq: 0, title: '', content: '' },
    boardListData: []
  })

  const totalCount = reactive(3)

  const testBoardListData = [
    { boardId: 1, userSeq: 100, title: '111', content: '111111' },
    { boardId: 2, userSeq: 100, title: '222', content: '222222' },
    { boardId: 3, userSeq: 100, title: '333', content: '333333' }
  ]

  const testBoardData = { board: 2, userSeq: 100, title: '222', content: '222222' }

  function listBoard() {
    boardState.boardListData = testBoardListData
  }

  function detailBoard(boardId) {
    console.log(boardId)
    boardState.boardData = testBoardListData[boardId - 1]
  }
  return { boardState, listBoard, detailBoard, totalCount }
})
