<script setup>
import { useCounterStore } from "./stores/counter";
const store = useCounterStore();
store.increment();
console.log(store.count);
</script>

<template>
    <div>App Count : {{ store.count }}</div>
    <div>App DouvleCount : {{ store.doubleCount }}</div>
    <button @click="store.increment()">App 에서 증가</button>
</template>

<style scoped></style>
