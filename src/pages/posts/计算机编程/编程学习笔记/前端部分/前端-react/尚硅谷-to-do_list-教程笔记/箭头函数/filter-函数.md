---
layout: ../../../../../../../../layouts/PostLayout.astro
title: filter 函数
description: handleClearDone 的思路 目标：删除所有已完成的任务 分拆理解 第一步： filter — 筛选出已完成的任务
  t.done 为 true 的才保留， false 的过滤掉。 第二步： forEach — 逐个删除 delet
date: 2026-03-05T10:01:14.078Z
updated: 2026-03-05T10:01:38.182Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/尚硅谷 to-do_list 教程笔记/箭头函数
---

## `handleClearDone` 的思路

### 目标：删除所有已完成的任务

```jsx
// const xxx = (xxx,yyy) => {xxx},filter(),() => xxx
const handleClearDone = () => {
  todos.filter(t => t.done).forEach(t => deleteTodo(t.id));
}
```

### 分拆理解

**第一步：`filter()` — 筛选出已完成的任务**

```jsx
todos.filter(t => t.done)
// todos = [
//   { id: "t-001", title: "学习路由", done: false },
//   { id: "t-002", title: "练习参数", done: true },  ← 保留
//   { id: "t-003", title: "实现state", done: false },
// ]
// 结果 = [{ id: "t-002", title: "练习参数", done: true }]
```

`t.done` 为 `true` 的才保留，`false` 的过滤掉。

**第二步：`forEach()` — 逐个删除**

```jsx
.forEach(t => deleteTodo(t.id))
// 对每一个 done=true 的任务，调用 deleteTodo(id)
// 相当于：deleteTodo("t-002")
```

`deleteTodo` 来自 `useTodos`，内部用 `filter` 从状态里移除该 id 的任务。

---

### 数据流

```
点击"清除已完成"按钮
    ↓
handleClearDone() 被调用
    ↓
filter() 从 todos 中找出所有 done=true 的任务
    ↓
forEach() 对每个已完成任务调用 deleteTodo(id)
    ↓
useTodos 更新 todos 状态（移除这些任务）
    ↓
页面重新渲染，已完成任务消失
```

---

### 链式调用的逻辑

```
todos          → 原始数组（全部任务）
  .filter(...)  → 返回新数组（只含已完成任务）
  .forEach(...) → 遍历这个新数组，逐个删除
```

`filter` 返回一个新数组，`forEach` 紧接着对这个新数组操作，所以可以**链式**写在一行。
