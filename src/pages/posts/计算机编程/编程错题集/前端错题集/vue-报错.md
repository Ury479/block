---
layout: ../../../../../layouts/PostLayout.astro
title: vue 报错
description: "Vue warn : resolveComponent can only be used in render or setup .
  和 Vue warn : Unhandled error during execution of rende"
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程错题集/前端错题集
---

[Vue warn]: resolveComponent can only be used in render() or setup(). 和 [Vue warn]: Unhandled error during execution of render function at <ElButton> at <ElementVue> at <App>
1. Element Plus 组件在当前项目配置下未被正确识别。 虽然全局引入是 Element Plus 官方推荐的方式之一，但在某些特定的项目构建配置或环境下，可能需要额外的步骤或按需导入的方式才能确保组件在模板中正常工作。

2. 构建工具配置问题。 Vue CLI 或其他的构建配置可能影响了 element-plus 组件的加载和解析。那个关于 __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ 的警告也间接说明项目构建配置可能存在一些非标准或待优化的地方。
