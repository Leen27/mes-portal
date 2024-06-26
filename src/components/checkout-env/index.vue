<template>
  <div :class="['w-52 h-12 flex items-center justify-center cursor-pointer gap-4']">
    <IconTestEnv />
    <span>测试环境</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconTestEnv } from './icons'

const list = ref([
  {
    title: '测试环境',
    data: [
      {
        name: '产品',
        ip: '192.168.1.100',
      },
      {
        name: 'STIC',
        ip: '192.168.1.101',
      },
      {
        name: 'Naura',
        ip: '192.168.1.102',
      },
      {
        name: 'Sidtek',
        ip: '192.168.1.103',
      },
    ]
  },
  {
    title: 'Demo环境',
    data: [
      {
        name: '产品',
        ip: '192.168.1.104',
      },
    ]
  }
])

</script>

<style scoped></style>