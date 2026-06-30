---
layout: ../../../../../../../layouts/PostLayout.astro
title: lab7 DOM
description: lab7 Q1 Q2 📌 代码逻辑分析 你的代码分为两个部分： 1. DayCount 函数 —— 计算两个日期之间的天数差 2.
  DOM 操作（ findTheInterval.js ） —— 遍历表格，计算间隔天数，并替换 ?? 🚀
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 10
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 js/学校 js
---

## lab7
### Q1 
![Pasted image 20250305152038.png](/media/bd5a1c9c4f047c34.png)
### Q2

### **📌 代码逻辑分析**

你的代码分为两个部分：

1. **`DayCount` 函数** —— 计算两个日期之间的天数差
2. **DOM 操作（`findTheInterval.js`）** —— 遍历表格，计算间隔天数，并替换 `??`

---
## **🚀 代码逻辑拆解**

### **1️⃣ `DayCount` 函数**

这个函数的目的是**计算两个日期的时间间隔（单位：天）**，并返回天数。

#### **📌 代码解析**

```js
function DayCount(currentDateString, eventDateString) {
    // 定义时间单位（毫秒）
    let msecPerMinute = 1000 * 60;
    let msecPerHour = msecPerMinute * 60;
    let msecPerDay = msecPerHour * 24;

    // 将输入的字符串转换为 Date 对象
    let currentDate = new Date(currentDateString);
    let eventDate = new Date(eventDateString);

    // 获取时间戳（毫秒）
    let currentDateMsec = currentDate.getTime();
    let eventDateMsec = eventDate.getTime();

    // 计算两个时间的毫秒差值
    let interval = eventDateMsec - currentDateMsec;

    // 计算相差的天数
    let days = Math.floor(interval / msecPerDay);

    return days;
}
```

#### **🔍 关键知识点**

✅ **`new Date(string)`**：将日期字符串转换为 `Date` 对象。  
✅ **`getTime()`**：获取日期的毫秒数，便于计算时间差。  
✅ **`Math.floor(interval / msecPerDay)`**：将毫秒转换为天数，并向下取整。

#### **💡 可能的问题**

- `currentDateString` 传入的是 `new Date()`，但 `eventDateString` 传入的是字符串（例如 `'8/7/2025'`）。
- **不同浏览器的 `new Date('8/7/2025')` 可能解析不一致**，建议统一格式，如 `'2025-08-07'`（YYYY-MM-DD）。

---

### **2️⃣ 获取当前日期并计算天数**

```js
let currentDay = new Date(); 
let days = DayCount(currentDay, '8/7/2025');

document.getElementById("interval1").innerHTML = days;
```

#### **📌 逻辑**

1. `currentDay = new Date();` → 获取当前日期（对象格式）。
2. `DayCount(currentDay, '8/7/2025');` → 计算当前日期到 `2025-08-07` 的天数。
3. `document.getElementById("interval1").innerHTML = days;` → 将天数填入 HTML 里 ID 为 `interval1` 的元素。

---

### **3️⃣ DOM 操作 - 遍历表格并替换 `??`**

```js
document.addEventListener("DOMContentLoaded", function () { 
    let dateCells = document.querySelectorAll("table tr td:nth-child(2)");
    let daysCells = document.querySelectorAll("table tr td:nth-child(3)");

    for (let i = 0; i < dateCells.length; i++) {
        let eventDateString = dateCells[i].innerText.trim();
        let NumberofDaysBetween = DayCount(currentDay, eventDateString);
        daysCells[i].innerText = NumberofDaysBetween;
    }
});
```

#### **📌 逻辑**

1. **确保 HTML 加载完成** → `document.addEventListener("DOMContentLoaded", function () {...});`
2. **选取“Date”列的所有单元格** → `querySelectorAll("table tr td:nth-child(2)")`
3. **选取“Days”列的所有单元格** → `querySelectorAll("table tr td:nth-child(3)")`
4. **遍历所有日期单元格**
    - **读取事件日期** → `eventDateString = dateCells[i].innerText.trim();`
    - **计算日期间隔** → `DayCount(currentDay, eventDateString);`
    - **将计算结果填充到“Days”列** → `daysCells[i].innerText = NumberofDaysBetween;`

---

## **📌 你的代码问题总结**

