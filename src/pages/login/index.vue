<route lang="jsonc" type="page">
{
  "layout": "default",
  "style": {
    "navigationBarTitleText": "登录"
  }
}
</route>

<script lang="ts" setup>
//
</script>

<template>
  <view class="container">
    <view class="header">
      <view class="welcome-text">
        <text class="hello">
          {{ t('login-page-title') }}
        </text>
      </view>
    </view>
    <view class="form-container" />
  </view>
</template>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background: url(/static/loginbg.png) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  .header {
    padding: 180rpx 40rpx 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .welcome-text {
      display: flex;
      flex-direction: column;
      z-index: 2;
      position: relative;
      text-align: center;

      .hello {
        font-size: 56rpx;
        font-weight: 700;
      }
    }
  }
}
</style>
