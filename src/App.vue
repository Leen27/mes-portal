<template>
  <a-config-provider :theme="theme">
    <Layout class="portal-custom-base" />
    <!-- <RouterView /> -->
  </a-config-provider>
</template>

<script setup lang="ts">
// import { RouterView } from 'vue-router'
import theme from '@/style/theme'
import Layout from './components/layout/index.vue'
</script>

<style scoped></style>
