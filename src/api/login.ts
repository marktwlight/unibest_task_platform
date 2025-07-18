import type { ICaptcha, IUpdateInfo, IUpdatePassword, IUserInfoVo, IUserLogin } from './types/login'
import { http } from '@/http/http'

/**
 * 登录表单
 */
export interface ILoginForm {
  username: string
  password: string
}

/**
 * 用户登录
 * @param loginForm 登录表单
 */
export function login(loginForm: ILoginForm) {
  return http.post<IUserLogin>('/api/public/index/login', loginForm)
}