|**问题**|**错误描述**|**解决方案**|
|---|---|---|
|`currentDay` 变量作用域问题|`DayCount(currentDay, eventDateString);` 但 `currentDay` 只在外部定义|在 `DOMContentLoaded` 内部定义 `let currentDay = new Date();`|
|日期格式可能不一致|`new Date('8/7/2025')` 在不同浏览器解析方式不同|统一使用 `YYYY-MM-DD` 格式，如 `'2025-08-07'`|
|`document.getElementById("interval1")` 可能为空|代码可能在 `DOMContentLoaded` 之前运行|确保 HTML 加载完成后执行|
|可能有空单元格|`eventDateString` 可能为空，导致 `DayCount()` 计算错误|先检查 `if (eventDateString && !isNaN(new Date(eventDateString)))`|

---

## **📖 复盘总结**

**你的 DOM 操作部分基本正确，但在几个地方有改进空间。你之前不熟悉的主要是：**

1. **DOM 查询**：
    
    - `querySelectorAll()` 选择多个元素。
    - `nth-child(n)` 用于选取表格中的某一列。
2. **事件监听**：
    
    - `DOMContentLoaded` 确保 JS 在 HTML 结构加载完毕后运行。
3. **日期操作**：
    
    - `new Date(string)` 解析日期时，某些格式在不同浏览器下可能行为不一致。
4. **数据验证**：
    
    - `isNaN(new Date(eventDateString))` 检查是否是有效日期。

---

## **🎯 你的 OKR（学习目标）**

✅ **掌握 JavaScript 操作 DOM（重点学习 `querySelectorAll`、`innerText`、`addEventListener`）**  
✅ **掌握 `Date` 对象的正确使用（尤其是 `new Date(string)` 的格式要求）**  
✅ **理解 `DOMContentLoaded` 事件的作用，确保 JavaScript 在正确的时机执行**  
✅ **学会数据验证，避免 `NaN` 或 `undefined` 造成的错误**

---

### **🎯 你的下一步**

1. **复习 `querySelectorAll` 选择表格元素的用法**（可以在控制台 `document.querySelectorAll("table tr td:nth-child(2)")` 试试）。
2. **测试 `new Date('8/7/2025')` 和 `new Date('2025-08-07')`** 看看输出是否一致。
3. **在 `findTheInterval.js` 里添加错误检查**，如果 `eventDateString` 为空，就不调用 `DayCount()`。

---

## **🚀 最终优化的代码**

```js
document.addEventListener("DOMContentLoaded", function () {  
    let dateCells = document.querySelectorAll("table tr td:nth-child(2)");
    let daysCells = document.querySelectorAll("table tr td:nth-child(3)");
    let currentDay = new Date(); 

    for (let i = 0; i < dateCells.length; i++) {
        let eventDateString = dateCells[i].innerText.trim();

        if (eventDateString && !isNaN(new Date(eventDateString))) {
            let NumberofDaysBetween = DayCount(currentDay, eventDateString);
            daysCells[i].innerText = NumberofDaysBetween;
        } else {
            daysCells[i].innerText = "Invalid Date"; // 处理无效日期
        }
    }
});
```

---



你的代码存在以下几个错误点，导致计算间隔天数时出现问题：
```
function DayCount(currentDateString, eventDateString) {

// Set the unit values in milliseconds.

let msecPerMinute = 1000 * 60;

let msecPerHour = msecPerMinute * 60;

let msecPerDay = msecPerHour * 24;

// Set a date and get the milliseconds

let currentDate = new Date(currentDateString); // startDate.setMonth(8);startDate.setDate(8);startDate.setHours(0, 0, 0, 0);

let eventDate = new Date(eventDateString);

let currentDateMsec = currentDate.getTime();

let eventDateMsec = eventDate.getTime();

// Get the difference in milliseconds.

let interval = eventDateMsec - currentDateMsec;

// many days from the interval to determine the remainder.

let days = Math.floor(interval / msecPerDay);

let reminder = interval - (days * msecPerDay);

//Output: xx days

//the positive number refers to day left

//the negative number refers day since

return days;

}

let currentDay = new Date();

let days = DayCount(currentDay, '8/7/2025');

document.getElementById("interval1").innerHTML = days;

  

let events = [];

events.push(days);

  

/* ==========================================================================

Student's code here

========================================================================== */

// 确保 DOM 加载后执行 ➝ document.addEventListener("DOMContentLoaded", function () { ... })

document.addEventListener("DOMContentLoaded",function name(params) {

// 获取“Date”列所有单元格 let ➝ querySelectorAll("table tr td:nth-child(2)")

let dateCells = this.querySelectorAll("table tr td:nth-child(2)");

// 获取“Days”列所有单元格 let ➝ querySelectorAll("table tr td:nth-child(3)")

let daysCells = this.querySelectorAll("table tr td:nth-child(3)");

  

// 遍历所有行，计算日期间隔 ➝ for 循环 dateCells.length + DayCount()

for (let i = 0; i < dateCells.length; i++) {

// 读取事件日期 let = Days 列所有单元格[i].innerText.trim()

let currentDate = daysCells[i].innerText.trim();

  

// 计算间隔天数 let = DayCount(currentDate,eventDateString)

let dayDiff = DayCount(currentDate,eventDateString)

  

// 替换 ?? 为计算结果 ➝ daysCells[i].innerText = daysDiff

daysCells[i].innerText = dayDiff;

  

}

})
```

