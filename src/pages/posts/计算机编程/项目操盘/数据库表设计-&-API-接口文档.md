---
layout: ../../../../layouts/PostLayout.astro
title: 分佣云库存电商系统（S2B2C）MVP 接口文档（面向开发）
description: "text 商品 → 下单 → 支付 → notify → 预估分佣 → 确认收货 → 正式分佣 → 查询 text pending
  → paid → commission done text /api http Authorization:"
date: 2026-04-08T09:24:25.980Z
updated: 2026-04-08T09:24:29.197Z
type: 文稿
topic: 项目操盘
tags: []
readingMinutes: 6
sourceFolder: 计算机编程/项目操盘
---

````markdown
# 分佣云库存电商系统（S2B2C）MVP 接口文档（面向开发）

> 适用范围：MVP 第一阶段  
> 目标：打通 **用户 → 商品 → 下单 → 支付 → notify → 一级分佣 → 查询** 闭环  
> 适用对象：后端开发、前端开发、联调测试、后台开发

---

# 1. 文档说明

## 1.1 项目目标

在最短时间内上线一个可运行的微信小程序分销电商系统，完成以下最小闭环：

```text
商品 → 下单 → 支付 → notify → 预估分佣 → 确认收货 → 正式分佣 → 查询
````

---

## 1.2 MVP 范围

本阶段只做以下模块：

- 用户
    
- 商品
    
- 订单
    
- 支付
    
- 一级分佣
    
- 后台查询
    

---

## 1.3 本阶段不引入

以下能力明确不在 MVP 范围内：

- 购物车落库
    
- SKU 表
    
- 多级分销
    
- 优惠券
    
- 拼团
    
- 提现
    

说明：

- 商品详情页可跳转前端本地临时购物车，不落库
    
- 商品按单规格处理，不拆 SKU 表
    
- 分佣只做一级分佣
    

---

# 2. 统一业务口径

## 2.1 订单状态 `orders.status`

订单状态只表示**订单生命周期**，不混入支付、佣金内部状态。

|状态值|含义|
|---|---|
|`pending`|待支付|
|`paid`|已支付|
|`commission_done`|已完成分佣处理|
|`closed`|已关闭|
|`refunded`|已退款|

主链路口径统一为：

```text
pending → paid → commission_done
```

---

## 2.2 支付状态 `payment_record.pay_status`

支付状态只表示**支付生命周期**。

|状态值|含义|
|---|---|
|`pending`|待支付 / 待回调|
|`success`|支付成功|
|`failed`|支付失败|

---

## 2.3 佣金状态 `commission.status`

佣金状态只表示**佣金生命周期**。

|状态值|含义|
|---|---|
|`estimated`|预估分佣，支付成功后生成|
|`settled`|正式分佣，确认收货后转正|
|`cancelled`|已取消|
|`reversed`|已回滚（预留，MVP 可不启用）|

---

## 2.4 分佣触发时机统一

### 第一步：支付回调成功后

触发以下动作：

1. 更新订单状态为 `paid`
    
2. 更新支付记录状态为 `success`
    
3. 根据一级分佣规则生成佣金记录，状态为 `estimated`
    

### 第二步：确认收货后

触发以下动作：

1. 将佣金记录状态从 `estimated` 更新为 `settled`
    
2. 将订单状态从 `paid` 更新为 `commission_done`
    

---

# 3. 设计约束

## 3.1 必须遵守

- `orders.status` 只表示订单生命周期
    
- `payment_record.pay_status` 只表示支付生命周期
    
- `commission.status` 只表示佣金生命周期
    
- 分佣触发时机统一为 `notify` 成功后生成预估分佣
    
- 正式分佣在确认收货后完成
    
- 只做一级分佣
    
- 只保留单规格商品结构
    

---

## 3.2 明确禁止

### ❌ 订单接口混入支付字段

订单接口不直接承担微信支付原始参数返回职责，支付参数应由支付接口返回。

### ❌ 佣金接口混入订单状态控制

佣金接口只负责查询佣金，不负责修改订单状态。

### ❌ 重复快照

订单商品明细只保存必要商品快照，不重复保存用户快照、上级信息快照、商品主表冗余字段。

---

# 4. 表与模块总映射

|模块|核心表|说明|
|---|---|---|
|用户|`user`|微信登录、用户信息、上下级关系|
|商品|`product`|商品列表、商品详情、单规格价格库存|
|订单|`orders`、`order_item`|订单主表、订单商品快照|
|支付|`payment_record`|统一下单记录、支付状态、notify 原始报文|
|分佣|`commission`|一级分佣记录、预估/正式状态|
|后台|依赖以上表|不额外建后台业务表|

---

# 5. 数据库表设计与字段映射总表

---

## 5.1 用户表 `user`

### 5.1.1 表说明

用于存储微信登录用户信息及上下级绑定关系。

### 5.1.2 字段定义

|字段名|类型|是否必填|说明|
|---|---|--:|---|
|`id`|bigint|是|用户主键|
|`openid`|varchar(64)|是|微信 openid，唯一|
|`nickname`|varchar(100)|否|用户昵称|
|`avatar`|varchar(255)|否|用户头像|
|`parent_id`|bigint|否|上级用户 ID|
|`created_at`|datetime|是|创建时间|
|`updated_at`|datetime|是|更新时间|

### 5.1.3 对外接口字段映射

|数据库字段|接口字段|是否直接对外|说明|
|---|---|--:|---|
|`id`|`userId`|是|用户 ID|
|`openid`|-|否|后端内部字段|
|`nickname`|`nickname`|是|昵称|
|`avatar`|`avatar`|是|头像|
|`parent_id`|`parentId`|是|上级用户 ID|
|`created_at`|`createdAt`|是|创建时间|
|`updated_at`|`updatedAt`|否|后台/内部使用|

---

## 5.2 商品表 `product`

### 5.2.1 表说明

用于存储单规格商品信息，不拆 SKU。

### 5.2.2 字段定义

|字段名|类型|是否必填|说明|
|---|---|--:|---|
|`id`|bigint|是|商品主键|
|`name`|varchar(200)|是|商品名称|
|`price`|decimal(10,2)|是|商品单价|
|`stock`|int|是|库存|
|`image`|varchar(255)|否|商品主图|
|`status`|varchar(20)|是|商品状态，如 `on_sale` / `off_sale`|
|`created_at`|datetime|是|创建时间|
|`updated_at`|datetime|是|更新时间|

### 5.2.3 对外接口字段映射

|数据库字段|接口字段|是否直接对外|说明|
|---|---|--:|---|
|`id`|`productId`|是|商品 ID|
|`name`|`name`|是|商品名称|
|`price`|`price`|是|单价|
|`stock`|`stock`|是|库存|
|`image`|`image`|是|商品图片|
|`status`|`status`|是|商品状态|
|`created_at`|`createdAt`|后台可用|创建时间|
|`updated_at`|`updatedAt`|后台可用|更新时间|

---

## 5.3 订单表 `orders`

### 5.3.1 表说明

用于存储订单主信息，只表示订单生命周期。

### 5.3.2 字段定义

|字段名|类型|是否必填|说明|
|---|---|--:|---|
|`id`|bigint|是|订单主键|
|`order_no`|varchar(64)|是|业务订单号，唯一|
|`user_id`|bigint|是|下单用户 ID|
|`total_amount`|decimal(10,2)|是|订单总金额|
|`payable_amount`|decimal(10,2)|是|实际应付金额|
|`status`|varchar(32)|是|订单状态|
|`created_at`|datetime|是|创建时间|
|`paid_at`|datetime|否|支付时间|
|`updated_at`|datetime|是|更新时间|

### 5.3.3 状态说明

|状态值|含义|
|---|---|
|`pending`|待支付|
|`paid`|已支付|
|`commission_done`|已完成分佣处理|
|`closed`|已关闭|
|`refunded`|已退款|

### 5.3.4 对外接口字段映射

|数据库字段|接口字段|是否直接对外|说明|
|---|---|--:|---|
|`id`|`orderId`|是|订单 ID|
|`order_no`|`orderNo`|是|订单号|
|`user_id`|-|否|从登录态识别|
|`total_amount`|`totalAmount`|是|总金额|
|`payable_amount`|`payableAmount`|是|应付金额|
|`status`|`status`|是|订单状态|
|`created_at`|`createdAt`|是|创建时间|
|`paid_at`|`paidAt`|是|支付时间|
|`updated_at`|`updatedAt`|后台可用|更新时间|

---

## 5.4 订单明细表 `order_item`

### 5.4.1 表说明

用于存储下单时的商品快照，仅保存必要快照字段。

### 5.4.2 字段定义

|字段名|类型|是否必填|说明|
|---|---|--:|---|
|`id`|bigint|是|主键|
|`order_id`|bigint|是|所属订单 ID|
|`product_id`|bigint|是|商品 ID|
|`product_name`|varchar(200)|是|商品名称快照|
|`product_image`|varchar(255)|否|商品图片快照|
|`price`|decimal(10,2)|是|下单单价快照|
|`quantity`|int|是|购买数量|
|`subtotal_amount`|decimal(10,2)|是|小计金额|

### 5.4.3 对外接口字段映射

|数据库字段|接口字段|是否直接对外|说明|
|---|---|--:|---|
|`id`|`itemId`|是|明细 ID|
|`order_id`|-|否|订单内聚合使用|
|`product_id`|`productId`|是|商品 ID|
|`product_name`|`productName`|是|商品名快照|
|`product_image`|`productImage`|是|商品图快照|
|`price`|`price`|是|单价快照|
|`quantity`|`quantity`|是|数量|
|`subtotal_amount`|`subtotalAmount`|是|小计|

---

## 5.5 支付记录表 `payment_record`

### 5.5.1 表说明

用于存储支付创建记录、支付状态、微信回调报文，避免反复依赖订单表排查 notify。

### 5.5.2 字段定义

|字段名|类型|是否必填|说明|
|---|---|--:|---|
|`id`|bigint|是|主键|
|`order_id`|bigint|是|关联订单 ID|
|`pay_no`|varchar(64)|是|支付单号，唯一|
|`channel`|varchar(32)|是|支付渠道，如 `wxpay`|
|`amount`|decimal(10,2)|是|支付金额|
|`pay_status`|varchar(20)|是|支付状态|
|`transaction_id`|varchar(128)|否|微信交易号|
|`notify_raw`|text|否|notify 原始报文|
|`notified_at`|datetime|否|回调时间|
|`created_at`|datetime|是|创建时间|
|`updated_at`|datetime|是|更新时间|

### 5.5.3 状态说明

|状态值|含义|
|---|---|
|`pending`|待支付 / 待回调|
|`success`|支付成功|
|`failed`|支付失败|

### 5.5.4 对外接口字段映射

|数据库字段|接口字段|是否直接对外|说明|
|---|---|--:|---|
|`id`|`paymentId`|后台可用|支付记录 ID|
|`order_id`|`orderId`|是|关联订单 ID|
|`pay_no`|`payNo`|是|支付单号|
|`channel`|`channel`|是|支付渠道|
|`amount`|`amount`|是|支付金额|
|`pay_status`|`payStatus`|是|支付状态|
|`transaction_id`|`transactionId`|后台可用|微信交易号|
|`notify_raw`|-|否|不对前端暴露|
|`notified_at`|`notifiedAt`|后台可用|回调时间|
|`created_at`|`createdAt`|后台可用|创建时间|
|`updated_at`|`updatedAt`|后台可用|更新时间|

---

## 5.6 佣金表 `commission`

### 5.6.1 表说明

用于存储一级分佣记录，区分预估分佣与正式分佣。

### 5.6.2 字段定义

|字段名|类型|是否必填|说明|
|---|---|--:|---|
|`id`|bigint|是|主键|
|`user_id`|bigint|是|佣金归属用户 ID|
|`order_id`|bigint|是|来源订单 ID|
|`buyer_user_id`|bigint|是|下单用户 ID|
|`amount`|decimal(10,2)|是|佣金金额|
|`rate`|decimal(5,4)|是|佣金比例|
|`status`|varchar(20)|是|佣金状态|
|`created_at`|datetime|是|创建时间|
|`settled_at`|datetime|否|正式结算时间|

### 5.6.3 状态说明

|状态值|含义|
|---|---|
|`estimated`|预估分佣|
|`settled`|正式分佣|
|`cancelled`|已取消|
|`reversed`|已回滚（预留）|

### 5.6.4 对外接口字段映射

|数据库字段|接口字段|是否直接对外|说明|
|---|---|--:|---|
|`id`|`commissionId`|是|佣金记录 ID|
|`user_id`|`beneficiaryUserId` / `userId`|后台可用|佣金归属人|
|`order_id`|`orderId`|是|来源订单|
|`buyer_user_id`|`buyerUserId`|是|下单用户|
|`amount`|`amount`|是|佣金金额|
|`rate`|`rate`|是|佣金比例|
|`status`|`status`|是|佣金状态|
|`created_at`|`createdAt`|是|创建时间|
|`settled_at`|`settledAt`|是|结算时间|

---

# 6. 接口设计规范

## 6.1 接口前缀

```text
/api
```

---

## 6.2 认证方式

除登录接口、支付回调接口外，其余接口默认要求携带登录态：

```http
Authorization: Bearer <token>
```

---

## 6.3 通用响应格式

```json
{
  "code": 0,
  "message": "ok",
  "data": {}
}
```

### 响应字段说明

|字段|类型|说明|
|---|---|---|
|`code`|int|业务状态码，`0` 表示成功|
|`message`|string|响应消息|
|`data`|object/array/null|响应数据|

---

# 7. API 清单总览

|模块|方法|路径|说明|
|---|---|---|---|
|用户|`POST`|`/api/login`|微信登录|
|用户|`GET`|`/api/users/me`|当前用户信息|
|用户|`POST`|`/api/users/bind-parent`|绑定上级|
|商品|`GET`|`/api/products`|商品列表|
|商品|`GET`|`/api/products/:id`|商品详情|
|订单|`POST`|`/api/orders`|创建订单|
|订单|`GET`|`/api/orders`|订单列表|
|订单|`GET`|`/api/orders/:id`|订单详情|
|订单|`POST`|`/api/orders/:id/confirm`|确认收货|
|支付|`POST`|`/api/pay/create`|创建支付单|
|支付|`POST`|`/api/pay/notify`|微信支付回调|
|分佣|`GET`|`/api/commission`|我的佣金列表|
|分佣|`GET`|`/api/commission/summary`|我的佣金汇总|
|后台|`GET`|`/api/admin/orders`|后台订单列表|
|后台|`GET`|`/api/admin/users`|后台用户列表|
|后台|`GET`|`/api/admin/commissions`|后台佣金列表|
|后台|`GET`|`/api/admin/payments`|后台支付记录列表|

---

# 8. 详细接口文档

---

## 8.1 用户模块

### 8.1.1 微信登录

#### 接口信息

```http
POST /api/login
```

#### 接口说明

小程序调用 `wx.login` 获取 `code`，后端换取 `openid`，查询或创建用户，并返回登录态。

#### 请求参数

|字段|类型|必填|来源|数据库映射|说明|
|---|---|--:|---|---|---|
|`code`|string|是|小程序|-|微信登录 code|
|`nickname`|string|否|前端授权|`user.nickname`|昵称|
|`avatar`|string|否|前端授权|`user.avatar`|头像|
|`parentId`|bigint|否|邀请链路|`user.parent_id`|首次绑定可传|

#### 请求示例

```json
{
  "code": "wx-login-code",
  "nickname": "Tom",
  "avatar": "https://xxx/avatar.png",
  "parentId": 10001
}
```

#### 处理逻辑

1. 用 `code` 调微信接口换取 `openid`
    
2. 按 `openid` 查询 `user`
    
3. 不存在则创建
    
4. 存在则更新昵称头像
    
5. 若当前用户无 `parent_id` 且传入了 `parentId`，则绑定
    
6. 返回 token 及当前用户信息
    

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`token`|string|生成|
|`userId`|bigint|`user.id`|
|`nickname`|string|`user.nickname`|
|`avatar`|string|`user.avatar`|
|`parentId`|bigint/null|`user.parent_id`|
|`isNewUser`|boolean|计算字段|

#### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "token": "jwt-token",
    "userId": 10001,
    "nickname": "Tom",
    "avatar": "https://xxx/avatar.png",
    "parentId": 9999,
    "isNewUser": false
  }
}
```

