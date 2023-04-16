<template>
    <div class="home">
        <h2>Home View</h2> 
        <hr>
        <h2>count: {{ counterStore.count }}</h2>
        <button @click="incrementCount">count+1</button>
    </div>
</template>

<script setup>
    import useCounter from '@/stores/counter';
    import { storeToRefs } from 'pinia';
    import { toRefs } from 'vue';
    const counterStore = useCounter() 
    // 原来的响应式的方式
    // const { count } = toRefs(counterStore) 
    // 现pinia的响应式的方式
    const { count } = storeToRefs(counterStore)
    function incrementCount() {
        counterStore.count++
    }
</script>

<style lang="scss" scoped>

</style>