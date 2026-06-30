---
layout: ../../../../../../../layouts/PostLayout.astro
title: 学习建议
description: 学习建议 1. 每学一个新知识点，用 AI 实现一个小功能，熟悉语法，基础：js,ES6,premis,箭头函数 2.
  使用函数组件+Hooks, 前期 关键词：路由,aud,umi,组件化，JXS:js 扩展， MVC：model,vie
date: 2025-12-28T09:07:02.421Z
updated: 2026-03-05T10:59:38.813Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 11
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/尚硅谷 to-do_list 教程笔记
---

# 学习建议
1. 每学一个新知识点，用 AI 实现一个小功能，熟悉语法，基础：js,ES6,premis,箭头函数
2. 使用函数组件+Hooks,
# 前期
关键词：路由,aud,umi,组件化，JXS:js 扩展，
MVC：model,view,controller 
react 特性：基于 js 构建，区别于 vue,通过 js 语法整合 html
**关键概念:**虚拟 DOM，提高可复用性
![Pasted image 20260112175354.png](/media/4c7afe78c3e3c797.png)

## 构建链条
1. CRA：传统构建方法，已经被淘汰
2. vite:轻量级方案，区别于 webpack
3. Next.js:全新方案，适配 vercel,v0 构建

## 基本语法
### jsx 页面文件
1. 基于js 封装，不能使用 jQuery 语法
2. 采取模块化开发，组件化集成
3. 语法区别于 vue
4. 创建虚拟 DOM 没有`''`,直接输入字符串，相较于真实 Dom 更轻，浏览器断点检查后的标签更少
5. 在 js 基础上进行封装，简化嵌套标签的情况，`()` 放 html 操作，`{}`放 js 操作，`.toLowerCase()`小写
6. 模块化，组件化编写，聚焦功能，使用 chrome react develop 插件，正常原子图标，表示 js 文件已经打包
### 函数式开发
1. 函数式编写，调用使用`<Demo/>` 调用`Demo()` 函数，引入 Babel,注意 react 严格模式，插件报错则无法显示组件
- 一切皆对象，js其实也在像java看齐，只能说是js自己没有类的概念，只能模拟实现了，正好es6做了语法糖，看起来就是java
- 不用声明直接写，保持 js 语法，实例初始化（添加属性）时需要写构造器
- 类中定义的方法 若方法名前面有static 则该方法是定义在类本身上的  没写static的方法才是定义在类的原型上的
- 类里需要用`super()` 进行继承，先写 `super()`再写特有实例

