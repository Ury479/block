---
layout: ../../../../../layouts/PostLayout.astro
title: 引入 logo 图标
description: 方案： public 文件夹下面，或者 assets 下面@引入 如果你使用的是 Vue 2 ，图片路径的处理方式和 Vue 3 +
  Vite 有所不同，通常有以下几种推荐写法： 1. 静态资源放在 public 目录 推荐做法： 将图片放
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程错题集/鱼皮智能云图库
---

**方案：** public 文件夹下面，或者 assets 下面@引入

如果你使用的是 **Vue 2**，图片路径的处理方式和 Vue 3 + Vite 有所不同，通常有以下几种推荐写法：

---

### 1. 静态资源放在 `public` 目录

**推荐做法：**  
将图片放到 `public` 目录下（如 `public/logo.png`），然后这样引用：

```vue
<img class="logo" src="/logo.png" alt="logo">
```

这样路径是以项目根目录为基准，**不会被 webpack 处理**，适合全局静态资源。

---

### 2. 静态资源放在 `src/assets` 目录

如果你想放在 `src/assets` 下，**Vue 2 + webpack** 推荐这样写：

```vue
<img class="logo" :src="require('@/assets/logo.png')" alt="logo">
```
或者（相对路径）：
```vue
<img class="logo" :src="require('../assets/logo.png')" alt="logo">
```
> 注意：这里的 `@` 代表 `src` 目录，前提是你的 webpack 配置了别名（大多数 Vue CLI 项目默认已配置）。

---

### 3. 不能直接用 `src="../assets/logo.png"`

在 Vue 2 项目中，直接写 `src="../assets/logo.png"` 可能会找不到图片，因为 webpack 会把 `src/assets` 里的资源打包处理，路径会变化。

---

## 总结

- **放 public 目录：**
  ```vue
  <img class="logo" src="/logo.png" alt="logo">
  ```
- **放 src/assets 目录：**
  ```vue
  <img class="logo" :src="require('@/assets/logo.png')" alt="logo">
  ```
  或
  ```vue
  <img class="logo" :src="require('../assets/logo.png')" alt="logo">
  ```

---

如还有问题，请告诉我你的图片实际存放路径和你当前的项目结构，我可以帮你写出最适合你的引用方式！
