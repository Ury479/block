---
layout: ../../../../layouts/PostLayout.astro
title: 🎓 NotebookLM 交叉验证工作流指南
description: 🎓 NotebookLM 交叉验证工作流指南 目标 ：用 NotebookLM
  对软件工程专业课（SE321/322/323）笔记做深度交叉验证，配合体系化复习。 当前笔记本 ： Notebook ID ： 3a53c509 48ae
  4
date: 2026-06-28T08:11:00.397Z
updated: 2026-06-28T08:11:00.398Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 7
sourceFolder: 计算机编程/编程学习笔记
---

# 🎓 NotebookLM 交叉验证工作流指南

> **目标**：用 NotebookLM 对软件工程专业课（SE321/322/323）笔记做深度交叉验证，配合体系化复习。
>
> **当前笔记本**：[🎓 SE321/322/323 软件工程课程体系 (TERM1/2569)](https://notebooklm.google.com/notebook/3a53c509-48ae-4f25-a7c4-8cdb7e492a1b)
> **Notebook ID**：`3a53c509-48ae-4f25-a7c4-8cdb7e492a1b`
> **来源数**：10 个文件 / ~67K 字符
> **创建日期**：2026-06-28

---

## 📋 本学期专业课程速查表（TERM1/2569）

| 课程代码 | 课程名称 | 当前学期笔记 | 笔记本映射 |
|---------|---------|-------------|----------|
| **953321** | Software Requirement Analysis | ✅ SE321 笔记（Use Case, URS/SRS, Fit Criterion） | SE321 笔记本部分 |
| **953322** | Software Design and Architecture | ✅ SE322 笔记（创建型模式, SOLID, Emergent Design） | SE322 笔记本部分 |
| **953422** | Software Quality Assurance | ✅ SE323 笔记（集成测试, Stubs/Drivers, V&V） | SE323 笔记本部分 |
| 953201 | Algorithms Design and Analysis | ⚠️ 仅有 Java 算法基础 | 待补充 |
| 953251 | Human Factors in Digital Interaction Design | ❌ 缺 | 需新建笔记本 |
| 953351 | User Experience for Software Design | ⚠️ 仅有前端笔记 | 可用现有前端笔记做交叉 |
| 953701 | Music Appreciation | 通识课，无需交叉验证 | - |

---

## 🛠️ 工具配置

### MCP 信息

- **服务器**：`notebooklm-mcp` v3.4.2
- **位置**：`/Users/ury/.local/bin/notebooklm-mcp`
- **配置文件**：`/Users/ury/.config/opencode/opencode.json`
- **认证**：`~/.notebooklm-mcp/auth.json`

### 核心工具列表

| 工具 | 用途 | 关键参数 |
|-----|-----|---------|
| `notebook_list` | 列出所有笔记本 | `max_results` |
| `notebook_create` | 创建新笔记本 | `title` |
| `notebook_get` | 获取笔记本及来源详情 | `notebook_id` |
| `notebook_add_text` | 粘贴文本作为来源 | `notebook_id`, `text`, `title` |
| `notebook_add_url` | 添加 URL/YouTube 作为来源 | `notebook_id`, `url` |
| `notebook_describe` | AI 自动总结笔记本 + 建议主题 | `notebook_id` |
| `notebook_query` | 跨源查询（核心） | `notebook_id`, `query` |
| `source_get_content` | 获取原始文本（不经过 AI） | `source_id` |
| `source_describe` | AI 总结单个来源 | `source_id` |
| `refresh_auth` | 刷新认证 token | - |

### Python 调用示例

```python
import sys, json
sys.path.insert(0, '/tmp')
from mcp_harness import NotebookLMClient  # 已写好的客户端类

client = NotebookLMClient()
resp = client.call("notebook_query", {
    "notebook_id": "3a53c509-48ae-4f25-a7c4-8cdb7e492a1b",
    "query": "你的问题"
})
print(json.loads(resp["result"]["content"][0]["text"])["answer"])
client.close()
```

> `mcp_harness.py` 已保存到 `/tmp/mcp_harness.py`，可复制到项目目录长期使用。

---

## 🎯 6 大交叉验证查询模板（已验证有效）

### 模板 1：概念辨析 - 相似概念对撞机

**适用场景**：考试前对易混概念强化

```
针对易混淆概念 [Concept A] vs [Concept B]，请：
1. 给出明确定义对比表
2. 给出"成功还是失败 / 强制还是可选"等判定准则
3. 提供 1 句记忆口诀
4. 出 1 道场景题让我自测
```

**实际例子**：
- Include vs Extend
- Alternative Flow vs Exception Flow
- Verification vs Validation
- Stubs vs Drivers
- Factory Method vs Abstract Factory

---

### 模板 2：质量重构 - Fit Criteria 数字化转换

**适用场景**：把模糊需求变成可测试需求

```
请将这条需求重构：
"[原需求描述]"

要求：
1. 指出它违反哪些 Quality Gateway 准则
2. 加入 Fit Criterion (含具体数字/百分比/时间)
3. 给出"在 SRS 中的标准英文句式"
```

**实际例子**：
- ❌ "系统界面要美观现代"
- ✅ "80% 的测试用户在易用性测试中评分 ≥ 4/5"

---

### 模板 3：链路验证 - 全生命周期追踪链

**适用场景**：理解一个功能如何贯穿三门课

```
请按生命周期串联我的笔记：
- SE321 阶段：定义 [Feature X] 的 URS/SRS
- SE322 阶段：选用什么设计模式 / SOLID 原则落地
- SE323 阶段：Fit Criterion 如何变成 Test Case
- 端到端：画出 Traceability Matrix
```

**黄金问题**：
> "Fit Criterion 是怎么从需求传递到测试用例的？"

---

### 模板 4：场景演练 - 项目化案例模拟

**适用场景**：模拟真实项目，强化整体应用

```
假设我正在做 [项目名] 项目，请基于我的笔记：
1. SE321：写 3 条 URS（含 Fit Criterion）
2. SE321：把 URS 转为 Use Case（含三类 Flow）
3. SE322：用 1 个创建型模式说明如何落地
4. SE323：给出对应的测试策略
```

**推荐项目**：
- 🌱 Smart Waste Sorting Assistant（已有完整素材）
- 📚 课程作业系统
- 🛒 鱼皮用户中心项目（与 Java 后端笔记交叉）

---

### 模板 5：设计对齐 - SOLID 原则验证

**适用场景**：检查设计模式选择是否合理

```
我要实现 [功能 Y]，考虑用 [Pattern Z]，请验证：
1. 它支持哪些 SOLID 原则？
2. 是否会违反任何 SOLID 原则？
3. 它怎么支持需求的可扩展性？
4. 如果换另一种模式会怎样？
```

**实际例子**：Singleton 的 SRP 争议 / Factory Method 的 OCP 支持

---

### 模板 6：错误诊断 - 错题根因分析

**适用场景**：复习错题，避免重复错误

```
请基于我笔记里的错题记录（[来源 X]）做：
1. 错误模式归类（最易混的概念 Top 3）
2. 错误原因分析（为什么会这样选）
3. 课件原句 / 标准表达是什么
4. 一句话"防错口诀"
```

---

## 📅 7 天期末复习查询计划

| 天数 | 主题 | 推荐查询 |
|-----|------|---------|
| **Day 1** | SE321: Use Case 关系 | "Use Case Diagram 的 Include/Extend/Generalization 判定逻辑是什么？" |
| **Day 2** | SE321: 三类 Flow 句式 | "练习写 Normal/Alternative/Exception Flow 的标准英文模板" |
| **Day 3** | SE321: V&V + Fit Criterion | "把 5 个模糊需求改写为含 Fit Criterion 的可测试需求" |
| **Day 4** | SE322: SOLID 实战 | "找 3 个违反 SRP/OCP 的代码案例并重构" |
| **Day 5** | SE322: 创建型模式 | "5 种创建型模式的适用场景对比矩阵" |
| **Day 6** | SE323: 集成测试 | "用 Stubs/Drivers 分别画 Top-down/Bottom-up 集成测试图" |
| **Day 7** | 🔥 终极综合 | "从 URS 写到 SRS → Fit Criterion → 设计模式 → Test Case，端到端走一遍" |

---

## 🌐 万能回复结构

当 NotebookLM 回答问题时，期望结构：

| 部分 | 作用 |
|-----|-----|
| ✅ 判分与即时反馈 | 明确指出 Correct/Incorrect/Partial |
| 🎯 根因解释 (Why) | 为什么对/错 |
| 🧠 记忆口诀 | "Verification = Build it right; Validation = Build the right thing" |
| 📝 规范化改写 | 给出考试评分标准句式 |
| 🚀 进阶挑战 | 抛出一个跨课关联点 |

---

## 🧠 笔记本盲区与扩展方向

### 当前笔记盲区

1. **结构型 & 行为型设计模式**：仅有创建型，缺 Decorator/Adapter/Strategy
2. **Activity Diagram 复杂控制流**：Fork/Join 缺实例
3. **代码级 SOLID 实践**：理论多，实战少

### 补充策略

| 缺口 | 推荐补充 |
|-----|---------|
| 结构型/行为型模式 | 从 GoF 教材原文补全，或添加 YouTube 教程 |
| 953251 Human Factors | 新建独立笔记本（暂无笔记） |
| 953201 算法 | 整合 Java 算法笔记 + Algorithm Design Manual |
| 953351 UX | 用前端笔记中的可用性部分 + UX 教程 |

---

## 💡 使用技巧

### 提高回答质量

- ✅ **明确指定输出格式**（如"用表格"、"分点"）
- ✅ **限定来源**（如"基于我的错题笔记"）
- ✅ **指明目的**（如"准备考试"）
- ✅ **多轮迭代**（先把答案跑出来，再深入追问）

### 提问黄金公式

```
[背景/上下文] + [具体问题] + [期望输出格式] + [使用目的]

例：
"我的笔记里有 Smart Waste Sorting 项目素材 (背景)，
请帮我用 SE321/322/323 知识做完整项目设计 (具体问题)，
输出用 Use Case + 类图 + 测试用例的格式 (格式)，
目的是准备期末项目展示 (目的)"
```

### 避免的提问方式

- ❌ "讲讲设计模式"（太宽泛）
- ❌ "Singleton 是什么"（NotebookLM 会答得很泛）
- ❌ 不指定课程（答案会跨多个不相关领域）

---

## 🔄 后续行动

- [ ] 补全 953201 算法分析笔记
- [ ] 新建 953251 Human Factors 笔记本
- [ ] 给 953351 UX 课程补充内容
- [ ] 每周运行 1 次 7 天计划中的 Day 7 终极综合查询
- [ ] 把这个指南同步到笔记库的"导览"区

---

## 📚 相关资源

- **本指南对应笔记本**：[🎓 SE321/322/323 软件工程课程体系](https://notebooklm.google.com/notebook/3a53c509-48ae-4f25-a7c4-8cdb7e492a1b)
- **AI 博主导航笔记本**：[AI/技术 YouTube 博主导航](https://notebooklm.google.com/notebook/9207fee1-7d32-4b42-b9df-eaa0d6706da1)
- **Python 客户端**：`/tmp/mcp_harness.py`
- **调试日志**：`/tmp/import_courses_v2.py`, `/tmp/cross_validate.py`
