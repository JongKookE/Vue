<script setup>
import { ref } from 'vue'
import newJeans from './components/newJeans.vue'

let empData = [
  { name: '민지', age: 19 },
  { name: '하니', age: 19 },
  { name: '다니엘', age: 18 },
  { name: '혜린', age: 18 },
  { name: '혜인', age: 15 }
]

let timeGo = function (n) {
  return n * n
}

const pastYear = (member) => {
  console.log(`${member.name}의 ${timeGo(3)}전 나이는 ${member.age - 9}입니다.`)
}

const newJeanFromApp = ref(empData)
</script>

<template>
  <new-jeans
    v-bind:new-jeans-member="newJeanFromApp"
    :years-ago="timeGo(3)"
    :call-parent="pastYear"
  ></new-jeans>
</template>

<style scoped></style>
