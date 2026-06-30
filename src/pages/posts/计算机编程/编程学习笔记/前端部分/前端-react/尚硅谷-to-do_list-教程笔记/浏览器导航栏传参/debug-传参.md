---
layout: ../../../../../../../../layouts/PostLayout.astro
title: debug 传参
description: debug 对象的作用与语法 这段代码是什么？ 这是一个 调试用的数据快照对象 ，把当前 URL
  携带的所有信息汇总在一起，方便在页面上直接显示出来查看。 对应 JSX 里的： 访问 /todos/t 001?q=react&done=fa
date: 2026-03-05T10:48:00.083Z
updated: 2026-03-05T10:52:23.078Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/尚硅谷 to-do_list 教程笔记/浏览器导航栏传参
---

```jsx
const { todoId } = useParams();

const location = useLocation();

const [searchParams] = useSearchParams();

  

const debug = {

params: { todoId },

search: {

	q: searchParams.get("q") ?? "",
	
	done: searchParams.get("done") ?? "all",
	
	page: searchParams.get("page") ?? "1",
	
	pageSize: searchParams.get("pageSize") ?? "10",
	
	sort: searchParams.get("sort") ?? "createdDesc",

},

state: location.state ?? null,

};

  

return (

<section className="todo-page">

<article className="todo-card">

<header className="todo-titlebar">

<h1>编辑任务</h1>

<p>当前任务 ID: {todoId}</p>

</header>

  

<p style={{ marginBottom: 12 }}>

	<Link to={`/todos/${todoId}`}>返回详情</Link>

</p>

	<pre>{JSON.stringify(debug, null, 2)}</pre>

</article>

</section>

);
```
## `debug` 对象的作用与语法

### 这段代码是什么？

```jsx
const debug = {
  params: { todoId },
  search: {
    q: searchParams.get("q") ?? "",
    ...
  },
  state: location.state ?? null,
};
```

这是一个**调试用的数据快照对象**，把当前 URL 携带的所有信息汇总在一起，方便在页面上直接显示出来查看。

对应 JSX 里的：
```jsx
<pre>{JSON.stringify(debug, null, 2)}</pre>
```

访问 `/todos/t-001?q=react&done=false` 时，页面会显示：
```json
{
  "params": { "todoId": "t-001" },
  "search": { "q": "react", "done": "false", ... },
  "state": null
}
```

---

### 用到的语法逐一解释

**1. 对象简写属性**
```jsx
{ todoId }
// 等价于 { todoId: todoId }
// 变量名和键名相同时可以简写
```

**2. `searchParams.get("key")`**
```jsx
searchParams.get("q")
// 从 URL ?q=react&done=false 中取出 "q" 的值
// 没有该参数时返回 null
```

**3. `??` 空值合并运算符**
```jsx
searchParams.get("q") ?? ""
// 左边是 null 或 undefined 时，取右边的默认值
// searchParams.get("q") 没有时 → 返回 ""
// searchParams.get("done") 没有时 → 返回 "all"
```

**4. `location.state`**
```jsx
location.state ?? null
// 取通过 navigate(path, { state: {...} }) 传递的隐式数据
// 没有传 state 时，location.state 本身就是 null
```

---

### 没有这段代码会怎样？

| 影响               | 说明                                                |
| ---------------- | ------------------------------------------------- |
| `todoId` 仍然可用    | 它来自 `useParams()`，和 `debug` 无关                    |
| 页面上 `<pre>` 显示报错 | `JSON.stringify(debug, ...)` 中 `debug` 未定义 → 白屏崩溃 |
| 无法直观查看路由参数       | 开发时不知道 URL 传了什么数据，调试困难                            |

**关键点：** `debug` 本身只是开发调试用途，**不影响业务逻辑**。真实项目里这里会换成表单/内容展示，`debug` 对象会被删掉，但现在作为骨架项目，它的作用是**验证路由参数是否正确传入**。

对，但更准确地说是**三个部分各自负责一块**：

```json
{
  "params": { "todoId": "123" },       ← useParams() 负责
  "search": { "q": "", "done": "all", ... },  ← useSearchParams() 负责
  "state": null                         ← useLocation() 负责
}
```

对应代码：

```jsx
const { todoId } = useParams();          // → params 部分
const [searchParams] = useSearchParams(); // → search 部分
const location = useLocation();          // → state 部分
```

---

### `search` 部分的值从哪里来？

```
URL: /todos/123?q=react&done=false
                ↑
           这部分是 search（查询字符串）
```

- 访问 `/todos/123`（没有 `?`）→ 所有值都是默认值，显示 `""` / `"all"` / `"1"` 等
- 访问 `/todos/123?q=react&done=false` → `q` 显示 `"react"`，`done` 显示 `"false"`

所以你看到全是默认值，是因为当前 URL 里**没有携带任何查询参数**，`searchParams.get()` 返回 `null`，然后 `??` 替换成了默认值。
