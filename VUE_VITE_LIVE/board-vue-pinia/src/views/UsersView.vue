<template>
  <div class="container">
    <div class="mb-3 mt-5 d-flex justify-content-center">
      <h1 class="display-4">삐따기 세상</h1>
    </div>
    <div class="mb-3">
      <h2>Register</h2>
    </div>
    <form novalidate>
      <div class="mb-3">
        <label for="userName">User Name:</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-valid': isUserNameFocusAndValid, 'is-invalid': isUserNameFocusAndInValid }"
          placeholder="Enter userName"
          name="userName"
          v-model="userName"
          required
          @input="validateUserName"
          @focus="isUserNameFocus = true"
          @blur="isUserNameFocus = false"
        />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Invalid.</div>
      </div>
      <div class="mb-3">
        <label for="userPassword">Password:</label>
        <input
          type="password"
          class="form-control"
          :class="{
            'is-valid': isUserPasswordFocusAndValid,
            'is-invalid': isUserPasswordFocusAndInValid
          }"
          placeholder="Enter password"
          name="userPassword"
          v-model="userPassword"
          required
          @input="validateUserPassword"
          @focus="isUserPasswordFocus = true"
          @blur="isUserPasswordFocus = false"
        />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">
          1개 이상의 특수문자, 대소문자 및 숫자를 포함하고 8자리 이상이여야 합니다.
        </div>
      </div>
      <div class="mb-3">
        <label for="userPassword2">Password Confirm:</label>
        <input
          type="password"
          class="form-control"
          :class="{
            'is-valid': isUserPassword2FocusAndValid,
            'is-invalid': isUserPassword2FocusAndInValid
          }"
          placeholder="Confirm password"
          name="userPassword2"
          v-model="userPassword2"
          required
          @input="validateUserPassword2"
          @focus="isUserPassword2Focus = true"
          @blur="isUserPassword2Focus = false"
        />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="mb-3">
        <label for="userEmail">Email:</label>
        <input
          type="text"
          class="form-control"
          :class="{
            'is-valid': isUserEmailFocusAndValid,
            'is-invalid': isUserEmailFocusAndInValid
          }"
          placeholder="Enter email"
          name="userEmail"
          v-model="userEmail"
          required
          @input="validateUserEmail"
          @focus="isUserEmailFocus = true"
          @blur="isUserEmailFocus = false"
        />
        <div class="valid-feedback">Valid.</div>
        <div id="userEmailInvalidFeedback" class="invalid-feedback">Invalid.</div>
      </div>
      <div class="form-check form-check-inline" v-for="(code, index) in codeList" :key="index">
        <input
          class="form-check-input"
          name="userClsf"
          :value="code.code"
          type="radio"
          v-model="userClsf"
        />
        <label class="form-check-label">{{ code.codeName }}</label>
      </div>
    </form>
    <div>
      <button @click="register" class="btn btn-primary">가입</button>
    </div>
  </div>

  {{ userClsf }}
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import http from '@/common/axios.js'

// v-model
const router = useRouter()
const userName = ref('')
const userPassword = ref('')
const userPassword2 = ref('')
const userEmail = ref('')

const groupCode = '001' // 회원종류
const codeList = ref([])
const userClsf = ref(`001`)

// focus
const isUserNameFocus = ref(false)
const isUserPasswordFocus = ref(false)
const isUserPassword2Focus = ref(false)
const isUserEmailFocus = ref(false)
//

// validation
const isUserNameValid = ref(false)
const isUserPasswordValid = ref(false)
const isUserPassword2Valid = ref(false)
const isUserEmailValid = ref(false)
//

// focus + valid <= computed
const isUserNameFocusAndValid = computed(() => isUserNameFocus.value && isUserNameValid.value)
const isUserPasswordFocusAndValid = computed(
  () => isUserPasswordFocus.value && isUserPasswordValid.value
)
const isUserPassword2FocusAndValid = computed(
  () => isUserPassword2Focus.value && isUserPassword2Valid.value
)
const isUserEmailFocusAndValid = computed(() => isUserEmailFocus.value && isUserEmailValid.value)

const isUserNameFocusAndInValid = computed(() => isUserNameFocus.value && !isUserNameValid.value)
const isUserPasswordFocusAndInValid = computed(
  () => isUserPasswordFocus.value && !isUserPasswordValid.value
)
const isUserPassword2FocusAndInValid = computed(
  () => isUserPassword2Focus.value && !isUserPassword2Valid.value
)
const isUserEmailFocusAndInValid = computed(() => isUserEmailFocus.value && !isUserEmailValid.value)

const validateUserName = () => {
  isUserNameValid.value = userName.value.length > 0 ? true : false
}

const validateUserPassword = () => {
  let patternEngAtListOne = new RegExp(/[a-zA-Z]+/) // + for at least one
  let patternSpeAtListOne = new RegExp(/[~!@#$%^&*()_+|<>?:{}]+/) // + for at least one
  let patternNumAtListOne = new RegExp(/[0-9]+/) // + for at least one

  isUserPasswordValid.value =
    patternEngAtListOne.test(userPassword.value) &&
    patternSpeAtListOne.test(userPassword.value) &&
    patternNumAtListOne.test(userPassword.value) &&
    userPassword.value.length >= 8
      ? true
      : false
}

const validateUserPassword2 = () => {
  let patternEngAtListOne = new RegExp(/[a-zA-Z]+/) // + for at least one
  let patternSpeAtListOne = new RegExp(/[~!@#$%^&*()_+|<>?:{}]+/) // + for at least one
  let patternNumAtListOne = new RegExp(/[0-9]+/) // + for at least one

  isUserPassword2Valid.value =
    patternEngAtListOne.test(userPassword2.value) &&
    patternSpeAtListOne.test(userPassword2.value) &&
    patternNumAtListOne.test(userPassword2.value) &&
    userPassword2.value.length >= 8
      ? true
      : false
}

const validateUserEmail = () => {
  let regexp = new RegExp(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  )
  isUserEmailValid.value = regexp.test(userEmail.value)
}

const register = async () => {
  try {
    let { data } = await http.post('/users', {
      userName: userName.value,
      userPassword: userPassword.value,
      userEmail: userEmail.value,
      userClsf: userClsf.value
    })

    console.log(data)
    if (data.result == 1) {
      router.push('/login')
    }
  } catch (error) {
    console.log(error)
  }
}

// const getCodeList = async () => {
//   let params= {
//     groupCode:groupCode, // non reactive
//   }
//   try {
//     let { data } = await http.post('/users', {
//       userName: userName.value,
//       userPassword: userPassword.value,
//       userEmail: userEmail.value,
//       userClsf: userClsf.value
//     })

//     console.log(data)
//     if (data.result == 1) {
//       router.push('/login')
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

async function getCodeList() {
  let params = {
    groupCode: groupCode // non reactive
  }
  try {
    let { data } = await http.get('/codes', { params })

    console.log(data)
    codeList.value = data
  } catch (error) {
    console.log(error)
  }
}

getCodeList()
</script>
