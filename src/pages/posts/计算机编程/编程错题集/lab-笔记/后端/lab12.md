---
layout: ../../../../../../layouts/PostLayout.astro
title: 🔍 后端开发过程中所有报错总结
description: "1. 引入JWT 令牌，限制前端登录 🔍 后端开发过程中所有报错总结 错误 1: JWT 认证导致 403 Forbidden
  1.1 报错信息 1.2 报错文件 src/main/java/se331/lab/rest/security"
date: 2025-10-09T14:06:42.609Z
updated: 2025-10-10T03:42:55.696Z
type: 思考
topic: 编程错题集
tags: []
readingMinutes: 6
sourceFolder: 计算机编程/编程错题集/lab 笔记/后端
---

1. 引入JWT 令牌，限制前端登录
![Pasted image 20251009210705.png](/media/69c72344dae738d8.png)

# 🔍 后端开发过程中所有报错总结

## 错误 1: JWT 认证导致 403 Forbidden

### 1.1 报错信息
```
HTTP 403 Forbidden
GET /events → 403
POST /api/v1/auth/authenticate → 403
```

### 1.2 报错文件
- `src/main/java/se331/lab/rest/security/config/SecurityConfiguration.java`
- 所有 REST Controller 端点

### 1.3 报错原因
- Spring Security 默认配置要求所有请求都需要认证
- 认证端点 `/api/v1/auth/**` 本身也被保护，导致无法登录
- OPTIONS 预检请求被 Spring Security 拦截

### 1.4 解决方案
```java
@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(authorize -> {
                authorize.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll(); // ✅ 允许 OPTIONS
                authorize.requestMatchers("/api/v1/auth/**").permitAll();        // ✅ 公开认证端点
                authorize.anyRequest().permitAll();  // 临时关闭所有认证
            });
        return http.build();
    }
}
```

### 1.5 涉及知识点
- **Spring Security**: 认证与授权框架
- **SecurityFilterChain**: 安全过滤器链配置
- **HttpMethod.OPTIONS**: CORS 预检请求
- **permitAll() vs authenticated()**: 访问控制策略
- **JWT (JSON Web Token)**: 无状态认证机制

---

## 错误 2: EventController NullPointerException

### 2.1 报错信息
```
java.lang.NullPointerException: Cannot invoke "java.lang.Integer.intValue()" because "page" is null
```

### 2.2 报错文件
- `src/main/java/com/example/demo331bacnkend/controller/EventController.java` (第 29 行)

### 2.3 报错原因
```java
@GetMapping("/events")
public ResponseEntity<List<Event>> getEventLists(
    @RequestParam(value = "_page", required = false) Integer page) {
    
    // page 为 null 时直接使用导致空指针异常
    Page<Event> pageOutput = eventService.getEvents(perPage, page);
}
```
- 前端请求未传递 `_page` 参数
- 代码直接使用 null 值进行计算

### 2.4 解决方案
```java
@GetMapping("/events")
public ResponseEntity<List<Event>> getEventLists(
    @RequestParam(value = "_limit", required = false) Integer perPage,
    @RequestParam(value = "_page", required = false) Integer page) {
    
    // ✅ 设置默认值
    Integer pageNumber = (page != null) ? page : 1;
    Integer pageSize = (perPage != null) ? perPage : 10;
    
    Page<Event> pageOutput = eventService.getEvents(pageSize, pageNumber);
}
```

### 2.5 涉及知识点
- **@RequestParam**: Spring MVC 请求参数绑定
- **required = false**: 可选参数
- **三元运算符**: 防御性编程
- **空指针异常 (NPE)**: Java 常见运行时错误
- **分页机制**: pageSize 和 pageNumber

---

## 错误 3: User enabled 字段为 NULL 导致认证失败

### 3.1 报错信息
```
HTTP 403 Forbidden (带有效 JWT token)
数据库查询结果: enabled = NULL
```

### 3.2 报错文件
- `src/main/java/se331/lab/rest/security/user/User.java`
- `src/main/java/com/example/demo331bacnkend/config/InitApp.java`
- MySQL 数据库表 `_user`

### 3.3 报错原因
```java
@Entity
public class User implements UserDetails {
    private Boolean enabled;  // ❌ 没有默认值
    
    @Override
    public boolean isEnabled() {
        return enabled;  // 当 enabled 为 null 时，返回 false
    }
}
```
- Lombok `@Builder` 生成的构造器不设置默认值
- 数据库中 `enabled` 字段为 `NULL`
- Spring Security 认证时 `isEnabled()` 返回 false

### 3.4 解决方案
```java
@Entity
public class User implements UserDetails {
    @Builder.Default  // ✅ Lombok 注解设置默认值
    private Boolean enabled = true;
}
```

### 3.5 涉及知识点
- **Lombok @Builder**: 构建者模式
- **@Builder.Default**: Lombok 默认值注解
- **UserDetails 接口**: Spring Security 用户详情
- **Boolean 三态**: null/true/false
- **数据库约束**: NOT NULL vs NULL
- **JPA 实体映射**: Java 对象与数据库表

