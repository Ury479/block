---
layout: ../../../../../layouts/PostLayout.astro
title: 建议重点背诵句（高频考点原句）
description: 建议重点背诵句（高频考点原句） 1. Fit Criteria Definition： “A fit criterion
  defines how you will measure whether a requirement has been
date: 2025-10-19T13:49:34.019Z
updated: 2025-10-20T04:24:09.207Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 14
sourceFolder: 计算机编程/习题集/se321
---

# 建议重点背诵句（高频考点原句）

1. **Fit Criteria Definition：**
    
    > “A fit criterion defines how you will measure whether a requirement has been met.”
    
2. **Quality Gateway Purpose：**
    
    > “To prevent incorrect requirements from becoming part of the specification.”
    
3. **Verification vs Validation：**
    
    > “Verification ensures correctness; Validation ensures suitability.”
    
4. **Traceability Matrix Purpose：**
    
    > “To ensure all requirements are connected to project goals and test cases.”
    
5. **Gold Plating Warning：**
    
    > “Unnecessary features add cost without improving functionality.”
    
---
### 🧠 **Multiple-choice Questions**

**Q1.**  
Which statement best describes the purpose of a **Fit Criterion**?  b
A. It defines the business goal of the project.  
B. It provides a measurable way to verify that a requirement has been met.  
C. It explains why the requirement was requested.  
D. It describes how the system will be designed internally.

A _Fit Criterion_ provides a **measurable standard** that tells testers when a requirement has been satisfied.

> 🔹 Example: _“System shall recognize waste images within 3 seconds (±0.5s).”_  
> → measurable → testable → verifiable.
---

**Q2.**  
Which requirement below **passes** the Quality Gateway for being _measurable and testable_?  a
A. “The app should be fast and user-friendly.”  
B. “The system shall recognize waste images within 3 seconds with an accuracy of 90%.”  
C. “The app must be able to help users sort garbage efficiently.”  
D. “The interface should look modern.”

**你的答案：A（错误）**  
✅ **正确答案：B**

📘 **解释：**

- A (“The app should be fast and user-friendly.”) ❌ vague, not measurable.
    
- ✅ B (“within 3 seconds with 90% accuracy”) = measurable and testable, so it **passes Quality Gateway**.
---

**Q3.**  
Which of the following **Quality Gateway criteria** ensures that every requirement can be traced from project goal to implementation and test?  b
A. Completeness  
B. Traceability  
C. Viability  
D. Consistency

---

**Q4.**  
Which Quality Gateway test checks if a requirement is **feasible within project time, skills, and budget**?  b
A. Relevancy  
B. Viability  
C. Correctness  
D. Completeness

---

**Q5.**  
A developer adds a new feature: “Add animation to the login screen for better look.”  
This requirement should be classified as:  a
A. Traceable Requirement  
B. Solution-bound Requirement  
C. Gold Plating  
D. Non-functional Usability Requirement

**你的答案：A（错误）**  
✅ **正确答案：C – Gold Plating**

📘 **解释：**

- “Add animation for better look” ❌ doesn’t contribute to functional goal → 属于 **Gold Plating**（锦上添花型无用功能）。
    
- **Gold Plating** = unnecessary, non-essential, not traceable to business purpose.
---
#### 🧠 针对错题强化训练题

##### 🎯 **主题 1：Fit Criteria & Measurable Requirements**（针对 Q2 错题）

**Scenario:**  
A requirement in the SRS states:

> “The system shall provide waste-sorting results quickly.”

---

### 🧩 **Bonus Concept (考前易混点)**

> Explain in **one sentence**:  
> What is the difference between **Solution-bound Requirement** and **Gold Plating**?

_(Write in English — I’ll review your answer for precision and exam-style phrasing.)_

### ⚙️ **Concept-definition Questions**

**Q6.**  
Define in one sentence: **Verification** and **Validation.**  
(Use the pattern: “Verification checks ___, while Validation ensures ___.”)

Verification refer to correct while Validation refer to helpful
Verification refer to whether the system built correctly base on the specification while Validation refer to satisfies users' need and real-world goals.

📘 **解释：**

- **Verification = correctness**（检查需求是否实现得对）
    
- **Validation = suitability**（检查产品是否真有用）
    

🧠 **记忆口诀：**

