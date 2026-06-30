---
layout: ../../../../../../layouts/PostLayout.astro
title: 技术选型
description: 技术选型 1. antDesign 自动下载为 react 版本 ,AntDesignPro,Umi, 2.
  node.js16.14.0 3. 注意事项：文件瘦身，删一遍跑一遍 a. 清理语言模块 b.清理无关 config 模块 c.对
date: 2025-11-26T13:37:58.581Z
updated: 2026-02-24T08:08:50.504Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 3
sourceFolder: 计算机编程/编程错题集/鱼皮用户中心项目/项目笔记
---

# 技术选型
1. antDesign(自动下载为 react 版本),AntDesignPro,Umi,
2. node.js16.14.0
3. 注意事项：文件瘦身，删一遍跑一遍
		a. 清理语言模块
		b.清理无关 config 模块
		c.对官方配置不理解就上官网搜索
		d.cd 入“星球项目”后直接
	```
	# 使用 npm
	npm i @ant-design/pro-cli -g
	pro create myapp
	```
	创建项目 myapp
4. 理解 Umi request 支持的参数,react 封装 js,umi 封装 react
5. 理解 Ant design 框架，此框架基于 react 框架构建，axios 封装 ajax,request 封装了 axios
6. **react 版本可以引入 xml 文件加深依赖管理，但 vue 版本可以不用**
7. 统一前后端接口名，否则会出现 CORS 跨域问题
8. 注意跟踪代码，学习源码
9. 区分正向代理和反向代理，需要开启 proxy
	1. 代理不能直接代理根路径，否则会直接代理前端页面 
	2. 前后端联调需要操作浏览器，考虑 apidog 进行端口测试，确认后端可用后启用前端,考虑  request.ts 文件的可行性
10. 编写登录表单，卡点：表单请求，浏览器交互，ts 文件配置，API 接口测试，登录态管理，全局响应拦截器

# 业务模块
## 导航页
1. 重新`export` logo 地址，替换原有内容，全局修改变量：alt+F6
2. 删减无关代码，在开发用户注册页面之前优先处理路由和前后端联调，补充 ES6 基础，夯实 node.js 服务器基本功
3. `config` 文件夹保存在根目录
4. 登录拦截需要跳转到注册页，注意修注册页提交逻辑、修注册接口路径、修路由配置（register 名称和 404 路径）

app.tsx 修改：
- getInitialState：
    - 白名单页面直接返回，不执行 fetchUserInfo()
    - 非白名单页面才执行 fetchUserInfo()
- layout.onPageChange：
    - 白名单页面直接 return
    - 非白名单页面如果没有 currentUser 才跳转登录页
## 用户管理模块
1. 处理用户加载，用户权限 app.tsx 模块，注意全局响应请求拦截器封装，对接口的通用响应进行统一处理
2. 高级表单![Pasted image 20260224140125.png](/media/b226a3fdb0549604.png)
