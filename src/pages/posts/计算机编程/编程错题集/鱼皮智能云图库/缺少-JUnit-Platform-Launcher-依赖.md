---
layout: ../../../../../layouts/PostLayout.astro
title: 缺少 JUnit Platform Launcher 依赖
description: "JUnit 测试相关类找不到 表现：NoClassDefFoundError:
  org/junit/platform/launcher/TestIdentifier。 原因：缺少 JUnit Platform Launcher 依赖。
  解决"
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程错题集/鱼皮智能云图库
---

#####  JUnit 测试相关类找不到
```
<dependency>
	  <groupId>org.junit.platform</groupId>
	  <artifactId>junit-platform-launcher</artifactId>
	  <scope>test</scope>
</dependency>
```

- 表现：NoClassDefFoundError: org/junit/platform/launcher/TestIdentifier。
-  原因：缺少 JUnit Platform Launcher 依赖。
-  解决：在 <dependencies> 中添加相关依赖
