---
layout: ../../../../../../../../layouts/PostLayout.astro
title: const vs 箭头函数
description: 箭头函数 const xxx = xxx, yyy = {xxx} 的思路 先看你当前的错误 const { xxx } = ...
  是 解构赋值 ，用于从对象/数组中取值。 const xxx = = {} 是 定义函数 。这两种写法不能
date: 2026-03-05T10:06:08.755Z
updated: 2026-03-05T10:06:18.150Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/尚硅谷 to-do_list 教程笔记/箭头函数
---

## 箭头函数 `const xxx = (xxx, yyy) => {xxx}` 的思路

### 先看你当前的错误

```jsx
// 错误：左边用了解构 {}，但右边是一个函数，不是对象
const { handleAdd } = (payload) => {
  addTodo(payload);
};
```

`const { xxx } = ...` 是**解构赋值**，用于从对象/数组中取值。  
`const xxx = () => {}` 是**定义函数**。这两种写法不能混用。

---

### 正确语法对比

```jsx
// 解构赋值（从对象取值）
const { todos, addTodo } = useTodos();
//      ↑ 取出 todos 和 addTodo 两个值

// 定义箭头函数（声明一个函数）
const handleAdd = (payload) => {
  addTodo(payload);
};
//  ↑ handleAdd 是函数名，不加 {}
```

---

### 传参逻辑

```
用户在 Header 输入回车
    ↓
Header 内部调用 props.addTodo({ title: "xxx" })
    ↓
TodoListPage 的 handleAdd 接收到 payload = { title: "xxx" }
    ↓
handleAdd 调用 useTodos 里的 addTodo(payload)
    ↓
useTodos 更新 todos 状态，页面重新渲染
```

对应代码：

```jsx
// useTodos 提供的原始方法（已有）
const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

// handleAdd：包装 addTodo，payload 是从 Header 传来的 { title }
const handleAdd = (payload) => {
  addTodo(payload);        // 把 payload 原样传给 useTodos 的 addTodo
};

// 传给 Header
<Header addTodo={handleAdd} />
//              ↑ Header 内部会调用 props.addTodo(payload)
```

---

### 为什么要包一层 `handleAdd`，而不直接传 `addTodo`？

| 写法 | 说明 |
|------|------|
| `<Header addTodo={addTodo} />` | 直接传，简单场景够用 |
| `<Header addTodo={handleAdd} />` | 包一层，方便在调用前加验证/日志等逻辑 |

本项目中 `handleAdd` 只是透传，**直接传 `addTodo` 也完全正确**，注释里要求写箭头函数只是练习语法。

---

### 套入模板 `const xxx = (xxx, yyy) => {xxx}`

```
const  handleAdd  =  (payload)  =>  { addTodo(payload) }
  ↑       ↑             ↑                  ↑
const  函数名     参数名(来自调用方)    函数体(做什么事)
```
