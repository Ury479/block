---
layout: ../../../../../../../../../layouts/PostLayout.astro
title: PageHelper 分页插件报错
description: Spring 容器在启动时，无法为 EmpController 创建一个实例，因为它找不到所依赖的 EmpService 类型的
  Bean。 我已经做了一些修复，但问题似乎仍然存在。这通常意味着： 1. EmpServiceImpl 类没有
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/后端部分/javaWeb 学习记录/SpringBoot/Mybatis 错题集/sql 部分
---

```
Description:

Parameter 0 of constructor in com.ury.mybatis_studentenrollmentsystem.controller.EmpController required a bean of type 'com.ury.mybatis_studentenrollmentsystem.service.EmpService' that could not be found.


Action:

Consider defining a bean of type 'com.ury.mybatis_studentenrollmentsystem.service.EmpService' in your configuration.
```
Spring 容器在启动时，无法为 EmpController 创建一个实例，因为它找不到所依赖的 EmpService 类型的 Bean。

我已经做了一些修复，但问题似乎仍然存在。这通常意味着：

1. EmpServiceImpl 类没有被 Spring 正确地扫描到。

2. EmpServiceImpl 在创建过程中失败了，导致它无法被注入

#### 先前排查报错：
```
EmpServiceImpl.java 文件又回到了之前的状态：

1. 类被声明为 abstract。

2. 缺少了 list() 方法的正确实现。

这可能是因为之前的修改没有被正确保存。抽象类是无法被实例化的，所以 Spring 无法创建 EmpServiceImpl 的 Bean，导致了注入失败。
```
