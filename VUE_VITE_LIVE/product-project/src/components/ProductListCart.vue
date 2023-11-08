<template>
  <tr v-for="(product, index) in productList" v-bind:key="index">
    {{
      product.name
    }}
    {{
      product.price
    }}
  </tr>
</template>

<script setup>
const props = defineProps(['cartList'])
</script>
