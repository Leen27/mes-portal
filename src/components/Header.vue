<template>
  <div class="h-20 shrink-0 w-full flex justify-between border-b-2">
    <div class="flex items-center gap-4">
      <img src="../assets/images/avatar.png" alt="avatar" class="w-10 h-10" />
      <span>您好, {{ userStore.userInfo.realname || '用户' }}</span>
    </div>

    <div class="flex items-center gap-4">
      <a-input v-model:value="searchContent" placeholder="搜索" @pressEnter="onSearch" class="h-10">
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>
      <img src="../assets/images/reset.png" alt="重置密码" class="w-7 h-7 hover:cursor-pointer" />
      <img
        src="../assets//images/logout.png"
        alt="退出登录"
        class="w-7 h-7 hover:cursor-pointer"
        @click="logout"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { SearchOutlined } from '@ant-design/icons-vue'

import { COWIN_PORTAL_KEY } from '@/constant'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const searchContent = ref<string>('')

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', searchContent.value)
}

const logout = () => {
  localStorage.removeItem(COWIN_PORTAL_KEY)
  userStore.resetUser()
  router.replace('/login')
}
</script>

<style scoped></style>
