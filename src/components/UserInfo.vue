<script lang="ts" setup>
import type { IUserInfoVo } from '@/api/types/login'
import { useUserStore } from '@/store'

const userInfo = ref<IUserInfoVo>()
function useStore() {
  const userStore = useUserStore()
  userInfo.value = userStore.userInfo
}
useStore()
//
const name = '张三'
const avatar = 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'

function handleToLogin() {
  console.log('跳转登录')
}
function handleSettings() {}
</script>

<template>
  <view class="header-section border-b border-gray-100 p-4">
    <view class="user flex items-center justify-between gap-4">
      <!-- 左侧：头像 + 文本组 -->
      <view class="flex flex-1 items-center gap-3">
        <!-- 头像（圆形、固定大小） -->
        <img
          :src="userInfo.avatar || avatar"
          class="h-10 w-10 rounded-full object-cover"
          alt="用户头像"
        >
        <!-- 文本组（昵称 + 余额） -->
        <view class="flex flex-col gap-0.5">
          <!-- 昵称（加粗、小字体） -->
          <span class="text-sm text-gray-900 font-medium">
            {{ userInfo.username || name }}
          </span>
          <!-- 余额（灰色、极小字体，带奖杯图标） -->
          <span class="flex items-center gap-1 text-xs text-gray-500">
            <uni-icon type="trophy" class="text-yellow-500" size="12" />
            {{ userInfo.username || '0.00' }}
          </span>
        </view>
      </view>

      <!-- 右侧：设置图标（灰色、点击事件） -->
      <uni-icon
        type="gear"
        class="cursor-pointer text-gray-500"
        size="18"
        @click="handleSettings"
      />
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
.header-section {
  background-color: #fff;
  color: black;
}
</style>