### 声明式开发
1. 声明式开发需要继承`React.Component 然后写 `render(){}`
2. `render` 放在`Component`  的原型对象上，供实例对象使用
3. ![Pasted image 20260131151747.png](/media/c6ff4f10db590735.png)组件 3 大核心特性基于类式开发而非函数式开发，新版 react 考虑`hooks` 进行函数式开发
4. ![Pasted image 20260131161348.png](/media/3bf67eb5fba776a7.png)创建组件后先 `super`然后`props` 引入`this.state = {}`然后 `render(){}`
5. ![Pasted image 20260131171137.png](/media/cf674c591b6934c6.png)
- **React 事件：****`onClick={函数`}`
- **不要写字符串，不要写** **函数()**
- **要传参：****`onClick={() => 函数(参数)}`
- **要在类组件里改 state：用 `this.setState`，并处理好 this 绑定**
- 原生js里面谁调用该函数该函数的this就是指向谁。所以只能用箭头函数，因为箭头函数没有。this，所以会往外找，就找到了这个类的this
- 说白了就是x等于一个函数，p1.study就是这个函数的内容，相当于x=function study(){}，此时里面的this就是window了，而p1.study

#### state 状态问题与内存管理：
https://www.bilibili.com/video/BV1wy4y1D7JT?t=0.6&p=15

![Pasted image 20260201151839.png](/media/72d9a6a3709659c4.png)`bind` 解决`this`指向的问题，状态必须通过`setState` 进行修改
- 这里是用bind改变changeWeather的指向为Weather
- 写在onclick里更好理解一些，`onClick={this.changeWeather.bind(this)`
- 状态不可直接更改，要借助内置 API 更改

```jsx
<script type="text/babel">

//1.创建组件

class Weather extends React.Component {

//声明构造器

constructor(props){

	super(props)
	
	//this 判断状态
	
	this.state= {isHot:false};
	
	//处理 changeWeather this 指向的问题
	
	this.changeWeather = this.changeWeather.bind(this)

}

	//声明 render
	
	render() {
	
	//控制台打印 this
	
	console.log(this);
	
	//this state 标明状态
	
	return <h1 onClick={this.changeWeather}>今天天气很{this.state.isHot? '冷' : '热'} </h1>

	}
	

changeWeather(){

	//获取原来isHot 值
	
	const isHot = this.state.isHot
	
	//状态必须通过 setState 进行更新
	
	this.setState({isHot:!isHot})

	}

}

  

	//2.渲染组件到页面
	
	ReactDOM.render(<Weather/>,document.getElementById('test'))
	
	</script>
	
	</head>
	
	<body>
	
	<!-- 准备好一个"容器" -->
	
	<div id="test"></div>

</body>
```
![Pasted image 20260201162246.png](/media/bad21b561e871dcb.png)
![Pasted image 20260202171143.png](/media/c291ba131e3caf4d.png)
- babel会把changeWeather加到constructer中去，所以箭头函数的this会指向实例对象，可以去babel的"试一试"看一下
- 箭头函数没有自己的this，它的this找其外部函数的this作为自己的this
- s中的this只看调用方法时的场景，这里只是改变的方法的位置，但是调用的场景还是一样的onClick
- 关注状态函数 state 的用法
![Pasted image 20260202174739.png](/media/cfc0a6d3b4e3c2a3.png)注意 
####  props 语法糖
##### 深拷贝浅拷贝
关注深拷贝和浅拷贝的知识点，object.assign的语法糖
![Pasted image 20260202181441.png](/media/a52992a26be8e733.png)
- 只对值是基本类型的属性是深拷贝，如果某个属性有值是引用类型，是浅拷贝
- 在合适的时候发出合适的请求 把合适的数据渲染到合适的位置[深浅拷贝，state 状态经典问题](/archive/?q=%E6%B7%B1%E6%B5%85%E6%8B%B7%E8%B4%9D%EF%BC%8Cstate%20%E7%8A%B6%E6%80%81%E7%BB%8F%E5%85%B8%E9%97%AE%E9%A2%98)
- 标签组件类型性质需要做出限制，对标签组件进行类型、必要性的限制
##### 关注 props 类折叠
- 加给实例的问题：react去找校验规则的propType属性时，是在类自身去找，而不是去类的实例对象去找，那肯定不能放错地方啊
- static propTypes：开发期给 props 做校验提示，传错会 warning
- static defaultProps：给 props 默认值，避免 undefined
- 写错会导致：**提示失效、默认值失效、运行时崩溃或静默显示错误、排查难度上升**
- TS 能更早、更强地限制 props

#### 函数式开发
- 使用 hooks,接受 `props`和`refs`
- 函数式里没有`state` ,`static` 需要写在外面，可以使用`函数.propTypes = {}`
![Pasted image 20260203121745.png](/media/35cfa7b3a340f345.png)
- 先赋一个null值把原来标签位置完全清空，再把一个新的标签内容写到那个位置
```js
<body>

<!-- 准备好一个"容器" -->

<div id="test"></div>

<script type="text/babel">

class Weather extends React.Component {

	state= {isHot:true}
	
	showData = () => {
	
	alert(this.input.value)

}

  

showData2 = () => {

	alert(this.input2.value)

}

  

changeWeather = () => {

	//获取原来状态

	const {isHot} = this.state

	//更新状态
	
	this.setState({isHot:!isHot})

}

  

saveInput = (c) => {

	this.input = c;
	
	console.log('@', c);

}

  

render() {

	const {isHot} = this.state

	return (
	
	<div>
	
		<h1>今天天气很{isHot ? "炎热" : "凉爽"}</h1>
		
		<input ref={this.saveInput} type="text" /><br /><br />
		
		<button type="button" onClick={this.showData}>
		
		点我提示左侧数据 Loading...
		
		</button>
		
			<input onBlur={this.showData2} ref={c => (this.input2 = c)} type="text" placeholder="点击按钮显示数据" />
		
		<button onClick={this.changeWeather}>点我切换天气</button>
	
	</div>

		)

	}

}

  

const root = ReactDOM.createRoot(document.getElementById("test"))

root.render(<Weather />)

</script>

  

</body>
```
- 考虑 ref 容器

### 受控组件和非受控组件
考虑 ajax,axios,防止页面刷新，跳转时引入 username,password,原生 js 方法
变量传参类似 vue 中的 `<onMount>`和`<blind>`
![Pasted image 20260204134753.png](/media/976315f46d5e45b5.png)
```js
<body>

<!-- 准备好一个"容器" -->

<div id="test"></div>

<script type="text/babel">

//创建组件

class Login extends React.Component{

/* handleSubmit 里：

• event.preventDefault() 阻止浏览器默认提交刷新

• 从 this 里拿到 username、password（就是两个 input DOM）

• 读取 username.value、password.value 并 alert 弹出 */

handleSubmit = (event) => {

	event.preventDefault();
	
	const {username,password} = this
	
	alert(`你输入的用户名是:${username.value},你输入的密码是:${password.value}`)

}

render(){

return(

<form onSubmit={this.handleSubmit}>

{/* 把两个 input 的 DOM 节点分别存到组件实例上（this.username、this.password）。 */}

	用户名：<input ref={c => this.username = c} type="text" name="username"/>
	
	密码：<input ref={c => this.password = c} type="text" name="password"/>

	<button>登录</button>

</form>

		)
	
	}

}

  

//渲染组件 - 使用 React 18 API

const root = ReactDOM.createRoot(document.getElementById('test'))

root.render(<Login />)

</script>

  

</body>
```
- 非受控组件，现用现取;受控组件，减少使用`ref`
- `this`涉及回调，优先写`render(){}`
``` js
//渲染组件 - 使用 React 18 API
const root = ReactDOM.createRoot(document.getElementById('test'))
root.render(<Login />)
```
##### 受控组件表单情况
```js
<script type="text/babel">

//创建组件

class Login extends React.Component{

/* 初始化状态 */

state = {

	username:"",
	
	password:""

}

  

//保存用户名到状态，语法：组件名 = () =>{}

saveUsername = (event) => {

	this.setState({username: event.target.value})

}

  

//保存密码到状态

savePassword = (event) => {

	this.setState({password: event.target.value}) // ✅ 修复：更新 password

}

  

handleSubmit = (event) => {

	event.preventDefault();
	
	const {username, password} = this.state // ✅ 修复：从 this.state 获取
	
	alert(`你输入的用户名是:${username},你输入的密码是:${password}`)

}

  

render(){

return(

<form onSubmit={this.handleSubmit}>{/* 语法：函数={this.功能} */}

		{/* 受控组件：value 由 state 控制，onChange 更新 state */}
		
		用户名：<input
		
			onChange={this.saveUsername}
			
			value={this.state.username}
			
			type="text"
			
			name="username"
		
		/><br/><br/>
		
		密码：<input
		
			onChange={this.savePassword}
			
			value={this.state.password}
			
			type="password"
			
			name="password"
		
		/><br/><br/>
		
		<button>登录</button>
		
		</form>

		)

	}

}

  

//渲染组件 - 使用 React 18 API

const root = ReactDOM.createRoot(document.getElementById('test'))

root.render(<Login />)

</script>
```

##### 📌 受控组件（修复后）

```javascript
<input
    value={this.state.username}      // ✅ value 由 state 控制
    onChange={this.saveUsername}     // ✅ onChange 更新 state
/>
```

- **数据来源**：state
- **更新方式**：onChange → setState
- **读取数据**：从 `this.state` 读取

##### 📌 非受控组件（test10.html）

```javascript
<input
    ref={c => this.username = c}    // 使用 ref 获取 DOM
/>
```

- **数据来源**：DOM 节点
- **更新方式**：用户直接输入
- **读取数据**：从 `this.username.value` 读取

#### 生命周期：react18
生命周期回调函数（钩子函数），涉及计时器，问题：当你setState的时候他会重新调用你的render函数，render函数又会开一个新的定时器，导致同时存在多个定时器，必须设置 render 频率，否则性能爆炸，组件挂载完毕后要卸载组件
##### React 18 卸载组件 API 变化
```js
<script type="text/babel">

// 声明 root 变量，让组件可以访问

let root = null

  

//创建组件

class Login extends React.Component{

state={

	opacity:1

}

//卸载组件

death = () => {

	root.unmount(); // React 18 使用 root.unmount() 卸载组件

}

  

//组件挂载完毕:自动变色

componentDidMount(){

	this.timer = setInterval(() =>{
	
	let {opacity} = this.state
	
		opacity -= 0.1
	
	if (opacity <= 0) {
	
		opacity = 1
	
	}
	
	this.setState({opacity})
	
	},200)

}

  

//组件将要卸载

componentWillUnmount() {

	// ✅ React 18 中仍然使用
	
	// 适用场景：清除定时器、取消订阅
	
	clearInterval(this.timer)

}

  

render(){

	console.log('render')
	
	return(

		<div>
		
			<h1 style={{opacity:this.state.opacity}}>React 学不下去怎么办？</h1>
			
			<button onClick={this.death}>不活了！</button>
			
			<button onClick={this.action}>开始变化</button>
		
		</div>

		)
	
	}

}

  

//渲染组件 - 使用 React 18 API

root = ReactDOM.createRoot(document.getElementById('test'))

root.render(<Login />)

</script>
```

| React 版本     | API                                          |
| ------------ | -------------------------------------------- |
| React 17 及之前 | `ReactDOM.unmountComponentAtNode(container)` |
| **React 18** | `root.unmount()`                             |
##### React 18 的变化

|方面|React 17 及之前|React 18|
|---|---|---|
|**componentDidMount 用法**|✅ 正常使用|✅ 正常使用（无变化）|
|**componentWillUnmount 用法**|✅ 正常使用|✅ 正常使用（无变化）|
|**渲染 API**|`ReactDOM.render()`|`createRoot()`|
|**卸载 API**|`unmountComponentAtNode()`|`root.unmount()`|

##### 常用生命周期钩子对比

```javascript
class MyComponent extends React.Component {
    // 1. 挂载阶段
    componentDidMount() {
        // ✅ React 18 中仍然使用
        // 适用场景：启动定时器、发送请求、订阅事件
    }

    // 2. 更新阶段
    componentDidUpdate() {
        // ✅ React 18 中仍然使用
        // 适用场景：DOM 更新后的操作
    }

    // 3. 卸载阶段
    componentWillUnmount() {
        // ✅ React 18 中仍然使用
        // 适用场景：清除定时器、取消订阅
    }
}
```

##### 总结

- ✅ **类组件的所有生命周期钩子在 React 18 中都可以正常使用**
- ✅ **语法没有任何变化**
- ⚠️ **只有渲染/卸载的根 API 改变了**（`createRoot` / `root.unmount`）
##### 函数柯里化
类似闭包嵌套，作用是减少重复代码，多次执行操作而非一次性执行，函数柯里化往往涉及 react 高阶函数

#### setState模块
##### 旧版生命周期
###### **一句话记忆（把函数当“时间点”）**

- **constructor**：出生，准备数据
    
- **render**：画面（可重复画很多次）
    
- **didMount**：第一次上屏后开始“干活”（请求/定时器）
    
- **didUpdate**：每次更新上屏后继续“补充动作”
    
- **willUnmount**：离开前收拾房间（清理）
![Pasted image 20260204165609.png](/media/965586f70531d825.png)

##### 新版生命周期
- **Mount 后做事**：componentDidMount
- **Update 前取快照**：getSnapshotBeforeUpdate
- **Update 后收尾**：componentDidUpdate
- **Unmount 清理**：componentWillUnmount
- **props 推导 state（很少用）**：getDerivedStateFromProps
![Pasted image 20260204225230.png](/media/94c9dfdb88159f46.png)

##### getSnapshotBeforeUpdate（React 类组件生命周期）
处理无限流历史记录时常用，已经被`hooks` 替代，平时项目几乎不用，了解即可

##### DOM 的 diffing算法
使用 key 作为唯一标识而非 index,提高增删改查的效率，避免逆序插入等破坏性插入带来的影响

#### 箭头函数 
[箭头函数](/archive/?q=%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)

##### react原理
- 移动端开发可以通过软件加课实习，但用户体验不好，可以使用框架开发
- webpack 输入 react 指令可以暴露源代码进行研究，react index.js 文件通过 webpack 嵌入到 index.html 文件中
- 分别暴露就是一个一个暴露，统一暴露就是把所有东西放在一个组件里然后就暴露那个组件
- {}是解构赋值，不要觉得Component是从React身上直接拆取的，而是一个分别暴露的Component
- react 组件写为 jsx,一般函数直接 js 后缀结尾
- 插件：react native Gragh snippt
![Pasted image 20260220105119.png](/media/88d9e7b83d23d0fa.png)
##### 提示词
 使用中文，帮我下载 webpack,引入 react,核心库，引入 react DOM,渲染 App到页面 ,确保静态组件开始就是交互，html 使用className=" "作为标签名，css 样式引入{{ }}语法

## to-do list 案例
### 组件拆分
注意拆分组件，模块化，分为 Footer,Header,Item,List 等模块，防止 React 重复引入，边引入边刷新，检查模块是否正常，Footer 部分组件抽象为`<Footer/>`，以此类推，List 包含 Item 组件，List 是父组件，Item 是子组件。
组件拆分完成后开始state 初始化状态，语法:
```js
state = {xxx:[
	{xxx},
	{xxx},
	{xxx},
]}
```
传参思路：App 分别传值给 Header，List;Header 组件传值给 List，List 传值给 state 状态，state 再传给App,父子之间通过 props 传值
![Pasted image 20260225114312.png](/media/d39200a2606acc4c.png)
![Pasted image 20260225115322.png](/media/ee12f0aa3c6be644.png)
![Pasted image 20260225124528.png](/media/b3d5f40f658ef060.png)
`() => {}` 传参给自变量
