<template>
  <el-form label-width="80px" status-icon :model="account" :rules="accountRules" ref="formRef">
    <el-form-item label="Username" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="account.password" :show-password="true" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

// 引入校验规则对象的类型
import type { FormRules, ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'

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

// 3. 执行账号的登录逻辑
const formRef = ref<InstanceType<typeof ElForm>>()
function loginAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('校验成功')
    } else {
      ElMessage.error('请您输入正确的格式后再进行操作')
    }
  })
}

defineExpose({
  loginAction,
})
</script>

<style scoped></style>
