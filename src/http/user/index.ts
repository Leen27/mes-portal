import request from '../request'

import type { EnvItem, UserApps, UserLogin, UserLoginRes } from '#/user'
import { ENV_DATA, LOGIN_INFO, USER_APPS } from '@/mock/user'

export const userLogin = async (data: UserLogin) => {
  //   return await request.post<UserLoginRes>('/sys/login', data)
  return Promise.resolve(LOGIN_INFO)
}

export const getUserEnvs = async () => {
  // return await request.get<Array<EnvItem>>('/envs')
  return Promise.resolve(ENV_DATA)
}

export const getUserApps = async (subEnvId: string) => {
//   return await request.get<UserApps>('/env/apps', { params: { subEnvId } })
  return Promise.resolve(USER_APPS)
}