---

### **❌ 问题 1：你把 `Days` 列的值替换成 `dayDiff`，而不是 `Days` 列**

```javascript
dateCells[i].innerText = dayDiff;
```

- **你的错误**：你错误地修改了 `dateCells[i]`（即 **"Date" 列**），但正确的做法应该是修改 **"Days" 列** (`daysCells[i]`)。
- **正确的写法**：
    
    ```javascript
    daysCells[i].innerText = dayDiff;
    ```
    
- **影响**：这样才能正确地将 `??` 替换为天数。

---

### **❌ 问题 2：`currentDate` 变量未定义**

```javascript
let dayDiff = DayCount(currentDate, eventDateString);
```

- **你的错误**：`currentDate` 变量未在 `DOMContentLoaded` 事件内部定义，而是在 `DayCount()` 函数外部定义的 `currentDay`。
- **正确的写法**：
    
    ```javascript
    let currentDate = new Date(); // 确保 `currentDate` 在循环前定义
    ```
    
- **影响**：如果 `currentDate` 未定义，`DayCount()` 调用时可能会报错。

---

### **❌ 问题 3：错误的数据格式**

```javascript
let eventDateString = dateCells[i].innerText.trim();
```

- **你的错误**：
    - `eventDateString` 可能不是正确的日期格式，例如 `"8/7/2025"` 可能无法被 `new Date()` 正确解析。
    - **解决方案**：确保数据格式统一，可以转换为 `YYYY-MM-DD` 格式：
        
        ```javascript
        let eventDateString = new Date(dateCells[i].innerText.trim()).toISOString().split("T")[0];
        ```
        
- **影响**：如果 `eventDateString` 解析失败，`DayCount()` 可能会返回 `NaN`。

---

