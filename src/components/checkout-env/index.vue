<template>
  <div class="max-h-[500px] overflow-y-auto mt-[30px]">
    <div v-for="env in envs" :key="env.envId" class="pb-[20px] cursor-pointer">
      <div :class="['w-52 h-12 flex items-center justify-center gap-4']">
        <IconTestEnv />
        <span class="w-40">{{ env.envName }}</span>
      </div>
      <div
        v-for="sub in env.subEnvs"
        :key="sub.subEnvId"
        :class="getItemStyle(sub.subEnvId)"
        @click="setActiveId(sub.subEnvId)"
      >
        <div class="flex-1 flex items-center justify-center">
          <div name="dot" :class="getDotStyle(sub.subEnvId)"></div>
        </div>
        <div class="flex flex-col justify-center w-40">
          <span class="text-3 leading-[21px]">{{ sub.subEnvName }}</span>
          <span class="text-1 text-gray-env leading-[18px]">{{ sub.remark }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { IconTestEnv } from './icons'

import { getUserApps, getUserEnvs } from '@/http/user'
import { useUserStore } from '@/stores/user'

import type { EnvItem } from '#/user'

const userStore = useUserStore()

const currentActiveId = ref('')

async function setActiveId(id: string) {
  if (id === currentActiveId.value) {
    return
  }
  currentActiveId.value = id
}

function getItemStyle(id: string) {
  return [
    'w-52 h-12 flex items-center justify-center cursor-pointer rounded gap-4 px-4 py-2',
    {
      'bg-white': id == currentActiveId.value,
      'shadow-[0px_6px_27px_0px_rgba(0,0,0,0.1)]': id == currentActiveId.value
    }
  ]
}

function getDotStyle(id: string) {
  return [
    {
      'bg-primary': id === currentActiveId.value,
      'bg-gray-env': id !== currentActiveId.value
    },
    'rounded-full  w-3 h-3'
  ]
}

const envs = ref<Array<EnvItem>>([])

onMounted(async () => {
  const userEnvs = await getUserEnvs()
  envs.value = userEnvs
  currentActiveId.value = userEnvs[0].envId // 初始化env
  const apps = await getUserApps(currentActiveId.value)
  userStore.setFavourApps(apps.favourApps)
  userStore.setAppGroups(apps.appGroups)
})
</script>

<style scoped></style>
