<template>
  <div class="flex w-full h-full bg-gray-2">
    <div class="w-[240px] pt-[15px] pl-[32px]">
      <Logo />
      <CheckoutEnv />
    </div>
    <div class="flex-1 flex flex-col h-full gap-5 p-5">
      <Header />
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import Header from '@/components/Header.vue'
import Logo from '@/components/Logo.vue'
import CheckoutEnv from '@/components/checkout-env/index.vue'
</script>

<style scoped></style>
