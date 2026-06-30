---
layout: ../../../../../../../../../layouts/PostLayout.astro
title: Postman 报错 500
description: 数据库没连接，mybatis 网页报错 500 错误是因为数据库连接失败，不是代码问题。
  只要数据库名和实际一致，且有对应表，接口就能正常返回数据。 修改 application.properties 配置为 spring.datasour
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/后端部分/javaWeb 学习记录/SpringBoot/Mybatis 错题集/postman报错
---

```
Caused by: java.sql.SQLSyntaxErrorException: Unknown database 'your_db'
```
数据库没连接，mybatis 网页报错
- 500 错误是因为数据库连接失败，不是代码问题。
- 只要数据库名和实际一致，且有对应表，接口就能正常返回数据。
- 修改 application.properties 配置为`spring.datasource.url=jdbc:mysql://localhost:3306/mybatis?useSSL=false&serverTimezone=UTC`

#### 其他错误
```

好的，这个错误 `org.apache.ibatis.binding.BindingException: Invalid bound statement (not found): com.ury.mybatis_studentenrollmentsystem.mapper.EmpMapper.list` 是一个非常典型的 MyBatis 配置问题。

它意味着 MyBatis 无法找到与 `EmpMapper` 接口中的 `list` 方法相对应的 SQL 语句。这通常是由于以下原因之一造成的：
1.  **Mapper XML 文件缺失**：可能不存在 `EmpMapper.xml` 文件。
2.  **XML 文件位置不正确**：XML 文件没有放在配置所指定的扫描路径下。
3.  **命名空间不匹配**：XML 文件中的 `namespace` 与 `EmpMapper` 接口的完整类名不一致。
4.  **方法名不匹配**：XML 文件中的 SQL 语句的 `id` 与 `EmpMapper` 接口中的方法名 `list` 不一致。

为了解决这个问题，我需要先检查一下 `EmpMapper.java` 的定义，以及是否存在对应的 XML 映射文件。

Ran tool
好的，我通过搜索找到了两个关键文件：
1.  `src/main/java/com/ury/mybatis_studentenrollmentsystem/mapper/EmpMapper.java` (Java 接口)
2.  `src/main/resources/com/ury/mapper/EmpMapper.xml` (XML 映射文件)

现在，我来分别读取这两个文件的内容，以确定问题的根源。首先是 Java 接口文件：

Read file: src/main/java/com/ury/mybatis_studentenrollmentsystem/mapper/EmpMapper.java
好的，`EmpMapper.java` 接口中 `list` 方法的定义是：
`public List<Emp> list(String name, Short gender, LocalDate begin, LocalDate end);`

现在，我来检查 `EmpMapper.xml` 文件，看看这里是否存在对应的 SQL 语句。

Read file: src/main/resources/com/ury/mapper/EmpMapper.xml
很好，问题找到了！

通过对比 `EmpMapper.java` 和 `EmpMapper.xml`，我发现：
1.  **XML 文件中的 `namespace` 是正确的**：`com.ury.mybatis_studentenrollmentsystem.mapper.EmpMapper`
2.  **XML 文件中的 `id` 也是正确的**：`<select id="list" ...>`
3.  **但是，`EmpMapper.java` 接口中的 `list` 方法没有使用 `@Select` 注解**，这意味着 MyBatis 会去 XML 文件中寻找对应的 SQL。

**真正的问题在于**：你的 Spring Boot 应用没有找到这个 XML 文件。

我注意到 XML 文件的路径是 `src/main/resources/com/ury/mapper/EmpMapper.xml`。这是一个不常见的存放位置。通常，Mapper XML 文件会放在 `src/main/resources/mapper/` 目录下。

你需要检查你的 `application.properties` 文件，确认 `mybatis.mapper-locations` 属性的配置是否正确指向了 `src/main/resources/com/ury/mapper/` 这个目录。

让我来帮你检查一下 `application.properties` 文件。

Read file: src/main/resources/application.properties
问题确认！

你的 `application.properties` 文件中，MyBatis 的映射文件位置被配置为：
`mybatis.mapper-locations=classpath:mapper/*.xml`

这个配置告诉 MyBatis 去 `resources` 目录下的 `mapper` 文件夹中寻找 XML 文件。

然而，你的 `EmpMapper.xml` 文件实际存放的路径是：
`src/main/resources/com/ury/mapper/EmpMapper.xml`

这就导致了 MyBatis 找不到 `EmpMapper.xml`，进而抛出 `BindingException` 异常。

**解决方案：**

我将修改 `application.properties` 文件，将 `mybatis.mapper-locations` 的值改为正确的路径，让 MyBatis 能够扫描到所有 `mapper` 目录下的 XML 文件。

`mybatis.mapper-locations=classpath*:com/ury/mapper/*.xml`

这个 `*` 通配符可以确保 MyBatis 能够找到你的 `EmpMapper.xml`。

让我来帮你修改。


我已经修正了 `application.properties` 文件中的 `mybatis.mapper-locations` 配置。

现在，MyBatis 应该能够正确地找到你的 `EmpMapper.xml` 文件了。

请你**重新启动你的 Spring Boot 应用程序**，问题应该就解决了。如果还有其他问题，请随时告诉我。


```
