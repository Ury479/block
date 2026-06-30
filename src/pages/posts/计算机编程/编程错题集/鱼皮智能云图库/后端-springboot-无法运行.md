---
layout: ../../../../../layouts/PostLayout.astro
title: 后端 springboot 无法运行
description: 1. JDK 版本被修改（默认 11） 2. maven 版本冲突（cursor 误修改） 报错 正常maven
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程错题集/鱼皮智能云图库
---

1. JDK 版本被修改（默认 11）
 2. maven 版本冲突（cursor 误修改）

#### 报错
```
Exception in thread "main" java.lang.NoClassDefFoundError: org/junit/platform/launcher/TestIdentifier
```

#### 正常maven
```
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">

<modelVersion>4.0.0</modelVersion>

<groupId>com.ury</groupId>

<artifactId>ury-picture-backend</artifactId>

<version>0.0.1-SNAPSHOT</version>

<name>ury-picture-backend</name>

<description>ury-picture-backend</description>

<properties>

<java.version>11</java.version>

<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>

<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>

<spring-boot.version>2.7.6</spring-boot.version>

</properties>

<dependencies>

<dependency>

<groupId>org.springframework.boot</groupId>

<artifactId>spring-boot-starter-web</artifactId>

</dependency>

  

<!-- 引入 springboot-aop 依赖 -->

<dependency>

<groupId>org.springframework.boot</groupId>

<artifactId>spring-boot-starter-aop</artifactId>

<version>2.6.2</version>

</dependency>

  

<!-- 引入 mybatis plus -->

<dependency>

<groupId>com.baomidou</groupId>

<artifactId>mybatis-plus-boot-starter</artifactId>

<version>3.5.9</version>

</dependency>

  

<!-- 引入 hutool工具库 https://doc.hutool.cn/pages/index/ -->

<dependency>

<groupId>cn.hutool</groupId>

<artifactId>hutool-all</artifactId>

<version>5.8.26</version>

</dependency>

  

<!--引入 knif4j https://doc.xiaominfo.com/docs/quick-start-->

<dependency>

<groupId>com.github.xiaoymin</groupId>

<artifactId>knife4j-openapi2-spring-boot-starter</artifactId>

<version>4.4.0</version>

</dependency>

  

<dependency>

<groupId>com.mysql</groupId>

<artifactId>mysql-connector-j</artifactId>

<version>8.3.0</version>

<scope>runtime</scope>

</dependency>

  

<dependency>

<groupId>org.projectlombok</groupId>

<artifactId>lombok</artifactId>

<optional>true</optional>

</dependency>

  

<dependency>

<groupId>org.springframework.boot</groupId>

<artifactId>spring-boot-starter-test</artifactId>

<scope>test</scope>

</dependency>

  

</dependencies>

<dependencyManagement>

<dependencies>

<dependency>

<groupId>org.springframework.boot</groupId>

<artifactId>spring-boot-dependencies</artifactId>

<version>${spring-boot.version}</version>

<type>pom</type>

<scope>import</scope>

</dependency>

</dependencies>

</dependencyManagement>

  

<build>

<plugins>

<plugin>

<groupId>org.apache.maven.plugins</groupId>

<artifactId>maven-compiler-plugin</artifactId>

<version>3.8.1</version>

<configuration>

<source>11</source>

<target>11</target>

<encoding>UTF-8</encoding>

</configuration>

</plugin>

<plugin>

<groupId>org.springframework.boot</groupId>

<artifactId>spring-boot-maven-plugin</artifactId>

<version>${spring-boot.version}</version>

<configuration>

<mainClass>com.ury.urypicturebackend.UryPictureBackendApplication</mainClass>

</configuration>

<executions>

<execution>

<id>repackage</id>

<goals>

<goal>repackage</goal>

</goals>

</execution>

</executions>

</plugin>

</plugins>

</build>

  

</project>
```
