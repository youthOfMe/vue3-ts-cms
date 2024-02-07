<template>
  <div>Main: {{ countStore.counter }} - {{ countStore.doubleCounter }}</div>
  <button @click="changeCounter">修改counters</button>
</template>

<script setup lang="ts">
import useCountStore from '@/store/counter'

const countStore = useCountStore()

function changeCounter() {
  countStore.changeCounterAction(5555)
}
</script>

<style scoped></style>
