<template>
  <div class="w-full flex flex-1 flex-col justify-center items-center gap-6 overflow-auto">
    <MinePopular />

    <div class="w-full bg-white rounded-xl p-5 flex flex-1 flex-col gap-[20px] overflow-auto">
      <div class="flex items-center gap-[10px]">
        <IconAll />
        <span>全部</span>
      </div>
      <div
        class="flex flex-col gap-[10px] flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-100"
      >
        <div
          v-for="group in userStore.appGroups"
          :key="group.groupName"
          class="w-full flex flex-col"
        >
          <div class="leading-6">{{ group.groupName }}</div>
          <div class="flex flex-wrap gap-[10px]">
            <Card
              v-for="app in group.apps"
              :key="app.appId"
              :src="getIcon(app.appIcon)"
              :size="40"
              :title="app.appName"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MinePopular from './components/MinePopular.vue'
import Card from './components/Card.vue'
import IconAll from './icons/IconAll.vue'

import { useUserStore } from '@/stores/user'
import { getIcon } from '@/utils'

const userStore = useUserStore()
</script>

<style scoped></style>
