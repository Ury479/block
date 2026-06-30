---
layout: ../../../../../layouts/PostLayout.astro
title: 知识点复习（结合课件）
description: 2025 年 8 月 11 日 Question Set 1. Multiple Choice 一周目 1. Which of the
  following best describes modularity in CBSD? B A. Us
date: 2025-08-11T08:33:35.828Z
updated: 2025-08-11T11:24:07.334Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 11
sourceFolder: 计算机编程/习题集/se331
---

## 2025 年 8 月 11 日
### **Question Set**

#### **1. Multiple Choice** #一周目

1. Which of the following best describes **modularity** in CBSD?  B
    A. Using a single file for the entire system  
    B. Splitting the system into independent, focused parts  
    C. Using as few functions as possible  
    D. Avoiding APIs  
    
    
2. In JavaScript, which keyword declares a variable that **cannot** be reassigned?  B
    A. `let`  
    B. `const`  
    C. `var`  
    D. `fixed`  
    
    

---

#### **2. Concept Analysis** 

**Question**: Explain how **reusability** in CBSD improves development efficiency. Provide an example involving both frontend and backend.

For frontend, the `<template>` block could let the html code integrate in an vue file,cooperating with js and css part.


---

#### **3. Concept Comparison**

**Question**: Compare **function declaration** and **arrow function** in JavaScript in terms of syntax and `this` binding behavior.

the `function(){}` is less usful than the `function({() => })` .

![Pasted image 20250811154238.png](/archive/?q=Pasted%20image%2020250811154238.png)

---

#### **4. Code Debugging** #代码改错题

**Given code**:
```
const user = { name: "Alice", age: 25 }; const { name, location } = user; console.log(location.toUpperCase());
```

**Task**: Identify the issue and fix it.

**Answer**:

- Problem: `location` is `undefined`, calling `.toUpperCase()` causes an error.
    
- Fix: `const user = { name: "Alice", age: 25, location: "London" }; const { name, location } = user; console.log(location.toUpperCase());` 


---

## **1. Multiple Choice** #二周目

1. Which principle of CBSD ensures each part of the system handles only one specific task?  B
    A. Reusability  
    B. Modularity  
    C. Separation of Concerns  
    D. Scalability  

    
2. In JavaScript, which statement about `let`, `const`, and `var` is correct?  D -B
    A. `var` is block-scoped, `let` and `const` are function-scoped.  
    B. `let` and `const` are block-scoped, `var` is function-scoped.  
    C. `let` and `const` are block-scoped, `var` is block-scoped.  
    D. All three are block-scoped.  
    
3. Which of the following is **not** a characteristic of scripting languages?  d -c
    A. String processing is common  
    B. Simple program structure  
    C. Prefer safety over flexibility  
    D. Can be embedded in another language  
        
4. Which method in JavaScript returns a new array without modifying the original when transforming each element?  A -b
    A. `forEach()`  
    B. `map()`  
    C. `filter()`  
    D. `reduce()`  
    ****
    
5. Which statement about arrow functions is **true**?  A -c
    A. They are hoisted like function declarations.  
    B. They have their own `this` context.  
    C. They inherit `this` from their surrounding scope.  
    D. They cannot be used with parameters.  
        

Here’s the review based on your lecture content:

---

**1.** **Correct ✅** — _Modularity_ ensures each part handles a single specific task.

**2.** **Incorrect ❌** — The correct statement is:

> `let` and `const` are **block-scoped**, while `var` is **function-scoped**.  
> So the right choice would be **B**, not D.

**3.** **Incorrect ❌** — The one that is **not** a characteristic of scripting languages is _prefer safety over flexibility_, which is **C**, not D. Scripting languages can be embedded in another language, so D is a real characteristic.

**4.** **Incorrect ❌** — `map()` returns a new array without modifying the original. `forEach()` does not return a new array, so the correct answer is **B**.

**5.** **Incorrect ❌** — Arrow functions inherit `this` from their surrounding scope; they do not have their own `this` context and are not hoisted. Correct answer: **C**.


## **2. Concept Comparison**

**Q1:** Compare **Function Declaration** and **Function Expression** in JavaScript in terms of **hoisting** and **syntax**.  #概念辨析题 

**Answer:**

- **Function Declaration**:
    
    - Syntax: `function name(params) { ... }`
        
    - Hoisted, so it can be called before it is defined.
        
- **Function Expression**:
    
    - Syntax: `const name = function(params) { ... }`
        
    - Not hoisted, so it must be defined before use.
        

---

