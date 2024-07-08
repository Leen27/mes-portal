<template>
  <div class="max-h-[500px] overflow-y-auto mt-[30px]">
    <div v-for="(env, envIndex) in list" :key="env.title" class="pb-[20px]">
      <div :class="['w-52 h-12 flex items-center justify-center gap-4']">
        <IconTestEnv />
        <span class="w-40">{{ env.title }}</span>
      </div>
      <div v-for="(item, itemIndex) in env.data" :key="item.name" :class="getItemStyle(`${envIndex}-${itemIndex}`)"
        @click="setActiveId(`${envIndex}-${itemIndex}`)">
        <div class="flex-1 flex items-center justify-center">
          <div name="dot" :class="getDotStyle(`${envIndex}-${itemIndex}`)"></div>
        </div>
        <div class="flex flex-col justify-center w-40">
          <span class="text-3 leading-[21px]">{{ item.name }}</span>
          <span class="text-1 text-gray-env leading-[18px]">{{ item.ip }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { IconTestEnv } from './icons'

const currentActiveId = ref('')

function setActiveId(id: string) {
  currentActiveId.value = id
}

function getItemStyle(id: string) {
  return ['w-52 h-12 flex items-center justify-center cursor-pointer rounded gap-4 px-4 py-2', {
    'bg-white': id == currentActiveId.value,
    'shadow-[0px_6px_27px_0px_rgba(0,0,0,0.1)]': id == currentActiveId.value,
  }]
}

function getDotStyle(id: string) {
  return [{
    'bg-primary': id === currentActiveId.value,
    'bg-gray-env': id !== currentActiveId.value,
  }, 'rounded-full  w-3 h-3']
}
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