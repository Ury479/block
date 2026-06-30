---
layout: ../../../../../../layouts/PostLayout.astro
title: PD_产品系统规则库
description: 系统定位 个人仪表盘不是普通 Todo App，而是个人执行中控台、个人失误拦截系统、复盘沉淀系统、消费冷静系统和成长档案系统。
  系统目标是帮助用户减少粗心、拖延、遗忘、冲动消费、任务失控和复盘不沉淀的问题。 主系统与 Dify 的分工 个
date: 2026-06-26T11:27:20.423Z
updated: 2026-06-26T11:27:30.060Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 3
sourceFolder: 计算机编程/编程学习笔记/AI 方面/Dify 知识库测试
---

## 系统定位

个人仪表盘不是普通 Todo App，而是个人执行中控台、个人失误拦截系统、复盘沉淀系统、消费冷静系统和成长档案系统。

系统目标是帮助用户减少粗心、拖延、遗忘、冲动消费、任务失控和复盘不沉淀的问题。

## 主系统与 Dify 的分工

个人仪表盘主系统负责用户登录、权限控制、Supabase 数据库存储、任务、课程、OKR、复盘、消费冷静、成长档案、用户确认、最终落库和 Dashboard 展示。

Dify 负责外部知识库检索、复盘分析、消费成长方案生成、Prompt 调试、Workflow 编排和输出结构化 JSON。

Dify 不允许直接写入主系统数据库。

## AI 输出边界

AI 可以分析用户输入、检索历史资料、总结复盘、识别行为模式、生成明日第一步、生成消费冷静方案、推荐成长档案、推荐任务草稿。

AI 不可以自动创建任务、自动写入数据库、自动替用户决定购买、自动删除数据、输出无法验证的结论、进行医学诊断、使用恐吓式文案、把用户贴固定负面标签。

所有 AI 建议必须经过用户确认后，才能落回主系统。

## 复盘报告规则

复盘报告必须输出结构化 JSON。

复盘报告应包含 daily_summary、facts、behavior_patterns、tomorrow_first_step、archive_suggestion、task_suggestions。

行为模式必须包含 title、evidence、impact、intervention。

明日第一步必须具体、可执行、时间较短、有完成证据。

## 消费成长方案规则

消费成长方案不是简单判断买不买，而是把消费冲动转化为价值验证、冷静期任务和成长档案。

冷静规则：
金额大于等于 3000，冷静 7 天。
金额大于等于 1000，冷静 72 小时。
金额大于等于 300，冷静 24 小时。
金额低于 300，可以建议记录，但不强制冷静。

消费成长方案必须包含 decision、cooldown_hours、risk_level、risk_reasons、real_need、existing_alternatives、value_validation_plan、growth_archive_suggestion、tasks_to_create_after_confirmation。

AI 不允许直接替用户决定购买或不购买。

## 落回主系统原则

Dify 生成 JSON。
主系统接收。
zod 校验。
前端展示。
用户确认。
写入 Supabase。
Dashboard、成长档案、复盘、消费冷静更新。

Dify 不直接写库。

## 当前优先级

当前只优先训练两个 Workflow：
1. PD_Review_Agent
2. PD_Purchase_Growth_Agent

暂缓任务拆解 Agent、课程分析 Agent、AI 日报 Agent、复杂多 Agent 编排、自动全量同步、知识图谱、PDF/OCR 自动解析。