**Q2:** Compare **Promises** and **Async/Await** in terms of readability and error handling.  
**Answer:**

- **Promises**:
    
    - Use `.then()` and `.catch()` for chaining.
        
    - Can lead to "callback hell" if nested deeply.
        
- **Async/Await**:
    
    - Syntactic sugar for Promises, making asynchronous code look synchronous.
        
    - Easier to read, especially for sequential operations.
        
    - Uses `try...catch` for error handling.
        

---

## **3. Short Answer / Problem Solving**

**Q1:**  
Explain the benefit of **First-Class Functions** in JavaScript and give an example.

**Answer:**

- **Benefit**: Functions can be stored in variables, passed as arguments, and returned from other functions, enabling functional programming patterns.
    
- **Example**:
    

```js
function greet(name) {
  return `Hello, ${name}`;
}

function processUser(name, callback) {
  return callback(name);
}

console.log(processUser("Alice", greet)); // "Hello, Alice"
```

---

## 阶段3：
太好了，我们就按你说的“一步步来”。先把你刚刚错的板块按课件梳理一遍（中文讲解），然后给一套只含题目不含答案的英文训练集。

# 知识点复习（结合课件）

## 1) `let / const / var` 的作用域与特性

- **作用域**：`let` 与 `const` 是**块级作用域**（花括号内有效）；`var` 是**函数作用域**（或提升到全局），容易产生意外覆盖。
    
- **可变性**：`const` 绑定名不可被重新赋值，但**对象/数组的内部属性仍可修改**；`let` 可重新赋值。
    

## 2) 脚本语言（Scripting Language）的典型特征

- **可嵌入**：一种语言可嵌入到另一种宿主环境（如浏览器中的 JavaScript）。
    
- **常见特征**：字符串处理多、结构简洁、**偏好灵活性而非效率/安全**（关键点）。
    

## 3) 高阶函数与数组方法（`map / filter / reduce / forEach`）

- **高阶函数**：以函数为参数或返回函数。课件示例展示 `map / filter / reduce` 的组合使用。
    
- **常见对比**：
    
    - `map`：**返回新数组**，逐项转换；
        
    - `filter`：**返回新数组**，筛选满足条件的项；
        
    - `reduce`：聚合为单个值；
        
    - `forEach`：遍历副作用，**不返回新数组**（返回 `undefined`）。课件明确给出 `map/filter/reduce` 用法示例。
        

## 4) 箭头函数（Arrow Function）与传统函数

- **语法目的**：更简洁，便于函数式编程（课件原话：Easier functional programming）。
    
- **课件侧重点**：给出箭头函数写法示例与对比（单行/多行），用于替代传统函数表达式。
    
- **常见易错点（扩展补充）**：
    
    - 箭头函数**不会**像函数声明那样被“函数式提升”；
        
    - 箭头函数的 `this` 采取**词法绑定**（继承外层），而非调用时绑定（这一点是通用 JS 知识点，课件未展开，记作补充）。
        

---

# 训练题（不含答案）

> 说明：以下题目全部围绕上面 4 个板块，包含选择题、概念辨析题、解答题（代码/输出/修复/改写）。按你之前的要求，这里**不提供答案**；需要答案时你再告诉我。

## A. Multiple Choice #三周目

1. Which statement best describes the scope difference among `var`, `let`, and `const`?  b
    A. All three are block-scoped  
    B. `var` is function-scoped; `let`/`const` are block-scoped  
    C. `var` is block-scoped; `let`/`const` are function-scoped  
    D. Only `const` is block-scoped
    
2. What is **true** about `const` in JavaScript?  D -b
    A. Reassignment is allowed  
    B. Object properties referenced by a `const` binding can still be mutated  
    C. It creates deep immutability  
    D. It is hoisted like a function declaration
    
3. Which is **not** a common characteristic of scripting languages?  D -c
    A. Flexible and simple structure  
    B. Often embedded in another host  
    C. Strong preference for safety over flexibility  
    D. Frequent string processing tasks
    
4. Which method **returns a new array** after transforming each element?  C -b
    A. `forEach()`  
    B. `map()`  
    C. `reduce()`  
    D. `some()`
    
5. Which description of `filter()` is correct?  A -c
    A. Transforms each element and returns a new array  
    B. Removes elements from the original array in place  
    C. Returns a new array with elements that satisfy a predicate  
    D. Aggregates elements into a single value
    
6. Which statement about `forEach()` is correct?  D -b
    A. It returns a new array  
    B. It returns `undefined` and is often used for side effects  
    C. It short-circuits when the predicate is met  
    D. It sorts elements by default
    