---

### 8.1.2 当前用户信息

#### 接口信息

```http
GET /api/users/me
```

#### 接口说明

获取当前登录用户信息。

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`userId`|bigint|`user.id`|
|`nickname`|string|`user.nickname`|
|`avatar`|string|`user.avatar`|
|`parentId`|bigint/null|`user.parent_id`|
|`createdAt`|string|`user.created_at`|

#### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "userId": 10001,
    "nickname": "Tom",
    "avatar": "https://xxx/avatar.png",
    "parentId": 9999,
    "createdAt": "2026-04-08 12:00:00"
  }
}
```

---

### 8.1.3 绑定上级

#### 接口信息

```http
POST /api/users/bind-parent
```

#### 接口说明

单独绑定上级关系，只允许首次绑定。

#### 请求参数

|字段|类型|必填|数据库映射|说明|
|---|---|--:|---|---|
|`parentId`|bigint|是|`user.parent_id`|上级用户 ID|

#### 请求示例

```json
{
  "parentId": 9999
}
```

#### 约束

- 只能绑定一次
    
- 不能绑定自己
    
- 当前用户已有 `parent_id` 时不可重复绑定
    

#### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "userId": 10001,
    "parentId": 9999
  }
}
```

---

## 8.2 商品模块

### 8.2.1 商品列表

