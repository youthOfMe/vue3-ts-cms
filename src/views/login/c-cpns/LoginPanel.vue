<template>
  <div class="login-panel">
    <h1 class="title">网易云后台管理系统</h1>
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <!-- 1. 账号登录的Pane -->
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon>
                <UserFilled />
              </el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <pane-account ref="accountRef"></pane-account>
        </el-tab-pane>
        <!-- 2. 手机登录的Pane test -->
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon>
                <Cellphone />
              </el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <pane-phone></pane-phone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" type="large"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" @click="handleLoginBtnClick"> 立即登录 </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 引入不同登录方式组件
import PaneAccount from './PaneAccount.vue'
import PanePhone from './PanePhone.vue'
import type { Cellphone } from '@element-plus/icons-vue'

// 配置是否记住密码
const isRemPwd = ref(false)
// 配置切换登录方式状态
const activeName = ref('account')
// 获取子组件实例
const accountRef = ref<InstanceType<typeof PaneAccount>>()

function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    // 使用子组件暴露过来的登录回调
    accountRef.value?.loginAction()
  } else {
    console.log('用户在进行手机登录')
  }
}
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
