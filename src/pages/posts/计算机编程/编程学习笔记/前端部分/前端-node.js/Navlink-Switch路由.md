---
layout: ../../../../../../layouts/PostLayout.astro
title: Navlink  Switch路由
description: Navlink <NavLink/ 比 <Link/ 更优越，配合 activeClassName 进行使用， <NavLink/
  配合 <Route/ 使用，需要 import ,通过 react developer component
date: 2026-03-03T06:56:23.114Z
updated: 2026-03-03T08:05:36.227Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 node.js
---

### Navlink
`<NavLink/> `比`<Link/>` 更优越，配合`activeClassName` 进行使用，`<NavLink/>` 配合`<Route/>`使用，需要`import`,通过 react developer component 进行跟踪
``
```js
<div className="row">

<div className="col-xs-2 col-xs-offset-2">

<div className="list-group">

<NavLink

className={({ isActive }) => isActive ? 'atguigu list-group-item' : 'list-group-item'}

to="/about"

>About</NavLink>

<NavLink

className={({ isActive }) => isActive ? 'atguigu list-group-item' : 'list-group-item'}

to="/home"

>Home</NavLink>

<NavLink

className={({ isActive }) => isActive ? 'atguigu list-group-item' : 'list-group-item'}

to="/detail"

>Detail</NavLink>

</div>

</div>

<div className="col-xs-6">

<div className="panel">

<div className="panel-body">

<Routes>

<Route path="/about" element={<About />} />

<Route path="/home" element={<Home />} />

<Route path="/detail" element={<Detail />} />

</Routes>

</div>

</div>

</div>

</div>
```
Detail 模块引入：
```js
export default function Detail() {

	return <h3>我是Detail组件的内容</h3>

}
```

#### Switch 路由
包裹`<Route/>` 组件进行切换

#### 样式丢失
history会带上路径，导致 bootstrap 刷新后样式丢失，hash模式不会
