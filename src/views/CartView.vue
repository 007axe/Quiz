<script setup>
import Layout from '@/layout/Layout.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const increaseQuantity = (index) => {
    cartStore.items[index].quantity++
}
const reduceQuantity = (index) => {
    cartStore.items[index].quantity--
    if (cartStore.items[index].quantity <= 0) {
        cartStore.items[index].quantity = 0
    }
}

const refeshWeb = () => {
    location.reload()
}

</script>

<template>
    <Layout>
        <h1 class="text-3xl font-bold text-center my-4">
            ตะกร้าสินค้า
        </h1>
        <div class="max-w-4xl mx-auto border-2 border-gray-300 rounded-md">
            <div class="flex flex-col md:flex-row">
                <div class="flex-auto md:w-2/3  p-4 bg-gray-200">
                    <div v-if="cartStore.items.length === 0">
                        <h1>ไม่มีสินค้าในตะกร้า</h1>
                    </div>
                    <div v-else v-for="(item, index) in cartStore.items" :key="item" class="flex mb-4">
                        <img class="w-32" :src="item.img">
                        <div class="ml-4 w-full relative">
                            <div @click="cartStore.removeItem(index)" class="absolute right-0 cursor-pointer">
                                <i class="fa-solid fa-x"></i>
                            </div>
                            <h3 class="text-lg font-bold">{{ item.name }}</h3>
                            <div class="w-full flex justify-between mt-4">
                                <p>ราคา</p>
                                <p>{{ item.price }} บาท</p>
                            </div>
                            <div class="w-full flex justify-between mt-4">
                                <p>จำวนวน</p>
                                <div>
                                    <button @click="reduceQuantity(index)" class="text-xl">-</button>
                                    <input v-model="item.quantity" class="mx-1 w-12 text-center" type="text">
                                    <button @click="increaseQuantity(index)" class="text-xl">+</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="flex-auto md:w-1/3 p-4 bg-gray-300">
                    <h1 class="text-xl text-center font-bold mb-4">ยอดรวม</h1>
                    <div class="flex justify-between">
                        <p>ราคาสินค้า</p>
                        <p>{{ cartStore.summaryPrice }} บาท</p>
                    </div>
                    <div class="flex justify-between text-red-500 font-bold mt-4">
                        <p>ส่วนลด</p>
                        <p v-if="cartStore.discount > 0" >{{ cartStore.discount }} บาท</p>
                    </div>
                    <div class="flex justify-between mt-4">
                        <p>ยอดรวมทั้งสิ้น</p>
                        <p v-if="cartStore.items.length <= 1">{{ cartStore.summaryPrice }} บาท</p>
                        <p v-else>{{ cartStore.summaryPrice - cartStore.discount }} บาท</p>
                    </div>
                    <button @click="refeshWeb" class="bg-black hover:bg-gray-900 text-white w-full py-2 rounded-md mt-4">ชำระเงิน</button>
                </div>
            </div>
        </div>
    </Layout>
</template>