#### 接口信息

```http
GET /api/products
```

#### 请求参数

|参数|类型|必填|说明|
|---|---|--:|---|
|`page`|int|否|页码|
|`pageSize`|int|否|每页数量|
|`status`|string|否|默认查询上架商品|

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`productId`|bigint|`product.id`|
|`name`|string|`product.name`|
|`price`|number|`product.price`|
|`stock`|int|`product.stock`|
|`image`|string|`product.image`|
|`status`|string|`product.status`|

#### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "list": [
      {
        "productId": 1,
        "name": "商品A",
        "price": 399.00,
        "stock": 100,
        "image": "https://xxx/product-a.png",
        "status": "on_sale"
      }
    ],
    "page": 1,
    "pageSize": 10,
    "total": 1
  }
}
```

---

### 8.2.2 商品详情

#### 接口信息

```http
GET /api/products/:id
```

#### 路径参数

|参数|类型|说明|
|---|---|---|
|`id`|bigint|商品 ID|

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`productId`|bigint|`product.id`|
|`name`|string|`product.name`|
|`price`|number|`product.price`|
|`stock`|int|`product.stock`|
|`image`|string|`product.image`|
|`status`|string|`product.status`|
|`createdAt`|string|`product.created_at`|

#### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "productId": 1,
    "name": "商品A",
    "price": 399.00,
    "stock": 100,
    "image": "https://xxx/product-a.png",
    "status": "on_sale",
    "createdAt": "2026-04-08 12:00:00"
  }
}
```

