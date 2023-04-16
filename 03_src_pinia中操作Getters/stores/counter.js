// 定义关于counter的store
// 每一个内容都定义一个自己的Store
import { defineStore } from "pinia";
// pinia拥有扁平化的特点，意味着每个东西都是独立的
import useUser from "./user";


// 返回一个函数，该函数的命名有自己的规范
const useCounter = defineStore("counter", {
    state: () => ({
        count: 99,
        friends: [
            { id: 111, name: 'why' },
            { id: 112, name: 'kobe' },
            { id: 113, name: 'james' }
        ]
    }),
    getters: {
        // 1、基本使用,你要对state操作，必须传入state
        doubleCount(state) {
            return state.count * 2 // 这里也可以通过this来访问
        },
        // 2、在一个getter引入另一个getter
        doubleCountAddOne() {
            // this就是store实例
            return this.doubleCount + 1
        },
        // 3、getters也支持返回一个函数
        getFriendById(state) {
            // 别人在用这个的时候，实际上拿到的是一个函数
            return function (id) {
                // 使用普通函数来进行查找
                for (let i = 0; i < state.friends.length; i++) {
                    const friend = state.friends[i]
                    if (friend.id === id) {
                        return friend
                    }
                }
            }
        },
        // 4、getters中用到了别的store中的数据
        showMessage(state) {
            // 1、先获取user信息
            const userStore = useUser()

            // 2、获取自己的信息

            // 3、拼接信息
            return `name:${userStore.name}-count:${state.count}`
        }
    }
})

export default useCounter