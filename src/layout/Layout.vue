<script setup>
import { RouterLink } from 'vue-router'

import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>
<template>
    <nav class="bg-gray-500">
        <div class="max-w-4xl lg:mx-auto mx-4">
            <div class="flex justify-between text-3xl py-2">
                <RouterLink :to="{ name: 'home' }"><h1 class="text-white font-bold">บ้านนายดิน</h1></RouterLink>
                <RouterLink class="relative" :to="{ name: 'cart' }">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p class="h-5 w-5 text-center absolute top-0 right-0 text-sm bg-white rounded-[50%]" v-if="cartStore.summaryQuantity >= 1">{{ cartStore.summaryQuantity }}</p>
                </RouterLink>
            </div>
        </div>
    </nav>
    <slot></slot>
</template>