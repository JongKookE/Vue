<template>
  <h1>SubAction.vue</h1>
  <button @click="changeYear()">Change Year</button>
  <button @click="changeMonth()">Change Month</button>
  <input type="text" v-model.lazy="storeComp.day" />
</template>

<script setup>
import { useMainStore } from '@/stores/mainStore.js'
const store = useMainStore()

const changeYear = () => {
  console.log(store.year)
  store.year = '2024'
}
const changeMonth = () => store.setMonth('04')
</script>
