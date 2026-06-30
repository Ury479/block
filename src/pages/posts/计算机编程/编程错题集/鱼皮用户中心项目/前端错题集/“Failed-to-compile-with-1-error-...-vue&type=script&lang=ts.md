---
layout: ../../../../../../layouts/PostLayout.astro
title: 1) 是否由 `await loginUserStore.fetchLoginUser()` 引起？
description: 短答：现在这个“Failed to compile with 1 error …
  ?vue&type=script&lang=ts”更像 编译期（TypeScript/导入路径） 问题，不是 await
  loginUserStore.fet
date: 2025-08-09T09:01:15.518Z
updated: 2025-08-09T09:01:27.639Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 4
sourceFolder: 计算机编程/编程错题集/鱼皮用户中心项目/前端错题集
---

短答：现在这个“Failed to compile with 1 error … ?vue&type=script&lang=ts”更像**编译期（TypeScript/导入路径）**问题，不是 `await loginUserStore.fetchLoginUser()` 的运行时报错。Axios 或 `getCurrentUser` 的网络问题只会在**运行时**抛错，不会阻止**编译**。

下面按你要的 3 点来：

---

# 1) 是否由 `await loginUserStore.fetchLoginUser()` 引起？

不是。

- 这条报错发生在 **编译阶段**（`?vue&type=script&lang=ts`），通常是**导入路径、导出名、语法或类型**问题。
    
- `await …` 在 `async` 函数体里是合法的，除非你把它放在顶层（`<script setup>` 外或函数外），否则不会触发编译错误。
    

快速自检：在 `UserLoginPage.vue` 里确认这三件事：

```ts
// 顶部必须都有且拼写路径完全一致（见第2点）
import { useLoginUserStore } from "@/stores/userLoginStore";
const loginUserStore = useLoginUserStore();

// await 必须在 async 函数体内
const handleSubmit = async (values: any) => {
  await loginUserStore.fetchLoginUser();
};
```

---

# 2) 是否由 `getCurrentUser` / Axios 导致 await 抛错？

这类问题只会在**运行时**报 “Network Error / Uncaught (in promise) …”，不会让 **编译失败**。  
不过你仍然应该给它加 `try/catch`，防止运行期未捕获异常影响 UI。

建议把 `getCurrentUser` 用到的这几处再核对一下（尤其是大小写与路径）：

- `src/services/userService.ts` 是否**存在**且**导出了** `getCurrentUser` 与 `userLogin`？
    
- 你的 **请求基地址** 与 **代理**是否一致：
    
    - 如果 `vue.config.ts` 里把 `"/api"` 代理到了 `http://localhost:3000`，那 `getCurrentUser` 里就要请求 `"/api/user_current"`（或你的实际接口路径），而 **`request.ts` 别再手写 `baseURL: http://localhost:3000`**，否则会双重前缀。
        
- `request.ts` 是否 `export default myAxios`，并被 `userService.ts` 正确 `import myAxios from "@/request"`。
    

---

# 3) 是否需要改 `userLoginStore.ts` 的 `fetchLoginUser`？

需要做**健壮性**增强（不改变你已有的“正常逻辑”）——补上 `try/catch`、返回布尔值、兜底一个稳定形状的对象，避免 UI 访问到 `undefined` 字段：

```ts
// src/stores/userLoginStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { getCurrentUser } from "@/services/userService";

export const useLoginUserStore = defineStore("loginUser", () => {
  // 默认给出稳定对象，避免模板里访问空值时报错
  const loginUser = ref<any>({
    id: undefined,
    username: "未登录",
    userAccount: "",
    avatarUrl: "",
    userRole: "",
    createTime: "",
  });

  // 请求当前登录用户信息（保留你的原有逻辑，只做增强）
  async function fetchLoginUser(): Promise<boolean> {
    try {
      const res = await getCurrentUser();
      if (res?.data?.code === 0 && res.data.data) {
        loginUser.value = res.data.data;
        return true;
      }
      // 未登录 / 非0码时的兜底（不再用 setTimeout，直接给稳定对象）
      loginUser.value = { ...loginUser.value, username: "测试用户", id: 1 };
      return false;
    } catch (e) {
      // 网络异常兜底
      loginUser.value = { ...loginUser.value, username: "测试用户", id: 1 };
      return false;
    }
  }

  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser ?? loginUser.value;
  }

  return { loginUser, setLoginUser, fetchLoginUser };
});
```

---

# 你现在最可能的编译错误来源（请逐条对照）

1. **导入路径不一致**
    
    - 之前你有过 `@/store/userLoginStore` 和 `@/stores/userLoginStore` 混用。请统一到**实际目录名**（多数项目是 `src/stores/userLoginStore.ts`）。
        
    - 同理检查 `@/services/userService` 是否真有该文件并导出 `userLogin` / `getCurrentUser`。
        
2. **导出名拼写**
    
    - `useLoginUserStore` 必须和 `defineStore("loginUser", …)` 的**导出函数名**一致。不要在某处写成 `useUserLoginStore` 或别名。
        
3. **`await` 是否放在函数体外**
    
    - 确保 `await loginUserStore.fetchLoginUser()` 只出现在 `async function` 内（例如 `handleSubmit` 里），而不是 `<script>` 顶层或 `setup()` 顶层里随手写了一个 `await`。
        
4. **服务层是否正确使用 axios 实例**
    
    - `userService.ts` 里应该是：
        
        ```ts
        import myAxios from "@/request";
        
        export const getCurrentUser = () =>
          myAxios.get("/api/user_current"); // 路径与你 mock 保持一致
        export const userLogin = (data:any) =>
          myAxios.post("/api/user/login", data);
        ```
        
    - `request.ts` 里不要又写 `baseURL: "http://localhost:3000/api"`（会和代理冲突）。如果你不用代理，反过来把 `baseURL` 设为 `http://localhost:3000`，然后把服务里的路径去掉 `/api` 前缀。
        

---

# 给 `UserLoginPage.vue` 的调用示例（不改你原有结构）

```ts
<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import { userLogin } from "@/services/userService";
import { useLoginUserStore } from "@/stores/userLoginStore"; // 路径统一

const router = useRouter();
const loginUserStore = useLoginUserStore();

const form = reactive({
  userAccount: "",
  password: "",
});

const handleSubmit = async (values: any) => {
  try {
    const res = await userLogin(values);
    if (res?.data?.code === 0 && res.data.data) {
      const ok = await loginUserStore.fetchLoginUser(); // 这里await没问题
      message.success("登录成功");
      router.push({ path: "/", replace: true });
    } else {
      message.error(res?.data?.message ?? "登录失败");
    }
  } catch (e) {
    message.error("网络异常，请稍后重试");
  }
};
</script>
```

---

如果你把以上 4 点逐条对齐，**编译期**的报错应会消失；随后若还有 **运行期**的 “Network Error”，那再对照代理与接口路径即可。需要的话把你的 `userService.ts` 和 `request.ts` 两个文件贴出来，我可以帮你逐行对齐到你当前的 `vue.config.ts` / mock 路由。