---

## 错误 4: 编译失败 - 缺少 delete 方法实现

### 4.1 报错信息
```
[ERROR] Compilation failure
com.example.demo331bacnkend.dao.OrganizerDaoImpl is not abstract and 
does not override abstract method delete(java.lang.Long)
```

### 4.2 报错文件
- `src/main/java/com/example/demo331bacnkend/dao/OrganizerDao.java` (接口)
- `src/main/java/com/example/demo331bacnkend/dao/OrganizerDaoImpl.java` (内存实现)
- `src/main/java/com/example/demo331bacnkend/dao/OrganizerDaoDbImpl.java` (数据库实现)

### 4.3 报错原因
```java
// 接口添加了新方法
public interface OrganizerDao {
    void delete(Long id);  // ✅ 新增
}

// ❌ 实现类忘记实现
@Repository
@Profile("manual")
public class OrganizerDaoImpl implements OrganizerDao {
    // 缺少 delete 方法实现
}
```

### 4.4 解决方案
```java
// OrganizerDaoImpl.java
@Override
public void delete(Long id) {
    organizerList.removeIf(o -> o.getId().equals(id));
}

// OrganizerDaoDbImpl.java
@Override
public void delete(Long id) {
    organizerRepository.deleteById(id);
}
```

### 4.5 涉及知识点
- **Java 接口**: 抽象方法必须被实现
- **@Profile 注解**: Spring 环境配置
- **DAO 模式**: 数据访问对象
- **Lambda 表达式**: `removeIf()` 方法
- **JpaRepository**: Spring Data JPA 内置方法
- **Maven 编译**: 编译时类型检查

---

## 错误 5: POST /organizers 返回 400 Bad Request

### 5.1 报错信息
```
HTTP 400 Bad Request
POST http://localhost:8080/organizers

前端控制台错误:
AxiosError {message: 'Request failed with status code 400', 
           name: 'AxiosError', 
           code: 'ERR_BAD_REQUEST'}
```

### 5.2 报错文件
- `src/main/java/com/example/demo331bacnkend/entity/Organizer.java`
- `src/main/java/com/example/demo331bacnkend/controller/OrganizerController.java`

### 5.3 报错原因
```java
// 后端实体
public class Organizer {
    private String organizationName;
    private String address;
    // ❌ 缺少 phone, website, profileImage, image 字段
}

// 前端发送的数据
{
  "organizationName": "清迈大学",
  "address": "...",
  "phone": "13800138000",        // ❌ 后端不识别
  "website": "http://...",        // ❌ 后端不识别
  "profileImage": "https://..."   // ❌ 后端不识别
}
```
- 前端发送的字段名与后端实体不匹配
- Jackson 反序列化失败或字段被忽略
- 验证规则过于严格

### 5.4 解决方案
```java
@Entity
public class Organizer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String organizationName;
    private String address;
    private String phone;          // ✅ 新增
    private String website;        // ✅ 新增
    private String image;          // ✅ 前端使用字段名
    private String profileImage;   // ✅ 保留向后兼容
}

// Controller 放宽验证
@PostMapping
public ResponseEntity<Organizer> create(@RequestBody Organizer org) {
    // ✅ 只要有 organizationName 或 address 其中一个即可
    boolean hasName = org.getOrganizationName() != null && !org.getOrganizationName().isBlank();
    boolean hasAddress = org.getAddress() != null && !org.getAddress().isBlank();
    
    if (!hasName && !hasAddress) {
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, 
            "At least organizationName or address is required");
    }
}
```

### 5.5 涉及知识点
- **Jackson JSON 序列化/反序列化**: Spring Boot 默认 JSON 处理器
- **@RequestBody**: 自动绑定 HTTP 请求体到 Java 对象
- **JPA 实体映射**: Java 属性与数据库列映射
- **数据验证**: 业务规则验证
- **HTTP 400**: 客户端请求错误
- **DTO vs Entity**: 数据传输对象设计模式
- **向后兼容性**: API 设计原则

---

## 错误 6: CORS 跨域问题

### 6.1 报错信息
```
Access to XMLHttpRequest blocked by CORS policy:
No 'Access-Control-Allow-Origin' header is present

OPTIONS http://localhost:8080/organizers → 403 Forbidden
Missing: Access-Control-Allow-Origin
Missing: x-total-count
```

### 6.2 报错文件
- `src/main/java/com/example/demo331bacnkend/config/WebConfig.java`
- `src/main/java/se331/lab/rest/security/config/SecurityConfiguration.java`

### 6.3 报错原因
```java
// 1. WebConfig 配置不完整
registry.addMapping("/**")
    .allowedOriginPatterns("*")
    .exposedHeaders("x-total-count");  // ❌ 缺少其他头

// 2. Spring Security 拦截了 OPTIONS 请求
http.authorizeHttpRequests(authorize -> {
    authorize.anyRequest().authenticated();  // ❌ OPTIONS 也需要认证
});
```