---

## 8.3 订单模块

### 8.3.1 创建订单

#### 接口信息

```http
POST /api/orders
```

#### 接口说明

不做购物车落库，前端直接提交本地临时购物车数据，后端写入订单主表和订单明细快照。

#### 请求参数

|字段|类型|必填|数据库映射|说明|
|---|---|--:|---|---|
|`items`|array|是|`order_item.*`|下单商品列表|
|`items[].productId`|bigint|是|`order_item.product_id`|商品 ID|
|`items[].quantity`|int|是|`order_item.quantity`|数量|

#### 请求示例

```json
{
  "items": [
    {
      "productId": 1,
      "quantity": 2
    }
  ]
}
```

#### 后端写入逻辑

- 查询 `product` 获取商品信息
    
- 生成订单号 `orders.order_no`
    
- 写入 `orders`
    
- 写入 `order_item` 商品快照：
    
    - `product_name`
        
    - `product_image`
        
    - `price`
        
    - `quantity`
        
    - `subtotal_amount`
        
- 初始状态：`orders.status = pending`
    

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`orderId`|bigint|`orders.id`|
|`orderNo`|string|`orders.order_no`|
|`totalAmount`|number|`orders.total_amount`|
|`payableAmount`|number|`orders.payable_amount`|
|`status`|string|`orders.status`|
|`createdAt`|string|`orders.created_at`|
|`items`|array|`order_item`|

#### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "orderId": 20001,
    "orderNo": "ORD202604080001",
    "totalAmount": 798.00,
    "payableAmount": 798.00,
    "status": "pending",
    "createdAt": "2026-04-08 12:00:00",
    "items": [
      {
        "itemId": 1,
        "productId": 1,
        "productName": "商品A",
        "productImage": "https://xxx/product-a.png",
        "price": 399.00,
        "quantity": 2,
        "subtotalAmount": 798.00
      }
    ]
  }
}
```

---

### 8.3.2 订单列表

#### 接口信息

```http
GET /api/orders
```

#### 请求参数

|参数|类型|必填|说明|
|---|---|--:|---|
|`status`|string|否|订单状态|
|`page`|int|否|页码|
|`pageSize`|int|否|每页数量|

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`orderId`|bigint|`orders.id`|
|`orderNo`|string|`orders.order_no`|
|`totalAmount`|number|`orders.total_amount`|
|`payableAmount`|number|`orders.payable_amount`|
|`status`|string|`orders.status`|
|`createdAt`|string|`orders.created_at`|
|`paidAt`|string/null|`orders.paid_at`|

---

### 8.3.3 订单详情

#### 接口信息

```http
GET /api/orders/:id
```

#### 路径参数

|参数|类型|说明|
|---|---|---|
|`id`|bigint|订单 ID|

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`orderId`|bigint|`orders.id`|
|`orderNo`|string|`orders.order_no`|
|`totalAmount`|number|`orders.total_amount`|
|`payableAmount`|number|`orders.payable_amount`|
|`status`|string|`orders.status`|
|`createdAt`|string|`orders.created_at`|
|`paidAt`|string/null|`orders.paid_at`|
|`items`|array|`order_item`|
|`estimatedCommission`|number/null|`commission.amount where status=estimated`|
|`settledCommission`|number/null|`commission.amount where status=settled`|

#### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "orderId": 20001,
    "orderNo": "ORD202604080001",
    "totalAmount": 798.00,
    "payableAmount": 798.00,
    "status": "paid",
    "createdAt": "2026-04-08 12:00:00",
    "paidAt": "2026-04-08 12:10:00",
    "items": [
      {
        "itemId": 1,
        "productId": 1,
        "productName": "商品A",
        "productImage": "https://xxx/product-a.png",
        "price": 399.00,
        "quantity": 2,
        "subtotalAmount": 798.00
      }
    ],
    "estimatedCommission": 79.80,
    "settledCommission": null
  }
}
```

