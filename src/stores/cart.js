import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  getters: {
    summaryQuantity(state) {
      return state.items.reduce((acc, item) => acc + item.quantity, 0)
    },
    summaryPrice(state) {
      return state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    },
    discount(state) {
      const uniqueBooks = [...new Set(state.items.map((item) => item.name))];
      function findMinQuantity() {
        if (state.items.length === 0) {
          return null
        }
        let min = state.items[0].quantity;
        for (const product of state.items) {
          if (product.quantity < min) {
            min = product.quantity
          }
        }
        return min;
      }
      for (let i = 1; i <= 7; i++) {
        const number = (i - 1) * 0.1
        if (uniqueBooks.length === i) {
          const discount =  (this.summaryPrice * number) * findMinQuantity()
          console.log(findMinQuantity())
          return Math.floor(discount)
        }
      }
    },
  },
  actions: {
    addItem(itemData) {
      const findProductIndex = this.items.findIndex((item) => {
        return item.name === itemData.name;
      })

      if (findProductIndex < 0) {
        itemData.quantity = 1;
        this.items.push(itemData);
      } else {
        const currentItem = this.items[findProductIndex];
        this.updateQuantity(findProductIndex, currentItem.quantity + 1)
      }
    },
    updateQuantity(index, quantity) {
      this.items[index].quantity = quantity
    },
    removeItem(index) {
      this.items.splice(index, 1)
    },
  },
})
