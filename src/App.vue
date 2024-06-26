<template>
  <a-config-provider :theme="theme">
    <LayOut class="portal-custom-base" />
  </a-config-provider>
</template>

<script setup lang="ts">
import theme from '@/style/theme'
import LayOut from './components/layout/index.vue'

</script>

<style scoped></style>