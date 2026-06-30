---
layout: ../../../../layouts/PostLayout.astro
title: "**一、建议的最小可商用表结构**"
description: 一、建议的最小可商用表结构 我按 8 个模块拆。 1）用户与角色 profiles 存业务用户资料。 如果你用 Supabase
  Auth，官方建议你在 public schema 自己建用户资料表，并通过外键关联 auth.users，同
date: 2026-04-07T04:37:00.637Z
updated: 2026-04-07T04:37:49.490Z
type: 文稿
topic: 项目操盘
tags: []
readingMinutes: 12
sourceFolder: 计算机编程/项目操盘
---

# **一、建议的最小可商用表结构**

  

我按 8 个模块拆。
## **1）用户与角色**
### **profiles**

存业务用户资料。

如果你用 Supabase Auth，官方建议你在 public schema 自己建用户资料表，并通过外键关联 auth.users，同时开启 RLS。

  

建议字段：

- id uuid pk — 对应 auth.users.id
    
- mobile varchar(20)
    
- nickname varchar(100)
    
- avatar_url text
    
- status varchar(20) — active / disabled
    
- real_name varchar(100)
    
- created_at timestamptz
    
- updated_at timestamptz
    

  

### **roles**

  

系统角色定义。

  

建议字段：

- id bigserial pk
    
- code varchar(30) — customer / distributor / agent / admin / finance
    
- name varchar(50)
    
- description text
    

  

### **user_roles**

  

用户和角色的多对多关系。

  

建议字段：

- id bigserial pk
    
- user_id uuid fk -> profiles.id
    
- role_id bigint fk -> roles.id
    
- created_at timestamptz
    

  

### **distributor_relations**

  

分销关系链核心表。

  

建议字段：

- id bigserial pk
    
- user_id uuid fk
    
- parent_user_id uuid fk
    
- root_user_id uuid fk
    
- level int
    
- bound_at timestamptz
    
- status varchar(20)
    

  

**说明**：

这张表决定你后面能不能做“一级/二级/三级分佣”和代理上下级关系。

---

## **2）商品与库存**

  

### **products**

  

商品主表。

  

建议字段：

- id bigserial pk
    
- spu_code varchar(64)
    
- title varchar(255)
    
- subtitle varchar(255)
    
- category_id bigint
    
- brand varchar(100)
    
- status varchar(20) — draft / on_sale / off_sale
    
- cover_image_url text
    
- detail_json jsonb
    
- created_at timestamptz
    
- updated_at timestamptz
    

  

### **product_skus**

  

SKU 表。

  

建议字段：

- id bigserial pk
    
- product_id bigint fk -> products.id
    
- sku_code varchar(64)
    
- spec_json jsonb
    
- sale_price numeric(12,2)
    
- cost_price numeric(12,2)
    
- market_price numeric(12,2)
    
- weight numeric(10,2)
    
- status varchar(20)
    
- created_at timestamptz
    

  

### **inventory**

  

库存表。

  

建议字段：

- id bigserial pk
    
- sku_id bigint fk -> product_skus.id
    
- available_qty int
    
- locked_qty int
    
- sold_qty int
    
- updated_at timestamptz
    

  

### **inventory_logs**

  

库存流水。

  

建议字段：

- id bigserial pk
    
- sku_id bigint fk
    
- change_type varchar(30) — deduct / release / manual_adjust / refund_back
    
- change_qty int
    
- ref_type varchar(30) — order / refund / admin
    
- ref_id bigint
    
- operator_id uuid
    
- created_at timestamptz
    

---

## **3）购物与订单**

  

### **carts**

  

购物车主表。

  

建议字段：

- id bigserial pk
    
- user_id uuid fk
    
- created_at timestamptz
    
- updated_at timestamptz
    

  

### **cart_items**

  

购物车明细。

  

建议字段：

- id bigserial pk
    
- cart_id bigint fk
    
- sku_id bigint fk
    
- qty int
    
- selected boolean
    
- created_at timestamptz
    

  

### **orders**

  