---

### 8.3.4 确认收货

#### 接口信息

```http
POST /api/orders/:id/confirm
```

#### 接口说明

确认收货后：

- 订单状态从 `paid` → `commission_done`
    
- 佣金状态从 `estimated` → `settled`
    

#### 路径参数

|参数|类型|说明|
|---|---|---|
|`id`|bigint|订单 ID|

#### 请求体

无

#### 后端处理逻辑

1. 校验订单归属
    
2. 校验订单当前状态必须为 `paid`
    
3. 查询该订单对应佣金记录
    
4. 将佣金状态改为 `settled`
    
5. 写入 `commission.settled_at`
    
6. 更新订单状态为 `commission_done`
    

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`orderId`|bigint|`orders.id`|
|`status`|string|`orders.status`|
|`commissionStatus`|string|`commission.status`|
|`settledAt`|string|`commission.settled_at`|

#### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "orderId": 20001,
    "status": "commission_done",
    "commissionStatus": "settled",
    "settledAt": "2026-04-09 12:00:00"
  }
}
```

---

## 8.4 支付模块

### 8.4.1 创建支付单

#### 接口信息

```http
POST /api/pay/create
```

#### 接口说明

根据订单创建支付记录，并返回前端调起微信支付所需参数。

#### 请求参数

|字段|类型|必填|数据库映射|说明|
|---|---|--:|---|---|
|`orderId`|bigint|是|`payment_record.order_id`|订单 ID|

#### 请求示例

```json
{
  "orderId": 20001
}
```

#### 后端处理逻辑

1. 查询订单，校验归属和状态
    
2. 校验订单状态必须为 `pending`
    
3. 创建 `payment_record`
    
4. 写入：
    
    - `pay_no`
        
    - `channel = wxpay`
        
    - `amount = orders.payable_amount`
        
    - `pay_status = pending`
        
5. 调微信统一下单
    
6. 返回支付参数
    

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`orderId`|bigint|`payment_record.order_id`|
|`payNo`|string|`payment_record.pay_no`|
|`channel`|string|`payment_record.channel`|
|`amount`|number|`payment_record.amount`|
|`payStatus`|string|`payment_record.pay_status`|
|`paymentParams`|object|微信统一下单返回参数|

#### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "orderId": 20001,
    "payNo": "PAY202604080001",
    "channel": "wxpay",
    "amount": 798.00,
    "payStatus": "pending",
    "paymentParams": {
      "timeStamp": "1712558400",
      "nonceStr": "abc123",
      "package": "prepay_id=wx123456",
      "signType": "RSA",
      "paySign": "xxxx"
    }
  }
}
```

---

### 8.4.2 微信支付回调

#### 接口信息

```http
POST /api/pay/notify
```

#### 接口说明

该接口由微信服务端调用，不提供给前端直接调用。

#### 请求体

微信原始回调报文。

