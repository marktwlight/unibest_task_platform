import type { ICountryInfo, IRegisterInfo } from './types/register'
import { http } from '@/http/http'

/**
 * 登录表单
 */
export interface IRegisterForm {
  username: string
  password: string
  countryIso: string
  userCode: string
}

/**
 * 用户注册
 * @param registerForm 登录表单
 */
export function login(registerForm: IRegisterForm) {
  return http.post<IRegisterInfo>('/api/public/index/register', registerForm)
}
/**
 * 国家信息
 * @param  登录表单
 */
export function getCountries() {
  return http.post<ICountryInfo>('/api/public/index/get_countries')
}
