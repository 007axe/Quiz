<script setup>
import { defineProps } from 'vue'

defineProps({
    products: Array,
    addToCart: Function
})
</script>
<template>
    <div class="max-w-4xl mx-auto my-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="border-2 p-2 mx-4 sm:mx-auto hover:shadow-lg duration-500 w-full" v-for="book in products" :key="book.name">
                <div class="flex sm:flex-col">
                    <div class="flex-auto w-24 sm:w-full flex justify-center sm:mb-2">
                        <img class="w-36"  :src="book.img">
                    </div>
                    <div class="flex-auto w-72 sm:w-full ml-2 sm:ml-auto flex flex-col justify-center">
                        <div class="sm:h-12 sm:mb-2 overflow-hidden font-bold">{{ book.name }}</div>
                        <div class="flex justify-between text-red-500">
                            <div><b>{{ book.price }}</b> บาท</div>
                            <button @click="addToCart(book)"><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>