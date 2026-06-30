---
layout: ../../../../../layouts/PostLayout.astro
title: 找不到 config 文件
description: 当前目录下并没有 openapi.config.js 这个文件，所以 Node.js 报错“找不到模块”。 方案： 1. 将文件移入
  Frontend 文件夹……不是 ury picture 2. 修改 JDK,SDK 版本为 11 3.
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 3
sourceFolder: 计算机编程/编程错题集/鱼皮智能云图库
---

```
Error: Cannot find module '/Users/ury/Documents/project/MyProject/ury-picture-backend/ury-picture-frontend/openapi.config.js'
```
当前目录下并没有 openapi.config.js 这个文件，所以 Node.js 报错“找不到模块”。
**方案：** 
1. 将文件移入 Frontend 文件夹……不是 ury-picture
2. 修改 JDK,SDK 版本为 11

3. 核查 IDEA 数据库运行情况
4. 核对 springboot 运行情况:前期没有创建数据库
5. 文件必须在项目根目录

```
fetch openapi error: FetchError: request to http://localhost:8123/api/v2/api-docs failed
TypeError: Cannot destructure property 'info' of 'this.openAPIData' as it is null.
```
openapi.config.js 配置成功，前端运行失败，springboot 无法加载：
	方案：单独打开前端项目文件，mark `src` 目录为 root,点击出现`run`
#### 常见启动失败原因
- 数据库未启动或账号密码错误
- pom.xml 依赖缺失
- 启动目录不对
-  端口被占用
- application.yml 配置错误
1. http://localhost:8123/api/doc.html#/home 界面空白

`java: java.lang.NoSuchFieldError: Class com.sun.tools.javac.tree.JCTree$JCImport does not have member field 'com.sun.tools.javac.tree.JCTree qualid'

**方案**：JDK，SDK 调整为 11
1. JDK:`command + ;`1. IDEA Project SDK 设置为 11
	1. File → Project Structure → Project → 选择 JDK 11
2. Module JDK 设置为 11
	-  Project Structure → Modules → 选择后端模块 → 右侧 Module SDK 选 JDK 11
3. Maven JDK 设置为 11
-  Preferences → Build, Execution, Deployment → Build Tools → Maven → Runner/Importing → 选 JDK 11

你遇到的报错是：

```
java: java.lang.NoSuchFieldError: Class com.sun.tools.javac.tree.JCTree$JCImport does not have member field 'com.sun.tools.javac.tree.JCTree qualid'
```

---

## 问题分析

这个错误**不是你的业务代码问题**，而是**JDK 版本和某些插件（如 Lombok、MapStruct、IDEA 插件等）不兼容**导致的。  
常见于以下场景：

1. **JDK 版本过高或过低**，与依赖/插件不兼容（比如用 JDK 17/21 编译老版本 Lombok/MapStruct）。
2. **IDEA 配置的 JDK 与 Maven/项目实际用的 JDK 不一致**。
3. **Lombok 插件或依赖版本过低**，不支持你当前的 JDK。
4. **IDEA 插件缓存或编译缓存异常**。

---

## 解决办法

### 1. **统一 JDK 版本为 8 或 11（推荐）**
- 项目 JDK、Maven JDK、IDEA Project SDK 都设置为 11（或 8，推荐 11）。
- 不要用 JDK 17/21 等高版本，除非所有依赖都已升级。

### 2. **升级 Lombok 依赖和 IDEA Lombok 插件**
- pom.xml 里 Lombok 依赖用最新版（如 1.18.28）：
  ```xml
  <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <version>1.18.28</version>
      <scope>provided</scope>
  </dependency>
  ```
- IDEA 插件中心升级 Lombok 插件到最新版。

### 3. **清理并重建项目**
- IDEA 菜单：File → Invalidate Caches / Restart → Invalidate and Restart
- Maven 面板：Reimport/Reload Project
- 终端执行：
  ```bash
  mvn clean
  mvn install
  ```

### 4. **检查 src 标记**
- 只需将 `src/main/java` 标记为 `Sources Root`，不要把整个 `src` 标记为 root，否则资源和代码会混淆。

### 5. **检查依赖冲突**
- 检查 pom.xml 是否有多版本 javac、lombok、mapstruct 等依赖冲突。

---

## 总结

- 你的问题是**JDK 与依赖/插件不兼容**，不是业务代码问题。
- 推荐统一用 JDK 11，升级 Lombok 依赖和插件，清理缓存，重新构建。
- **不要把整个 src 标记为 root，只标记 src/main/java 为 Sources Root。**

---

如还有问题，请贴出你的 JDK 版本、pom.xml 主要依赖、Lombok 版本和完整报错堆栈，我可以帮你进一步定位！

`
