<template>
  <div class="flex w-full h-full">
    <div class="w-1/5 bg-gray-2 pt-[15px] pl-[32px]">
      <Logo />
      <CheckoutEnv />
    </div>
    <div class="flex-1 flex flex-col h-full items-center justify-center bg-gray-2">
      <Header></Header>
      <div class="flex-1 w-full h-full px-5 pt-6 pb-16 bg-gray-2"> <router-view /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../Header.vue'
import Logo from '../Logo.vue'
import CheckoutEnv from '@/components/checkout-env/index.vue'

</script>

<style scoped></style>