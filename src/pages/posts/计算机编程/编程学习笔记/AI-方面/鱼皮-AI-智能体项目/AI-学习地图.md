---
layout: ../../../../../../layouts/PostLayout.astro
title: AI 学习地图
description: 提示词工程 RAG 服务 MCP 服务 大模型判断标准：成本，功能，多模态
  安全边际：学会调用、部署大模型，夯实基础后再考虑学习神经网络，深度学习算法，关注 AI 工作流， hutools 工具库 调用阿里云百炼 SDK http
  调用：无
date: 2026-03-25T10:24:02.770Z
updated: 2026-03-30T13:15:10.167Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 4
sourceFolder: 计算机编程/编程学习笔记/AI 方面/鱼皮 AI 智能体项目
---

- 提示词工程
- RAG 服务
- MCP 服务
大模型判断标准：成本，功能，多模态
安全边际：学会调用、部署大模型，夯实基础后再考虑学习神经网络，深度学习算法，关注 AI 工作流， hutools 工具库

调用阿里云百炼 SDK
- http 调用：无视语言

## AI智能体开发
knife4j 调用接口开发，对齐后端接口路径
调整 property 类型为 yml,调整格式，
![Pasted image 20260327111638.png](/media/b6b2394d237afd29.png)找到 API 参考页

## Spring AI Alibaba
引入 xml 和 yml 配置,注意核对 maven 配置，精简 yml 文件，区分 property-local.yml 和 property.yml 文件
```java
Error: Could not find or load main class com.example.ury_aiagent.UryAIagentApplication
Caused by: java.lang.ClassNotFoundException: com.example.ury_aiagent.UryAIagentApplication
```
注意识别根目录为 root 蓝标，否则 `UryAIagentApplication.java`类名左边或 `main` 绿色小三角会显示 no run
![Pasted image 20260327182609.png](/media/308792ef42be2315.png)
![Pasted image 20260327182556.png](/media/d906a059b3fa8cf0.png)


核对端口号
```java
Description:

Web server failed to start. Port 8123 was already in use.

Action:

Identify and stop the process that's listening on port 8123 or configure this application to listen on another port.

[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  2.817 s
[INFO] Finished at: 2026-03-27T18:11:40+07:00
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal org.springframework.boot:spring-boot-maven-plugin:3.4.4:run (default-cli) on project ury_AIagent: Process terminated with exit code: 1 -> [Help 1]
[ERROR] 
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR] 
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException
ury@urydeMacBook-Pro-67 ury_AIagent % 

```

Ollama 接入大模型

### 提示词工程
让 AI 自我评估和修复
需求分析能力：找到市面上对应的产品，尝试针对细节进行优化

#### 记忆持久化
学习 ChatClient，构造客户端
对大模型多轮对话进行测试
Advisor：拦截器，责任链调用
**注意教程 API 版本** ，否则容易报错
ChaClient 构造器注入大模型，参考官网示例
调整对话参数 chatMessage
- ChatMemory：对话记忆抽象
- “内存存储”实现：保存聊天记录
- MessageChatMemoryAdvisor：把记忆接到 ChatClient
- chatId：区分不同用户/不同会话
`@Slf4j` 负责日志声明，否则`log` 报错

Junit 断言：
1. 用 @Resource 注入 LoveApp
2. 用 @Test 启动一个测试方法
3. 同一个 chatId 连续发多轮消息
4. 用 Assertions.assertNotNull(answer) 确认每轮至少返回了结果
5. 对话记忆实现思路：每一次将上下文重新发一遍
![Pasted image 20260329113022.png](/media/406937e23d15a6d8.png)

#### Advisor 拦截器功能实现
日志拦截器：实现对象日志和响应日志
Spring AI 有两套链：
- 非流式：`CallAdvisor` / `CallAdvisorChain`
- 流式：`StreamAdvisor` / `StreamAdvisorChain`
功能：
- 请求前：补上下文、记忆、检索结果、系统提示
- 响应后：记录日志、做监控、改写结果、共享上下文
---
添加异常处理机制，保存日志
流式开发，打印日志，拦截请求和响应，自定义日志拦截器
结构化输出转换器Converter（转换器）：区别 Advisor,将String -> java JSON，考虑不同版本的语法差异
![Pasted image 20260329115659.png](/media/f6313d5755c32eab.png)
java 对象持久化到硬盘中，涉及序列化接口实现，使用 Kryo 序列化库
**技术类问题优先查文档，业务类问题优先自己思考**
结合 chatMemory 实现 Kryo 对话消息的文件读写，把聊天记忆落到本地文件里，重启后还能恢复，实现：获取对话，保存对话
##### 对话保存
自定义实现 ChatMemory
用文件按 conversationId 保存消息
通过 add / get / clear 实现记忆读写
**目的：**让聊天记忆跨重启保留下来，并且按会话 ID 隔离，
国产大模型多模态![Pasted image 20260330201508.png](/media/a0a6061deccb40da.png)