订单主表，是全系统最核心的业务表之一。

  

建议字段：

- id bigserial pk
    
- order_no varchar(64) unique
    
- user_id uuid fk
    
- order_status varchar(30) — pending_pay / paid / shipped / completed / closed / refunded
    
- pay_status varchar(30)
    
- delivery_status varchar(30)
    
- source_channel varchar(30) — miniapp / admin / h5
    
- amount_goods numeric(12,2)
    
- amount_discount numeric(12,2)
    
- amount_shipping numeric(12,2)
    
- amount_payable numeric(12,2)
    
- amount_paid numeric(12,2)
    
- receiver_name varchar(100)
    
- receiver_mobile varchar(20)
    
- receiver_address text
    
- remark text
    
- paid_at timestamptz
    
- completed_at timestamptz
    
- created_at timestamptz
    
- updated_at timestamptz
    

  

### **order_items**

  

订单明细表，通常是增长最快的业务表之一。

  

建议字段：

- id bigserial pk
    
- order_id bigint fk -> orders.id
    
- product_id bigint fk
    
- sku_id bigint fk
    
- sku_snapshot jsonb
    
- qty int
    
- unit_price numeric(12,2)
    
- discount_amount numeric(12,2)
    
- line_total numeric(12,2)
    
- commission_base_amount numeric(12,2)
    
- created_at timestamptz
    

  

### **order_status_logs**

  

订单状态流转日志。

  

建议字段：

- id bigserial pk
    
- order_id bigint fk
    
- from_status varchar(30)
    
- to_status varchar(30)
    
- operator_type varchar(20) — system / user / admin
    
- operator_id uuid
    
- note text
    
- created_at timestamptz
    

---

## **4）支付与退款**

  

### **payments**

  

支付主表。

  

建议字段：

- id bigserial pk
    
- order_id bigint fk
    
- payment_no varchar(64) unique
    
- channel varchar(30) — wxpay
    
- amount numeric(12,2)
    
- pay_status varchar(20)
    
- provider_txn_id varchar(128)
    
- notify_payload jsonb
    
- paid_at timestamptz
    
- created_at timestamptz
    

  

### **refunds**

  

退款主表。

  

建议字段：

- id bigserial pk
    
- refund_no varchar(64) unique
    
- order_id bigint fk
    
- payment_id bigint fk
    
- refund_amount numeric(12,2)
    
- refund_status varchar(20)
    
- reason text
    
- provider_refund_id varchar(128)
    
- created_at timestamptz
    
- processed_at timestamptz
    

  

### **refund_items**

  

退款明细。

  

建议字段：

- id bigserial pk
    
- refund_id bigint fk
    
- order_item_id bigint fk
    
- qty int
    
- amount numeric(12,2)
    

---

## **5）分佣与代理结算**

  

### **commission_rules**

  

佣金规则表。

  

建议字段：

- id bigserial pk
    
- rule_name varchar(100)
    
- role_scope varchar(30) — distributor / agent
    
- product_scope varchar(30) — all / category / product / sku
    
- level1_rate numeric(8,4)
    
- level2_rate numeric(8,4)
    
- level3_rate numeric(8,4)
    
- settle_on varchar(30) — paid / completed
    
- status varchar(20)
    
- effective_from timestamptz
    
- effective_to timestamptz
    

  

### **order_commissions**

  

订单级佣金计算结果表。

  

建议字段：

- id bigserial pk
    
- order_id bigint fk
    
- order_item_id bigint fk
    
- beneficiary_user_id uuid fk
    
- relation_level int
    
- rule_id bigint fk
    
- commission_base numeric(12,2)
    
- commission_rate numeric(8,4)
    
- commission_amount numeric(12,2)
    
- commission_status varchar(20) — pending / frozen / available / settled / cancelled
    
- available_at timestamptz
    
- settled_at timestamptz
    
- created_at timestamptz
    

  

### **wallet_accounts**

  

用户佣金钱包。

  

建议字段：

- id bigserial pk
    
- user_id uuid fk unique
    