> Verification = “Did we build it right?”  
> Validation = “Did we build the right thing?”

---

**Q7.**  
Explain what a **Quality Gateway** is and its main purpose in requirement management. 
**Quality Gateway** means to fetch the requirement of project.

Quality Gateway** means to evaluate each requirement to determine whether it fetch the quality standards before it is accepted into the specification.

---

**Q8.**  
Define the term **Traceability Matrix** and describe its function in the validation process.
Traceability Matrix could fine the specific scope.

❌ **表达不清。** “fine the specific scope” 没有体现“追踪”和“映射”概念。

✅ **正确答案：**

> **A Traceability Matrix is a table that links each requirement to its corresponding goals, design components, and test cases to ensure completeness and easy tracking throughout the project.**

📘 **要点：**

- 它保证每个需求都能**追溯来源（URS）**、**被实现（SRS）**、并**被验证（Test Case）**。
    
- 功能：检测遗漏 / 避免需求孤岛 / 方便验证。

---

### ⚖️ **Scenario-based Analysis**

**Scenario:**  
A requirement in the SRS says:

> “The app shall be easy to use.”  
> During the Quality Gateway review, the analyst decides to revise it using a measurable fit criterion.

**Q9.**  
Rewrite this requirement in a _testable_ way that includes a clear **Fit Criterion.**

the app should open within 5s and have prompt for details.
🟡 **部分正确（方向对，但不够完整/精准）。**

### 📘 讲解：

原需求 “The app shall be easy to use.” 属于典型的 **vague non-functional requirement**（无法测试）。  
目标是用可测量标准使其 **testable + verifiable**。

根据课件 _Week 13 – Fit Criteria for Nonfunctional Requirements_：

> “New users shall be able to complete task X within Y minutes after Z attempts.”  
> “At least 75% of users in testing shall rate usability above 4/5.”

✅ **改写示范：**

> _New users shall be able to complete the waste-sorting process within 2 minutes of first use, with a satisfaction rating of at least 80% in usability testing._

📍**解释：**

- 包含 **时间（2 minutes）** → measurable
    
- 包含 **成功率 / 满意度（80%）** → 可验证
    
- 对应非功能性需求（usability）

---

**Scenario:**  
Another requirement reads:

> “The system shall provide waste-sorting results to users in less than 3 seconds after scanning.”  
> However, the backend AI team reports this cannot be achieved due to current model limits.

**Q10.**  
Which **Quality Gateway criterion** would this issue violate, and what should the team do before approving this requirement?

It violate the revelance.Teams should check the function of waste-sorting.

❌ **错误。**  
这个场景的核心问题不是“relevance（是否相关）”，而是**技术上无法实现**，所以违反的是：

✅ **正确答案：** **Viability Criterion**

📘 **课件定义（Week 13 – Quality Gateway）**：

> “Viable requirements are those that are workable within the project constraints (time, budget, technology, skills).”

📘 **解释：**

- 要求系统在 3 秒内响应，但 AI 模型技术无法实现 → **不具可行性（non-viable）**
    
- **不应直接批准**，而应：
    
    1. 与技术团队沟通，修改要求（例如 5 秒或 90% 数据量）；
        
    2. 或将其标为 _future improvement / pending feasibility_.
        

✅ **标准答案示范：**

> _This violates the Viability criterion. The team should revise the requirement to match current technical limits or provide supporting evidence that 3 seconds is achievable before approval._

---

#二周目 
## 🧩 **Quality Gateway Comprehensive Exercise**

---
### **Q1 – Completeness**

A requirement reads:

> “The system shall display waste-sorting information.”

During review, the analyst finds it has **no input specification, no condition, and no fit criterion**.

**Which Quality Gateway criterion does it fail?**   b
A. Viability  
B. Completeness  
C. Correctness  
D. Consistency

**Explain briefly (1 sentence):** ____________________________________
no input specification, no condition, and no fit criterion means there is problems with waste-sorting for completeness.

✅ **正确。**

📘 **解释：**

- “Completeness” 检查一个需求是否包含所有必要的组成部分（inputs, outputs, conditions, fit criteria 等）。
    
- 没有输入说明或测量标准 → 表示 **the requirement is incomplete**。
    

✅ **改进后的英文解释（标准句式）**

> The requirement fails the **Completeness** criterion because it lacks input details, conditions, and a fit criterion needed to make it fully defined and testable.

