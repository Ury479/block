---
layout: ../../../../../../../../../layouts/PostLayout.astro
title: postman 无法向tomcat 服务器发送响应请求
description: 做法 ：添加 @MapperScan 注解 你的理解是正确的： @MapperScan
  注解应该加在主启动类（MybatisStudentEnrollmentSystemApplication.java）上，而不是加在 DeptContro
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/后端部分/javaWeb 学习记录/SpringBoot/Mybatis 错题集/postman报错
---

**做法**：添加`@MapperScan`注解

你的理解是正确的：  
**@MapperScan 注解应该加在主启动类（MybatisStudentEnrollmentSystemApplication.java）上，而不是加在 DeptController.java 上。**

---

### 原因说明

- `@MapperScan` 的作用是让 Spring Boot 在启动时自动扫描指定包下的 MyBatis Mapper 接口，并将它们注册为 Spring Bean。
- 这样，`@Autowired` 才能在 ServiceImpl 中自动注入 Mapper。
- 主启动类是整个 Spring Boot 应用的入口，只有加在这里，Spring Boot 才能在启动时全局生效。

---

### 正确做法

你的主启动类应该这样写：

```java
package com.ury.mybatis_studentenrollmentsystem;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.ury.mybatis_studentenrollmentsystem.mapper")
public class MybatisStudentEnrollmentSystemApplication {
    public static void main(String[] args) {
        SpringApplication.run(MybatisStudentEnrollmentSystemApplication.class, args);
    }
}
```

---

### 不要在 Controller 里加 @MapperScan

- Controller 只负责处理请求，不负责管理 Mapper 的扫描和注册。
- 把 `@MapperScan` 放在 Controller 里不会生效，也不符合 Spring Boot 的设计规范。

---

**结论：你只需要在主启动类加 @MapperScan，Controller 里不需要加。这样你的 Mapper 就能被正确扫描，ServiceImpl 能正常注入，接口也能正常访问。**

如需我帮你自动补充主启动类的 @MapperScan，请告知！
