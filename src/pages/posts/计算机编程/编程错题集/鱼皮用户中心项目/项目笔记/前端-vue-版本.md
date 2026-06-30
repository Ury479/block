---
layout: ../../../../../../layouts/PostLayout.astro
title: 前端 vue 版本
description: vue 版本教程 1. 配置 node.js,安装 vue cli脚手架5.0.8，选择 vue3 版本 1. npm install
  g @vue/cli IDE 控制台报错：终端运行 yarn,Corepack,node.js 版本兼容
date: 2025-11-26T13:28:21.384Z
updated: 2025-11-27T05:19:33.217Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 4
sourceFolder: 计算机编程/编程错题集/鱼皮用户中心项目/项目笔记
---

## vue 版本教程
1. 配置 node.js,安装 vue cli脚手架5.0.8，选择 vue3 版本
	1. `npm install -g @vue/cli IDE 控制台报错：终端运行` [yarn,Corepack,node.js 版本兼容性报错](/archive/?q=yarn%2CCorepack%2Cnode.js%20%E7%89%88%E6%9C%AC%E5%85%BC%E5%AE%B9%E6%80%A7%E6%8A%A5%E9%94%99)
	2. `vue create user-center_0722`创建相应文件[项目运行指令混淆](/archive/?q=%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C%E6%8C%87%E4%BB%A4%E6%B7%B7%E6%B7%86)
	3. 手动配置项目，选择 manul,ts,router,formmer[ESlint 报错](/archive/?q=ESlint%20%E6%8A%A5%E9%94%99)
	4. auto Eslint,prettier,打开格式化插件
	5. yarn 使用package.json dependencies管理文件
	6. ts 引入官方模板，注意删改
2. 删除组件中的无关样式，防止样式污染
	1. 组件入口文件 app.vue
	2. 编写 BasicLayout,注册相应组件
	注意：**Vue 版本必须保留你写的 axios 封装，因为 Vue 项目没有 UmiJS 的 request 模块。**
	react 有 Umi 兜底
3. 编写底部栏
	1. 引入导航栏 layout 布局
	2. footer 部分修改为底部栏
	3. 引入`<a>` 标签，插入连接
	4. css 修改链接样式
4. 配置动态路由
	1. `<router-view/>` 根据识别到的路由自动切换界面
	2. 配置中间页面，index,BasicLayout
	3. 防止被底部遮住，配置`<div>`
5. 编写 GlobalHeader
	1. 顶部导航栏
		1. 引入组件，**版本必须和教程接近，4.2.6**
		2. 引入 logo,放入 assets 目录
		3. 引入`<div>` 布局，修改菜单配置
		4. 删改**无关路由**，重新配置`index.ts` 文件，否则会报错
	2. 左中右布局，左边 logo，配置 css 样式
		1. 引入栅格组件进行排版，栅格包裹其他元素
		2. 图标栏、内容条和登录状态栏3 分化
6. 修改 index 路由，提前准备页面地址
	1. 联动：index 地址
```
{  
  path: "/user/login",//href,key 部分
  name: "userLogin",// 
  component: HomeView, //组件名 
},
```

	2. GlobalHeader herf 路径：
```
<div class="user-login-status">  
  <a-button type="primary" href="/user/login">登录</a-button>  
</div>
```
	3. GlobalHeader js key:
```
{  
  key: "/user/login",  
  label: "用户登录",  
  title: "用户登录",  
},
```

8. 引入 ant design vue 点击效果
```
<!--内容条  -->  
<a-menu  
  v-model:selectedKeys="current"  
  mode="horizontal"  
  :items="items"  
  //配合官方 js 效果
  @click="doMenuClick"  
/>
```

9. ts 文件
	1. 调用 axios 框架,配置响应拦截器
		1.  **自定义全局请求**，引入 axios，编写用户注册模块
		2. 编写 request.ts 文件和user.ts 文件，分别存储相应请求和用户配置
		3. 解决跨域问题：配置后端，引入@cross ?[后端不存在](/archive/?q=%E5%90%8E%E7%AB%AF%E4%B8%8D%E5%AD%98%E5%9C%A8)
	2. **配置钩子函数**，引入 API，API 就是字典，由组件库提供
	3. 注意精简重复代码,
