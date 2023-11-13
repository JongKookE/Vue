<template>
  <h1>SubPage.vue !</h1>
  {{ store.year }} {{ store.month }} {{ store.day }} {{ store.date }}
  <br />
  {{ store.formattedDate }}
</template>

<script setup>
import { useMainStore } from '@/stores/mainStore'
const store = useMainStore()
</script>
