<template>
  <div class="card">
    <img src="https://picsum.photos/1024/500/?image=101" class="card-img-top mt-3" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Mail</h5>
      <p class="card-text">
        from: {{ from }}
        <br />
        content: {{ content }}
      </p>
      <a class="btn btn-primary" @click="checkMail()">Check Mail</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const from = ref('')
const content = ref('')
const checkMail = () => {
  // from.value = route.params.from
  // content.value = route.params.content

  from.value = route.params.from
  content.value = route.params.content
}
</script>
