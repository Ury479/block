---
layout: ../../../../../../../layouts/PostLayout.astro
title: ref 使用
description: 回调形式ref 回调 ref = React 把真实 DOM 节点交给你 ，你存起来以后直接用； 弄错常见后果 = null
  报错、重复触发、渲染循环、数据流混乱、引用覆盖 。 什么时候该用 ref？什么时候不该用？ 适合用 ref 的场景
date: 2026-02-03T04:29:14.853Z
updated: 2026-02-03T05:11:56.709Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/散装知识点
---

## 回调形式ref
回调 ref = **React 把真实 DOM 节点交给你**，你存起来以后直接用；

弄错常见后果 = **null 报错、重复触发、渲染循环、数据流混乱、引用覆盖**。

## **什么时候该用 ref？什么时候不该用？**

### **适合用 ref 的场景**

- 读取输入框值（非受控）
    
- 让输入框自动聚焦（focus）
    
- 获取元素尺寸/滚动位置
    
- 与第三方 DOM 库集成
    
### **不建议滥用**
如果你需要“实时显示、校验、联动 UI”，更推荐用 **state 受控组件**（value + onChange）

**“回调 ref（callback ref）”**，它的作用是：**把某个真实 DOM 元素（input）保存到组件实例上，方便在事件里直接读它的 value。**