- balance_available numeric(12,2)
    
- balance_frozen numeric(12,2)
    
- balance_total_earned numeric(12,2)
    
- updated_at timestamptz
    

  

### **wallet_transactions**

  

钱包流水，通常也是高增长表。

  

建议字段：

- id bigserial pk
    
- wallet_id bigint fk
    
- user_id uuid fk
    
- txn_type varchar(30) — commission_in / freeze / unfreeze / withdrawal / refund_reverse / adjust
    
- biz_type varchar(30) — order / refund / withdraw / admin
    
- biz_id bigint
    
- amount numeric(12,2)
    
- balance_before numeric(12,2)
    
- balance_after numeric(12,2)
    
- note text
    
- created_at timestamptz
    

  

### **withdraw_requests**

  

提现申请。

  

建议字段：

- id bigserial pk
    
- withdraw_no varchar(64) unique
    
- user_id uuid fk
    
- amount numeric(12,2)
    
- fee_amount numeric(12,2)
    
- actual_amount numeric(12,2)
    
- withdraw_status varchar(20) — pending / approved / rejected / paid
    
- bank_account_masked varchar(64)
    
- reviewer_id uuid
    
- review_note text
    
- created_at timestamptz
    
- reviewed_at timestamptz
    
- paid_at timestamptz
    

---

## **6）财务与对账**

  

### **settlement_batches**

  

结算批次表。

  

建议字段：

- id bigserial pk
    
- batch_no varchar(64) unique
    
- batch_type varchar(30) — commission_settlement / withdrawal_payment
    
- batch_status varchar(20)
    
- total_count int
    
- total_amount numeric(14,2)
    
- created_by uuid
    
- created_at timestamptz
    

  

### **settlement_details**

  

结算明细。

  

建议字段：

- id bigserial pk
    
- batch_id bigint fk
    
- user_id uuid fk
    
- source_type varchar(30) — order_commission / withdraw
    
- source_id bigint
    
- amount numeric(12,2)
    
- status varchar(20)
    
- created_at timestamptz
    

  

### **financial_ledger**

  

财务总账/业务账本。

  

建议字段：

- id bigserial pk
    
- entry_no varchar(64) unique
    
- entry_type varchar(30) — payment / refund / commission / withdraw / adjust
    
- biz_type varchar(30)
    
- biz_id bigint
    
- debit_amount numeric(12,2)
    
- credit_amount numeric(12,2)
    
- account_subject varchar(50)
    
- occurred_at timestamptz
    
- created_at timestamptz
    

  

### **reconciliation_tasks**

  

对账任务。

  

建议字段：

- id bigserial pk
    
- task_date date
    
- channel varchar(30)
    
- task_status varchar(20)
    
- summary_json jsonb
    
- created_at timestamptz
    
- finished_at timestamptz
    

---

## **7）运营与营销**

  

### **coupons**

  

优惠券定义。

  

### **coupon_user_claims**

  

用户领券记录。

  

### **coupon_order_usages**

  

优惠券核销记录。

  

### **banners**

  

首页 banner。

  

### **notices**

  

公告。

  

这几张表通常体量不大，对数据库成本影响有限。

---

## **8）审计与风控**

  

### **admin_operation_logs**

  

后台操作日志。

  

建议字段：

- id bigserial pk
    
- operator_id uuid
    
- module varchar(50)
    
- action varchar(50)
    
- target_type varchar(50)
    
- target_id varchar(64)
    
- request_json jsonb
    
- result_json jsonb
    
- created_at timestamptz
    

  

### **risk_events**

  

风控事件。

  

建议字段：

- id bigserial pk
    
- user_id uuid
    
- event_type varchar(50)
    
- risk_level varchar(20)
    
- payload jsonb
    
- created_at timestamptz
    

  

### **webhook_logs**

  

支付回调/外部通知日志。

  

建议字段：

- id bigserial pk
    
- source varchar(30)
    
- event_type varchar(50)
    
- biz_id varchar(64)
    
- payload jsonb
    
- process_status varchar(20)
    
