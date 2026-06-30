---
layout: ../../../../../layouts/PostLayout.astro
title: lec1
description: Alright — here’s your practice set for USE CASE diagram II English
  only, as requested . We’ll cover MCQs , scenario anal
date: 2025-08-15T07:57:23.907Z
updated: 2025-08-15T08:17:43.814Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 4
sourceFolder: 计算机编程/习题集/se321
---

Alright — here’s your **practice set** for **USE CASE diagram II** (English only, as requested).  
We’ll cover **MCQs**, **scenario analysis**, and **comparison questions**.

---

## **Part 1 – Multiple Choice Questions (MCQ)** #一周目

**Q1.** In a use case diagram, which relationship indicates that the base use case cannot complete without executing the included use case?  c
A. Generalization  
B. Include  
C. Extend  
D. Association

– ❌ Incorrect

- **Your answer:** C (Extend)
    
- **Correct answer:** **B (Include)**
    
    - Reason: `<<include>>` means the base use case **must** execute the included use case to complete. `<<extend>>` is optional behavior.
---

**Q2.** Which of the following is **true** about an `<<extend>>` relationship?  b
A. The base use case always requires the extension use case to finish.  
B. The extension use case adds optional behavior that occurs under certain conditions.  
C. It extracts common sub-activities into reusable components.  
D. It is represented by a solid line with a large arrowhead.

---

**Q3.** In actor generalization, which statement is **correct**?  a
A. The sub-actor inherits the behavior of the super-actor and can have its own extra actions.  
B. The super-actor inherits the behavior of the sub-actor.  
C. Generalization means the two actors have no relationship.  
D. Actor generalization is used only for optional functionality.

---

**Q4.** Which notation is correct for an `<<include>>` relationship in UML?  a
A. Dashed arrow with open arrowhead from base use case to included use case.  
B. Solid arrow with closed arrowhead from included use case to base use case.  
C. Dashed arrow with closed arrowhead from extension use case to base use case.  
D. Solid arrow with open arrowhead from base use case to included use case.

---

## **Part 2 – Scenario Analysis**

**Q5.** You are designing a university registration system:

- All students must log in before registering for a course.
    
- Before registering, the system must check available seats.
    
- Students can optionally view a help guide during registration.
    

**Tasks:**

1. Identify the **base** use case(s).
    
2. Identify the `<<include>>` relationship(s).
    
3. Identify the `<<extend>>` relationship(s).
    

---

**Q6.** In an e-commerce website:

- The customer can “Place Order”.
    
- The system always “Calculate Shipping Cost” when placing an order.
    
- The customer can optionally “Apply Discount Coupon” before checkout.
    

**Question:** Which use case relationships will you use between “Place Order” and the two sub-functions?

---

## **Part 3 – Comparison**

**Q7.** Compare **Include** vs **Extend** relationships in terms of:

1. Purpose
    
2. Base use case completeness
    
3. Typical real-world example
    

---

**Q8.** Actor Generalization vs Use Case Generalization — What is being generalized in each case, and why would you use one instead of the other?

---

Alright — here’s a **targeted Include vs Extend drill** with tricky scenarios to help you master the difference.

---

## **Part 1 – Quick Concept Refresh** #二周目

- **Include** → **Mandatory** sub-use case; base cannot complete without it.  
    Think: **"always happens"**. 必要条件
    
- **Extend** → **Optional/conditional** behavior; base works fine without it.  
    Think: **"sometimes happens"**. 充分条件
    

---

## **Part 2 – Practice Scenarios**

**Q1.**  
A library system has a “Borrow Book” use case. 

- Every time a book is borrowed, the system must “Check Membership Status”.
    

**Which relationship?**  a
A. Include  
B. Extend

---

**Q2.**  
In the same library system, when a user borrows a book, the system may “Suggest Similar Books” — but only if the book has related titles. 

**Which relationship?**  b
A. Include  
B. Extend

---

**Q3.**  
In an online ticket booking system:

- “Book Ticket” always involves “Process Payment”. - extend
    
- The system may “Send Promotional Offer” if the customer opts in during booking. - optional
    

**Match each pair to the correct relationship type.** 

**Q3** – ❌ Incorrect on first part

- **"Book Ticket" → "Process Payment"**: **Include** (mandatory step). You marked Extend, but it's not optional.
    
- **"Send Promotional Offer"**: **Extend** (optional). You got this one right.
---

**Q4.**  
In a bank ATM system:

- “Withdraw Cash” always needs “Authenticate User”. - extend
    
- Sometimes, if the withdrawal exceeds a limit, “Notify Bank Manager” is triggered. -optional
    

**Identify which is Include and which is Extend.**

**Q4** – ❌ Incorrect on first part

- **"Withdraw Cash" → "Authenticate User"**: **Include** (always required). You marked Extend, but it's not conditional.
    
- **"Notify Bank Manager"**: **Extend** (optional when condition is met). You got this one right.
---

**Q5.**  
A food delivery app:

- “Place Order” → must “Verify Restaurant Availability”. -extend
    
- “Place Order” → may “Apply First-Time Discount” (only for new users). -optional
    

**State the relationship for each.**

**Q5** – ❌ Incorrect on first part

- **"Place Order" → "Verify Restaurant Availability"**: **Include** (must happen every time). You marked Extend, but it's not optional.
    
- **"Apply First-Time Discount"**: **Extend** (optional for new users). Correct.
---
### **Summary Score:**

- Correct: Q1, Q2 fully correct.
    
- Partial: Q3, Q4, Q5 (optional ones correct, mandatory ones mistaken as Extend).
    
- **Overall:** You’re still mixing up **mandatory** vs **optional** when the scenario wording is not obvious.
    

---

### **Key Fix Tip**

Whenever you see **"must"**, **"always"**, **"every time"**, it’s **Include**.  
When you see **"may"**, **"sometimes"**, **"only if"**, it’s **Extend**.
