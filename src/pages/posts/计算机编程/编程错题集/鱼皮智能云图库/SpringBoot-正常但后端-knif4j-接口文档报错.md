---
layout: ../../../../../layouts/PostLayout.astro
title: SpringBoot 正常但后端 knif4j 接口文档报错
description: 方案： UserController 类上加 @Api 注解 controller 没有加 Swagger 注解（如 @Api 、
  @ApiOperation ），导致接口文档没有详细描述和调试入口。 你的 application.yml
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程错题集/鱼皮智能云图库
---

![Pasted image 20250629092950.png](/archive/?q=Pasted%20image%2020250629092950.png)
	方案：`UserController`类上加 @Api 注解

 controller 没有加 `Swagger` 注解（如 `@Api`、`@ApiOperation`），导致接口文档没有详细描述和调试入口。
- 你的 application.yml 配置已包含 knife4j，依赖也已引入，说明环境没问题。
-  你的 controller 能被扫描到，页面能显示 main-controller 和 user-controller，说明基础配置没问题。
