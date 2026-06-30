---
layout: ../../../../../../../../layouts/PostLayout.astro
title: state 状态传递
description: "this.setState flag vs this.setState {mouse: flag} 类比理解 规则 setState
  必须传对象 ，格式为 { 要更新的键: 新值 } ： 闭包：状态传参 02 状态在哪里，操作状态的方法就在"
date: 2026-02-27T08:46:33.102Z
updated: 2026-02-27T09:54:44.646Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/尚硅谷 to-do_list 教程笔记/state 状态函数
---

## `this.setState(flag)` vs `this.setState({mouse: flag})`

```jsx
// 你写的 ❌
this.setState(flag)
// flag = true，相当于 this.setState(true)
// setState 期望接收一个对象，传入 true（布尔值）→ 无效，state 不会更新

// 正确 ✅
this.setState({mouse: flag})
// flag = true，相当于 this.setState({mouse: true})
// 告诉 React：把 state 中的 mouse 键更新为 true
```

## 类比理解

```js
// state 是一个抽屉柜
state = { mouse: false }

// ❌ this.setState(true)
// 相当于：把整个柜子替换成 true —— 柜子没了

// ✅ this.setState({mouse: true})
// 相当于：打开 mouse 那个抽屉，把值换成 true —— 其他抽屉不受影响
```

## 规则

`setState` **必须传对象**，格式为 `{ 要更新的键: 新值 }`：

```jsx
this.setState({ mouse: flag })     // ✅ 更新 mouse
this.setState({ name: 'test' })    // ✅ 更新 name
this.setState(flag)                // ❌ 布尔值不是对象
this.setState(true)                // ❌ 同上
```

## 闭包：状态传参 02
状态在哪里，操作状态的方法就在哪里，这就是闭包的原理
