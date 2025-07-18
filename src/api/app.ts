import { http } from '@/http/http'

export interface VersionInfo {
  version: string
  fbPromotionId: string
  tgService: string
  whatsappTask: number
}

export function getAppVersion() {
  return http.Get<VersionInfo>('/api/public/index/get_app_version')
}