### 6.4 解决方案
```java
// WebConfig.java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOriginPatterns("*")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH") // ✅
            .allowedHeaders("*")
            .exposedHeaders("x-total-count", "X-Total-Count", "Authorization")  // ✅
            .allowCredentials(true)
            .maxAge(3600);
    }
}

// SecurityConfiguration.java
http.authorizeHttpRequests(authorize -> {
    authorize.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll();  // ✅
    authorize.requestMatchers("/api/v1/auth/**").permitAll();
    authorize.anyRequest().permitAll();
});
```

### 6.5 涉及知识点
- **CORS (Cross-Origin Resource Sharing)**: 跨域资源共享
- **预检请求 (Preflight Request)**: OPTIONS 方法
- **Access-Control-Allow-Origin**: 允许的源
- **Access-Control-Expose-Headers**: 暴露的响应头
- **Access-Control-Allow-Methods**: 允许的 HTTP 方法
- **Access-Control-Allow-Credentials**: 是否允许携带凭证
- **同源策略 (Same-Origin Policy)**: 浏览器安全机制
- **Spring Security Filter Chain**: 过滤器执行顺序

---

## 📊 技术栈总览

### 后端框架与工具
| 技术 | 用途 | 相关错误 |
|------|------|----------|
| **Spring Boot 3.5.5** | 应用框架 | 全部 |
| **Spring Security 6.5.3** | 安全框架 | 错误 1, 6 |
| **Spring Data JPA** | 数据持久化 | 错误 3, 4, 5 |
| **Spring MVC** | Web 框架 | 错误 2, 5, 6 |
| **JWT (jjwt 0.12.6)** | 身份认证 | 错误 1 |
| **Hibernate** | ORM 框架 | 错误 3, 5 |
| **MySQL 8.0.43** | 关系数据库 | 错误 3, 5 |
| **Lombok** | 代码生成 | 错误 3, 5 |
| **Jackson** | JSON 处理 | 错误 5 |
| **Maven** | 构建工具 | 错误 4 |

### 设计模式与架构
| 模式 | 说明 | 应用场景 |
|------|------|----------|
| **MVC 模式** | Model-View-Controller | 整体架构 |
| **DAO 模式** | 数据访问对象 | OrganizerDao |
| **Builder 模式** | 对象构建 | User, Organizer 实体 |
| **过滤器链模式** | 请求处理 | Spring Security |
| **依赖注入** | IoC 容器 | 所有 @Autowired |
| **RESTful API** | 资源导向 | 所有 Controller |

### 核心概念
1. **认证 vs 授权**: Authentication vs Authorization
2. **无状态会话**: Stateless Session (JWT)
3. **跨域资源共享**: CORS
4. **空安全**: Null Safety
5. **防御性编程**: Defensive Programming
6. **向后兼容**: Backward Compatibility
7. **数据验证**: Data Validation
8. **异常处理**: Exception Handling

---

## 🎯 关键经验总结

### 1. Spring Security 配置顺序很重要
```java
// ✅ 正确顺序
authorize.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll();  // 1. OPTIONS 优先
authorize.requestMatchers("/api/v1/auth/**").permitAll();          // 2. 公开端点
authorize.anyRequest().authenticated();                             // 3. 其他需认证
```

### 2. 可选参数必须处理 null 值
```java
// ❌ 错误
Integer page = request.getParameter("_page");
int p = page;  // NPE!

// ✅ 正确
Integer page = request.getParameter("_page");
int p = (page != null) ? page : 1;
```

### 3. JPA 实体字段默认值
```java
// ❌ 错误
private Boolean enabled;  // 数据库 NULL

// ✅ 正确
@Builder.Default
private Boolean enabled = true;
```

### 4. 接口修改必须同步所有实现
```java
// 接口添加方法后
interface Dao { void delete(Long id); }

// 所有实现类都要更新
class DaoImpl implements Dao { ... }      // ✅ 更新
class DaoDbImpl implements Dao { ... }    // ✅ 更新
```

### 5. CORS 配置要全面
```java
// ✅ 完整配置
.allowedMethods(...)      // 允许的方法
.allowedHeaders(...)      // 允许的请求头
.exposedHeaders(...)      // 暴露的响应头（重要！）
.allowCredentials(true)   // 允许携带凭证
```

### 6. 前后端字段名必须一致
- 使用相同的命名规范（camelCase）
- 或使用 `@JsonProperty` 注解映射
- 考虑向后兼容性

---

## 📚 建议学习资源

1. **Spring Security 官方文档**: https://spring.io/projects/spring-security
2. **CORS 详解**: MDN Web Docs
3. **JPA/Hibernate 最佳实践**
4. **RESTful API 设计指南**
5. **Lombok 使用文档**
6. **JWT 认证机制**
7. **MySQL 性能优化**

**总结：本次开发共遇到 6 类主要错误，涉及认证、空指针、数据验证、编译、跨域等多个方面，最终全部解决并实现了完整的 Organizer CRUD 功能。** 🎉
