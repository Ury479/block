---
layout: ../../../../../layouts/PostLayout.astro
title: ⭐ **Part A — Multiple Choice Questions（共 20 题）**
description: ⭐ Part A — Multiple Choice Questions（共 20 题） 2. Which malware is
  commonly installed after attackers brute force a PoS de
date: 2025-12-08T06:28:25.752Z
updated: 2025-12-08T06:40:27.458Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 5
sourceFolder: 计算机编程/习题集/se494
---

# ⭐ **Part A — Multiple Choice Questions（共 20 题）**

### **2. Which malware is commonly installed after attackers brute force a PoS device password?** b

A. Bootloader  
B. RAM scraper or keylogger  
C. Root certificate  
D. Anti-malware bypass tool

Result: **✅ Correct**

Explanation:  
攻击者成功登录 PoS/ATM 后会立即安装 **RAM scrapers（抓取内存中的卡号）** 或 **keyloggers（记录键盘输入如 PIN）**。这是 smash-and-grab 攻击的核心目的。

---

### **4. Which one is a PCI DSS requirement for organizations handling payment card data?** b

A. Allowing remote unencrypted access  
B. Conducting Common Point of Purchase (CPP) analysis  
C. Removing all antivirus software  
D. Sharing passwords among PoS operators

Result: **✅ Correct**

Explanation:  
CPP（Common Point of Purchase） 是 PCI 生态系统中的调查机制，用于发现卡号泄露发生在哪个商家。PCI 要求商户必须支持这一类调查和控制措施。

---

### **5. Smart cards with EMV chips enhance security primarily by:** c

A. Providing faster payments  
B. Being difficult to counterfeit  
C. Supporting only offline transactions  
D. Using magnetic stripe data
Your answer: **C**  
Correct answer: **B (Being difficult to counterfeit)**

Result: **❌ Incorrect**

### ❗ Why your answer is incorrect:

选项 C（“supporting only offline transactions”）不准确：

- EMV 芯片支持 **在线和离线交易**，并不是仅限 offline。
    
- 它的主要安全优势是 **几乎无法被复制或克隆**，相比磁条卡安全性高得多。
    

### ✔ Correct Concept:

EMV 卡的安全优势来自：

- 动态验证（Dynamic Authentication）
    
- 芯片难以克隆（难伪造）
    
- 有效阻止复制型卡片欺诈
    

📌 因此最准确的描述是：  
**B. Being difficult to counterfeit**

---

### **6. Which of the following controls helps prevent unauthorized use of ATM/POS systems for other purposes?**

A. Enable guest accounts  
B. Remove unnecessary applications  
C. Disable patching  
D. Set all accounts to admin

---

### **7. CPP analysis is used to:**

A. Test firewall rules  
B. Identify where payment card theft originated  
C. Encrypt all customer data  
D. Validate antivirus signatures

---

### **8. During a POS audit under PCI DSS, which of the following is required?**

A. Policies and procedures covering overrides and incident response  
B. Allowing default “1234” PINs  
C. Disabling audit trails to protect privacy  
D. Removing encryption on stored card data

---

### **9. In risk management roles, who allocates resources and uses risk assessment results?**

A. System/Information Owners  
B. IT Security Practitioners  
C. Governance & Senior Management  
D. Security Trainers

---

### **10. Who is responsible for implementing technical security controls in systems and networks?**

A. Info Security Manager  
B. IT Security Practitioners  
C. Business Managers  
D. Chief Information Officer

---

### **11. Business Managers (Process Owners) are primarily responsible for:**

A. Creating encryption algorithms  
B. Making difficult decisions on priorities that align with business goals  
C. Conducting patching on PoS devices  
D. Writing firewall rules

---

### **12. System/Information Owners must ensure that controls address:**

A. Audit-only requirements  
B. CIA (Confidentiality, Integrity, Availability)  
C. Only network-level attacks  
D. PCI DSS governance

---

### **13. The Chief Information Officer (CIO) is responsible for:**

A. Physical access control  
B. IT planning, budget, and performance including risk  
C. Conducting security awareness training  
D. Writing user policies

---

### **14. Security Trainers play which role in risk management?**

A. Approve system changes  
B. Install PoS applications  
C. Develop materials to educate end users  
D. Configure intrusion detection systems

---

### **15. Risk management must be aligned with:**

A. Personal preferences of IT staff  
B. Business strategy and direction  
C. Vendor marketing requirements  
D. Static annual plans only

---

### **16. Risk management must be a joint effort between:**

A. Only the IT department  
B. Business units, IS, and security teams  
C. Vendors and customers  
D. PCI assessors only

---

### **17. A steering committee in risk management is responsible for:**

A. Writing firewall rules  
B. Setting risk management priorities  
C. Installing antivirus  
D. Managing PoS daily operations

---

### **18. Which of the following is a strong control for POS/ATM remote access?**

A. Shared admin passwords  
B. One-time passwords (OTP)  
C. Disabling all encryption  
D. Allowing unlimited login attempts

---

### **19. Patching POS/ATM systems is critical because:**

A. It prevents the need for audits  
B. Attackers commonly exploit outdated software  
C. PCI DSS forbids patching  
D. It reduces transaction delays

---

### **20. Encrypting all customer data on POS systems helps mainly to:**

A. Improve system boot speed  
B. Reduce RAM usage  
C. Prevent misuse if data is stolen  
D. Help marketing analytics

---

# ⭐ **Part B — Concept Explanation Questions（共 5 题）**

### **21. Explain how a “smash-and-grab” POS/ATM attack works and why it is effective.**

**Answer:**  
(Leave space)

---

### **22. Explain why removing unnecessary applications from PoS/ATM devices is a key control measure.**

**Answer:**  
(Leave space)

---

### **23. Describe the purpose and importance of EMV chip cards in preventing payment card fraud.**

**Answer:**  
(Leave space)

---

### **24. Explain the role of Business Managers (Process Owners) in cybersecurity risk prioritization.**

**Answer:**  
(Leave space)

---

### **25. Define what “business-driven risk management” means and explain why risk management should not be technology-driven.**

**Answer:**  
(Leave space)

---

# ⭐ **Part C — Concept Comparison Questions（共 5 题）**

### **26. Compare RAM scrapers vs keyloggers in terms of how they steal data on POS/ATM devices.**

**Answer:**  
(Leave space)

---

### **27. Compare Governance/Senior Management and the CIO in terms of strategic responsibilities for risk.**

**Answer:**  
(Leave space)

---

### **28. Compare IT Security Practitioners and Security Trainers in the risk management process.**

**Answer:**  
(Leave space)

---

### **29. Compare PCI DSS audits and CPP analysis: what problems do they detect and how are they used?**

**Answer:**  
(Leave space)

---

### **30. Compare multi-factor authentication (MFA) for POS systems with simply using long passwords: why is MFA significantly stronger?**

**Answer:**  
(Leave space)

---

# ✅ 是否需要我为这 30 题提供 **参考答案**？

我可以根据你的需求提供：

- 全部答案
    
- 只提供选择题答案
    
- 或者先让你作答，我帮你做 **错题分析（按你最初的需求格式）**
    

你想怎么继续？
