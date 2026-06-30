---
layout: ../../../../../../../layouts/PostLayout.astro
title: redux 异步加载
description: 结构 用小学生能懂的方式讲解这个代码 🧮 先讲一个故事 想象你有一个 计分器 ，就像打游戏时屏幕角落里的分数。 你按一个按钮，
  分数加 1 你按另一个按钮， 分数减 1 你还可以 等 0.5 秒再加 （慢动作加分） 这个代码就是在做这件事
date: 2026-03-07T07:54:36.773Z
updated: 2026-03-11T14:54:18.608Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 react/rudux
---

```jsx
/**

* countSlice.js —— 为 Count 组件服务的 Redux Toolkit 切片（slice）

*

* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* 【旧版写法（纯 Redux）对照参考】

*

* 旧版需要三个独立文件：

* ① constant.js —— 定义 action type 常量，避免字符串拼写错误

* export const INCREMENT = 'increment'

* export const DECREMENT = 'decrement'

*

* ② count_action.js —— 专门为组件生成 action 对象的工厂函数

* // 同步 action：action 的值为普通 Object

* export const createIncrementAction = data => ({ type: INCREMENT, data })

* export const createDecrementAction = data => ({ type: DECREMENT, data })

*

* // 异步 action：action 的值为函数（需要 redux-thunk 中间件支持）

* // 返回一个函数，函数内部完成异步操作后再 dispatch 同步 action

* export const createIncrementAsyncAction = (data, time) => {

	* return () => {
	
	* setTimeout(() => {
	
	* store.dispatch(createIncrementAction(data)) // 直接引用 store 实例
	
		* }, time)
	
	* }

* }

*

* ③ count_reducer.js —— 处理 action 的纯函数

* const initState = 0

* export default function countReducer(state = initState, action) {

* switch (action.type) {

		* case INCREMENT: return state + action.data
		
		* case DECREMENT: return state - action.data
		
		* default: return state
	
	* }

* }

*

* 【新版写法（Redux Toolkit）改进点】

* - 三个文件合并为一个 slice 文件，无需手写常量和 switch/case

* - createSlice 自动生成 action type 字符串（"count/increment"）和 action creators

* - createAsyncThunk 替代手写"返回函数"的异步 action 模式

* · 旧版异步 action 直接引用 store 实例（耦合）

* · 新版通过 thunkAPI.dispatch 参数注入，彻底解耦

* - Immer 集成：reducer 内可直接修改 state，无需手动展开（...state）

* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*

* 【复现步骤】

* 1. 安装依赖：npm install @reduxjs/toolkit react-redux

* 2. 用 createSlice 定义切片，指定 name / initialState / reducers

* 3. 用 createAsyncThunk 定义异步 action

* 4. 导出 action creators（切片.actions）和 reducer（切片.reducer）

*/

  

// 【语法】从 @reduxjs/toolkit 按需导入所需 API

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

  

// ─────────────────────────────────────────────

// 【同步 Action Creators】（由 createSlice 自动生成，见文件底部导出）

//

// 旧版写法（count_action.js）：

// export const createIncrementAction = data => ({ type: INCREMENT, data })

// export const createDecrementAction = data => ({ type: DECREMENT, data })

//

// 新版等价写法（由 createSlice 自动生成，效果完全相同）：

// increment(payload) => ({ type: 'count/increment', payload })

// decrement(payload) => ({ type: 'count/decrement', payload })

//

// 区别：

// · 旧版 action 字段名为 data，新版统一为 payload（RTK 约定）

// · 旧版 type 来自手动维护的 constant.js，新版由 name + reducerKey 自动拼接

// ─────────────────────────────────────────────

  

// ─────────────────────────────────────────────

// 【异步 Action】createAsyncThunk

//

// 旧版写法（count_action.js）：

// export const createIncrementAsyncAction = (data, time) => {

// return () => { // 返回一个函数，redux-thunk 识别并执行它

// setTimeout(() => {

// store.dispatch(createIncrementAction(data)) // 直接耦合 store 实例

// }, time)

// }

// }

//

  

// 新版写法：createAsyncThunk('type前缀', async (data, thunkAPI) => { ... })

// · 不再需要直接引用 store，通过 thunkAPI.dispatch 注入，彻底解耦

// · 自动派发 pending / fulfilled / rejected 三种生命周期 action

// · payload creator 为 async 函数，可使用 await / Promise

//

  

/* export const 导出函数 + async(xxx) => {xxx} */

// 语法：createAsyncThunk('命名空间/actionName', async (参数, thunkAPI) => { ... })

// - 第一个参数：action type 字符串，格式建议 "sliceName/actionName"

// - 第二个参数：payload creator 函数

// · data —— dispatch 时传入的实参（等价于旧版的 data 参数）

// · thunkAPI —— 包含 { dispatch, getState, rejectWithValue, ... }

// ─────────────────────────────────────────────

// action type 前缀

// 解构 thunkAPI 得到 dispatch

// 等价于旧版 setTimeout，500ms 延迟

// 延迟结束后派发同步 action（无需引用 store）

export const incrementAsync = createAsyncThunk(

	'count/incrementAsync',
	
	async(data,{dispatch}) => {
	
	await new Promise(resolve =>setTimeout(resolve,500))
	
	dispatch(increment(data))
	
	}

)

  

// ─────────────────────────────────────────────

// 【切片定义】createSlice

//

// 旧版需要分别维护：constant.js + count_action.js + count_reducer.js 三个文件

// 新版用一个 createSlice 调用全部替代

//

// 语法：createSlice({ name, initialState, reducers })

// - name ：切片命名空间，生成 action type 如 "count/increment"

// 等价于旧版 constant.js 中手动定义的常量字符串

// - initialState：该切片管理的状态初始值（旧版 reducer 函数的默认参数）

// - reducers ：同步 reducer 方法集合，每个方法签名为 (state, action) => void

// · state —— Immer 代理对象，可直接赋值（等价于旧版手动展开 ...state）

// · action —— 包含 { type, payload }，旧版字段名为 data，新版统一为 payload

// ─────────────────────────────────────────────

// 切片名 → 自动生成常量，无需单独维护 constant.js

// 等价于旧版 reducer 的 const initState = 0

  
  

// increment —— 加法

// 旧版：case INCREMENT: return state + action.data

// 新版：直接修改 state（Immer 保证不可变性），payload 等价于旧版 data

  

// 无需 return，无需 ...state 展开

  

// decrement —— 减法

// 旧版：case DECREMENT: return state - action.data

const countSlice = createSlice({

	name:'count',
	
	initialState: {value: 0},
	
	reducers: {
	
	increment(state,action) {
	
	state.value += action.payload

},

		decrement(state,action) {
		
		state.value -= action.payload
		
		},
	
	},

})

  

// ─────────────────────────────────────────────

// 【导出】

//

// 旧版：

// export const createIncrementAction = ... （手动编写并导出）

// export const createDecrementAction = ...

// export default countReducer （手动编写并导出）

//

// 新版（自动生成）：

// countSlice.actions —— 包含与 reducers 同名的 action creators

// countSlice.reducer —— 处理所有 count 相关 action 的 reducer 函数

//

// 用法：dispatch(increment(1)) 等价于旧版 dispatch(createIncrementAction(1))

// ─────────────────────────────────────────────

  

// 导出同步 action creators

// 默认导出 reducer，交给 store 注册

export const {increment,decrement} = countSlice.actions

export default countSlice.reducer
```
## 结构
```jsx
import { xxx, xxx } from '@reduxjs/xxx'

export const xxx = xxx(

	'xxx/xxxx',
	
	async(xxx,{xxx}) => {
	
	await new Promise(resolve =>setTimeout(xxx,500))
	
	dispatch(increment(xxx))
	
	}

)

const xxx = xxx({

		name:'xxx',
		
		xxx: {yyy: 0},
		
		xxx: {
		
		xxx(xxx,xxx) {
		
		xxx.xxx += xxx.xxx
	
	},
	

	decrement(xxx) {
		
		xxx.xxx -= xxx.xxx
		
		},
	
	},

})

export const {xxx} = xxx

export default xxxx
```

