---
layout: ../../../../../layouts/PostLayout.astro
title: AI 学习
description: 2025 04 28 学习计划：AI 恋爱大师应用开发 一、学习目标 1. 理解 Prompt 工程基础概念与分类 2. 掌握
  Spring AI 核心组件：ChatClient／Advisor／ChatMemory／PromptTempl
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/AI 方面
---

**2025-04-28 学习计划：AI 恋爱大师应用开发**

---

### 一、学习目标

1. 理解 Prompt 工程基础概念与分类
    
2. 掌握 Spring AI 核心组件：ChatClient／Advisor／ChatMemory／PromptTemplate
    
3. 完成 "AI 恋爱大师" 应用基础功能：多轮对话、对话记忆、结构化输出
    

---

### 二、日级计划定量列表

|时间|任务|详细内容|
|---|---|---|
|09:00 - 10:30|Prompt 工程基础|分类：角色/功能/复杂度，Token 计算，Prompt 优化技巧：思维链，分步指导，给出两个实际 Prompt 优化练习|
|10:30 - 12:00|Spring AI ChatClient 功能学习|ChatModel vs ChatClient、多样返回方式、builder 模式实现方法|
|13:30 - 15:00|ChatMemory 实现 + Advisor 机制|分类、用法、基于内存 vs 持久化存储，MessageChatMemoryAdvisor 实现|
|15:00 - 17:00|实战练习：AI 恋爱大师应用开发|创建 LoveApp.java 应用，实现 ChatClient 初始化 + doChat() 对话方法|
|19:00 - 20:30|实现结构化输出功能|设计 LoveReport record，使用 entity(类) 转换为 Java 对象，实现 doChatWithReport()|
|20:30 - 21:30|实现 ChatMemory 持久化|采用 Kryo 实现 FileBasedChatMemory，运行验证|
|21:30 - 22:00|总结与复盘|综合练习前面所有方法，总结 Spring AI 三大核心技术|

---

### 三、计划扩展

- 如果有剩余时间，建议进行两项扩展学习：
    
    1. 简单 PromptTemplate 模板实现
        
    2. 自定义 Advisor （MyLoggerAdvisor ）
        

---

### 固定评估方案

- 是否成功初始化一个 Spring AI ChatClient
    
- 是否能用 entity(类) 转换 AI 给的结构化结果
    
- 是否成功实现基于文件的记忆持久化
    
- 是否完成自己设计的小演示
    

---

如需我可以按照上面完成调教进度，或者为你生成代码、实验仪表、步骤记录等。
