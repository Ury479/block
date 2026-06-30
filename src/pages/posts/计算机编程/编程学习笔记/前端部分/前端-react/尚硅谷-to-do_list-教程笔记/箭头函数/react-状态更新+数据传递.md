---
layout: ../../../../../../../../layouts/PostLayout.astro
title: react 状态更新+数据传递
description: 逐行对比：教程 vs 你的代码 错误分析 错误 1：函数没有接收参数 addTodo 会作为 props 传给
  Header，Header 在用户按回车时调用它并传入新建的 todo 对象。没参数就无法接收。 错误 2： todo vs t
date: 2026-02-27T05:33:24.785Z
updated: 2026-02-27T05:33:36.875Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/尚硅谷 to-do_list 教程笔记/箭头函数
---

## 逐行对比：教程 vs 你的代码

```jsx
// 教程 ✅                                    // 你的 ❌
addTodo = (todoObj) => {                       addTodo = () => {
    const {todos} = this.state                     const {todo} = this.state
    const newTodos = [todoObj, ...todos]            const {newTodo} = {...todo}
    this.setState({todos: newTodos})                // 缺少 setState
}                                              }
```

## 错误分析

### 错误 1：函数没有接收参数

```jsx
addTodo = ()      => { ... }  // ❌ 空参数，谁传数据进来？
addTodo = (todoObj) => { ... }  // ✅ 接收一个 todo 对象（由 Header 组件传入）
```

`addTodo` 会作为 props 传给 Header，Header 在用户按回车时调用它并传入新建的 todo 对象。没参数就无法接收。

### 错误 2：`todo` vs `todos` 搞混

```jsx
const {todo} = this.state   // ❌ state 里没有 "todo" 这个键
const {todos} = this.state  // ✅ state 里的键名是 "todos"（数组）
```

你的 state 定义是 `state = { todos: [...] }`，键名是 `todos`，解构必须**名字匹配**。

### 错误 3：`{newTodo} = {...todo}` 完全误用

```jsx
const {newTodo} = {...todo}
// 你想做什么？这是在从 todo 的展开对象中解构出 "newTodo" 键 — 根本不存在

// 教程的意思是：创建一个新数组，把新 todo 放在最前面
const newTodos = [todoObj, ...todos]
//                ↑新的      ↑展开原数组
```

### 错误 4：没有 `setState`

没有调用 `this.setState()`，即使逻辑对了，页面也不会更新。

---

## `todo` vs `todos` 在不同位置的含义

| 位置 | 变量名 | 类型 | 含义 |
|------|--------|------|------|
| `App.state` | `todos` | **数组** `[{}, {}, ...]` | 所有待办事项的集合 |
| `addTodo(todoObj)` | `todoObj` | **单个对象** `{id, name, done}` | 新增的那一条待办 |
| `List` 的 `map` | `todo` | **单个对象** | 遍历时当前这一条 |
| `newTodos` | `newTodos` | **新数组** | 添加后的完整列表 |

## 数据流图

```
Header (用户输入 → 创建 todoObj)
   │
   │ 调用 this.props.addTodo(todoObj)
   ▼
App.addTodo(todoObj)
   │ ① const {todos} = this.state        ← 取出旧数组
   │ ② const newTodos = [todoObj, ...todos] ← 新对象 + 旧数组 = 新数组
   │ ③ this.setState({todos: newTodos})   ← 更新 state，触发重新渲染
   ▼
List (接收新的 todos)
   │
   │ todos.map((todo) => <Item {...todo}/>)
   ▼
Item (显示单条 todo)
```

## 修正后的代码

```jsx
addTodo = (todoObj) => {
    // 1. 获取原 todos 数组
    const { todos } = this.state
    // 2. 新 todo 放最前面，展开原数组追加在后
    const newTodos = [todoObj, ...todos]
    // 3. 更新状态，React 会自动重新渲染
    this.setState({ todos: newTodos })
}
```

**核心认知纠正**：`...` 展开运算符用在**数组** `[...todos]` 里是展开数组元素，不是用在 `{...todo}` 里解构单个对象。教程的思路是「把新的 todo 和旧的数组拼成一个新数组」，而不是「从某个对象里解构出什么」。
