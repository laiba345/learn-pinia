<template>
    <div class="home">
        <h2>Home View</h2>
        <hr>
        <h2>count+1:{{ countStore.count }}</h2>
        <button @click="changeState">修改state</button>

        <!-- 展示数据 -->
        <h2>轮播的数据</h2>
        <ul>
            <template v-for="item in homeStore.banners">
                <li>{{  item.title }}</li>
            </template>
        </ul>
    </div>
</template>

<script setup>
    import useCounter from '@/stores/counter';
    import useHome from '@/stores/home'
    const countStore = useCounter() 
    // console.log(countStore.doubleCount)
    function changeState() {
        countStore.increment(10)
    }
    // axios中的业务逻辑一般指的是网络请求等
    const homeStore = useHome()
    // homeStore.fetchHomeMultidata()

    homeStore.fetchHomeMultidata().then(
        console.log('请求已经完成')
    )

</script>



<style lang="scss" scoped></style>