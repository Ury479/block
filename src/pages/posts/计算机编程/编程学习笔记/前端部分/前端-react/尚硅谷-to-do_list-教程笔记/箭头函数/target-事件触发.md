---
layout: ../../../../../../../../layouts/PostLayout.astro
title: target 事件触发
description: event.target.checked 逐层拆解 target 是什么？ target = 触发事件的那个元素
  ，就是用户实际操作的那个 DOM 节点。 类比 target 上还有什么？ 你在 Header 里已经用过 target ：
date: 2026-02-27T11:00:27.816Z
updated: 2026-02-27T11:00:36.248Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/尚硅谷 to-do_list 教程笔记/箭头函数
---

## `event.target.checked` 逐层拆解

```jsx
event.target.checked
  ↑      ↑       ↑
  │      │       └── checked：checkbox 是否勾选（true/false）
  │      └────────── target：触发事件的那个 DOM 元素（即 <input> 标签）
  └───────────────── event：React 传入的事件对象
```

### `target` 是什么？

`target` = **触发事件的那个元素**，就是用户实际操作的那个 DOM 节点。

```jsx
<input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
//  ↑
// 用户点了这个 input
// 所以 event.target 就是这个 <input> 元素
```

### 类比

```
event  = 一封信（事件通知）
target = 信上写的发件人（谁触发的）
checked = 信的内容（勾选了还是取消了）

用户点击 checkbox
  → 浏览器发了一封信（event）
  → 发件人是 <input>（event.target）
  → 内容是"我被勾选了"（event.target.checked = true）
```

### `target` 上还有什么？

```jsx
event.target.checked   // 是否勾选（checkbox 专用）
event.target.value     // 输入框的值（Header 里用过）
event.target.type      // 元素类型 "checkbox"
event.target.id        // 元素的 id 属性
```

你在 Header 里已经用过 `target`：

```jsx
// Header
const { target } = event
console.log(target.value)    // 输入框的文字

// Item
event.target.checked         // checkbox 的勾选状态
```

**同一个 `target`，不同元素取不同属性**：
- `<input type="text">` → 取 `.value`
- `<input type="checkbox">` → 取 `.checked`
