<script setup>
const props = defineProps(['studentProps'])
</script>

<template>
  <table>
    <tbody>
      <tr>
        <td>StudentNm</td>
        <td><input v-model="studentProps.studentNm" /></td>
      </tr>
      <tr>
        <td>Email</td>
        <td><input v-model="studentProps.email" /></td>
      </tr>
      <tr>
        <td>Phone</td>
        <td><input v-model="studentProps.phone" /></td>
      </tr>
    </tbody>
  </table>
</template>
