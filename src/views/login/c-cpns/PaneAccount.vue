<template>
  <el-form label-width="80px" status-icon :model="account" :rules="accountRules">
    <el-form-item label="Username" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="account.password" :show-password="true" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 引入校验规则对象的类型
import type { FormRules } from 'element-plus'

// 1. 定义account数据
const account = reactive({
  name: '',
  password: '',
})

// 2. 定义校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入用户名称', trigger: 'blur' },
    { min: 6, max: 20, message: '必须是6-20位的数字和字母组成', trigger: 'change' },
  ],
  password: [
    { required: true, message: '必须输入密码信息', trigger: 'blur' },
    { min: 3, message: '必须是3位以上的数字和密码组成', trigger: 'change' },
  ],
}
</script>

<style scoped></style>