- created_at timestamptz
    

---

# **二、给财务看的“规模结论”**

  

如果你只是做 **一期可商用版**，上面真正必需的核心表，大约是：

- 用户与角色：4 张
    
- 商品与库存：4 张
    
- 订单与支付：7 张
    
- 分佣与钱包：5 张
    
- 财务与对账：4 张
    
- 审计与日志：3 张
    

  

**合计核心表约 27 张左右。**

  

如果再加营销、售后、地址簿、发货包裹、消息通知、附件管理，比较完整的版本一般会到 **35–45 张表**。

这在 PostgreSQL 里完全正常，表数量本身不是问题；PostgreSQL 本来就是为复杂关系型业务设计的。

---

# **三、最影响 Supabase 成本的表**

  

从存储角度，最容易长大的通常不是商品表，而是下面这些：

  

### **第一梯队：高增长**

- order_items
    
- order_status_logs
    
- order_commissions
    
- wallet_transactions
    
- financial_ledger
    
- admin_operation_logs
    
- webhook_logs
    

  

### **第二梯队：中增长**

- orders
    
- payments
    
- refunds
    
- inventory_logs
    

  

### **第三梯队：低增长**

- roles
    
- commission_rules
    
- products
    
- banners
    
- notices
    

  

所以你做成本报备时，数据库大小主要应该盯：

- 订单明细
    
- 佣金流水
    
- 钱包流水
    
- 财务账本
    
- 各类日志
    

---

# **四、给你一版更适合报备的成本口径**

  

你可以这样向财务解释：

  

### **1）一期数据库结构复杂度**

- 核心业务表：约 **27 张**
    
- 完整商用版：约 **35–45 张**
    

  

### **2）成本不取决于表数，主要取决于：**

- 项目数
    
- 磁盘占用
    
- 流量
    
- Storage
    
- 函数调用
    

  

Supabase Pro 默认含 **8GB 数据库磁盘**，超出部分 **$0.125/GB/月**；Pro 组织自带 1 个默认项目的 compute credits，额外项目大约 **$10/月起**。

  

### **3）一期项目的数据库体量通常怎么估**

  

如果只是早期 DAU 700–800、电商分销一期：

- 核心业务数据本身通常不会很快吃满数据库
    
- 真正容易长的是日志和流水
    
- 所以一开始更应该控制的是 **日志保留策略** 和 **大字段 JSON 存储策略**
    

  

这个判断是工程经验，不是平台硬性规定。

---

# **五、结构上的两个建议**

  

## **建议 1：大流水表按时间分区**

  

PostgreSQL 支持分区表，而且分区表可以带 **主键、外键、索引、触发器**。对 wallet_transactions、financial_ledger、admin_operation_logs 这类按时间持续增长的表，建议按月分区。

  

## **建议 2：权限不要只靠角色字段**

  

Supabase 官方明确建议应用层访问控制优先用 **RLS**，并可在其上叠加 RBAC。你这个项目里，代理、分销员、财务、管理员的数据可见范围不同，建议从一开始就按 RLS 思路设计。

---

# **六、给公司财务的简版说法**

  

你可以直接用这段：

  

> 本项目数据库采用 PostgreSQL 关系型模型，核心表预计约 27 张，完整商用版约 35–45 张。

> 数据库成本不主要取决于表数量，而主要取决于项目数、数据库磁盘占用、流量、对象存储和函数调用。

> 若采用 Supabase Pro，当前公开价格为 $25/月，包含 1 个默认项目及 8GB 数据库磁盘；超出磁盘部分按 $0.125/GB/月计费，额外项目通常约 $10/月起。

> 预计一期项目数据库压力主要来自订单明细、佣金流水、钱包流水、财务账本和日志表，建议按时间分区并设置日志归档策略，以控制数据库长期成本。 

  

如果你要，我下一步可以直接继续给你做两份东西里的其中一份：

**A. 把这版草案整理成正式的 ER 表清单**，或者 **B. 直接按这套表结构给你估一版 Supabase 月度/年度费用表**。
