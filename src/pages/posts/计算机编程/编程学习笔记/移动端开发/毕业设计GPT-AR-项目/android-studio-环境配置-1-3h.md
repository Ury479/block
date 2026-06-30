---
layout: ../../../../../../layouts/PostLayout.astro
title: android  studio 环境配置 1 -3h
description: 1. 清理 flutter配置 1. geek 删除 android studio 2. 删除flutter 刚刚的环境变量 3.
  删除 flutter 文件 2. 官网重新下载 android stuido 最新版和 flutter 相应
date: 2025-09-19T07:17:08.128Z
updated: 2025-09-19T07:27:15.671Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/移动端开发/毕业设计：GPT-AR 项目
---

1. 清理 flutter配置
	 1. geek 删除 android studio
	 2. 删除flutter 刚刚的环境变量
	 3. **删除 flutter 文件**
 2. 官网重新下载 android stuido 最新版和 flutter **相应版本**的 SDK
	 1. 配置 flutter PATH 系统环境变量（表格版），**flutter 移至最上层**
	 2. 终端`flutter doctor` 验证，报错则通过 gpt 指令强制锁定
	 3. `flutter doctor -v`
	 4.  `flutter config --jdk-dir="C:\Users\java_\Downloads\software\jdk\jdk-17.0.12_windows-x64_bin\jdk-17.0.12` **flutter jdk 引入**
	 5. android studio 退出并启动项目配置，下载模拟器，api
 3. 设置界面修改 SDK 路径，**避免被老版本的 flutter 占用**
 4. project structure:修改 module jdk 版本，引入**相同版本**的java SDK后开始核对 flutter SDK
 5. 引入 SDK tools,配置 google SDK driver,
	 1. 终端报错`tool chain error` 说明老版本 flutter 没有删除干净或者android studio 使用路径有误，
 6. **如果无法显示手机配置，说明 flutter 版本有误**
