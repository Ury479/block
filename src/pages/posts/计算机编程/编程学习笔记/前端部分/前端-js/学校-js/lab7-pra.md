---
layout: ../../../../../../../layouts/PostLayout.astro
title: lab7  -pra
description: pra3 属性（Property） vs 参数（Parameter） 在 JavaScript 和 DOM（文档对象模型）中，
  属性（Property） 和 参数（Parameter） 的概念不同，但常常被混淆。让我们详细解析它们的区别。
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 4
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 js/学校 js
---

## pra3
### **属性（Property） vs 参数（Parameter）**

在 JavaScript 和 DOM（文档对象模型）中，**属性（Property）**和**参数（Parameter）**的概念不同，但常常被混淆。让我们详细解析它们的区别。

---

### **1️⃣ 属性（Property）**

- **属性**是**对象内部存储的值**，用于表示对象的某些特征或状态。
- 在 DOM 中，每个 HTML 元素都由 `document` 创建后变成 JavaScript 对象，这些对象具有各种属性。
- **特点**：
    - 直接通过 **`对象.属性名`** 进行访问和修改。
    - **不需要括号 `()`**，因为它只是一个变量的存储值，而不是一个函数。

#### **DOM 示例**

```js
let title = document.title; // 访问页面标题（Property）
document.title = "新标题"; // 修改页面标题
```

```js
let button = document.getElementById("myButton"); 
console.log(button.textContent); // 获取按钮的文本内容
button.textContent = "新文本"; // 直接修改文本
```

> 这里 `textContent` 只是一个属性，它存储了文本的值，所以我们用 `=` 赋值，而不是调用函数。

---

### **2️⃣ 参数（Parameter）**

- **参数**是**函数（方法）调用时传递的输入值**，用于影响函数的行为。
- **特点**：
    - 只能在**函数调用时传入**。
    - **写在括号 `()` 内**，用于传递数据给函数。
    - 每个参数是**局部变量**，在函数内部使用。

#### **DOM 示例**

```js
document.createElement("div"); // 传入 "div" 作为参数，创建 <div> 元素
document.getElementById("myButton"); // 传入 "myButton" 作为参数，获取 ID 为 "myButton" 的元素
```

> 这里 `"div"` 是 `createElement()` 方法的参数，而 `"myButton"` 是 `getElementById()` 方法的参数。

---

## **为什么 `createElement()` 需要传入 HTML 标签名称，而不是 DOM 元素？**

### **原因 1️⃣：`createElement(tagName)` 需要创建一个新的 DOM 元素**

- `document.createElement("li")` **的作用是创建一个新的 `<li>` 元素**，而不是查找已有的 DOM 元素。
- 如果 `createElement()` 允许传入 DOM 元素，那么就会有歧义：它到底是**创建一个新元素**，还是**使用已有的元素**？

#### **错误示例（假设它允许传入 DOM 元素，显然不合理）**

```js
let oldElement = document.getElementById("myElement");
let newElement = document.createElement(oldElement); // ❌ 这会导致歧义
```

> **问题：这个 `newElement` 是新创建的还是旧的？**  
> `createElement()` 的设计目标是创建新元素，所以它不接受 DOM 对象，而是接受字符串来确定新元素的类型。

---

### **原因 2️⃣：创建元素 vs 选择元素**

- **创建元素**：`document.createElement("li")` → **创建新的 `<li>`**
- **选择元素**：`document.getElementById("list")` → **获取已有的 `<ul>`**
- 它们的作用完全不同，因此 `createElement()` **必须接受字符串，而 `getElementById()` 必须接受 DOM ID**。

---

## **总结**

||**属性（Property）**|**参数（Parameter）**|
|---|---|---|
|定义|对象的内部值，表示对象的某种特性|传递给函数的输入数据，影响函数行为|
|作用|读取或修改 DOM 元素的状态|影响方法执行，决定方法的逻辑|
|语法|**`对象.属性名 = 值`**（不需要括号）|**`方法(参数值)`**（必须有括号）|
|示例|`element.textContent = "Hello"`|`document.createElement("li")`|
|在 DOM 中的例子|`document.title = "新标题"`|`document.createElement("div")`|

**🔥 记住**

- `.textContent` 是**属性**，存储文本内容，所以**不需要括号**，`element.textContent = "文本"` ✅
- `createElement("li")` 是**方法**，**需要参数**来指定标签类型，所以**需要括号** `document.createElement("li")` ✅
- `createElement()` 需要传入标签名称**字符串**，因为它的作用是**创建新元素**，不是获取已有元素。
