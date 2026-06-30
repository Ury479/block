---
layout: ../../../../../../../layouts/PostLayout.astro
title: UserLoginPage 报错
description: <script setup lang="ts" 部分没有导入 userLogin 函数 方案： import { userLogin
  } from '@/services/userService'
date: 2025-07-26T09:54:14.019Z
updated: 2025-07-26T09:56:12.039Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程错题集/鱼皮用户中心项目/前端错题集/js 报错
---

```
ERROR

userLogin is not defined ReferenceError: userLogin is not defined at handleSubmit (webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/user/UserLoginPage.vue?vue&type=script&setup=true&lang=ts:29:19) at callWithErrorHandling (webpack-internal:///./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:385:19) at callWithAsyncErrorHandling (webpack-internal:///./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:392:17) at emit (webpack-internal:///./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:5916:5) at eval (webpack-internal:///./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js:7390:45) at eval (webpack-internal:///./node_modules/ant-design-vue/es/form/Form.js:326:11)
```
`<script setup lang="ts">` 部分没有导入 `userLogin` 函数
**方案：** `import { userLogin } from '@/services/userService'  `
