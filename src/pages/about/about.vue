<route lang="jsonc" type="page">
{
  "layout": "tabbar",
  "style": {
    "navigationBarTitleText": "关于"
  }
}
</route>

<script lang="ts" setup>
import RequestComp from './components/request.vue'
import UploadComp from './components/upload.vue'

function gotoI18nPage() {
  uni.navigateTo({
    url: '/pages/about/i18n',
  })
}

// 奇怪：同样的代码放在 vue 里面不会校验到错误，放在 .ts 文件里面会校验到错误
// const testOxlint = (name: string) => {
//   console.log('oxlint')
// }
// testOxlint('oxlint')
console.log('about')

function gotoAlova() {
  uni.navigateTo({
    url: '/pages/about/alova',
  })
}
</script>

<template>
  <view>
    <view class="mt-8 text-center text-3xl">
      鸽友们好，我是
      <text class="text-red-500">
        菲鸽
      </text>
    </view>
    <RequestComp />
    <UploadComp />
    <view class="text-center">
      <wd-button @click="gotoI18nPage()">
        去I18n页面
      </wd-button>
    </view>
    <button class="w-200px text-green" @click="gotoAlova">
      前往 alova 页面
    </button>
  </view>
</template>

<style lang="scss" scoped>
.test-css {
  // mt-4=>1rem=>16px;
  margin-top: 16px;
}
</style>
