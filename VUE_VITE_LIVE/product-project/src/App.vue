<script setup>
import appList from './components/ProductList.vue'
import EmployeeList from './components/EmployeeList.vue'

import { ref } from 'vue'
let data = [
  { name: 'Tent', price: 40000 },
  { name: 'Tarp', price: 50000 },
  { name: 'Table', price: 70000 }
]

let empData = [
  { name: '일번', age: 20 },
  { name: '2번', age: 30 },
  { name: '3번', age: 40 }
]

let newjeans = [{ name: '김민지', age: 19 }]
const empListFromApp = ref(empData)
const appData = ref(data)
</script>

<template>
  <h1>App</h1>
  <app-list v-bind:product-list="appData"></app-list>
  <h1>Employee Data</h1>
  <employee-list v-bind:employee="empProps"></employee-list>
</template>

<style scoped></style>
