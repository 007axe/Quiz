<script setup>
import { useRouter } from 'vue-router'

import Product from '@/components/Product.vue'
import Layout from '@/layout/Layout.vue'

import { useBookStore } from '@/stores/book'
import { useCartStore } from '@/stores/cart'

const router = useRouter()
const cartStore = useCartStore()
const bookStore = useBookStore()

const addToCart = (book) => {
  router.push({ name: 'cart'})
  cartStore.addItem(book)
}
</script>

<template>
  <Layout>
    <h1 class="text-3xl font-bold text-center my-4">
      หนังสือแนะนำ
    </h1>
    <Product
    :products="bookStore.books"
    :addToCart="addToCart"/>
  </Layout>
</template>
