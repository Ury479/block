---
layout: ../../../../../layouts/PostLayout.astro
title: 📘 Practice Questions (30)
description: Perfect 👍 Based on ch6 – Creational Patterns Factory Method,
  Abstract Factory, Builder, Prototype, Singleton and the re
date: 2025-09-15T03:36:52.055Z
updated: 2025-09-15T05:04:11.220Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 6
sourceFolder: 计算机编程/习题集/se322
---

Perfect 👍 Based on **ch6 – Creational Patterns** (Factory Method, Abstract Factory, Builder, Prototype, Singleton) and the related GOF background, I’ll generate **30 practice questions in English**.  
I’ll mix **Multiple Choice (MCQ)**, **Concept Explanation**, and **Concept Comparison** types.

---

# 📘 Practice Questions (30)

## 🔹 Multiple Choice (15)

1. Which Creational Pattern allows subclasses to decide which class to instantiate?  B
    A. Builder  
    B. Prototype  
    C. Factory Method  
    D. Singleton
Correct answer: C (Factory Method) ❌  
解释：Factory Method 的意图就是“让子类决定要实例化哪一个类”。Prototype 是通过克隆对象来创建实例。
    
2. Abstract Factory pattern ensures that:  b
    A. Products are cloned from existing prototypes  
    B. Products from the same family are compatible with each other  
    C. Only one product instance exists in the system  
    D. Complex objects are built step by step
    Correct answer: B ✅  
解释：抽象工厂保证产品族的一致性，即同一工厂生产的对象相互兼容。
    
3. Which problem is solved by the Builder pattern?  d
    A. Need for cloning objects  
    B. Need for global access point  
    C. Need to replace telescoping constructors  
    D. Need to adapt incompatible interfaces
Correct answer: C (Need to replace telescoping constructors) ❌  
解释：Builder 模式主要解决复杂对象构建问题（尤其是多参数构造函数问题）。D 选项描述的是 **Adapter** 模式
    
4. The Prototype pattern is best used when:  c
    A. Concrete classes should remain hidden from client code  
    B. Products must always be consistent across families  
    C. The object construction is independent from representation  
    D. A single instance is required globally
    Correct answer: A (Concrete classes should remain hidden from client code) ❌  
解释：Prototype 允许在不知道具体类的情况下，通过克隆已有对象来创建新实例。C 选项其实是 **Builder** 的特点。
    
5. Which of the following is NOT a Creational Pattern?  b
    A. Factory Method  
    B. Decorator  
    C. Prototype  
    D. Builder
    Correct answer: B ✅  
解释：Decorator 属于 **Structural Pattern**，其余都是 Creational。
    
6. Singleton pattern primarily ensures:  b
    A. Loose coupling between creator and product  
    B. One and only one instance of a class  
    C. Flexibility in algorithm selection  
    D. Step-by-step construction of an object
    Correct answer: B ✅  
解释：Singleton 保证一个类只有一个实例，并提供全局访问点。
    
7. Which Creational Pattern can serve as an alternative to Memento for simple objects?  a
    A. Builder  
    B. Prototype  
    C. Abstract Factory  
    D. Factory Method
    Correct answer: B (Prototype) ❌  
解释：对于简单对象，Prototype 可以替代 Memento 来保存历史状态。Builder 用于逐步构建复杂对象。
    
8. Which Creational Pattern is also known as “Virtual Constructor”?  d
    A. Singleton  
    B. Factory Method  
    C. Builder  
    D. Prototype
    Correct answer: B (Factory Method) ❌  
解释：Factory Method 又称 Virtual Constructor。Prototype 没有这个别名。
    
9. Which principle is directly supported by Factory Method and Abstract Factory?  c
    A. Liskov Substitution  
    B. Open/Closed  
    C. Interface Segregation  
    D. Dependency Inversion
    Correct answer: B (Open/Closed) ❌  
解释：这两个模式通过隐藏具体类、允许扩展新的产品，直接支持 **开闭原则（OCP）**。Interface Segregation 是 SOLID 中另一条原则。
    
10. Which is a disadvantage of the Singleton pattern?  d
    A. Forces multiple product families  
    B. Can be difficult to test due to global state  
    C. Always requires cloning  
    D. Makes subclassing impossible
Correct answer: B (Can be difficult to test due to global state) ❌  
解释：Singleton 的缺点在于全局状态导致测试困难，以及多线程下实例化控制复杂。Subclassing 并非它的核心问题。
    
11. Builder pattern separates:   a
    A. Object’s interface from its implementation  
    B. Object’s construction from its representation  
    C. Product families from concrete factories  
    D. Global instance from client code
Your answer: A (Object’s interface from its implementation)  
Correct answer: B (Object’s construction from its representation) ❌  
解释：Builder 的核心是将复杂对象的 **构建过程** 与 **表示** 分离。A 选项说的是 **Bridge** 模式。

12. Which Creational Pattern requires careful handling in multi-threaded environments?  b
    A. Singleton  
    B. Prototype  
    C. Builder  
    D. Factory Method
Correct answer: A (Singleton) ❌  
解释：Singleton 在多线程环境下可能被多次实例化，需要额外同步机制。Prototype 与多线程无直接冲突。
    
13. Which of these is NOT typically related to Factory Method?  b
    A. Iterator  
    B. Template Method  
    C. Adapter  
    D. Abstract Factory
Your answer: B (Template Method)  
Correct answer: C (Adapter) ❌  
解释：Factory Method 与 Template Method、Iterator、Abstract Factory 都常有关联。Adapter 属于结构型模式，与 Factory Method 无关。
    
14. Flyweight and Singleton differ because:  b
    A. Singleton supports cloning, Flyweight does not  
    B. Flyweight allows many shared instances, Singleton enforces one instance  
    C. Singleton is immutable, Flyweight is mutable  
    D. Flyweight is only for UI objects
    Correct answer: B ✅  
解释：Singleton → 只允许一个实例；Flyweight → 允许多个共享实例（内部状态不可变）。

---

## 🔹 Concept Explanation (10)

16. Explain why Factory Method is sometimes called a “Virtual Constructor.”
    
17. Describe the main advantage of using Abstract Factory over Factory Method.
    
18. Explain how the Builder pattern helps remove “telescoping constructors.”
    
19. What are the pros and cons of using Prototype pattern?
    
20. Describe two situations where Singleton pattern is appropriate.
    
21. Explain why Singleton may violate the Single Responsibility Principle.
    
22. How does Builder support the Single Responsibility Principle?
    
23. Why is Abstract Factory often based on Factory Methods?
    
24. Explain how Prototype can be used in systems that heavily apply Composite or Decorator.
    
25. Why can Singleton be difficult to test in unit testing frameworks?
    

---

## 🔹 Concept Comparison (5)

26. Compare Factory Method vs Abstract Factory in terms of scope and purpose.
    
27. Compare Builder vs Prototype with respect to how objects are created.
    
28. Compare Singleton vs Flyweight in terms of number of instances and mutability.
    
29. Compare Abstract Factory vs Facade in terms of intent.
    
30. Compare Factory Method vs Template Method patterns.
    

---

👉 That’s a full set of **30 questions** (15 MCQs, 10 Explanations, 5 Comparisons) directly aligned to your lecture slides.

Do you want me to **also generate an answer key** for these, or would you prefer to try answering first and then I’ll correct?
