import { defineStore } from "pinia";

const useHome = defineStore('home', {
    state: () => ({
        banners: [],
        recommends: []
    }), 
    actions:{
        async fetchHomeMultidata() {
            const res = await fetch("http://123.207.32.32:8000/home/multidata")
            const data = await res.json() 
            // console.log(data)
            this.banners = data.data.banner.list
            this.recommends = data.data.recommend.list
            // 类似于return undefined
            // return Promise.resolve(undefined)

            // 也可以
            // return new Promise(async(resolve, reject))
        }
    }
})

export default useHome