#### 后端处理逻辑

### 第一步：更新支付记录

|字段|写入值|
|---|---|
|`payment_record.pay_status`|`success`|
|`payment_record.transaction_id`|微信交易号|
|`payment_record.notify_raw`|原始回调内容|
|`payment_record.notified_at`|当前时间|

### 第二步：更新订单

|字段|写入值|
|---|---|
|`orders.status`|`paid`|
|`orders.paid_at`|当前时间|

### 第三步：生成一级分佣记录

触发条件：

- 订单支付成功
    
- 下单用户存在 `parent_id`
    
- 当前订单尚未生成该一级佣金记录
    

写入字段：

|字段|值来源|
|---|---|
|`commission.user_id`|`user.parent_id`|
|`commission.order_id`|`orders.id`|
|`commission.buyer_user_id`|`orders.user_id`|
|`commission.amount`|`orders.payable_amount * rate`|
|`commission.rate`|一级分佣比例|
|`commission.status`|`estimated`|
|`commission.created_at`|当前时间|

#### 幂等要求

必须保证：

- 同一条微信回调不会重复更新支付成功
    
- 同一订单不会重复生成佣金记录
    

建议约束：

- `payment_record.pay_no` 唯一
    
- `commission(order_id, user_id)` 唯一
    

#### 响应

按微信支付回调规范返回成功响应。

---

## 8.5 分佣模块

### 8.5.1 我的佣金列表

#### 接口信息

```http
GET /api/commission
```

#### 请求参数

|参数|类型|必填|说明|
|---|---|--:|---|
|`status`|string|否|`estimated` / `settled` / `cancelled`|
|`page`|int|否|页码|
|`pageSize`|int|否|每页数量|

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`commissionId`|bigint|`commission.id`|
|`orderId`|bigint|`commission.order_id`|
|`buyerUserId`|bigint|`commission.buyer_user_id`|
|`amount`|number|`commission.amount`|
|`rate`|number|`commission.rate`|
|`status`|string|`commission.status`|
|`createdAt`|string|`commission.created_at`|
|`settledAt`|string/null|`commission.settled_at`|

#### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "list": [
      {
        "commissionId": 30001,
        "orderId": 20001,
        "buyerUserId": 10001,
        "amount": 79.80,
        "rate": 0.1000,
        "status": "estimated",
        "createdAt": "2026-04-08 12:10:00",
        "settledAt": null
      }
    ],
    "page": 1,
    "pageSize": 10,
    "total": 1
  }
}
```

---

### 8.5.2 我的佣金汇总

#### 接口信息

```http
GET /api/commission/summary
```

#### 响应字段

|字段|类型|计算来源|
|---|---|---|
|`estimatedTotal`|number|`sum(amount) where status=estimated`|
|`settledTotal`|number|`sum(amount) where status=settled`|
|`cancelledTotal`|number|`sum(amount) where status=cancelled`|
|`countEstimated`|int|`count(*) where status=estimated`|
|`countSettled`|int|`count(*) where status=settled`|

#### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "estimatedTotal": 79.80,
    "settledTotal": 0,
    "cancelledTotal": 0,
    "countEstimated": 1,
    "countSettled": 0
  }
}
```

---

## 8.6 后台查询模块

> 后台不新增业务表，直接基于现有表查询。

---

### 8.6.1 后台订单列表

#### 接口信息

```http
GET /api/admin/orders
```

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`orderId`|bigint|`orders.id`|
|`orderNo`|string|`orders.order_no`|
|`userId`|bigint|`orders.user_id`|
|`totalAmount`|number|`orders.total_amount`|
|`payableAmount`|number|`orders.payable_amount`|
|`status`|string|`orders.status`|
|`createdAt`|string|`orders.created_at`|
|`paidAt`|string/null|`orders.paid_at`|

---

### 8.6.2 后台用户列表

#### 接口信息

```http
GET /api/admin/users
```

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`userId`|bigint|`user.id`|
|`nickname`|string|`user.nickname`|
|`avatar`|string|`user.avatar`|
|`parentId`|bigint/null|`user.parent_id`|
|`createdAt`|string|`user.created_at`|

---

### 8.6.3 后台佣金列表

#### 接口信息

