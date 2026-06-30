---
layout: ../../../../../layouts/PostLayout.astro
title: DS 配置
description: 2025 年 3 月 7 日 火山官网配置 API 找到 JAVA 环境变量 echo 找到 maven 依赖 复制 java
  代码到项目 编辑 configuration 配置环境变量为 运行 3 分钟后显示 AI 结果 可能报错：API
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/AI 方面
---

2025 年 3 月 7 日
* 火山官网配置 API
* 找到 JAVA 环境变量 echo
* 找到 maven 依赖
* 复制 java 代码到项目
* 编辑 configuration 配置环境变量为
```
ARK_API_KEY=0bda1d77-7beb-4a37-b1b2-305fb110362d
```
![Pasted image 20250307191128.png](/media/5a4b766368deaa09.png)
运行 3 分钟后显示 AI 结果
![Pasted image 20250307191140.png](/media/1624913a9e4e4091.png)
可能报错：API Key 读取失败
```
com.volcengine.ark.runtime.exception.ArkException: missing api_key or ak&sk.
```

方案：配置 configuration
