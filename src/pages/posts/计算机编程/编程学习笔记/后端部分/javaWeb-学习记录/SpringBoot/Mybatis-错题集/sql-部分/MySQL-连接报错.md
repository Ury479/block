---
layout: ../../../../../../../../../layouts/PostLayout.astro
title: MySQL 连接报错
description: 解决方案 数据库连接后无法提示 连接数据库后还是不提示的去设置里搜SQL Dialects 把上边的两个选上MySQL 下边在添加项目路径
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/后端部分/javaWeb 学习记录/SpringBoot/Mybatis 错题集/sql 部分
---

```
org.springframework.jdbc.BadSqlGrammarException: 
### Error querying database.  Cause: java.sql.SQLSyntaxErrorException: Table 'mybatis.user' doesn't exist
### The error may exist in mapper/UserMapper.java (best guess)
### The error may involve defaultParameterMap
### The error occurred while setting parameters
### SQL: select * from user
### Cause: java.sql.SQLSyntaxErrorException: Table 'mybatis.user' doesn't exist
[08001] Public Key Retrieval is not allowed.

这个错误通常发生在以下情况：

1. MySQL 8.0 或更高版本： MySQL 8.0 引入了新的默认身份验证插件 caching_sha2_password。旧的 JDBC 驱动程序可能不支持此插件，或者需要显式配置以启用它。

2. JDBC URL 中缺少 allowPublicKeyRetrieval=true 参数： 为了使用 caching_sha2_password 身份验证方法，MySQL Connector/J 需要在连接 URL 中明确允许公共密钥检索。

尽管您在 application.properties 中将密码设置为 student123，但 DataGrip 中的密码是隐藏的，这可能会导致不匹配。此外，Unknown database 'mybatis' 错误仍然存在，这可能意味着即使连接成功，应用程序也找不到正确的数据库。

为了解决 Public Key Retrieval is not allowed 错误，我将修改 src/main/resources/application.properties 中的数据库连接 URL，添加 allowPublicKeyRetrieval=true 和 useSSL=false。useSSL=false 是为了避免 SSL 握手问题，如果您的 MySQL 没有配置 SSL 的话
```

### 解决方案
```
你的 MyBatis 程序报错如下：

text

`org.springframework.jdbc.BadSqlGrammarException:  ### Error querying database.  Cause: java.sql.SQLSyntaxErrorException: Table 'mybatis.user' doesn't exist ### The error may exist in mapper/UserMapper.java (best guess) ### The error may involve defaultParameterMap ### The error occurred while setting parameters ### SQL: select * from user ### Cause: java.sql.SQLSyntaxErrorException: Table 'mybatis.user' doesn't exist`

## 问题分析

你的数据库连接配置为：

text

`spring.datasource.url=jdbc:mysql://localhost:3306/mybatis`

也就是说，MyBatis 正在连接名为 `mybatis` 的数据库，并在执行如下 SQL：

sql

`select * from user`

但报错提示 `Table 'mybatis.user' doesn't exist`，即 `mybatis` 数据库下没有名为 `user` 的表[1](https://blog.csdn.net/weixin_38189581/article/details/128365510)[2](https://gitcode.csdn.net/65eec9481a836825ed79d7ad.html)[3](https://www.ctyun.cn/zhishi/p-197411)。

## 可能原因

- 你的数据库 `mybatis` 下确实没有 `user` 这张表（最常见）[1](https://blog.csdn.net/weixin_38189581/article/details/128365510)[3](https://www.ctyun.cn/zhishi/p-197411)。
    
- 表名大小写不一致（如数据库里是 `User` 或 `USER`，但SQL写的是 `user`，而MySQL在不同操作系统下对表名大小写敏感性不同）[3](https://www.ctyun.cn/zhishi/p-197411)。
    
- 你的表实际名字可能叫 `td_user` 或其他，而你的SQL或Mapper文件中写的是 `user`[1](https://blog.csdn.net/weixin_38189581/article/details/128365510)。
    
- 你连接的数据库不是你想要的数据库（比如拼写错误，库没切对）。
    

## 解决办法

1. **确认数据库和表是否存在**  
    登录MySQL，执行：
    
    sql
    
    `USE mybatis; SHOW TABLES;`
    
    查看是否有 `user` 这张表。
    
2. **如果没有表，创建表**
    
    sql
    
    `CREATE TABLE user (   id INT PRIMARY KEY AUTO_INCREMENT,  name VARCHAR(50),  age INT,  email VARCHAR(100) );`
    
3. **检查表名大小写**
    
    - 确认你的表名和SQL语句大小写一致，或在MySQL配置中设置 `lower_case_table_names=1`，让表名不区分大小写[3](https://www.ctyun.cn/zhishi/p-197411)。
        
4. **检查Mapper文件SQL语句**
    
    - 如果实际表名不是 `user`，请将SQL或Mapper文件中的表名改成实际表名[1](https://blog.csdn.net/weixin_38189581/article/details/128365510)。
        
5. **检查数据库连接配置**
    
    - 确保 `spring.datasource.url` 指向的数据库确实是你想操作的数据库。
```
#### 数据库连接后无法提示
连接数据库后还是不提示的去设置里搜SQL Dialects  把上边的两个选上MySQL  下边在添加项目路径
![Pasted image 20250615120835.png](/media/7c186b189afb4c13.png)
