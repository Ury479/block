---
layout: ../../../../../layouts/PostLayout.astro
title: No qualifying bean of type
  'com.ury.urypicturebackend.generator.mapper.UserMapper' available
description: 方案 启动类 @MapperScan 注解修改为同时扫 com.ury.urypicturebackend.mapper 和
  com.ury.urypicturebackend.generator.mapper 包，确保 MyBatis 能
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程错题集/鱼皮智能云图库
---

```
启动类 @MapperScan("com.ury.urypicturebackend.mapper") 只扫描了 mapper 包，没有扫描 generator.mapper 包
```
#### 方案
启动类 @MapperScan 注解修改为同时扫 com.ury.urypicturebackend.mapper 和 com.ury.urypicturebackend.generator.mapper 包，确保 MyBatis 能正确注入 Mapper。
```
@MapperScan({"com.ury.urypicturebackend.mapper", "com.ury.urypicturebackend.generator.mapper"})
```
