<template>
  <el-form label-width="80px" status-icon :model="account">
    <el-form-item label="Username">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="account.password" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 1. 定义account数据
const account = reactive({
  name: '',
  password: '',
})
</script>

<style scoped></style>
