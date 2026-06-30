---
layout: ../../../../../../../../layouts/PostLayout.astro
title: Bean 的获取
description: Bean 的获取 获取方式：名称获取，类型获取，name 转换获取 1. @Resource 可以根据name和类型获取 2.
  没基础的人绝对不理解APPlicationcentext，这个是继承了beanfactory，由defaultl
date: 2025-09-04T10:30:58.179Z
updated: 2025-09-05T03:24:47.830Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/后端部分/javaWeb 学习记录/SpringBoot/Mybatis 笔记
---

# Bean 的获取
获取方式：名称获取，类型获取，name 转换获取
 1. @Resource  可以根据name和类型获取
 2. 没基础的人绝对不理解APPlicationcentext，这个是继承了beanfactory，由defaultlistablebeanfactory实现的

# Bean 的管理
对于一些不常用的Bean，延迟加载可以避免在启动时初始化所有Bean，从而减少启动时间;  按需加载资源：某些Bean依赖于外部资源（如数据库连接或远程服务），在系统启动时可能不需要立即加载。
## 单例模式
![Pasted image 20250904174343.png](/media/de195c093486cd2e.png)
### 配置第三方Bean
1. 在配置第三方类时候如果需要注入其他类，可以直接将其他类作为方法的形参传入
2. 定义第三方bean的方法中使用其它bean不需要@Autowired，会自动注入
3. 先学会注解开发，然后就可以专研一下注解的底层代码
## 饿汉模式
## SpringBoot 自动配置原理
1. 导入注解
2. 获取 OSS参数
3. 自定义 starter 
4. 结构分层：Controller控制器 层负责接收请求响应数据，Service业务层负责具体的业务逻辑处理，而Dao数据访问层也叫持久层， 就是用来处理数据访问操作的，来完成数据库当中数据的增删改查操作。
	1. pojo,utils
![Pasted image 20250905075412.png](/media/4bbe8d729f607004.png)
5. 全局依赖管理![Pasted image 20250905094557.png](/media/f298539c2ab03d75.png)
6. 聚合工程 package,install
	1. 注意test目录下jwt令牌的时效，不然会打包失败，建议重新生成重新填参数
