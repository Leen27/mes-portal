<template>
  <div name="mine-popular" class="w-full bg-white rounded-xl px-6 py-3">
    <div name="title" class="flex justify-between">
      <div class="flex items-center gap-2 my-2">
        <IconPopular />
        <span class="text-6">我的常用</span>
      </div>
      <div name="options" class="flex items-center gap-2">
        <span>大小</span>
        <span>增减</span>
      </div>
    </div>

    <div
      v-if="userStore.favourApps.length > 0"
      class="flex flex-wrap justify-between w-full overflow-x-auto gap-[10px] 2xl:justify-start"
    >
      <Card
        v-for="app in userStore.favourApps"
        :key="app.appId"
        :src="getIcon(app.appIcon)"
        :title="app.appName"
        :width="270"
        :fs="18"
      />
    </div>
    <div v-else class="h-[100px] text-center leading-[100px] text-2xl">No data.</div>
  </div>
</template>

<script setup lang="ts">
import IconPopular from '../icons/IconPopular.vue'
import Card from './Card.vue'

import { useUserStore } from '@/stores/user'
import { getIcon } from '@/utils'

const userStore = useUserStore()
</script>

<style scoped></style>
