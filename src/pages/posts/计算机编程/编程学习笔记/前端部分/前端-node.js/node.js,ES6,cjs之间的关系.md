---
layout: ../../../../../../layouts/PostLayout.astro
title: node.js,ES6,cjs之间的关系
description: 1. CommonJS CJS Node.js 默认的模块系统 ，你的 server1.js 就在用： 特点： 同步加载
  ，适合服务端（文件都在本地磁盘，读取快）。 2. ESM ES Modules 浏览器端的模块标准，你的 React
date: 2026-03-01T05:32:17.129Z
updated: 2026-03-01T05:32:41.579Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 node.js
---

```
Node.js（运行环境）
   │
   ├── CommonJS / CJS（模块规范）→ Node.js 默认使用
   │
   └── EJS（模板引擎）→ 用于服务端渲染 HTML
```

---

### 1. CommonJS (CJS)

Node.js **默认的模块系统**，你的 server1.js 就在用：

```javascript
// CommonJS 语法
const express = require('express')     // 导入
module.exports = app                   // 导出
```

特点：**同步加载**，适合服务端（文件都在本地磁盘，读取快）。

### 2. ESM (ES Modules)

浏览器端的模块标准，你的 React `App.js` 在用：

```javascript
// ESM 语法
import React from 'react'             // 导入
export default class App {}           // 导出
```

特点：**异步加载**，适合浏览器（文件需要从网络下载）。

### 3. CJS vs ESM 对比

| | CommonJS (CJS) | ES Modules (ESM) |
|---|---|---|
| 语法 | `require()` / `module.exports` | `import` / `export` |
| 使用场景 | Node.js 后端 | React 前端、现代浏览器 |
| 加载方式 | 同步 | 异步 |
| 你的代码 | server1.js | `App.js` |

### 4. EJS（与前两者无关）

EJS (Embedded JavaScript) 是一个 **HTML 模板引擎**，用于在服务端生成 HTML：

```html
<!-- EJS 模板示例 -->
<h1>你好, <%= name %></h1>
<ul>
  <% students.forEach(s => { %>
    <li><%= s.name %> - <%= s.age %>岁</li>
  <% }) %>
</ul>
```

```javascript
// Node.js 中使用 EJS
app.set('view engine', 'ejs')
app.get('/students', (req, res) => {
    res.render('students', { students: [...] })  // 渲染 HTML 返回
})
```

**EJS 和 React 的区别：**

| | EJS | React |
|---|---|---|
| 渲染位置 | 服务端生成 HTML | 浏览器端生成 HTML |
| 数据更新 | 刷新整个页面 | 局部更新（虚拟 DOM） |
| 交互性 | 弱 | 强 |
| 现在的地位 | 传统方案，逐渐被替代 | 主流方案 |

---

### 5. 在你的项目中的体现

```
axios/
├── server1.js          ← Node.js + CommonJS
│   const express = require('express')     ← CJS 语法
│
└── frontend/src/
    └── App.js          ← React + ESM
        import axios from 'axios'          ← ESM 语法
```

**Webpack 在中间做了桥梁**：你在 React 中写 `import`（ESM），Webpack 打包时会把它转换成浏览器能运行的代码。所以你不需要手动处理 CJS 和 ESM 的差异。

---

**总结**：
- **CJS** 和 **ESM** 是两种模块规范，分别用于后端和前端，功能相同只是语法不同
- **EJS** 是模板引擎，和模块系统无关，React 已经替代了它的角色
- 你只需记住：**后端用 `require`，前端用 `import`**
