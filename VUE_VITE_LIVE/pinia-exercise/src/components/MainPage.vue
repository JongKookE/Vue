<script setup>
import { useMainStore } from '@/stores/mainStore'
import SubPage from '@/components/SubPage.vue'
import SubAction from '@/components/SubAction.vue'
const store = useMainStore()
</script>

<template>
  <h1>my my my</h1>
  {{ store.year }} {{ store.month }} {{ store.day }}
  <sub-page></sub-page>
  <sub-action></sub-action>

  <hr />
</template>