## 用小学生能懂的方式讲解这个代码 🧮
---
### 先讲一个故事

想象你有一个**计分器**，就像打游戏时屏幕角落里的分数。

- 你按一个按钮，**分数加 1**
- 你按另一个按钮，**分数减 1**
- 你还可以**等 0.5 秒再加**（慢动作加分）

这个代码就是在做这件事，只不过用了 JavaScript 来写。

---

### 第一部分：仓库管理员的规则本

```javascript
const countSlice = createSlice({
  name: 'count',              // 这个计分器叫 "count"
  initialState: { value: 0 }, // 游戏开始，分数是 0
  reducers: {
    increment(state, action) {
      state.value += action.payload  // 加分！加多少？看你传来的数字
    },
    decrement(state, action) {
      state.value -= action.payload  // 减分！
    },
  },
})
```

**比喻：** `createSlice` 就像写了一本**规则手册**：
- 手册名字叫 `count`
- 规则1：`increment` = 加分
- 规则2：`decrement` = 减分
- `action.payload` = 你传过来的**具体数字**（比如加 2 分还是加 3 分）

---

### 第二部分：慢动作加分（异步）

```javascript
export const incrementAsync = createAsyncThunk(
  'count/incrementAsync',
  async (data, { dispatch }) => {
    await new Promise(resolve => setTimeout(resolve, 500)) // 等 0.5 秒
    dispatch(increment(data))                              // 然后再加分
  }
)
```

**比喻：** 就像玩游戏时按了一个**"延迟加分"按钮**：
1. 按下按钮（执行 `dispatch(incrementAsync(2))`）
2. 倒计时 0.5 秒（`setTimeout`）
3. 时间到！加分！（`dispatch(increment(data))`）

`data` 就是你按按钮时说的"我要加几分"，`dispatch` 就是"通知计分器更新分数"的那个动作。

---

### 第三部分：把规则对外公开

```javascript
export const { increment, decrement } = countSlice.actions
export default countSlice.reducer
```

**比喻：** 就像把规则手册分成两部分发出去：

| 发出去的东西 | 比喻 | 谁来用 |
|---|---|---|
| `increment` / `decrement` | 加分、减分的**按钮说明书** | 组件（按钮）用来触发 |
| `countSlice.reducer` | 真正**执行加减分的裁判** | store（仓库）用来处理 |

---

### 整体流程串起来

```
你点击按钮
    ↓
dispatch(increment(2))        ← 你说：我要加 2 分
    ↓
Redux 找到 increment 规则
    ↓
state.value += 2              ← 裁判执行：0 变成 2
    ↓
屏幕上的数字更新为 2           ← 你看到结果
```

---

### 一句话总结每个文件的角色

| 文件              | 角色                 |
| --------------- | ------------------ |
| countSlice.js   | 写规则手册（怎么加减分）       |
| store.js        | 保管分数的**保险箱**       |
| main.jsx        | 把保险箱拿给所有人用         |
| Count/index.jsx | 显示分数 + 提供按钮的**界面** |
|                 |                    |
