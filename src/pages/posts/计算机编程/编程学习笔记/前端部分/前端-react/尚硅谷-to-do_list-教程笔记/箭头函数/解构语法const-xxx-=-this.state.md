---
layout: ../../../../../../../../layouts/PostLayout.astro
title: 解构语法：const {xxx} = this.state
description: 解构的 目的是替代长链访问 解构 vs 长链 长链：一步步往下找 解构：提前取出来，起个短名 对比 本质 ：解构 = 对长链的 缓存
  ，只是写法上的简化，功能完全一样。 解构和高阶函数的联系 两者 没有直接关系 ，但经常 配合使用 ： 场景
date: 2026-02-27T09:24:08.574Z
updated: 2026-02-27T09:29:18.066Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/尚硅谷 to-do_list 教程笔记/箭头函数
---

解构的**目的是替代长链访问**
## 解构 vs 长链

### 长链：一步步往下找

```jsx
// 长链写法 — 像查地址：中国.广东.深圳.南山区
this.state.mouse
this.props.todos
this.props.name
```

### 解构：提前取出来，起个短名

```jsx
// 解构 — 相当于：我先把南山区存成变量，后面直接用
const { mouse } = this.state       // mouse = this.state.mouse
const { todos } = this.props       // todos = this.props.todos
const { name, done } = this.props  // 一次取多个
```

### 对比

```jsx
// 不解构 — 每次都写长链，重复且易错
render() {
    return (
        <li style={{ backgroundColor: this.state.mouse ? '#ddd' : '#fff' }}>
            <input defaultChecked={this.props.done} />
            <span>{this.props.name}</span>
            <button style={{ display: this.state.mouse ? 'block' : 'none' }}>
        </li>
    )
}

// 解构后 — 短、清晰、不重复
render() {
    const { name, done } = this.props
    const { mouse } = this.state
    return (
        <li style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}>
            <input defaultChecked={done} />
            <span>{name}</span>
            <button style={{ display: mouse ? 'block' : 'none' }}>
        </li>
    )
}
```

**本质**：解构 = 对长链的**缓存**，只是写法上的简化，功能完全一样。

---

## 解构和高阶函数的联系

两者**没有直接关系**，但经常**配合使用**：

### 场景：高阶函数的参数也需要解构

```jsx
// Header 中
handleKeyUp = (event) => {
    // event 是一个大对象，包含很多属性
    // 长链写法：
    if (event.keyCode !== 13) return
    console.log(event.target.value)

    // 解构写法：先取出需要的，后面直接用
    const { keyCode, target } = event
    if (keyCode !== 13) return
    console.log(target.value)
}
```

### 场景：高阶函数返回的函数里用解构

```jsx
// Item 中
handleMouse = (flag) => {        // ← 高阶函数（返回函数）
    return () => {
        this.setState({ mouse: flag })  // ← flag 不需要解构，它本身就是简单值
    }
}
```

### 对比表

| 概念 | 解决什么问题 | 本质 |
|------|-------------|------|
| **解构** | 访问数据太长、太重复 | 取值的**快捷方式** |
| **高阶函数** | 需要动态生成不同行为的函数 | 函数的**工厂** |

### 类比

```
解构 = 快递柜取件
    快递柜（this.state）里有很多包裹
    你取出 mouse 这个包裹，放桌上
    后面直接从桌上拿，不用每次跑快递柜

高阶函数 = 自动售货机
    你投入硬币（flag = true）
    机器吐出一瓶饮料（一个函数）
    你喝饮料（React 调用这个函数）
    投不同硬币 → 出不同饮料
```

**总结**：解构管**取数据**，高阶函数管**造函数**，两者各司其职，没有依赖关系，只是在同一个组件里经常一起出现。
