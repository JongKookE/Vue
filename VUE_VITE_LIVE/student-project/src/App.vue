<template>
  <h1>Student 관리 - Axios</h1>
  <!-- import , props, data -->
  <student-list :student-list="studentList" v-on:call-parent-detail="detail"></student-list>
  <hr />
  <student-detail :studentProps="student"></student-detail>

  <div id="" style="border: 1px; margin: auto; text-align: center">
    <button @click="insert()">등록</button>
    <button @click="update()">수정</button>
    <button @click="Delete()">삭제</button>
    <button @click="clear()">초기화</button>
    <button @click="invade()">정렬</button>
  </div>
</template>

<script setup>
import axios from 'axios'
import StudentDetail from './components/StudentDetail.vue'
import StudentList from './components/StudentList.vue'
import { ref } from 'vue'

const student = ref({})
const studentList = ref([])

const clear = function () {
  console.log('clear()')
  student.value = {
    studentId: 0,
    studentNm: '',
    email: '',
    phone: '',
    views: 0
  }
}

const list = async () => {
  try {
    let response = await axios.get('http://localhost:8080/axios/students')
    // axios라면 이미 javascript 객체임
    console.log(response)
    let { data } = await response
    console.log(data)
    studentList.value = data
    // data로 이후 비동기 처리 결과
  } catch (error) {
    console.error(error)
  }
}
// Arrow Function은 this를 지정 못함!
const detail = async function (studentId) {
  try {
    let { data } = await axios.get('http://localhost:8080/axios/students/' + studentId)

    student.value = data
    console.log(data)
    // data로 이후 비동기 처리 결과
  } catch (error) {
    console.error(error)
  }
}
const insert = async function () {
  try {
    let response = await axios.post('http://localhost:8080/axios/students', student.value)
    list()
    clear()
  } catch (error) {
    console.error(error)
  }
}

const update = async function () {
  console.log('update()')
  console.log(student.value)
  try {
    await axios.put(
      'http://localhost:8080/axios/students/' + student.value.studentId,
      student.value
    )
    list()
    clear()
    // data로 이후 비동기 처리 결과
  } catch (error) {
    console.error(error)
  }
}

const Delete = async function () {
  console.log('delete()')
  try {
    await axios.delete('http://localhost:8080/axios/students/' + student.value.studentId)
    list()
    clear()
    // data로 이후 비동기 처리 결과
  } catch (error) {
    console.error(error)
  }
}
list()
</script>

<style scoped></style>
