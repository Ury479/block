---
layout: ../../../../../../layouts/PostLayout.astro
title: 📘 **Part 3 — Concept Comparison**
description: 2. In top down integration testing, which component is commonly
  used to replace unfinished lower modules? c A. Drivers B
date: 2025-11-28T06:32:21.128Z
updated: 2026-01-25T02:29:08.837Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 4
sourceFolder: 计算机编程/习题集/se323/未命名 1
---

### **2. In top-down integration testing, which component is commonly used to replace unfinished lower modules?** c

A. Drivers  
B. Stubs  
C. Hooks  
D. Mocks

Correct answer: B (Stubs)  
❌ Incorrect  
Explanation:  
Top-down integration replaces unfinished **lower-level modules** with **stubs**.  
A stub simulates the behavior of a missing lower component.  
Hooks are unrelated to integration testing.

---
### **5. Which technique combines both top-down and bottom-up integration strategies?** c

A. Regression testing  
B. Sandwich integration  
C. Smoke testing  
D. Cluster integration

Correct answer: B (Sandwich integration)  
❌ Incorrect  
Explanation:  
**Sandwich integration** = Top-Down + Bottom-Up mixed strategy.  
Smoke testing is a shallow build verification test, not an integration strategy.

---

### **6. Which statement best describes smoke testing?**  b

A. A deep test focusing on every path of the system  
B. A quick and shallow test to ensure the build is stable  
C. A technique used only after deployment  
D. A test that checks memory leaks only

---

### **7. Which types of test cases should a regression test suite include?** c

A. Only new test cases  
B. Only UI-related test cases  
C. New tests, representative system tests, and tests for modified components  
D. Only tests for the changed module

---

### **8. Which integration technique makes error localization easiest?** a

A. Incremental integration  
B. Smoke testing  
C. Stress testing  
D. Random integration

---
### **1. Explain what a “stub” is and why it is used in top-down integration testing.**

Answer:

---

### **2. Describe the purpose of regression testing and explain when it should be used.**

Answer:

---

### **3. What is smoke testing? Explain why software teams perform it frequently during development.**

Answer:

---

### **4. Explain why bottom-up integration testing requires drivers.**

Answer:

---

# 📘 **Part 3 — Concept Comparison**

### (概念比较题 · 全英文)

---

### **1. Compare Top-Down and Bottom-Up integration testing in terms of process and required test components.**

Answer: Top-Down is from basement to the top unit and Bottom-Up integration testing is the from top to bottom.

Top-Down integration starts from the main control module and integrates downward, using stubs for lower modules that are not ready. Bottom-Up integration starts from low-level modules, groups them into clusters, tests using drivers, and then integrates upward while removing drivers as higher-level modules become available.

---

### **2. Compare smoke testing and regression testing in terms of goals and depth of testing.**

Answer:

---

### **3. Compare incremental integration and sandwich integration. How do they differ in structure and execution?**
1. Low-level tests are mainly used to:  a
    A. Validate major system functions against customer needs  
    B. Verify a small source-code segment is correctly implemented  
    C. Replace all integration testing  
    D. Ensure the UI is usable
    **: B** ❌ (you answered A)

- Why correct: Low-level tests verify a _small source-code segment_ is correctly implemented.
    
- Why others wrong:
    
    - A describes high-level tests (validate major functions vs customer requirements).
        
    - C/D are incorrect scope/purpose statements.
        
- Key concept: Low-level vs high-level tests.
    
- Related topics: Unit testing focus and rationale
    
2. Which testing level focuses primarily on a single module/component in isolation?  b
    A. Unit testing  
    B. Integration testing  
    C. System testing  
    D. Acceptance testing
    
3. Which testing level focuses on interfaces and interactions between components?  a
    A. Unit testing  
    B. Integration testing  
    C. Acceptance testing  
    D. Static analysis
    
4. Which statement best matches the lecture’s definition of an “error” (in testing context)?  b
    A. A human mistake only  
    B. A difference between actual output and specified correct output  
    C. A confirmed defect in code structure  
    D. A system crash only
    
5. Which pairing is most consistent with “Error, Fault, Failure” relationship?  b
    A. Fault causes error; error causes failure  
    B. Error causes fault; fault may cause failure  
    C. Failure causes error; error causes fault  
    D. They are identical terms
    
6. In Top-Down integration, missing lower-level modules are replaced by:  
    A. Drivers  
    B. Stubs  
    C. Compilers  
    D. Test logs
    
7. In Bottom-Up integration, missing higher-level control modules are replaced by:  
    A. Drivers  
    B. Stubs  
    C. Requirement specs  
    D. Code formatters
    
8. The main goal of integration testing is to:  
    A. Check if each line of code compiles  
    B. Check interactions/interfaces between combined components  
    C. Validate business goals with end users  
    D. Measure long-term maintainability only
    
9. Which statement best describes the testing objective mentioned in the lecture?  
    A. Write tests to show the code is correct  
    B. Test with a high probability of discovering errors and detect errors against SRS  
    C. Avoid testing to reduce schedule risk  
    D. Only test UI functions because users see them
    

Short Answer (Lecture 1–3)  
Write 2–4 lines each.

16. Explain the difference between low-level tests and high-level tests.
    

Answer:

17. Explain how “error,” “fault/defect,” and “failure” differ, using a simple example.
    

Answer:

18. Compare predictive vs adaptive development models in terms of requirement stability and planning.
    

Answer:

19. Describe Top-Down vs Bottom-Up integration in one sentence each, including required test components.
    

Answer:

20. Why can testing find defects but cannot prove the absence of all defects?
    

Answer:
