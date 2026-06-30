---
layout: ../../../../../../layouts/PostLayout.astro
title: lab4 项目流程
description: "1. 确保lab3 全部功能正常 a. 翻页功能 EventListView.vue <p Debug: Current page
  = {{ page }}, Total events = {{ totalEvents }}, Has ne"
date: 2025-08-03T04:47:38.864Z
updated: 2025-08-03T08:34:50.298Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程错题集/lab 笔记/前端
---

1. **确保lab3 全部功能正常**
	a. 翻页功能 EventListView.vue
		`<p>Debug: Current page = {{ page }}, Total events = {{ totalEvents }}, Has next = {{ hasNextPage }}</p>`
	b.核对 index.ts 文件命名与教程同步
2. 引入 Pinia,
	1. 修改 message.ts
	2. 配置消息提示：RegesterView.vue
	3. App.vue 注册消息提示功能
	4. 注意 index.ts 代码结构，避免拼写错误和逻辑错误
3. 配置加载进度条
	1. 修改 ListView.vue
	2. 

**注意：**
- `types.ts`：统一放置所有类型声明
- `event.ts`：只负责 Pinia store，**从 `@/types` 导入类型，不重复声明**
