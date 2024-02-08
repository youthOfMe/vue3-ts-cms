<template>
  <div class="login-panel">
    <h1 class="title">网易云后台管理系统</h1>
    <div class="tabs"></div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" type="large"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn"> 立即登录 </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isRemPwd = ref(false)
</script>

<style scoped lang="less">
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
