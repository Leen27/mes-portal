<template>
  <div class="h-20 shrink-0 w-full flex justify-between border-b-2">
    <div class="flex items-center gap-4">
      <img src="../assets/images/avatar.png" alt="avatar" class="w-10 h-10" />
      <span>您好, 管理员</span>
    </div>

    <div class="flex items-center gap-4">
      <a-input v-model:value="searchContent" placeholder="搜索" @pressEnter="onSearch" class="h-10">
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>
      <img src="../assets/images/reset.png" alt="重置密码" class="w-7 h-7 hover:cursor-pointer" />
      <img src="../assets//images/logout.png" alt="退出登录" class="w-7 h-7 hover:cursor-pointer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'

const searchContent = ref<string>('')

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', searchContent.value)
}
</script>

<style scoped></style>
