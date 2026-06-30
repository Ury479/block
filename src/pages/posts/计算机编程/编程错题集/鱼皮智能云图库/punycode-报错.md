---
layout: ../../../../../layouts/PostLayout.astro
title: punycode 报错
description: 1. node.js 版本有问题，需要切换成教程配套的 20 版本 2. MainController 文件没有 @RestController 注解
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程错题集/鱼皮智能云图库
---

```
(node:34342) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
```
1. node.js 版本有问题，需要切换成教程配套的 20 版本
2. MainController 文件没有`@RestController`注解

```
1. 问题原因

你的前端 npm run openapi 命令报错，原因是后端接口 http://localhost:8123/api/v2/api-docs 访问失败，导致 openapi 生成器拿不到接口文档，进而报错。

1. 后端服务未正确启动

经过排查，发现后端 Spring Boot 项目虽然端口监听了，但实际 OpenAPI 文档接口（/api/v2/api-docs）没有返回内容。

主要原因有两个：

- 控制器类 MainController 缺少 @RestController 注解，导致接口未被正确扫描。

- openapi.config.js 的 schemaPath 配置不正确，应该加上 group 参数。

1. 修复方法

- 给 MainController 添加 @RestController 注解。

- 修改 openapi.config.js，把 schemaPath 改为：

http://localhost:8123/api/v2/api-docs?group=test1

- 安装 @umijs/openapi 依赖：

npm install @umijs/openapi --save-dev

- 重启后端服务，再运行 npm run openapi。
```
