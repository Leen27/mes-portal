<template>
  <div
    class="bg-gray-2 w-full h-full flex justify-center items-center bg-[url('/src/assets/images/login-bg.png')] relative"
  >
    <Logo class="absolute top-4 left-9" />
    <div
      class="w-[800px] h-[500px] rounded-[18px] shadow-[0px_6px_27px_0px_rgba(0,0,0,0.1)] bg-white flex justify-center items-center"
    >
      <img src="/src/assets/images/login-info.png" class="w-1/2 h-full" />
      <div class="w-1/2 h-full">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from './LoginForm.vue'
</script>

<style scoped></style>
