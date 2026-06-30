---
layout: ../../../../../../layouts/PostLayout.astro
title: "Review Questions: _Where to Perform the Tests?_"
description: "Review Questions: Where to Perform the Tests? Section A: Multiple
  Choice Q1. What primarily drives the decision of where"
date: 2025-12-19T06:22:55.512Z
updated: 2025-12-19T13:28:10.536Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 5
sourceFolder: 计算机编程/习题集/se323/未命名 1
---

# Review Questions: _Where to Perform the Tests?_

## Section A: Multiple Choice

**Q1.** What primarily drives the decision of where to perform system tests?   b
A. The availability of testing tools  
B. The computerized environment  
C. The experience level of testers  
D. The size of the development team
✅ **Correct**

> What primarily drives the decision of where to perform system tests?

**Why this is correct (from the slide):**  
The slide literally says:

> _“The choice is driven by the computerized environment.”_

So this one is **perfect**. No changes needed.

---

**Q2.** According to the slide, why is it difficult to test only at the developer’s office?  a -c
A. Developers lack access to test data  
B. Customer behavior cannot be predicted  
C. The customer’s actual setup is hard to perfectly simulate  
D. Testing costs are too high

**Your answer:** A ❌  
**Correct choice:** **C**

> Why is it difficult to test only at the developer’s office?

### Key slide sentence

> _“It is often difficult to perfectly simulate the customer’s actual setup at the developer’s office.”_

### Why A is wrong

- The slide **never mentions** lack of test data
    
- That idea is **not in the course material**
    
### Why C is correct

- It directly matches the slide wording
    
- This is a **definition-level question**, not interpretation
    
📌 **Fix in your head:**  
When you see _developer’s office_ → think **“cannot perfectly simulate customer setup”**

---

**Q3.** Which type of failures are more likely to be discovered at the customer’s site?  b -c
A. Syntax errors  
B. Logic errors in small modules  
C. Unpredicted failures in the real-world environment  
D. Documentation errors
**Your answer:** B ❌  
**Correct choice:** **C**

> Which type of failures are more likely to be discovered at the customer’s site?

### Key slide phrase

> _“unpredicted failures that might only appear in the real-world environment”_

### Why B is wrong

- Logic errors in small modules are usually found in:
    
    - Unit testing
        
    - Integration testing
        
- The slide is **not talking about code-level issues**
    

### Why C is correct

- It exactly matches:
    
    - _unpredicted_
        
    - _real-world environment_
        

📌 **Fix in your head:**  
Customer site = **real-world failures**, not small logic bugs.

---

## Section C: Short Answer
**Q7.** What does the slide mean by _environmental differences_ in the context of testing location?
the deployment environment is different because the situcation for the software is different.

**What needs improvement:**

- Too vague
    
- Does not explicitly mention _developer vs customer environment_
### Exam-safe refined version

> Environmental differences mean that the customer’s actual operating environment is different from the developer’s environment and cannot be perfectly simulated at the developer’s office.

📌 Why this works:

- Directly matches the slide wording
    
- Uses **“actual setup”** and **“developer’s office”** idea
    
- Clear and specific

---

**Q8.** Why does testing at the customer’s site help reduce risk?
 the situation of customer’s site is different and will expose the potential problems.

**What needs improvement:**

- Needs the phrase _real-world environment_
    
- Should connect explicitly to _unpredicted failures_
    
### Exam-safe refined version

> Testing at the customer’s site helps reduce risk because it can expose unpredicted failures that only appear in the real-world environment.

📌 Why this works:

- Uses **exact slide language**
    
- Clear cause → effect
    
- One sentence is enough for full marks

---

**Q9.** How does performing tests at the target site affect customer acceptance?
the target site will analyse the condition to make a jugement that if it acceptable to build teh currency.

**Main issues:**

- “build the currency” is incorrect (likely meant _system_ or _solution_)
    
- Needs to mention **confidence** and **acceptance**
    

### Exam-safe refined version

> Performing tests at the target site increases customer confidence and helps them decide whether to accept the system.

📌 Why this works:

- Directly reflects the slide
    
- Simple and clear
    
- No unnecessary explanation

---
## Section D: Concept Connection
**Q10.** Explain how _environmental differences_ and _reducing risk_ are related when choosing a testing location.
the customer site could expose the risks and do the integration testing.

**Environmental differences ↔ Reducing risk**

**Your answer (idea check):**  
⚠️ Partially correct

- You correctly mention **customer site**
    
- But:
    
    - _Integration testing_ is **not mentioned on the slide**
        
    - The connection between the two concepts is not explicit
        

### What the slide is actually connecting

The slide’s logic is:

> Environmental differences → Real-world behavior differs → Hidden failures → Risk

### Exam-safe refined version

> Environmental differences increase risk because the customer’s real operating environment may behave differently from the developer’s environment, and testing at the customer’s site helps expose unpredicted real-world failures.

📌 Why this is safe:

- Uses **only slide concepts**
    
- Clearly links _environment_ → _risk_

---

**Q11.** Why might customer apprehension be lower when system tests are performed at the target site?
because it do the testing for the system and do the integration.

**Your answer (idea check):**  
⚠️ Weak but pointing in the right direction

Problems:

- “do the testing” is too generic
    
- “integration” again is **not in the slide**
    
- Missing the key word: **confidence**
    

### What the slide emphasizes

The slide explicitly says:

- Testing at the target site **increases confidence**
    
- Which **reduces apprehension** about acceptance
    

### Exam-safe refined version

> Customer apprehension may be lower because seeing the system tested successfully in their own environment increases confidence in accepting the system.

📌 Key fix:

- Focus on **psychological assurance**, not technical testing

---

## Section E: One-Sentence Reflection
**Q12.** In one sentence, summarize why the slide argues for performing tests at the customer’s site.
The customer’s actual setup is hard to perfectly simulate so it could detect the potential problems.

ou captured the **core reason**, just missing one outcome.

### What’s missing

- The slide mentions not only detecting problems
    
- But also **risk reduction and acceptance**
    

### Exam-safe refined version

> The slide argues for performing tests at the customer’s site because the customer’s actual setup is difficult to simulate and real-world testing helps detect potential problems and reduce risk.

📌 This version:

- Still one sentence
    
- Still simple
    
- Covers the slide’s full intention