```http
GET /api/admin/commissions
```

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`commissionId`|bigint|`commission.id`|
|`userId`|bigint|`commission.user_id`|
|`orderId`|bigint|`commission.order_id`|
|`buyerUserId`|bigint|`commission.buyer_user_id`|
|`amount`|number|`commission.amount`|
|`rate`|number|`commission.rate`|
|`status`|string|`commission.status`|
|`createdAt`|string|`commission.created_at`|
|`settledAt`|string/null|`commission.settled_at`|

---

### 8.6.4 后台支付记录列表

#### 接口信息

```http
GET /api/admin/payments
```

#### 响应字段

|字段|类型|来源|
|---|---|---|
|`paymentId`|bigint|`payment_record.id`|
|`orderId`|bigint|`payment_record.order_id`|
|`payNo`|string|`payment_record.pay_no`|
|`channel`|string|`payment_record.channel`|
|`amount`|number|`payment_record.amount`|
|`payStatus`|string|`payment_record.pay_status`|
|`transactionId`|string/null|`payment_record.transaction_id`|
|`notifiedAt`|string/null|`payment_record.notified_at`|

---

# 9. 主链路时序说明

## 9.1 登录链路

```text
wx.login
→ POST /api/login
→ 后端换取 openid
→ 查询/创建 user
→ 返回 token
```

---

## 9.2 下单链路

```text
前端本地临时购物车
→ POST /api/orders
→ 写入 orders
→ 写入 order_item 快照
→ 返回待支付订单
```

---

## 9.3 支付链路

```text
POST /api/pay/create
→ 写入 payment_record(pending)
→ 调微信统一下单
→ 返回前端 paymentParams
→ 前端发起微信支付
```

---

## 9.4 支付回调链路

```text
微信 notify
→ POST /api/pay/notify
→ 更新 payment_record(success)
→ 更新 orders(paid)
→ 生成 commission(estimated)
```

---

## 9.5 分佣完成链路

```text
用户确认收货
→ POST /api/orders/:id/confirm
→ 更新 commission(settled)
→ 更新 orders(commission_done)
```

---

# 10. 建议索引与约束

## 10.1 唯一约束

|表|字段|说明|
|---|---|---|
|`user`|`openid`|微信用户唯一|
|`orders`|`order_no`|订单号唯一|
|`payment_record`|`pay_no`|支付单号唯一|
|`commission`|`(order_id, user_id)`|防止同一订单给同一用户重复分佣|

---

## 10.2 常用索引建议

|表|字段|说明|
|---|---|---|
|`user`|`parent_id`|查询上下级关系|
|`product`|`status`|商品列表查询|
|`orders`|`user_id, status`|用户订单列表|
|`payment_record`|`order_id, pay_status`|支付排查|
|`commission`|`user_id, status`|佣金列表查询|
|`commission`|`buyer_user_id`|佣金来源查询|

---

# 11. 开发落地注意事项

## 11.1 表干净原则

必须保持：

- 用户信息只放 `user`
    
- 商品主数据只放 `product`
    
- 订单主状态只放 `orders.status`
    
- 支付状态只放 `payment_record.pay_status`
    
- 佣金状态只放 `commission.status`
    

---

## 11.2 快照原则

`order_item` 只保存必要快照：

- `product_id`
    
- `product_name`
    
- `product_image`
    
- `price`
    
- `quantity`
    
- `subtotal_amount`
    

不要重复保存：

- 用户昵称
    
- 上级昵称
    
- 商品库存快照之外的大量无关字段
    
- 微信支付原始字段
    

---

## 11.3 幂等原则

### notify 幂等

支付回调必须支持幂等，避免：

- 重复更新订单
    
- 重复生成支付成功记录
    
- 重复生成佣金
    

### 分佣幂等

必须通过唯一约束与事务控制保证：

- 同一订单只能生成一条一级佣金记录给同一个上级
    

---

# 12. 最终结论

本 MVP 文档已经统一以下核心原则：

- 订单状态、支付状态、佣金状态严格分离
    
- 分佣触发时机统一为 `notify` 成功后生成预估分佣
    
- 确认收货后再转正式分佣
    
- 不引入购物车落库、SKU、多级分销、优惠券、拼团、提现
    
- 表结构聚焦：
    
    - `user`
        
    - `product`
        
    - `orders`
        
    - `order_item`
        
    - `payment_record`
        
    - `commission`
        
- 后台查询直接依赖以上表，不额外新增后台业务表
    

该文档可直接作为：

- 后端接口开发基线
    
- 前后端联调基线
    
- 数据库建表设计基线
    
- 测试验收基线
