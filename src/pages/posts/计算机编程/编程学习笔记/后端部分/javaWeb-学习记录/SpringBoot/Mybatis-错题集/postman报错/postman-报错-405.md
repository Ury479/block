---
layout: ../../../../../../../../../layouts/PostLayout.astro
title: postman 报错 405
description: 你的 /depts 接口在 Controller 里只写了 @GetMapping "/depts" 或
  @RequestMapping value = "/depts", method = RequestMethod.GET ，只支持 G
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/后端部分/javaWeb 学习记录/SpringBoot/Mybatis 错题集/postman报错
---

```
error	Method Not Allowed
trace	org.springframework.web.HttpRequestMethodNotSupportedException: Request method 'POST' is not supported
```
- 你的 /depts 接口在 Controller 里只写了 @GetMapping("/depts") 或 @RequestMapping(value = "/depts", method = RequestMethod.GET)，只支持 GET 请求。
-  你用 Postman 发送了 POST 请求，Spring Boot 没有找到支持 POST 的接口，所以返回 405。
-  405 报错是因为你请求的方法（POST）和 Controller 支持的方法（GET）不一致。
-  需要在 Controller 里加上对应的 POST 方法，或者用 GET 请求。
