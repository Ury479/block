---
layout: ../../../../../../../../layouts/PostLayout.astro
title: mybatis sql  模糊查询 案例
description: 好呀！把这段代码想成“在同学花名册里找人”的小帮手👇 它在干嘛？ 到“emp”这本花名册里找人 ： select from emp
  名字要“包含”某个词 ： name like concat '%', {name}, '%' 比如 nam
date: 2025-09-14T05:25:08.135Z
updated: 2025-09-14T05:25:10.352Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/后端部分/javaWeb 学习记录/SpringBoot/Mybatis 笔记
---

好呀！把这段代码想成“在同学花名册里找人”的小帮手👇

```java
@Select("select * from emp " +
        "where name like concat('%', #{name}, '%') " +
        "and gender = #{gender} " +
        "and entrydate between #{begin} and #{end} " +
        "order by update_time desc")
List<Emp> list(String name, Short gender, LocalDate begin, LocalDate end);
```

### 它在干嘛？

- **到“emp”这本花名册里找人**：`select * from emp`
    
- **名字要“包含”某个词**：  
    `name like concat('%', #{name}, '%')`  
    比如 `name="张"`，就会找出名字里带“张”的同学（“张三”、“张无忌”…）。`%` 就是“前后都可以有别的字”的意思。
    
- **性别要符合**：`and gender = #{gender}`  
    只找男生或只找女生（用数字表示，比如 1/2）。
    
- **入学日期在这两个日子之间**：  
    `and entrydate between #{begin} and #{end}`  
    像“2010-01-01 到 2020-01-01 之间入学的同学”。
    
- **把找到的人按“最近更新”从新到旧排好**：  
    `order by update_time desc`
    

### 小括号里的参数是啥？

方法最后这一行：

```java
List<Emp> list(String name, Short gender, LocalDate begin, LocalDate end);
```

- 你给它 4 个条件：`name`（名字里要有的字）、`gender`（性别）、`begin`（开始日期）、`end`（结束日期）。
    
- 它会**返回一串同学卡片**（`List<Emp>`），每张卡片就是一个 `Emp` 对象，里面有这个同学的名字、性别、照片等信息。
    

### 为什么写成 `#{...}`？

- 这些是**占位符**，把你传进来的值安全地放进查询里，既省事又安全（不容易被“坏输入”破坏查询）。
    

### 一个小例子

如果你这样调用：

```java
empMapper.list("张", (short)1, LocalDate.of(2010,1,1), LocalDate.of(2020,1,1));
```

意思就是：  
“帮我找**名字里带‘张’**、**性别=1**、**2010 到 2020 之间入学**的同学，并且把**最近更新**的排在最前面。”

——最后你会得到一个按时间排好序的“同学清单”。😊
