---
layout: ../../../../../../../../../layouts/PostLayout.astro
title: 注解，xml 文件报错
description: 好的，以下是你在开发和测试过程中遇到的5个典型报错及其简要总结： 1. MyBatis找不到getter方法报错 原因 ：
  MyBatis SQL语句中使用了下划线命名（如 create time ），但Java实体类属性是驼峰命名（如 c
date: 2025-07-14T03:56:00.000Z
updated: 2025-09-17T08:52:42.136Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/后端部分/javaWeb 学习记录/SpringBoot/Mybatis 错题集/xml 部分
---

好的，以下是你在开发和测试过程中遇到的5个典型报错及其简要总结：

---
### 1. **MyBatis找不到getter方法报错**
```
There is no getter for property named 'create_time' in 'class com.ury.mybatis_curd.pojo.Emp'
```
**原因**：  
MyBatis SQL语句中使用了下划线命名（如`create_time`），但Java实体类属性是驼峰命名（如`createTime`），导致MyBatis找不到对应的getter方法。

**解决**：  
SQL参数名要和Java属性名一致，或者用`@Results/@Result`注解做字段映射。

---

### 2. **@Result注解用法错误**
```
@Result({
    @Result(column = "dept_id", property = "deptId"),
    ...
})
```
**原因**：  
MyBatis中多个`@Result`要用`@Results({...})`包裹，不能直接用`@Result({...})`。

**解决**：  
改为
```java
@Results({
    @Result(column = "dept_id", property = "deptId"),
    ...
})
```

---

### 3. **Mapper方法重复定义（Mapped Statements collection already contains key ...）**
```
Mapped Statements collection already contains key com.ury.mybatis_curd.mapper.EmpMapper.list.
```
**原因**：  
同一个Mapper方法（如`list`）在注解和XML中都定义了SQL，或接口中有重复方法。

**解决**：  
只保留一种SQL映射方式（注解或XML），不要重复。

---

### 4. **方法签名不匹配（cannot find symbol / 参数数量不一致）**
```
cannot find symbol method getById(int)
method list in interface ... cannot be applied to given types
```
**原因**：  
接口方法签名和调用时参数不一致，或方法根本没定义。

**解决**：  
确保接口方法签名和调用参数完全一致。

---

### 5. **Spring Boot ApplicationContext 加载失败**
```
Failed to load ApplicationContext for [WebMergedContextConfiguration...]
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'empMapper' ...
```
**原因**：  
通常是因为Mapper配置有误（如上面提到的重复SQL映射、方法签名不一致等），导致Spring无法正常创建Bean。

**解决**：  
根据具体的Bean创建异常，检查Mapper接口和XML/注解配置，确保无重复、无冲突。

---

如需详细分析某一条报错的具体原因和解决办法，可以继续提问！
