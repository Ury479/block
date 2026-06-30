---
layout: ../../../../../layouts/PostLayout.astro
title: lec4.1
description: "1. In test prioritization, factor A most directly represents: a A.
  The probability the component will fail B. The damage"
date: 2025-12-23T07:22:07.122Z
updated: 2025-12-23T08:00:05.842Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/习题集/测试开发
---

1. In test prioritization, factor **A** most directly represents:   a
    A. The probability the component will fail  
    B. The damage/impact if the component fails  
    C. The number of test cases available  
    D. The experience level of the testers
Correct answer: B ✅/❌: ❌  
Explanation: In the slide, A is “damage severity grading” (impact if it fails). B is “risk severity grading” (likelihood). You chose likelihood, which belongs to B, not A. Easy fix: remember “A = After it fails, how bad?” “B = Before it fails, how likely?”

2. During planning, **unit tests** are generally performed by:  a
    A. End users at the customer site  
    B. The software development team  
    C. External testing consultants only  
    D. The project sponsor
Correct answer: B ✅/❌: ❌  
Explanation: Unit tests are typically done by the software development team because developers are closest to the code and can run them frequently. End users usually do acceptance tests, not unit tests.
    
3. **System tests** are usually performed by:  b
    A. An independent testing team (internal QA or external consultants)  
    B. Only the same developer who wrote the module  
    C. Only the operations team  
    D. Only automated tools without humans
Q4. System tests are usually performed by:  
Your answer: B  
Correct answer: A ✅/❌: ❌  
Explanation: System tests are usually performed by an independent testing team (internal QA or external consultants). Reason: independence reduces developer bias and increases credibility, especially for end-to-end behavior across the whole system.
    
4. Which termination approach uses **intentionally inserted known faults** to evaluate test effectiveness?   b
    A. Completed implementation route  
    B. Mathematical models route  
    C. Error seeding route  
    D. Dual independent testing teams route
    Correct answer: C ✅/❌: ❌  
Explanation: “Error seeding” literally means you seed (insert) known faults, then measure how many are detected to estimate test effectiveness/remaining faults. Mathematical models route is about reliability/defect trend modeling, not inserting faults.

---

三、Short Answer (1–2) — English

1. Explain why system testing is often assigned to an **independent testing team**.
    

Answer:  system testing is connected to the operation of system and aims to find the risks and potential threten in the network.

2. Explain how **A/B/C prioritization** can influence (a) what gets tested first and (b) who should perform those tests.
    

Answer:A means what to test because A is the risks of system and B is who should perform those tests.