### **✅ 修正后的代码**

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // 获取“Date”列所有单元格
  let dateCells = document.querySelectorAll("table tr td:nth-child(2)");
  
  // 获取“Days”列所有单元格
  let daysCells = document.querySelectorAll("table tr td:nth-child(3)");

  // 获取当前日期
  let currentDate = new Date();

  // 遍历所有行，计算日期间隔
  for (let i = 0; i < dateCells.length; i++) {
    // 读取“Date”列的事件日期
    let eventDateString = dateCells[i].innerText.trim();

    // 确保 eventDateString 是有效日期
    if (eventDateString && eventDateString !== "??") {
      // 计算间隔天数
      let dayDiff = DayCount(currentDate, eventDateString);
      
      // 替换 “??” 为计算结果（**修正错误：正确修改 Days 列**）
      daysCells[i].innerText = dayDiff;
    }
  }
});
```

---

### **🚀 修正点总结**

|**问题**|**你的错误**|**正确写法**|
|---|---|---|
|**1. 修改了错误的列**|`dateCells[i].innerText = dayDiff;`|`daysCells[i].innerText = dayDiff;`|
|**2. `currentDate` 未定义**|`DayCount(currentDate, eventDateString);`|`let currentDate = new Date();`|
|**3. 日期格式可能错误**|`new Date(eventDateString);`|`new Date(dateCells[i].innerText.trim()).toISOString().split("T")[0];`|

---

### **🎯 结论**

✅ **这样修正后，你的代码就可以正确计算日期间隔，并更新 "Days" 列的 `??` 为实际天数！** 🚀


Q2_2
### **📌 代码逻辑与内在关联（OKR 拆解）**

你的代码的核心目标是**在 HTML 页面加载完成后，监听用户的键盘输入，并阻止用户输入字母 Q、W、X**。  
整个逻辑可以分为**三个关键部分**，每个部分对应一个 **OKR（目标 & 关键结果）**。

---

## **🎯 OKR 目标 1：确保 HTML 加载完毕后执行 JavaScript**

**📌 关键结果** 1️⃣ **在 `DOMContentLoaded` 事件触发后执行代码** 2️⃣ **确保 `input` 元素已经加载在 DOM 里** 3️⃣ **避免 JavaScript 在 HTML 结构未加载完成前执行**

```js
document.addEventListener("DOMContentLoaded", function() { ... });
```

✅ **为什么要这样做？**

- `DOMContentLoaded` **事件确保** **HTML 结构加载完毕后** 才执行 JavaScript。
- 这样可以保证 `document.querySelector("input")` **不会报错**（因为 `input` 元素已存在）。
- 如果不使用 `DOMContentLoaded`，JavaScript 可能会在 HTML 加载完成前执行，导致 `inputField` **找不到 HTML 元素**。

---

## **🎯 OKR 目标 2：获取输入框，确保正确监听用户输入**

**📌 关键结果** 1️⃣ **使用 `document.querySelector("input")` 获取 `<input>` 输入框** 2️⃣ **确保 `inputField` 变量指向正确的 DOM 元素** 3️⃣ **在输入框上添加键盘事件监听器**

```js
let inputField = document.querySelector("input");
inputField.addEventListener("keydown", function(event) { ... });
```

✅ **为什么要这样做？**

- `document.querySelector("input")` 获取 `<input>` 元素，确保后续能监听用户输入。
- `addEventListener("keydown", function(event) {...})` **监听键盘按下事件**。
- 这样，当用户在输入框输入时，JavaScript **可以检测并处理输入**。

---

## **🎯 OKR 目标 3：检测用户输入并阻止非法字符**

**📌 关键结果** 1️⃣ **定义被禁止的字符列表** 2️⃣ **检查用户输入是否属于 `forbiddenKeys`** 3️⃣ **如果匹配，则 `event.preventDefault();` 阻止输入**

```js
// 4️⃣ 定义被禁止的字母
let forbiddenKeys = ["q", "w", "x", "Q", "W", "X"];

// 5️⃣ 检查用户输入的字符是否在禁止列表中
if (forbiddenKeys.includes(event.key)) {
    // 6️⃣ 阻止非法字符的输入
    event.preventDefault();
}
```

✅ **为什么要这样做？**

- **`forbiddenKeys` 数组** 存放 **不能输入的字母**，包括大小写。
- **`event.key`** 获取用户按下的按键，检查是否在 `forbiddenKeys` 数组内。
- **`includes(event.key)`** **检查 `event.key` 是否被禁止**。
- **`event.preventDefault();`** **阻止浏览器默认输入行为**，让 Q/W/X 无法输入。

---

## **🎯 代码 OKR 关键成果总结**

|**目标 (O)**|**关键结果 (KR)**|
|---|---|
|**确保 JavaScript 代码在 HTML 加载完毕后执行**|✅ 使用 `DOMContentLoaded` 事件确保 HTML 结构已加载|
|**正确获取 `<input>` 元素并监听键盘输入**|✅ 使用 `document.querySelector()` 获取 `<input>` 并监听 `keydown` 事件|
|**检测并阻止用户输入 Q/W/X**|✅ 定义 `forbiddenKeys` 数组，使用 `includes()` 检测输入，`event.preventDefault()` 阻止输入|

---

## **🎯 代码完整性分析**

|代码块|作用|是否合格|
|---|---|---|
|`document.addEventListener("DOMContentLoaded", function() {...});`|确保 HTML 加载完成后执行代码|✅|
|`let inputField = document.querySelector("input");`|选择 `<input>` 输入框|✅|
|`inputField.addEventListener("keydown", function(event) { ... });`|监听用户键盘输入|✅|
|`let forbiddenKeys = ["q", "w", "x", "Q", "W", "X"];`|存储被禁止的按键|✅|
|`if (forbiddenKeys.includes(event.key)) { event.preventDefault(); }`|检测并阻止非法输入|✅|

---

## **🔥 你的下一步**

✅ **理解 OKR 目标与代码的关系**  
✅ **逐行手写代码，加深理解**  
✅ **尝试自己写一个类似的代码，比如禁止数字输入**

---

### **👏 你已经掌握了 JavaScript DOM 事件监听的核心知识！**

如果有任何问题，欢迎继续提问！🔥💪🚀
