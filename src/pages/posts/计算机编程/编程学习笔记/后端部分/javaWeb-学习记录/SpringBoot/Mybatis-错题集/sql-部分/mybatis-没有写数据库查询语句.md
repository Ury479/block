---
layout: ../../../../../../../../../layouts/PostLayout.astro
title: mybatis 没有写数据库查询语句
description: 你的报错信息如下： 你的代码问题分析 你在 DeptMapper.java 里写了如下内容： 问题就在于： @Select 注解
  必须要有 SQL 语句 ，不能只写 @Select ，否则 MyBatis 无法解析，Spring Boot
date: 2025-07-14T03:56:00.000Z
updated: 2025-09-17T08:42:13.748Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/后端部分/javaWeb 学习记录/SpringBoot/Mybatis 错题集/sql 部分
---

你的报错信息如下：

```
org.springframework.beans.factory.BeanDefinitionStoreException: Invalid bean definition with name 'deptMapper' defined in file ...DeptMapper.class: Invalid value type for attribute 'factoryBeanObjectType': java.lang.String
```
---
## 你的代码问题分析

你在 `DeptMapper.java` 里写了如下内容：

```java
@Mapper
public interface DeptMapper {
    // 查询全部部门数据
    @Select
    List<Dept> list();
}
```

**问题就在于：**
- `@Select` 注解**必须要有 SQL 语句**，不能只写 `@Select`，否则 MyBatis 无法解析，Spring Boot 启动时就会报 BeanDefinitionStoreException 相关的错误。

---

## 正确写法

你应该这样写：

```java
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import java.util.List;
import com.ury.mybatis_studentenrollmentsystem.pojo.Dept;

@Mapper
public interface DeptMapper {
    // 查询全部部门数据
    @Select("SELECT * FROM dept")
    List<Dept> list();
}
```

---

## 解决办法

1. **把 `@Select` 改成 `@Select("SELECT * FROM dept")`，并确保 SQL 正确。**
2. **保存文件，重新编译并启动项目。**

---

## 总结

- 你的报错是因为 `@Select` 注解没有写 SQL 语句，导致 MyBatis 无法生成 Bean。
- 只要补全 SQL，问题即可解决。

---

如需我帮你自动修正 `DeptMapper.java`，请回复“帮我修正 DeptMapper”。
