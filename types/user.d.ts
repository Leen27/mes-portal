export interface UserLogin {
  username: string
  password: string
}
export enum UserGender {
  male = 1,
  female = 2
}
export interface UserInfo {
  id: string
  username: string
  realname: string
  orgCode: string
  sex: UserGender
  email: string
  phone: string
  status: number
  delFlag: number
  userIdentity: number
  post: string
  userType: number
  system: string
  params: {
    [key in string]: any
  }
  roles: Array<string>
}
export interface UserLoginRes {
  token: string
  userIp: string
  userInfo: UserInfo
}

// 能访问环境
export interface EnvItem {
  envId: string
  envName: string
  subEnvs: Array<SubEnvItem>
}
export interface SubEnvItem {
  subEnvId: string
  subEnvName: string
  remark: string
}
// app列表
export interface UserApps {
  appGroups: Array<UserAppItem>
  favourApps: Array<AppItem>
}
export interface UserAppItem {
  groupName: string
  apps: Array<AppItem>
}
export interface AppItem {
  appIcon: string
  appId: string
  appName: string
  appShortName: string
  appUrl: string
  redirectUrl: string
}
