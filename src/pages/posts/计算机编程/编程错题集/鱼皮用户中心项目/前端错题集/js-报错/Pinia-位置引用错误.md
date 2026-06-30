---
layout: ../../../../../../../layouts/PostLayout.astro
title: Pinia 位置引用错误
description: 报错说明 Pinia 被用在了 <script setup lang="ts" 外侧, 正确做法 ：已移入 setup
  作用域（script setup 自动处理）
date: 2025-07-25T15:46:36.407Z
updated: 2025-07-25T15:53:07.203Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程错题集/鱼皮用户中心项目/前端错题集/js 报错
---

```
ERROR

[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"? See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help. This will fail in production. Error: [🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"? See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help. This will fail in production. at useStore (webpack-internal:///./node_modules/pinia/dist/pinia.mjs:1665:13) at eval (webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/user/UserLoginPage.vue?vue&type=script&lang=js:16:99) at ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/user/UserLoginPage.vue?vue&type=script&lang=js (http://localhost:8081/js/app.js:151:1) at __webpack_require__ (http://localhost:8081/js/app.js:711:32) at fn (http://localhost:8081/js/app.js:958:21) at eval (webpack-internal:///./src/pages/user/UserLoginPage.vue?vue&type=script&lang=js:5:216) at ./src/pages/user/UserLoginPage.vue?vue&type=script&lang=js (http://localhost:8081/js/app.js:580:1) at __webpack_require__ (http://localhost:8081/js/app.js:711:32) at fn (http://localhost:8081/js/app.js:958:21) at eval (webpack-internal:///./src/pages/user/UserLoginPage.vue:3:100)
```

报错说明 Pinia 被用在了 `<script setup lang="ts">`  外侧,
*正确做法*：已移入 `setup` 作用域（script setup 自动处理）
