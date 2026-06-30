---
layout: ../../../../../../layouts/PostLayout.astro
title: lec3
description: 1. Which statement best describes a software failure ? d A. A human
  mistake made during coding B. A defect embedded in t
date: 2025-12-16T06:59:19.548Z
updated: 2025-12-16T07:16:21.169Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/习题集/se323/未命名 1
---

1. Which statement best describes a **software failure**?  d
    A. A human mistake made during coding  
    B. A defect embedded in the source code  
    C. The software behaving differently from its specification at runtime  
    D. A syntax error detected by the compiler

Correct answer: C (The software behaving differently from its specification at runtime) ❌

Explanation:  
A software failure is an externally observable incorrect behavior that occurs when the program is executed and deviates from its specification.

- A syntax error (D) is detected before execution and is a type of error/fault, not a failure.
    
- A failure only happens at runtime and is visible to users or testers.  
    Key distinction to remember:  
    Syntax error → compile-time problem  
    Failure → runtime behavior problem
    

How to avoid this mistake next time:  
If the question mentions “runtime”, “behavior”, or “specification”, it is almost always talking about a failure.

---

2. In the **Error → Fault → Failure** chain, which event happens **first**?  c
    A. The software crashes during execution  
    B. A fault is triggered by specific input  
    C. A human makes a mistake  
    D. A tester reports a defect
    

---

3. Which of the following is the **main purpose of static testing**?  c
    A. To measure system performance under load  
    B. To execute the program with test cases  
    C. To find defects without running the software  
    D. To validate user requirements in production
