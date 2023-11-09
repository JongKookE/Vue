<template>
  <div class="card">
    <img src="https://picsum.photos/1024/400/?image=100" class="card-img-top mt-3" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Cafe title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <a class="btn btn-primary" @click="sendMail()">Send Mail</a>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const sendMail = () => {
  let data = {
    from: 'hong@gildong.com',
    content: '안녕하세요, 홍길동입니다.'
  }

  // router.push() 를 통해서 dynamic routing 으로 컴포넌트를 변경(이동)
  // data 를 포함해서 처리할 수 있다.

  // router.push({
  //   name: 'Mail',
  //   query: data
  // })

  // 이 방식은 url에 보이지 않음
  // 그리고 params는 router를 통해서보낼수없음?
  // 원천적으로 막아놨다!
  // router.push({
  //   name: 'Mail',
  //   params: data
  // })

  router.push({
    path: `/mail/${data.from}/${data.content}`
  })
}
</script>
