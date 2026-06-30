---
layout: ../../../../../../../layouts/PostLayout.astro
title: 鱼皮 js 文档练习题
description: "02拆分字符串： JSON.stringify xx 代码解析 1. demos.forEach : forEach 是
  JavaScript 数组的一个方法，用于对数组的每个元素执行一次提供的回调函数。 在这里， demos 是一个数组，"
date: 2026-02-24T10:47:47.526Z
updated: 2026-02-26T14:56:32.349Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 7
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 js/鱼皮 js 教程
---

![Pasted image 20260226215631.png](/media/fb7a0ba4f7dc724f.png)
```js
<body>

<h1>JavaScript 世界欢迎你</h1>

<button onclick="showWelcome()">点击显示欢迎信息</button>

<div id="display"></div>

<script>

	//定义函数进行打印，document,innerHTML
	
	function showWelcome(){
	
	const now = new Date();
	
	const timeString = now.toLocaleString('zh-CN');
	
	document.getElementById('display').innerHTML=`
	
	<h3>Hello to JS！</h3>
	
	<p>right now is ${timeString}</p>
	
	`;

}

</script>

</body>
```
## 02拆分字符串：`JSON.stringify(xx)`
![Pasted image 20260224180914.png](/media/43bcb923cd665c0e.png)
### 代码解析
```javascript
demos.forEach(([value, description]) => {
    variable = value;
    console.log(`${description}:${JSON.stringify(variable)},type:${typeof variable}`);
});
```

1. **`demos.forEach`**:
   - `forEach` 是 JavaScript 数组的一个方法，用于对数组的每个元素执行一次提供的回调函数。
   - 在这里，`demos` 是一个数组，包含多个子数组，每个子数组有两个元素：一个是值（`value`），另一个是对该值的描述（`description`）。

2. **解构赋值 `[value, description]`**:
   - 每次迭代时，`forEach` 会将当前子数组的两个元素分别赋值给 `value` 和 `description`。
   - 例如，`[undefined, '未定义']` 会被解构为 `value = undefined` 和 `description = '未定义'`。

3. **`variable = value;`**:
   - 将当前子数组的第一个元素（`value`）赋值给变量 `variable`。

4. **`console.log`**:
   - 使用模板字符串 `${}` 将 `description`、`value` 和 `value` 的类型（通过 `typeof` 获取）拼接成一段字符串，并打印到控制台。
   - `JSON.stringify(variable)` 将 `value` 转换为 JSON 格式的字符串，便于打印复杂数据类型（如对象和数组）。

### 示例输出
假设 `demos` 数组如下：
```javascript
const demos = [
  [undefined, '未定义'],
  [42, '数字'],
  ['Hello JavaScript', '字符串'],
  [true, '布尔'],
  [[1, 2, 3], '数组'],
  [{ name: '张三', age: 25 }, '对象']
];
```

执行代码后，控制台的输出将是：
```
未定义:null,类型:undefined
数字:42,类型:number
字符串:"Hello JavaScript",类型:string
布尔:true,类型:boolean
数组:[1,2,3],类型:object
对象:{"name":"张三","age":25},类型:object
```

### 功能总结
- 这段代码的主要功能是展示 `demos` 数组中每个值的内容及其数据类型。
- 它通过 `JSON.stringify` 将复杂数据类型（如对象和数组）转换为字符串，便于在控制台中查看。
- 同时，`typeof` 用于获取每个值的 JavaScript 数据类型（如 `undefined`、`number`、`string`、`boolean`、`object` 等）。

## 03 to-do list
```js
<body>

<h1>📝 待办事项管理器</h1>

  

<div class="input-group">

<!-- 输入框和添加按钮 -->

<input type="text" id="todoInput" placeholder="输入待办事项...">

<button onclick="addTodo()">添加</button>

</div>

  

<!-- 待办事项列表容器 -->

<div id="todoList"></div>

  

<script>

// 定义一个空数组用于存储待办事项

let todos = [];

// 定义一个变量用于生成唯一的待办事项ID

let todoId = 0;

  

// 添加待办事项的函数

function addTodo() {

	// 获取输入框元素
	
	const input = document.getElementById('todoInput');
	
	// 获取输入框的值并去除首尾空格
	
	const text = input.value.trim();
	
	  
	
	// 如果输入框有内容
	
	if (text) {
	
		// 将新的待办事项添加到数组中
		
		todos.push({ id: ++todoId, text: text, completed: false });
		
		// 清空输入框
		
		input.value = '';
		
		// 重新渲染待办事项列表
		
		renderTodos();

	}

}

  

// 切换待办事项完成状态的函数

function toggleTodo(id) {

	// 查找对应ID的待办事项
	
	const todo = todos.find(t => t.id === id);
	
	if (todo) {
	
	// 切换完成状态
	
	todo.completed = !todo.completed;
	
	// 重新渲染待办事项列表
	
	renderTodos();
	
	}

}

  

// 删除待办事项的函数

function deleteTodo(id) {

	// 过滤掉指定ID的待办事项
	
	todos = todos.filter(t => t.id !== id);
	
	// 重新渲染待办事项列表
	
	renderTodos();

}

  

// 渲染待办事项列表的函数

function renderTodos() {

// 获取待办事项列表的容器元素

const list = document.getElementById('todoList');

// 使用map方法生成HTML字符串并插入到容器中

list.innerHTML = todos.map(todo => `

	<div class="todo-item ${todo.completed ? 'completed' : ''}">
	
	<!-- 点击待办事项切换完成状态 -->
	
	<span onclick="toggleTodo(${todo.id})" style="cursor: pointer;">
	
	${todo.completed ? '✅' : '🕘'} ${todo.text}
	
	</span>
	
	<!-- 删除按钮 -->
	
	<button onclick="deleteTodo(${todo.id})" style="float: right; background: #dc3545;">删除</button>
	
	</div>
	
	`).join('');

}

  

// 支持按下回车键添加待办事项

document.getElementById('todoInput').addEventListener('keypress', function(e) {

	if (e.key === 'Enter') addTodo();

});

</script>

</body>
```
这段代码的功能是渲染待办事项列表，将存储在 `todos` 数组中的待办事项动态生成 HTML 并插入到页面中。以下是详细的代码解析：

