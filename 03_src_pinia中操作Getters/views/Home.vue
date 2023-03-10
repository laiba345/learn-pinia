<template>
    <div class="home">
        <h2>Home View</h2>
        <hr>
        <h3>doubleCount:{{ countStore.doubleCount }}</h3>
        <h3>doubleCountAddOne:{{ countStore.doubleCountAddOne }}</h3>
        <h3>friend-111 {{ countStore.getFriendById(111) }}</h3>
        <h3>showMessage {{ countStore.showMessage }}</h3>
        <!-- <button @click="changeState">修改state</button>
        <button @click="resetState">重置state</button> -->
    </div>
</template>

<script setup>
    import useCounter from '@/stores/counter';
// import { count } from 'console';
    const countStore = useCounter() 
    console.log(countStore.doubleCount)
</script>



<style lang="scss" scoped></style>