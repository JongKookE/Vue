<template>
  <h1>Student List</h1>
  <table>
    <thead>
      <tr>
        <td>StudentId</td>
        <td>StudentNm</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Views</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(student, index) in studentList" :key="index" @click="detail(student.studentId)">
        <td>{{ student.studentId }}</td>
        <td>{{ student.studentNm }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.phone }}</td>
        <td>{{ student.views }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(['studentList'])
const emit = defineEmits(['call-parent-detail'])
const detail = (studentId) => emit('call-parent-detail', studentId)
</script>
