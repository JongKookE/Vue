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

const newJeanFromApp = ref(empData)
</script>

<template>
  <new-jeans v-bind:new-jeans-member="newJeanFromApp"></new-jeans>
</template>

<style scoped></style>
