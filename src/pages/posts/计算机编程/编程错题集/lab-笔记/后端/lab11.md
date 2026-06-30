---
layout: ../../../../../../layouts/PostLayout.astro
title: 📋 完整错误总结报告
description: 1. firebase 需要在 key 界面进入 IAM 管理？ 2. 下载的.json 文件需要在后端 SpringBoot
  resource 目录下引用 3. 测试代码需要用到 api dog,要求启动后端 4. 在删减 mysql m
date: 2025-10-08T11:22:47.561Z
updated: 2026-06-25T01:52:38.456Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 5
sourceFolder: 计算机编程/编程错题集/lab 笔记/后端
---

1. firebase 需要在 key 界面进入 IAM 管理？
2. 下载的.json 文件需要在后端 SpringBoot resource 目录下引用
3. 测试代码需要用到 api dog,要求启动后端
4. 在删减 mysql maven 配置后需要同步修改所有 import ，避免报错
5. firebase key 需要放入.getignore 否则上传 github 的时候会报错
6. 前端代码需要在合适位置引用 firebase,`var`
[2025 年 10 月 8 日](/archive/?q=2025%20%E5%B9%B4%2010%20%E6%9C%88%208%20%E6%97%A5)
7. 编写前端图片上传窗口，注意核对功能
8. 处理跨域问题，注意前后端接口一致，分清前后端功能
9. 处理 JWT 拦截问题[lab12](/archive/?q=lab12)

## 跨域问题
![Pasted image 20251009210512.png](/media/e5bf5ebd452555a0.png)

```
> has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present…
```

你的前端在 `http://localhost:5174`，请求后端 `http://localhost:8080/events`。由于**端口不同**，浏览器把它们视为不同来源（origin），而后端返回的响应里**没有**`Access-Control-Allow-Origin` 响应头，所以被浏览器拦截。控制台的这句就说明了一切：

> has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present…

---

## 解决方式（二选一，或同时用）

### 方案 A：在 Spring Boot 开启 CORS

**全局放行（推荐开发期）**：

```java
// @Configuration
@Bean
public WebMvcConfigurer corsConfigurer() {
  return new WebMvcConfigurer() {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
      registry.addMapping("/**")
          .allowedOrigins("http://localhost:5174")
          .allowedMethods("GET","POST","PUT","DELETE","PATCH","OPTIONS")
          .allowedHeaders("*")
          .exposedHeaders("Location")
          .allowCredentials(true)
          .maxAge(3600);
    }
  };
}
```

如果项目用了 **Spring Security 6**，还需要：

```java
@Bean
SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
  http.cors(Customizer.withDefaults())
      .csrf(csrf -> csrf.disable());
  return http.build();
}

@Bean
CorsConfigurationSource corsConfigurationSource() {
  CorsConfiguration config = new CorsConfiguration();
  config.setAllowedOrigins(List.of("http://localhost:5174"));
  config.setAllowedMethods(List.of("GET","POST","PUT","DELETE","PATCH","OPTIONS"));
  config.setAllowedHeaders(List.of("*"));
  config.setAllowCredentials(true);

  UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
  source.registerCorsConfiguration("/**", config);
  return source;
}
```

或在单个控制器上：

```java
@CrossOrigin(origins = "http://localhost:5174", allowCredentials = "true")
@RestController
@RequestMapping("/events")
public class EventController { ... }
```

---

### 方案 B：前端通过 Vite 代理“同源化”

避免跨域，让浏览器以同源请求发起，由 Vite 代理到 8080：

**vite.config.ts**

```ts
export default defineConfig({
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
```

前端把所有请求从 `/events` 改为 `/api/events`（或在 axios 的 `baseURL` 用 `/api`）：

```ts
const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: false,
  headers: { Accept: 'application/json' }
});
```

---

## 小检查

- 后端确实已在 **8080** 启动（`curl http://localhost:8080/actuator/health` 或访问一个简单 GET）。
    
- 浏览器网络面板里，**预检请求（OPTIONS）** 也要成功（如果有自定义头/非简单方法）。
    
- 不要同时让代理和硬编码 `http://localhost:8080` 混用，避免误以为跨域仍在。
    

按以上其中一种方式配置后，报错就会消失。

## 前端报错
# 📋 完整错误总结报告

根据我们的对话历史，这是所有遇到的报错及解决方案的完整总结：

[1 tool called]

## 📊 错误总结完成！

我已经为你创建了完整的错误分析报告：**`ERROR_SUMMARY_REPORT.md`**

### 📋 总共 5 个主要错误：

| # | 错误名称 | 严重程度 | 状态 |
|---|----------|----------|------|
| 1 | 网络错误页面文字不可见 | 🟡 中等 | ✅ 已解决 |
| 2 | CORS 跨域请求被阻止 | 🔴 高 | ✅ 已解决 |
| 3 | Organizer 图片无法显示 | 🟡 中等 | ✅ 已解决 |
| 4 | 创建 Organizer 返回 400 | 🔴 高 | ⏳ 需后端配合 |
| 5 | 端口冲突问题 | 🟢 低 | ✅ 已解决 |

---

## 🎯 快速索引

### 错误 #1: 网络错误页面文字不可见
- **原因**: CSS 样式缺失，深色文字在深色背景上
- **技术**: Vue SFC, CSS, backdrop-filter, 渐变效果
- **解决**: 添加完整样式和动画

### 错误 #2: CORS 跨域被阻止 ⭐
- **原因**: 前端 5174，后端 8080，不同端口触发 CORS
- **技术**: Spring Security, CORS, HTTP OPTIONS, 预检请求
- **解决**: 后端配置 `CorsConfigurationSource`

### 错误 #3: 图片无法显示
- **原因**: 后端 Entity 缺少 `image` 字段
- **技术**: JPA Entity, 数据库 Schema, 图片跨域
- **解决**: 添加 `image` 字段和数据库列

### 错误 #4: 400 Bad Request
- **原因**: 后端字段不匹配或验证失败
- **技术**: Bean Validation, 异常处理, 数据绑定
- **解决**: 确保前后端字段一致，添加日志

### 错误 #5: 端口冲突
- **原因**: 多个开发服务器运行
- **技术**: 进程管理, Vite 配置, 端口监听
- **解决**: 杀死占用进程或使用其他端口

---

## 💡 核心知识点

### Web 技术
- ✅ CORS 机制和配置
- ✅ HTTP 状态码
- ✅ RESTful API
- ✅ 同源策略

### Spring Boot
- ✅ Spring Security
- ✅ CORS 配置
- ✅ JPA Entity 映射
- ✅ 异常处理

### Vue 3
- ✅ 组件样式
- ✅ 事件处理
- ✅ 条件渲染
- ✅ TypeScript 集成

### 调试技能
- ✅ Chrome DevTools
- ✅ Console 日志
- ✅ Network 分析
- ✅ 错误追踪

---
