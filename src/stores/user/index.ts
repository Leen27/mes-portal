import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

import type { AppItem, UserAppItem, UserInfo } from '#/user'

export const useUserStore = defineStore('user', () => {
  const userInfo = reactive({} as UserInfo)
  const setUserInfo = (user: UserInfo) => {
    Object.keys(user).forEach((key) => {
      userInfo[key] = user[key]
    })
  }

  const favourApps = ref<Array<AppItem>>([])
  const appGroups = ref<Array<UserAppItem>>([])

  const setFavourApps = (apps: AppItem[]) => {
    favourApps.value = apps
  }
  const setAppGroups = (apps: UserAppItem[]) => {
    appGroups.value = apps
  }

  const resetUser = () => {
    favourApps.value = []
    appGroups.value = []
    setUserInfo({} as UserInfo)
  }

  return { userInfo, setUserInfo, favourApps, setFavourApps, appGroups, setAppGroups, resetUser }
})