10. Pinia 配置全局状态管理
	1. 引入官方代码
	2. 编写用户储存、远程获取、逻辑修改等功能
	3. 引入 JSON，注意跨域问题，需要提前配置好后端，否则 `{{ JSON.stringify(loginUserStore.loginUser) }}` 无法显示
```
<div class="user-login-status">
  <div v-if="loginUserStore.loginUser.id">
    {{ loginUserStore.loginUser.username ?? "无名" }}
  </div>
  <div v-else>
    <a-button type="primary" href="/user/login">登录</a-button>
  </div>
</div>
```
这部分代码容易报[Cannot read properties of undefined (reading 'userAccount')](/archive/?q=Cannot%20read%20properties%20of%20undefined%20(reading%20'userAccount'))界面渲染错误
11. 前端页面开发
	1. 首页 HomePage，id 方便查找
		1. **优先跟新 index.ts 文件**，跟新完成后再到相应文件编写样式
	2. 用户登录界面、用户管理页面统一使用组件，在组件的基础上进行修改，**留意鱼皮魔改过程**
			1. `templet` 统一放入`<div>` 中管理
			2. name 必须和 js 部分保持一致
			3. 修改 css 样式
```
<!--html 部分-->
<a-form-item>  
  <!--label 保留，name\message 汉化 -->  
  label="Username"<!--可以修改-->   
  name="username" <!--对应后端和 js 部分-->  
  :rules="[{ required: true, message:  
  'Please input your username!' }]" >  <!--查阅官方文档，添加报错规则-->
  <a-input v-model:value="formState.username" />  
</a-form-item>

<!--js 部分-->
<script lang="ts">  
import { defineComponent, reactive } from "vue";  
  
interface FormState {  
  username: string;  
  password: string;  
  remember: boolean;  
}  
export default defineComponent({  
  setup() {  
  //对应后端
    const formState = reactive<FormState>({  
      username: "",  
      password: "",  
      remember: true,  
    });  
    const onFinish = (values: any) => {  
      console.log("Success:", values);  
    };  
  
    const onFinishFailed = (errorInfo: any) => {  
      console.log("Failed:", errorInfo);  
    };  
    return {  
      formState,  
      onFinish,  
      onFinishFailed,  
    };  
  },  
});  
</script>
```

			3. js 部分存储动态数据
			4. 添加表单验证，查阅官方文档
```
:rules="[ 
{ required: true, message: '请输入密码' },//验证格式
{ min: 8, message: '密码不少于 8 位' },
]"
```
**难点：**联动 userLoginStore await 函数 fetchLoginUser 
```
const router = useRouter();
const loginUserStore = useLoginUserStore();

/**
 * 提交表单
 * @param data
 */
const handleSubmit = async () => {
  const res = await userLogin(form);
  // 登录成功，跳转到主页
  if (res.data.code === 0 && res.data.data) {
    await loginUserStore.fetchLoginUser();
    message.success("登录成功");
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登录失败");
  }
};

```
	3.提交表单
		1. 调用向后端发请求的函数
		2. 得到后端相应对象而非`promise`对象
		3. 将登录态保存入全局状态中，异步同步调用
		4. 留心 `fetchLoginUserStore`  
		5. 当心界面渲染错误 
[Cannot read properties of undefined (reading 'userAccount')](/archive/?q=Cannot%20read%20properties%20of%20undefined%20(reading%20'userAccount'))
		6. 引入表单组件，配置用户验证
		7. 编写表单提交后的验证操作
	4. 编写用户注册页面和用户管理页面
		1. 配置UserRegisterPage![UserRegisterPage.vue](/archive/?q=UserRegisterPage.vue)
	5. 编写用户登录页面和用户管理页面，引入 Ant Design 脚手架，留心 js 部分报错
2. 项目上线
