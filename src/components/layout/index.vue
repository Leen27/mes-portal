<template>
  <div class="flex w-full h-full">
    <div class="w-1/5 bg-gray-200"></div>
    <div class="flex-1 flex flex-col h-full items-center justify-center bg-red-500">
      <Header></Header>
      <div class="flex-1 w-full h-full"> <router-view /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../Header.vue'

</script>

<style scoped></style>