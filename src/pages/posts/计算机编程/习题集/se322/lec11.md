---
layout: ../../../../../layouts/PostLayout.astro
title: lec11
description: 🧩 A. Multiple Choice Questions 选择题 1. Which statement best
  describes Emergent Design ? b A. Design is fully defined bef
date: 2025-10-09T03:21:29.468Z
updated: 2025-10-09T03:37:56.464Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 3
sourceFolder: 计算机编程/习题集/se322
---

## 🧩 **A. Multiple Choice Questions (选择题)**

1. Which statement best describes **Emergent Design**?  b
    A. Design is fully defined before implementation starts.  
    B. Design gradually evolves through coding, testing, and reflection.  
    C. Design is ignored and replaced by ad-hoc coding.  
    D. Design only happens after deployment.
    

---

2. The key difference between **Traditional Design** and **Emergent Design** is that:  b
    A. Traditional design focuses on direction, emergent design focuses on decision.  
    B. Traditional design decides everything upfront, emergent design adjusts as you code.  
    C. Emergent design eliminates all design principles.  
    D. Traditional design avoids reflection and testing.
    

---

3. According to the **Single Responsibility Principle (SRP)**, a class should:  b
    A. Handle all related operations to reduce class count.  
    B. Have only one reason to change.  
    C. Contain both UI and business logic for consistency.  
    D. Handle data persistence and display logic together.
    

---

4. The **Open-Closed Principle (OCP)** means that software entities should be:  c
    A. Open for modification, closed for extension.  
    B. Open for both modification and extension.  
    C. Closed for modification, open for extension.  
    D. Closed for both modification and extension.
    

---

5. Which principle does the following violate? d  -b
    
    ```java
    a.getB().getC().doSomething();
    ```
    
    A. DRY  
    B. Law of Demeter  
    C. DIP  
    D. ISP
    

---

6. The **Dependency Inversion Principle (DIP)** encourages:  a -b
    A. High-level modules to depend directly on low-level modules.  
    B. Details to depend on abstractions.  
    C. Using only concrete classes to simplify dependencies.  
    D. Completely removing interfaces from the system.
    

---

7. “Do not ask an object for its data and then act on it; tell it what to do instead” refers to:  d -c
    A. Law of Demeter  
    B. Design by Contract  
    C. Don’t Ask, Tell  
    D. Liskov Substitution Principle
    

---

8. In **Design by Contract**, who ensures that the _preconditions_ are met before calling a method?  b
    A. The supplier  
    B. The client  
    C. The compiler  
    D. The operating system
    

---

9. The **Class Invariant** in Design by Contract defines:  c - b
    A. A property that can change during method execution.  
    B. A property that must always remain true for the object.  
    C. The external interface of the class.  
    D. The algorithm used in a method.
    

---

10. According to the **Liskov Substitution Principle (LSP)**, a derived class must:  a -c
    A. Strengthen preconditions and weaken postconditions.  
    B. Weaken preconditions and strengthen postconditions.  
    C. Change both pre- and postconditions arbitrarily.  
    D. Ignore contracts from the base class.
    

---

## 🧱 **B. Concept Explanation Questions (概念解释题)**

1. Explain what “Emergent Design” means in your own words, and describe how it differs from “Traditional Design”.  
    Answer: _______
    

---

2. Explain the **Dependency Inversion Principle (DIP)** and give a practical example.  
    Answer: _______
    

---

3. What does the **Law of Demeter** (Least Knowledge Principle) aim to achieve? Provide a short code example.  
    Answer: _______
    

---

4. Define **Design by Contract**, and explain the meaning of “pre-condition”, “post-condition”, and “class invariant”.  
    Answer: _______
    

---

5. Why is the **Single Responsibility Principle (SRP)** considered the foundation of maintainable software design?  
    Answer: _______
    

---

## ⚖️ **C. Comparison & Reflection (比较与思考题)**

1. Compare **Open-Closed Principle (OCP)** and **Dependency Inversion Principle (DIP)** in terms of extensibility and dependency management.  
    Answer: _______
    

---

2. Compare **DRY** and **SRP** — both seem to reduce duplication, but what’s the key difference in focus?  
    Answer: _______
    

---

3. How does **Emergent Design** leverage principles like SOLID and Design by Contract to “steer” design direction instead of defining everything up front?  
    Answer: _______
    

---

4. Explain how **Liskov Substitution Principle (LSP)** is mathematically linked to **Design by Contract** (pre/post-condition consistency).  
    Answer: _______
    

---

5. Reflect: In your own project experience, when might “Emergent Design” be _better_ than “Big Upfront Design”?  
    Answer: _______
    

---

是否希望我接下来帮你写出 **这套题的标准答案（中英对照）**，用于复习或导入 Quizlet / Anki？  
那样你就能用它来背概念或做自测练习。