7. Which statement about arrow functions is **true**?  A -c
    A. They are hoisted like function declarations  
    B. They always have their own `this`  
    C. They use lexical `this` from the surrounding scope  
    D. They cannot accept parameters
    
8. Which is the **best** choice when you need to produce a single accumulated result (e.g., sum)?  A -c
    A. `map()`  
    B. `filter()`  
    C. `reduce()`  
    D. `forEach()`
    
9. Which situation is **most likely** to cause unintended shadowing when using `var`?  A
    A. Inside a `for` block within a function  
    B. Inside a `try` block with `let`  
    C. Inside a module with `const`  
    D. Inside an object literal
    
10. Which option describes a typical use case for scripting languages?  B
    A. Writing OS kernels  
    B. Embedding logic into a host (e.g., browser) for rapid iteration  
    C. Building firmware  
    D. Static type-checking at compile time only
    
**1.** ✅ **Correct** — `var` is function-scoped; `let` and `const` are block-scoped01. Introduction_print.

**2.** ❌ **Incorrect** — `const` is **not** hoisted like function declarations.  
From the notes: `const` is block-scoped and must be declared before use; object properties can still be mutated01. Introduction_print. Correct choice: **B**.

**3.** ❌ **Incorrect** — A scripting language’s characteristics include being embedded in a host, doing string processing, and being flexible rather than safe01. Introduction_print. “Strong preference for safety over flexibility” is **not** a characteristic — correct choice: **C**.

**4.** ❌ **Incorrect** — `map()` returns a new array after transforming each element01. Introduction_print. `reduce()` aggregates into a single value. Correct choice: **B**.

**5.** ❌ **Incorrect** — `filter()` returns a new array with elements that satisfy a predicate01. Introduction_print. Your answer describes `map()`. Correct choice: **C**.

**6.** ❌ **Incorrect** — `forEach()` returns `undefined` and is typically used for side effects01. Introduction_print. Correct choice: **B**.

**7.** ❌ **Incorrect** — Arrow functions do **not** get hoisted and they inherit lexical `this` from their surrounding scope01. Introduction_print. Correct choice: **C**.

**8.** ❌ **Incorrect** — To produce a single accumulated result like a sum, use `reduce()`01. Introduction_print. Correct choice: **C**.

**9.** ✅ **Correct** — Using `var` in a loop inside a function is a common cause of unintended shadowing because `var` is function-scoped01. Introduction_print.

**10.** ✅ **Correct** — Embedding logic into a host environment (like a browser) for rapid iteration is a typical use case for scripting languages01. Introduction_print.

## B. 概念辨析（Concept Analysis / Comparison）

1. Compare **block scope** and **function scope** in JavaScript. Provide one concrete example for each.
    
2. Distinguish **`map` vs `forEach`** in terms of return value and typical use cases.
    
3. Explain how **arrow functions** support functional programming compared with traditional function expressions.
    
4. Compare scripting languages and compiled languages in terms of **embedding**, **flexibility**, and **typical scenarios**.
    
5. When working with arrays, how do **`filter`** and **`reduce`** differ in intent and output?
    

## C. 解答题（Short Answer / Coding Practice）

1. **Output reasoning**
    

```js
const arr = [1, 2, 3];
const x = arr.forEach((n, i) => { arr[i] = n * 2; });
console.log(arr);
console.log(x);
```

- Explain the two `console.log` results and why.
    

2. **Bug fix**  
    You need a new array of squared numbers from `nums`.
    

```js
const nums = [2, 3, 4];
const squared = nums.forEach(n => n * n);
console.log(squared);
```

- Identify the issue and rewrite the code.
    

3. **Refactor to arrow functions**  
    Refactor the following to an arrow function and explain any behavior changes (if any):
    

```js
const add = function(a, b) {
  return a + b;
};
```

4. **Scope pitfall**  
    What gets printed and why? How would you avoid the issue?
    

```js
function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }
}
test();
```

5. **Choose the right method**  
    Given an array of orders, return the **total price** of orders whose `status === 'paid'`:
    

```js
const orders = [
  { id: 1, price: 10, status: 'paid' },
  { id: 2, price: 5,  status: 'refunded' },
  { id: 3, price: 8,  status: 'paid' },
];
```

- Write concise code and explain why your chosen array methods are appropriate.
    

---

需要我把以上题目分批（比如每次 5~8 题）推送给你练，做完随时发我答案，我按课件逐条讲解、纠正并补充吗？如果你更偏向**先做选择题**或**先做代码题**，也可以告诉我你的偏好～
