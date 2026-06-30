---
layout: ../../../../../../../../layouts/PostLayout.astro
title: key 报错：没有唯一值
description: 问题 ：报错显示缺乏唯一 key，且输入框输入的数据无法传递到 List 表单当中 找到了两个问题，都在 Header 的第 10
  11 行： 问题 1：传了字符串而不是对象 你创建了 todoObj 却没用它，传给 addTodo 的是
date: 2026-02-27T08:21:25.629Z
updated: 2026-03-05T11:04:05.696Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/尚硅谷 to-do_list 教程笔记/props 部分
---

**问题**：报错显示缺乏唯一 key，且输入框输入的数据无法传递到 List 表单当中

找到了两个问题，都在 Header 的第 10-11 行：

```jsx
const todoObj = {id:nanoid(), name:target.value, done:false}  // ← 创建了对象
this.props.addTodo(target.value)  // ← 但传的是字符串 "great"，不是 todoObj！
```

**问题 1：传了字符串而不是对象**
你创建了 `todoObj` 却没用它，传给 `addTodo` 的是 `target.value`（字符串 `"great"`）。字符串没有 `id` 属性，所以 `todo.id` 为 `undefined`，React 报缺少 key。

**问题 2：输入后没清空输入框** 

Replacing 3 lines with 4 lines in [](file:///Users/ury/Downloads/project/test01_react/to-do_list_sgg/react_staging/src/components/Header/index.jsx)

修改了一行，加了一行：

- `this.props.addTodo(target.value)` → `this.props.addTodo(todoObj)` — 传对象而非字符串
- 新增 `target.value = ''` — 提交后清空输入框

数据流对比：

```
// 修改前：传的是字符串
addTodo("great")  →  newTodos = ["great", ...]  →  todo.id = undefined → 缺 key

// 修改后：传的是完整对象
addTodo({id:"xxx", name:"great", done:false})  →  todo.id 有值 → key 正常
```

Made changes.
