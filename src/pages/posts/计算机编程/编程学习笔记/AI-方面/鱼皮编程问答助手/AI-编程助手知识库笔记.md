---
layout: ../../../../../../layouts/PostLayout.astro
title: AI 编程助手知识库笔记
description: 1. AI：记忆持久化 2. 环境配置：lombok,Spring MVC,web 3. 调整
  application.property 为 application.yml,本地新建 application local.yml 文件 4.
date: 2026-05-09T09:06:29.644Z
updated: 2026-05-16T09:29:19.010Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/AI 方面/鱼皮编程问答助手
---

1. AI：记忆持久化
2. 环境配置：lombok,Spring MVC,web
3. 调整 application.property 为 application.yml,本地新建 application-local.yml 文件
4. 引入 lombock 注解`@Service`，流式开发，引入 Junit5 测试模块
5. 选取支持多模态功能的大模型
6. AI Service:反射封装，工厂模式创建对象，Bean 创建 java 对象
7. json 结构化输出，记忆持久化
8. RAG 知识库功能：小抄报，每段对话防遗忘
	1. 功能：智能客服，问答机器人，客户经理
9. 文档切割：将文档按字符串进行切割，实现向量化
	1. 元数据`TextSegment` 优化性能
	2. AI Service 向量存储
	3. 配置 Embedding 模型
10. 补充内容加载器
11. MCP 服务：java 通过 Langchain4j调用 MCP，直接调用官方代码，开发 MCP 需要 python 或 node.js
12. 护轨/拦截器：防止用户询问敏感 问题
13. SSE 流式开发：实现打字机效果，需要引入 maven
```
<dependency>
    <groupId>dev.langchain4j</groupId>
    <artifactId>langchain4j-reactor</artifactId>
    <version>1.1.0-beta7</version>
</dependency>
```
1. 单元测试：每一次开发新的功能都需要引入单元测试进行验证
2. 前端开发：IDE 新建前端文件夹，直接拖入 cursor进行开发，给出详细提示词
	1.