💡 **记忆要点：**

> **Complete = nothing missing.**  
> If any element of the requirement template is absent, it fails this test.

---

### **Q2 – Viability**

Requirement:

> “The AI module shall identify any waste type within 1 second.”

The AI team reports the minimum achievable time is 5 seconds.

**Which criterion is violated?**  b
A. Relevancy B. Viability C. Correctness D. Traceability

**What should the analyst do next?** (choose one)  
1️⃣ Reject the requirement 2️⃣ Revise the time limit 3️⃣ Mark it as future improvement 4️⃣ All of the above
4.the requirement to limite the waste type within 1 second coundn't be achieved.So,it should checked

---

### **Q3 – Relevancy**

Requirement:

> “Add a mini-game where users can throw virtual trash into bins.”

This feature is **not in the project goal or URS**.

**Which criterion is violated?**  b
A. Relevancy B. Gold Plating C. Completeness D. Viability

**Explain why:** ____________________________________
the game needn't virtual trash for necessaty so it's gold plating.

**你的答案：B (Gold Plating)**  
✅ **正确答案：A (Relevancy)**

### 📘 解释：

- **Relevancy** criterion ensures that _every requirement supports the project’s business goals or URS_.
    
- “Add a mini-game” → **not relevant** to system’s main purpose (waste sorting) → **violates Relevancy**.
    
- **Gold Plating** 通常是开发者自发添加“炫技”功能（多余但好看），  
    而这里是从需求层面**不相关**（缺乏业务目标支撑）。
    

✅ **标准答案写法：**

> It violates the **Relevancy** criterion because the mini-game is not related to the project goal or user requirements.
---

### **Q4 – Correctness**

Requirement:

> “The interface should be modern and nice.”

The reviewer says it’s **ambiguous** and **not measurable**.

**Which criterion fails?**  c
A. Correctness B. Consistency C. Relevancy D. Viability

**Rewrite the requirement with a Fit Criterion:** ____________________________________
**ambiguous** and **not measurable** is relevancy to interface.

**你的答案：C (Relevancy)**  
✅ **正确答案：A (Correctness)**

### 📘 解释：

- “The interface should be modern and nice.” → 含糊、无法验证 → 违反 **Correctness**。
    
- **Correctness** criterion tests if requirement statements are _clear, unambiguous, and precise_.
    
- **Relevancy** 讲的是“是否与目标有关”；但这条需求本身相关，只是**写得太模糊**。
    

✅ **标准答案写法：**

> It fails the **Correctness** criterion because the statement is ambiguous and not measurable.

### 📘 改写示范（加上 Fit Criterion）：

> _The user interface shall follow the university design guideline and achieve a satisfaction rating of at least 80% in usability testing._

💡 **要点：**

- 替换模糊词 “modern and nice”
    
- 增加 **measurable Fit Criterion (80%)**
    
- 保留目标（改进界面体验）

---
### **Q5 – Gold Plating vs Relevancy**

Two requirements are under review:

- R1: “Add background music to the login screen.”
    
- R2: “Add a recycling-station locator to help users find drop-off points.”
    

**Q5.1** Which is **Gold Plating** and why?  
**Q5.2** Which is **Relevant**, and how does it support the project goal?

---

### **Q6 – Scenario Integration**

Read the mini case:

> During validation, one requirement states “The system shall send real-time notifications for every successful scan.”  
> The client later clarifies that notifications should be sent **only when eco-points are earned**.  
> The team finds the requirement wording was misunderstood by two departments.

**Q6.1** Which Quality Gateway criterion was not met?  
A. Completeness B. Consistency C. Correctness D. Traceability

**Q6.2** What improvement should be made to prevent this problem in future specifications?

---

### **Q7 – Short Answer (Integrated Reasoning)**

Choose one of the five criteria (Completeness, Viability, Relevancy, Correctness, Gold Plating).  
Explain in your own words (2–3 sentences):  
1️⃣ What the criterion means;  
2️⃣ How it helps ensure requirement quality;  
3️⃣ Give one example from the Smart Waste Sorting Assistant project.

---

这些题覆盖了：

- 定义识别（Q1–Q4）
    
- 场景区分（Q5–Q6）
    
- 概念阐述（Q7）
    

