---
layout: ../../../../../../../../layouts/PostLayout.astro
title: 路由传参：Parmas,state,search
description: state 路由组件负责切换状态 Parmas 组件 把代码比作"图书馆借书" messageArr = 书架上的书单 <Link
  to="...?id=04&title=消息4" = 你写了一张借书条 useSearchParams =
date: 2026-03-04T17:17:45.977Z
updated: 2026-03-05T04:50:49.425Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/尚硅谷 to-do_list 教程笔记/路由组件参数
---

state 路由组件负责切换状态

### Parmas 组件
#### 把代码比作"图书馆借书"

**`messageArr` = 书架上的书单**

```
书架上有4本书：
  第1本：编号01，书名《消息1》
  第2本：编号02，书名《消息2》
  第3本：编号03，书名《消息3》
  第4本：编号04，书名《消息4》
```

---

**`<Link to="...?id=04&title=消息4">` = 你写了一张借书条**

```
你在书架前，选了第4本书，
然后写了一张小纸条：
  "我要编号04，书名是消息4"
然后把这张纸条递给图书管理员
```

---

**`useSearchParams` = 图书管理员接收纸条**

```js
const id = searchParams.get('id')     // 管理员看纸条：编号是 04
const title = searchParams.get('title') // 管理员看纸条：书名是 消息4
```

---

**`DetailData.find(id === '04')` = 管理员去仓库查档案**

```
管理员拿着 "编号04" 去档案室查：
  档案里写着：
  {
    编号：04
    简介：天马星空        ← content
    详情：天马星空        ← detail
  }
找到了！
```

---

**`findResult?.detail` = 管理员把档案里的详情念给你听**

```
管理员说："这本书的详情是——天马星空"
你听到了，界面上就显示：DETAIL：天马星空
```

---

#### 完整流程就是这样

```
你选书（点击消息4）
   ↓
写借书条（Link 把 id=04 放进 URL）
   ↓
管理员收到纸条（searchParams 读取 id='04'）
   ↓
管理员查档案（DetailData.find 用 id 找数据）
   ↓
念出详情（界面显示 findResult.detail）
```

**一句话总结：Link 负责"传纸条"，searchParams 负责"读纸条"，DetailData 负责"查档案"，界面负责"展示结果"。**

```js
// 模拟消息数据（实际项目中通常从后端 API 获取）

const messageArr = [

	{ id: '01', title: '消息1',detail:'d1'},
	
	{ id: '02', title: '消息2',detail:'d2' },
	
	{ id: '03', title: '消息3',detail:'d3' },
	
	{ id: '04', title: '消息4',detail:'d4' },

]

  

return (

<div>

<ul>

	{messageArr.map(msgObj => (
	
	<li key={msgObj.id}>

{/*

===== search 参数传递方式 =====

直接在 to 路径后拼接 ?key=value&key2=value2 格式

注意：

- 路由注册时 path 无需任何特殊声明（不像 params 要写 :id）

- ? 前是路径，? 后是参数

对比三种参数传递方式：

params： to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}

search： to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`} ← 当前方式

state： to="/home/message/detail" state={{ id, title }}

*/}

<Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}&detail=${msgObj.detail}`}>
	
		{msgObj.title}
		
		</Link>
		
	</li>

))}

</ul>

  

<hr />

  

{/*

	嵌套路由：在 Message 内部渲染 Detail
	
	path="detail" 匹配 /home/message/detail（相对路径）
	
	search 参数写法的路由注册：path 不需要写参数占位符，直接写路径即可
	
	对比 params 写法：path="detail/:id/:title"

*/}

<Routes>

	<Route path="detail" element={<Detail />} />

</Routes>

</div>

)

}
```
这段代码处理了 **4 个核心问题**：

---

### 问题一：数据从哪来？

```js
const messageArr = [
  { id: '01', title: '消息1', detail: 'd1' },
  ...
]
```

定义了消息列表的**数据源**，实际项目里这里会换成 `fetch` / `axios` 从后端拿数据。每条消息有 3 个字段备用：唯一标识 `id`、显示文字 `title`、附加信息 `detail`。

---

### 问题二：列表怎么渲染？

```jsx
{messageArr.map(msgObj => (
  <li key={msgObj.id}>
    <Link ...>{msgObj.title}</Link>
  </li>
))}
```

用 `.map()` 把数组**循环变成 JSX 列表**，`key={msgObj.id}` 是 React 要求的唯一标识，用于高效更新 DOM。

---

### 问题三：点击后怎么把数据带走？

```jsx
<Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}&detail=${msgObj.detail}`}>
```

点击链接时，把这条消息的 3 个字段**打包进 URL**：

```
/home/message/detail?id=04&title=消息4&detail=d4
                    ↑ 路径不变，? 后面是携带的数据
```

Detail 组件通过 `useSearchParams` 读取这些数据，不用 props 传递，**跨组件传参靠 URL**。

---

### 问题四：Detail 组件在哪里显示？

```jsx
<Routes>
  <Route path="detail" element={<Detail />} />
</Routes>
```

处理了**嵌套路由**的问题：Detail 不是弹窗，也不是新页面，而是渲染在 Message **下方同一个区域内**（`<hr />` 下面）。路由匹配到 `/home/message/detail` 时，Detail 自动出现在这里。

---

### 一句话总结每个部分

|代码|解决的问题|
|---|---|
|`messageArr`|数据从哪来|
|`.map()` + `key`|列表怎么高效渲染|
|`<Link to="...?id=">`|点击后数据怎么传给下一个组件|
|`<Route path="detail">`|Detail 组件在哪个位置、什么时候出现|
