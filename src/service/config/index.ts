// 1. 区分开发环境核生产环境
// export const BASE_URL = 'http://codercba.dev:8000'
// export const BASE_URL = 'http://codercba.prod:8000'

// 2. 代码逻辑判断 判断当前的环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
// console.log(import.meta.env.DEV) 是否为开发环境
// console.log(import.meta.env.PROD) 是否为生产环境
// console.log(import.meta.env.SSR) 是否为SSR服务器端渲染

let BASE_URL = ''
if (import.meta.env.PROD) {
  BASE_URL = 'http://codercba.prod:8000'
} else {
  BASE_URL = 'http://codercba.dev:8000'
}

export const TIME_OUT = 10000
export { BASE_URL }

// 3. 提供创建.env文件直接创建变量
