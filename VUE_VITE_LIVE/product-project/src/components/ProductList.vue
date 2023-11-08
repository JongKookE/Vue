<template>
  <h1>Product List</h1>
  <table>
    <thead>
      <th>제품</th>
      <th>가격</th>
      <th>할인가격</th>
      <th>카트에 담기</th>
    </thead>
    <tbody>
      <tr v-for="(product, index) in productList" v-bind:key="index">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        {{
          product.price - discountRate * product.price
        }}
        <td><button @click="addCart(product, discountRate)">add Cart</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(['productList', 'discountRate'])

const addCart = (product, discountRate) => {
  console.log('테스트')
  console.log(product)
  console.log(discountRate)
  console.log('최종 가격: ', product.price - product.price * discountRate)

  emit('call-parent', product, discountRate)
}
</script>
