<script setup>
const props = defineProps(['newJeansMember'])
</script>

<template>
  <h1>New Jeans</h1>
  <thead>
    <th>이름</th>
    <th>나이</th>
    <th>순서</th>
  </thead>
  <tbody>
    <tr v-for="(member, index) in newJeansMember" v-bind:key="index">
      <td>{{ member.name }}</td>
      <td>{{ member.age }}</td>
      <td>{{ index }}</td>
    </tr>
  </tbody>
</template>

<style scoped></style>
