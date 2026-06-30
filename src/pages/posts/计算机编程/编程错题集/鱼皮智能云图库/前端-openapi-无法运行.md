---
layout: ../../../../../layouts/PostLayout.astro
title: 前端 openapi 无法运行
description: 好的，以下是你在前后端联调过程中遇到的所有主要报错及其解决方案总结： 1. 前端 openapi 生成时报错 报错内容： 原因分析：
  前端 openapi.config.js 配置的 schemaPath 地址无法访问，后端没有返回 Ope
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 3
sourceFolder: 计算机编程/编程错题集/鱼皮智能云图库
---

好的，以下是你在前后端联调过程中遇到的所有主要报错及其解决方案总结：

---

### 1. 前端 openapi 生成时报错

**报错内容：**
```
fetch openapi error: FetchError: request to http://localhost:8123/api/v2/api-docs failed, reason: ECONNREFUSED
TypeError: Cannot destructure property 'info' of 'this.openAPIData' as it is null.
```

**原因分析：**
- 前端 openapi.config.js 配置的 schemaPath 地址无法访问，后端没有返回 OpenAPI 文档，导致生成失败。

**解决方案：**
- 检查后端服务是否启动，确保 8123 端口监听正常。
- 检查后端 OpenAPI 文档实际可访问的地址（通过 swagger-resources 确认 group 参数）。
- 修改 openapi.config.js，将 schemaPath 改为 `http://localhost:8123/api/v2/api-docs?group=test1`。

---

### 2. 后端 Spring Boot 启动但接口未被扫描

**报错表现：**
- 前端访问 `/api/v2/api-docs` 没有内容。
- 后端日志无明显报错，但 swagger 文档接口为空。

**原因分析：**
- 控制器类 `MainController` 没有加 `@RestController` 注解，导致接口未被 Spring 扫描，OpenAPI 文档生成为空。

**解决方案：**
- 给 `MainController` 添加 `@RestController` 注解。

---

### 3. pom.xml 配置导致 Spring Boot 插件跳过运行

**报错表现：**
- `mvn spring-boot:run` 没有实际启动服务，或服务一闪而过。

**原因分析：**
- pom.xml 中 `<skip>true</skip>` 导致 spring-boot-maven-plugin 被跳过。

**解决方案：**
- 删除 `<skip>true</skip>` 配置。

---

### 4. 前端缺少 openapi 依赖

**报错表现：**
- 运行 `npm run openapi` 时提示找不到 `@umijs/openapi`。

**解决方案：**
- 在前端项目下执行：`npm install @umijs/openapi --save-dev`。

---

### 5. 端口监听但接口404

**报错表现：**
- 8123 端口监听正常，但访问 `/api/v2/api-docs` 404 或无内容。

**原因分析：**
- swagger group 配置，实际接口为 `/api/v2/api-docs?group=test1`。

**解决方案：**
- 通过 `/api/swagger-resources` 获取实际 group 名称，拼接正确的 schemaPath。

---

### 6. 依赖安全警告

**报错表现：**
- npm/yarn/maven 安装依赖时有高危漏洞提示。

**解决方案：**
- 这些警告不影响开发调试，可后续升级依赖或关注官方修复。

---

## 总结

你遇到的所有问题，核心都在于**后端接口未被正确暴露**和**前端 schemaPath 配置不正确**。  
只要保证后端接口能被 swagger/knife4j 正确扫描，前端配置实际可访问的 OpenAPI 文档地址，openapi 生成就能顺利完成。

正确结果：

```
(node:75861) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[openAPI]: 💺 将 Swagger 转化为 openAPI
[openAPI]: ✅ 成功生成 service 文件
```
