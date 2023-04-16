// 定义关于counter的store
// 每一个内容都定义一个自己的Store
import { defineStore } from "pinia";

// 返回一个函数，该函数的命名有自己的规范
const useCounter = defineStore("counter", {
    state: () => ({
        count: 99, 
    })
})

export default useCounter