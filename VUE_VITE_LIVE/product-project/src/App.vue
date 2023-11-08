<script setup>
import appList from './components/ProductList.vue'
import ProductListCart from './components/ProductListCart.vue'

import { ref, reactive } from 'vue'
let data = [
  { name: 'Tent', price: 40000 },
  { name: 'Tarp', price: 50000 },
  { name: 'Table', price: 70000 }
]

const emit = defineEmits(['call-parent'])
const cart = reactive([])

const productList = ref(data)
const discountRate = ref(0.2)
const fromChild = (product, discountRate) => {
  console.log(discountRate)
  cart.push(product)
}
</script>

<template>
  <h1>App</h1>
  <app-list
    v-bind:product-list="productList"
    :discount-rate="discountRate"
    :call-parent="fromChild"
  ></app-list>
  <h1>Cart</h1>

  <Product-list-cart v-bind:cart-list="cart"></Product-list-cart>
</template>

<style scoped></style>
