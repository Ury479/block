---
layout: ../../../../layouts/PostLayout.astro
title: AI 后端搭建教程(自建后端)
description: 项目后端部分包括登录注册界面，用户管理界面，用户校验界面，技术栈如下：使用 SpringBoot3,引入docker,maven,使用
  Maybatis, 我需要你帮我核对版本兼容性，使用 yml，统一 数据库字段名和 model 变量名，
date: 2026-02-01T06:36:16.705Z
updated: 2026-02-01T07:05:00.638Z
type: 文稿
topic: 花海·AI 教程
tags: []
readingMinutes: 3
sourceFolder: 计算机编程/花海·AI 教程
---

项目后端部分包括登录注册界面，用户管理界面，用户校验界面，技术栈如下：使用 SpringBoot3,引入docker,maven,使用 Maybatis,
我需要你帮我核对版本兼容性，使用 yml，统一 数据库字段名和 model 变量名，环境配置方面，

我需要在User 引入基本字段，配置`@Data`，使用lombok 生成 get,set 方法，同时在 mapper 层操作数据库，service 层提供服务，model 层提供接口

## 登录校验部分
### 注册逻辑部分
注册逻辑部分包含：
1. 用户在前端输入账户和密码、以及校验码(todo)2.校验用户的账户、密码、校验密码，是否符合要求
	1. 账户的话 不小于 4 位
	2. 密码就 不小于8 位吧
	3. 账户不能重复
	4. 账户不包含特殊字符
	5. 密码和校验密码相同
2. 对密码进行加密(密码千万不要直接以明文存储到数据库)
3. 向数据库插入用户数据

后端注册模块需要使用UserServiceImpl 文件，添加校验用的正则表达式，编写加密算法，要求如下：
	a.只写 POST请求
	b.登录状态验证:记录用户登录态，返回用户信息(脱敏)
	c.检查数据库字段名和唯一约束
	d.配置逻辑删除功能
	e.检查 User 实体和数据库字段是否对应
	f.controller 层只关注请求参数校验，不关注业务逻辑层，service 是对业务逻辑的校验，可以被其他层调用
	g.使用序列化把大体积的换为小体积文件
	 h.引入`@RestController` 用于编写restful 风格的api,返回值为 json类型

### 用户管理部分
用户管理模块需要核对接口：
	1. 编写`@GetMapping("/search)"`
	2. **必须鉴权**，核对管理员权限
	3. 通过 application.yml 指定接受全局请求api
## docker部分
我需要你帮我配置 Dockerfile 和 docker-compose.yml 文件，

## 后端部署
我需要你帮我规避 CORS  跨域问题，配置前端多环境，确保不同环境做不同事情，使用webfiy(类似 vercel)或微信云托管进行后端部署，指导我导入以下文件：
1. 前端：导入 dist,Dockerfile,docker 3 个目录，压缩文件
2. 后端：target 目录，Dockerfile 文件，**注意：** 需要核对 dockerfile 源码，让 docker 进行编译