是否希望我接下来提供 **完整参考答案 + 解析**，帮助你验证理解并做错题总结？

### 📈 **Matrix-based Question**

**Q11.**  
Fill in the missing link in this partial **Traceability Matrix**:

|Goal|Feature|URS|SRS|Test Case|
|---|---|---|---|---|
|Promote eco-friendly behavior|AI Waste Recognition|URS-01: Users shall be able to scan waste items.|SRS-01-01: The system shall capture images using camera API.|**?**|

Write what the **Test Case** should verify in this row.

---

### 🧾 **Short Explanation Question**

**Q12.**  
Why does the Quality Gateway help prevent _requirement creep_ and _gold plating_ in projects?

---

Would you like me to provide the **model answers + reasoning** for these 12 questions next, or do you want to try answering them first (to simulate an exam round)?

#二周目 
Excellent 👏  
Below is your **Targeted Practice Set (in English)** — focused on the three weak areas you identified:

> ① Use Case Flows (Normal / Alternative / Exception)  
> ② Fit Criteria (turn vague into measurable)  
> ③ Validation Chain (Verification, Validation, Traceability)
> 


---
### Scenario 2
In the “Reward Claim” feature:

- The user redeems eco-points for a coupon.
    
- If the network is slow, the system retries automatically within 5 seconds and succeeds.
    
- If the server is unreachable, the app displays “Error: Cannot connect.”
    

**Q2.**  
Which flow represents a _recoverable error_?  
A. Normal Flow  
B. Alternative Flow  
C. Exception Flow  
D. Postcondition

**Q3.**  
Explain in one sentence how you can tell whether a case belongs to _Alternative Flow_ or _Exception Flow_.

---

---

## ⚙️ **PART 2 — Fit Criteria (Measurable vs Vague Requirements)**

### Scenario 3

Below are requirements written by a junior analyst. Rewrite each one so it becomes **testable** and includes a clear **Fit Criterion**.

**Q4.**

> (a) “The app should respond quickly.”  
> (b) “The system should be easy to use.”  
> (c) “The recognition accuracy must be high.”

✏️ Rewrite each into measurable, testable form (add time limits, accuracy, or user success rate).

---

### Scenario 4

Which of the following passes the **Quality Gateway** for being measurable and testable?  
**Q5.**  
A. “The system shall identify waste in less than 4 seconds with 90% accuracy.”  
B. “The system shall identify waste as fast as possible.”  
C. “The system shall have good AI performance.”  
D. “The system shall show modern UI.”

---

### Scenario 5

During review, the team finds this requirement:

> “Add background music to make the app more enjoyable.”

**Q6.**  
Identify the Quality Gateway category this violates (choose one):  
A. Completeness  
B. Relevancy  
C. Gold Plating  
D. Traceability

**Q7.**  
Write one short reason **why** it should be rejected under that category.

---

---

## 🔍 **PART 3 — Validation & Traceability Chain**

### Scenario 6

Project goal: _Encourage users to recycle by rewarding correct sorting._  
Feature: _Eco-points and reward system._

**Q8.**  
Build the correct **traceability chain** by completing the blanks:

|Level|Example|
|---|---|
|**Goal**|Encourage users to recycle responsibly.|
|**Feature**|________|
|**URS**|Users shall be able to view and redeem eco-points.|
|**SRS**|________|
|**Test Case**|________|

(Write 1 short sentence for each blank.)

---

### Scenario 7

**Q9.**  
Explain in one sentence the difference between **Verification** and **Validation** using this app as an example.  
_(Tip: Verification checks ___; Validation ensures ___.)_

---

### Scenario 8

The following requirement is under review:

> “The system shall allow scanning even offline.”  
> The team discovers this is technically impossible with current device APIs.

**Q10.**  
Which **Quality Gateway test** fails here, and what should the analysts do before approving it?

---

---

## 🧠 **Challenge (Comprehensive Application)**

**Q11.**  
Imagine you are the analyst performing a Quality Gateway review.  
The requirement says:

> “The system shall display sorting information that is easy to understand for all users.”

a) Identify what type of problem this requirement has (vague / measurable / traceability / viability / etc.)  
b) Rewrite it with a **Fit Criterion** so it becomes acceptable.

---

Would you like me to provide the **model answers + reasoning** for this practice set (so you can check your work and understand scoring logic)?
