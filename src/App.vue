<template>
  <a-config-provider :theme="theme">
    <RouterView class="portal-custom-base" />
  </a-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import theme from '@/style/theme'
</script>

<style scoped></style>
