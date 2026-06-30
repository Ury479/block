---
layout: ../../../../../../../../layouts/PostLayout.astro
title: maven 配置
description: 1. pacakge 打包 2. IDEA 自带，vs code 需要自行配置 3. maven 报错原因 1.
  1：编译和运行不是同一个jdk版本，2：jdk版本过高不兼容，3：修改pom配置文件的时候出错，4：下载到一半的时候突然没有网
date: 2025-09-05T03:56:40.877Z
updated: 2025-09-05T06:35:01.708Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/后端部分/javaWeb 学习记录/SpringBoot/Mybatis 笔记
---

1. pacakge 打包
 2. IDEA 自带，vs code 需要自行配置
 3. maven 报错原因
	1. 1：编译和运行不是同一个jdk版本，2：jdk版本过高不兼容，3：修改pom配置文件的时候出错，4：下载到一半的时候突然没有网络导致文件丢失（重新删了在下也没有用）
	2. 如果plugins里有依赖爆红可以管理员运行终端输入mvn help:system,然后刷新maven
 4. maven 仓库信息
	 1. maven repository点击直接粘贴
 5. maven 生命周期
	 1. 依赖传递
	 2. clear 运行后会清理掉 target 目录