---
这段代码的功能是检查输入框是否有内容，如果有内容，则将其作为新的待办事项添加到 `todos` 数组中，并更新页面显示。以下是详细的语法解析：

---

### 代码解析

```javascript
if (text) {
```
- **功能**: 检查 `text` 是否为真值。
  - 如果 `text` 是空字符串（`""`），则条件为 `false`，代码块不会执行。
  - 如果 `text` 是非空字符串，则条件为 `true`，代码块会执行。

---

```javascript
todos.push({ id: ++todoId, text: text, completed: false });
```
- **功能**: 将一个新的待办事项对象添加到 `todos` 数组中。
- **`todos.push()`**:
  - `push` 是数组的方法，用于在数组末尾添加一个新元素。
- **`{ id: ++todoId, text: text, completed: false }`**:
  - 创建一个对象，表示一个新的待办事项。
  - `id: ++todoId`: 自增 `todoId`，确保每个待办事项有唯一的 ID。
  - `text: text`: 将输入框的内容作为待办事项的文本。
  - `completed: false`: 默认设置待办事项为未完成状态。

---

```javascript
input.value = '';
```
- **功能**: 清空输入框的内容。
- **`input.value`**:
  - `input` 是通过 `document.getElementById('todoInput')` 获取的输入框 DOM 元素。
  - `value` 是输入框的当前值。
  - 将其设置为空字符串（`''`）可以清空输入框。

---

```javascript
renderTodos();
```
- **功能**: 调用 `renderTodos` 函数，重新渲染待办事项列表。
- **`renderTodos()`**:
  - 该函数会根据 `todos` 数组的内容，动态生成 HTML 并更新页面上的待办事项列表。

---

### 功能总结
- 这段代码的作用是：
  1. 检查输入框是否有内容。
  2. 如果有内容，将其作为新的待办事项添加到 `todos` 数组中。
  3. 清空输入框。
  4. 调用 `renderTodos` 函数，更新页面上的待办事项列表。

- **关键点**:
  - 使用 `if` 语句进行条件判断。
  - 使用 `push` 方法向数组中添加新元素。
  - 使用 `++` 自增操作符生成唯一的 ID。
  - 操作 DOM 元素的属性（如 `input.value`）。
  - 调用函数实现页面更新。
### 代码解析

```javascript
function renderTodos() {
  // 获取待办事项列表的容器元素
  const list = document.getElementById('todoList');
```
- **功能**: 获取页面中 ID 为 `todoList` 的 DOM 元素，用于显示待办事项列表。

---

```javascript
  // 使用map方法生成HTML字符串并插入到容器中
  list.innerHTML = todos.map(todo => `
    <div class="todo-item ${todo.completed ? 'completed' : ''}">
      <!-- 点击待办事项切换完成状态 -->
      <span onclick="toggleTodo(${todo.id})" style="cursor: pointer;">
        ${todo.completed ? '✅' : '🕘'} ${todo.text}
      </span>
      <!-- 删除按钮 -->
      <button onclick="deleteTodo(${todo.id})" style="float: right; background: #dc3545;">删除</button>
    </div>
  `).join('');
}
```

1. **`todos.map(todo => ...)`**:
    - `map` 是 JavaScript 数组的方法，用于对数组中的每个元素执行回调函数，并返回一个新数组。
    - 这里的 `todo` 是 `todos` 数组中的每个待办事项对象。
    - 回调函数返回一段 HTML 字符串，表示每个待办事项的 HTML 结构。

2. **`<div class="todo-item ${todo.completed ? 'completed' : ''}">`**:
   - 每个待办事项用一个 `<div>` 元素表示。
   - 如果待办事项已完成（`todo.completed` 为 `true`），则为 `<div>` 添加 `completed` 类，显示删除线和降低透明度。

3. **`<span onclick="toggleTodo(${todo.id})" style="cursor: pointer;">`**:
   - 每个待办事项的文本显示在 `<span>` 元素中。
   - 点击 `<span>` 时，会调用 `toggleTodo` 函数，切换该待办事项的完成状态。
   - 如果待办事项已完成，显示 ✅；否则显示 🕘。

4. **`<button onclick="deleteTodo(${todo.id})" style="float: right; background: #dc3545;">删除</button>`**:
   - 每个待办事项旁边有一个删除按钮。
   - 点击按钮时，会调用 `deleteTodo` 函数，删除对应的待办事项。
   - 按钮样式设置为红色背景，右对齐。

5. **`.join('')`**:
   - `map` 方法会返回一个数组，`join('')` 将数组中的 HTML 字符串拼接成一个完整的 HTML 片段。

6. **`list.innerHTML = ...`**:
   - 将生成的 HTML 片段插入到 `todoList` 容器中，更新页面显示。

---

### 功能总结
- 这段代码的核心功能是动态渲染待办事项列表。
- 它会根据 `todos` 数组的内容，生成对应的 HTML 结构，并插入到页面中。
- 每个待办事项都可以通过点击切换完成状态，或通过按钮删除。
- 通过动态生成 HTML，页面可以实时更新，无需刷新。
