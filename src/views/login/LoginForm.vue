<template>
  <div class="flex flex-col items-center justify-center h-full">
    <span class="pb-9 text-2xl">{{ t('login.title') }}</span>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        name="username"
        :rules="[{ required: true, message: t('login.usernameWarning') }]"
      >
        <a-input
          v-model:value="formState.username"
          :placeholder="t('login.username')"
          class="w-60 bg-gray-1"
        >
          <template #suffix>
            <IconUser />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        name="password"
        :rules="[{ required: true, message: t('login.passwordWarning') }]"
      >
        <a-input-password v-model:value="formState.password" class="w-60 bg-gray-1" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" class="w-60">{{
          t('login.submitBtn')
        }}</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { IconUser } from '@/icons'
import { userLogin } from '@/http/user'
import { COWIN_PORTAL_KEY } from '@/constant'

import type { UserLogin } from '#/user'
import { useUserStore } from '@/stores/user'

const { t } = useI18n()

const router = useRouter()
const userStore = useUserStore()

interface FormState {
  username: string
  password: string
}

const formState = reactive<FormState>({
  username: '',
  password: ''
})
const onFinish = async (values: UserLogin) => {
  const res = await userLogin(values)
  console.log('res :>> ', res)
  const { token, userInfo } = res
  localStorage.setItem(COWIN_PORTAL_KEY, token)
  userStore.setUserInfo(userInfo)
  router.replace('/')
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style scoped></style>
