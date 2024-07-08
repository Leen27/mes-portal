<template>
  <div
    class="flex items-center shrink-0 gap-[10px] py-[10px] pr-[10px] hover:cursor-pointer hover:shadow"
    :style="`width: ${props.width}px`"
  >
    <img
      :src="props.src"
      alt="card-image"
      class="rounded-md"
      :style="`width: ${props.size}px; height: ${props.size}px`"
    />
    <div
      class="text-gray-blue pr-[10px] h-full flex items-center"
      :style="`font-size: ${props.fs}px`"
    >
      {{ props.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    default: 180
  },
  fs: {
    type: Number,
    default: 12
  },
  src: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 60
  }
})
</script>

<style scoped></style>
