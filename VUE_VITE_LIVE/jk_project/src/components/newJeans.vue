<script setup>
const props = defineProps(['newJeansMember', 'yearsAgo'])
const emit = defineEmits(['call-parent'])
const pastYear = () => {
  emit('call-parent', member)
}
</script>

<template>
  <h1>New Jeans</h1>
  <thead>
    <th>이름</th>
    <th>나이</th>
    <th>{{ yearsAgo }}년 후</th>
    <th>나의 최애 멤버 고르기</th>
  </thead>
  <tbody>
    <tr v-for="(member, index) in newJeansMember" v-bind:key="index">
      <td>{{ member.name }}</td>
      <td>{{ member.age }}</td>
      <td>{{ member.age + yearsAgo }}</td>
      <td @click="myFavorite(member.name)"><button>나의 최애?!</button></td>
      <td @click="pastYear(member, yearsAgo)">
        <button>{{ member.name }}의 {{ yearsAgo }} 전 나이는?</button>
      </td>
    </tr>
  </tbody>
</template>

<style scoped>
th,
th,
tr,
td {
  border: 1px solid black;
}
</style>
