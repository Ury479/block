---
layout: ../../../../../../../../layouts/PostLayout.astro
title: props 限制问题
description: 1）“props 没学好”最容易遇到的问题（React） 问题 A：组件拿不到数据 / 显示 undefined 典型原因 父组件没传
  子组件解构写错 props 名字拼错（大小写/单复数） 典型错误 问题 B：把 props 当成 sta
date: 2026-02-02T11:42:12.811Z
updated: 2026-02-02T11:42:20.829Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 5
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/尚硅谷 to-do_list 教程笔记/props 部分
---

## **1）“props 没学好”最容易遇到的问题（React）**

  

### **问题 A：组件拿不到数据 / 显示** 

### **undefined**

  

**典型原因**

- 父组件没传
    
- 子组件解构写错
    
- props 名字拼错（大小写/单复数）
    

  

**典型错误**

```
// 父：传 user
<Profile user={user} />

// 子：却写成 users
function Profile({ users }) { ... } // users 是 undefined
```

---

### **问题 B：把 props 当成 state 改（导致数据混乱）**

  

**规则**

- **props 只读**，不能直接改 props
    

  

**典型错误**

```
props.user.name = 'xxx' // 可能引发共享引用污染、UI 不稳定
```

正确做法：

- 需要改就放到 state（或父组件改后再传下来）
    

---

### **问题 C：“父传子更新”思路不清，更新不了**

  

**常见卡点**

- 子组件想改父组件的数据
    
- 正确方式：父组件传 **回调函数** 给子组件
    

```
<Child onChangeName={setName} />
```

---

### **问题 D：默认值没处理，导致报错**

  

**现象**

- props.items.map is not a function
    
- Cannot read properties of undefined
    

  

**原因**

- 你以为 items 一定是数组，但实际可能是 undefined/null
    

  

解决：

- 默认值：items = []
    
- 或可选链：items?.map(...)
    

---

### **问题 E：子组件频繁重渲染（性能）**

  

**常见原因**

- 每次渲染都创建新对象/新函数作为 props（引用变化）
    
- memo、useMemo、useCallback 没理解
    

---

## **2）PropTypes 可能引发哪些问题？（以及它解决什么）**

  

PropTypes 是 React 里**运行时**的 props 类型检查（主要用于 JS 项目）。它不会阻止运行，只会在控制台给 warning。

  

### **PropTypes 能防什么问题**

- 传错类型：本来要数组结果传了字符串
    
- 缺少必填：本来要求 user 必传但没传
    
- 结构不对：对象缺字段
    

  

这类问题在 UI 运行时很常见，PropTypes 能让你更早发现。

---

### **PropTypes 自身可能引发的问题（典型）**

1. **以为它能“保证正确”，其实只是警告**
    

  

- 代码照样运行，还是可能崩
    
- 生产环境很多情况下不会提示得那么明显
    

  

2. **和实际数据不同步**
    

  

- 组件改了接口，但 PropTypes 没改
    
- 结果：warning 一堆，反而影响排错
    

  

3. **只覆盖到运行到的路径**
    

  

- 你没点到某个页面/组件，问题不会出现
    
- TS（静态检查）更早、更全面
    

  

4. **对复杂结构写起来麻烦**
    

  

- 深层 object/array 校验写得很长
    
- 维护成本上升
    

---

## **3）PropTypes 和 TypeScript（TS）的关联：最关键的区别**

  

### **TS：编译期（写代码时/编译时）发现问题（强）**

- 你写错 props 名、类型不匹配，编辑器就报错
    
- 不需要跑起来才能发现
    

  

### **PropTypes：运行期（浏览器执行时）才警告（弱一些）**

- 只有运行到组件、且在开发环境里才提示
    
- 只是 warning，不拦截
    

  

结论：

- **用 TS 的 React 项目里，通常不再需要 PropTypes**
    
- TS 更适合做“类型契约（contract）”，更可靠
    

---

## **4）与 TS 有何关联？（你应该掌握哪些点）**

  

在 TS + React 里，“props 没学好”最常见的体现是：

  

### **4.1 props 类型没定义或定义错**

```
type Props = { title: string; count?: number }
function Card(props: Props) { ... }
```

### **4.2 可选 props（**

### **?**

### **）与默认值**

- count?: number 可能是 undefined
    
- 使用时要：
    
    - 默认值：const { count = 0 } = props
        
    - 或判断：if (count != null)
        
    

  

### **4.3 回调函数 props（最常见）**

```
type Props = {
  onSave: (value: string) => void
}
```

如果父组件传错参数/少传，TS 会直接报错。

  

### **4.4 children 类型（组件插槽）**

```
type Props = { children: React.ReactNode }
```

---

## **5）你该怎么选：PropTypes 还是 TS？**

- **你用的是纯 JS（不写 TS）**：PropTypes 能帮你挡一部分低级错误
    
- **你用的是 TS**：优先用 TS 类型；PropTypes 通常可以不写
    
- **团队混合**：公共组件库有时会同时提供 TS 类型 +（可选）运行时校验，但这属于更工程化的做法
    

---

## **6）最容易记的“错误对照表”**

- props 名写错 → undefined
    
- props 当 state 改 → 数据串、难排查
    
- 没传回调/回调签名错 → 子组件无法更新父数据
    
- 类型不对（数组当对象） → 运行时报错
    
- TS：写的时候就拦住你
    
- PropTypes：运行时提醒你（warning）
    

---

如果你把你当前一个组件的 props（父怎么传、子怎么接）贴出来，我可以直接指出：哪些地方会 undefined、哪些地方应该用可选链/默认值、以及 TS 类型应该怎么写。
