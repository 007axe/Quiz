import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', {
  state: () => ({
    books: [
      { id: 1 ,name: 'แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์', img: 'https://upload.wikimedia.org/wikipedia/th/thumb/a/a2/Hp_ps_thai.jpg/220px-Hp_ps_thai.jpg', price: 100},
      { id: 2 ,name: 'แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ', img: 'https://upload.wikimedia.org/wikipedia/th/thumb/f/f9/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A5%E0%B8%B1%E0%B8%9A.jpg/220px-%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A5%E0%B8%B1%E0%B8%9A.jpg', price: 100},
      { id: 3 ,name: 'แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน', img: 'https://upload.wikimedia.org/wikipedia/th/thumb/e/ee/%E0%B8%AD%E0%B8%B1%E0%B8%8B%E0%B8%84%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99.jpg/220px-%E0%B8%AD%E0%B8%B1%E0%B8%8B%E0%B8%84%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99.jpg', price: 100},
      { id: 4 ,name: 'แฮร์รี่ พอตเตอร์กับถ้วยอัคนี', img: 'https://upload.wikimedia.org/wikipedia/th/thumb/4/4f/%E0%B8%96%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AD%E0%B8%B1%E0%B8%84%E0%B8%99%E0%B8%B5.jpg/220px-%E0%B8%96%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AD%E0%B8%B1%E0%B8%84%E0%B8%99%E0%B8%B5.jpg', price: 100},
      { id: 5 ,name: 'แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์', img: 'https://upload.wikimedia.org/wikipedia/th/thumb/d/dc/%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%B5.jpg/220px-%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%B5.jpg', price: 100},
      { id: 6 ,name: 'แฮร์รี่ พอตเตอร์กับเจ้าชายเลือดผสม', img: 'https://upload.wikimedia.org/wikipedia/th/thumb/8/81/%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%94%E0%B8%9C%E0%B8%AA%E0%B8%A1.jpg/220px-%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%94%E0%B8%9C%E0%B8%AA%E0%B8%A1.jpg', price: 100},
      { id: 7 ,name: 'แฮร์รี่ พอตเตอร์กับเครื่องรางยมทูต', img: 'https://upload.wikimedia.org/wikipedia/th/thumb/f/f1/Hp7childus.jpg/220px-Hp7childus.jpg', price: 100}
    ]
  })
})
