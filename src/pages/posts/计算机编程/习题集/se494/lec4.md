---
layout: ../../../../../layouts/PostLayout.astro
title: ✅ **PART A – Multiple Choice Questions（No Answers Provided）**
description: ✅ PART A – Multiple Choice Questions（No Answers Provided） 1. What
  is the main purpose of Directive Controls? a A. Preven
date: 2025-12-10T03:27:39.899Z
updated: 2025-12-10T06:49:32.129Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 8
sourceFolder: 计算机编程/习题集/se494
---

# ✅ **PART A – Multiple Choice Questions（No Answers Provided）**

### **1. What is the main purpose of Directive Controls?** a

A. Prevent attacks  
B. Provide guidance and expected behavior  
C. Detect intrusions  
D. Recover systems

Correct answer: B  
Explanation:  
Directive controls do not prevent attacks. They provide rules, guidance, expectations, and required behavior (e.g., policies, standards). Their purpose is to influence actions, not technically stop threats.

---

### **2. Which of the following is a Directive Control?** c

A. Firewall rules  
B. Encryption  
C. Security policies  
D. Intrusion detection systems

Correct answer: C  
Explanation:  
Security policies are Directive Controls. They define what users and systems should or must do. Good job

---

### **3. Encryption is classified as which type of control?** c

A. Directive  
B. Preventive  
C. Detective  
D. Recovery

Correct answer: B  
Explanation:  
Encryption is a Preventive Control because it prevents unauthorized disclosure. Detective controls discover incidents; encryption does not discover anything.

---

### **4. Preventive Controls are designed to:** d

A. Repair damage  
B. Stop incidents before they occur  
C. Provide mandatory policies  
D. Identify security breaches

Correct answer: B  
Explanation:  
Preventive controls block incidents before they occur.  
Option D describes detective controls (they identify breaches).

---

### **5. Why must data classification be determined before selecting controls?** b

A. To increase system performance  
B. To decide which controls are appropriate  
C. To remove the need for monitoring  
D. To ensure systems run faster

Correct answer: B  
Explanation:  
Correct. The sensitivity level determines which preventive, directive, and technical controls should be applied.

---

### **6. Which control type technically enforces least privilege?**

A. Directive  
B. Preventive  
C. Corrective  
D. Recovery

---

### **7. Which control type discovers security incidents?**

A. Preventive  
B. Detective  
C. Corrective  
D. Directive

---

### **8. Which control type repairs issues after a security incident?**

A. Preventive  
B. Detective  
C. Corrective  
D. Directive

---

### **9. Why can't preventive controls operate alone?**

A. They require high cost  
B. They do not detect incidents  
C. No preventive control is perfect  
D. They violate compliance rules

---

### **10. Using multiple control types supports which security concept?**

A. Security through obscurity  
B. Single point of control  
C. Layered defense  
D. Maximum privilege

---

# ✅ **PART B – Concept Questions（Short Answer）**

### **1. Define Directive Controls and describe their purpose.**

---

### **2. Give two examples of Directive Controls and explain why they fit this category.**

---

### **3. Define Preventive Controls and describe their purpose.**

---

### **4. Explain why preventive controls must be reviewed regularly.**

---

### **5. Describe how Directive Controls support Separation of Duties.**

---

### **6. Explain the relationship between Preventive Controls and Least Privilege.**

---

### **7. Why are security controls part of the system life cycle?**

---

### **8. How do Directive Controls contribute to compliance?**

---

### **9. Explain why data classification is important before selecting security controls.**

---

### **10. Describe how Preventive Controls relate to risk mitigation.**

---

# ✅ **PART C – Comparison Questions（Compare & Contrast）**

### **1. Compare Directive Controls and Preventive Controls in terms of purpose and implementation.**

---

### **2. Compare Preventive Controls and Detective Controls.**

---

### **3. Compare Corrective Controls and Recovery Controls.**

---

### **4. Compare Administrative Controls and Technical Controls, using Directive and Preventive Controls as examples.**

---

### **5. Compare how Directive Controls and Preventive Controls each support Separation of Duties.**

---
#二周目 
接下来是今天的主题：  
**DAC / MAC / ACM / BLP / Biba / Clark–Wilson / AEF / ADF / ACR / ACI / RBAC**

但为了降低压力，我不一次给 20–30 题，  
我将知识分块，每块给你 **极短但命中要害的习题（3~5 题）**。

---

# 📘 **PART A — DAC / MAC（每天必练一小题）**

### **1. Which statement best describes DAC?** b

A. Access rights are controlled by the system based on labels  
B. Access rights are controlled by the owner of the object  
C. Access rights are always mandatory  
D. Access rights cannot be changed once set

Correct answer: B  
Explanation:  
DAC allows the resource owner to decide who can access the object. Correct.

---

### **3. Why is DAC more vulnerable to Trojan Horse attacks?** b

A. Users cannot share permissions  
B. DAC enforces strict system-wide policies  
C. Users can pass permissions to malicious programs  
D. DAC does not allow write access

Correct answer: C  
Explanation:  
DAC is vulnerable because **users can pass their permissions to any program they run**, including malicious Trojans.  
Option B is incorrect because MAC—not DAC—enforces strict system-wide policies.  
This misunderstanding signals that you mixed up MAC and DAC characteristics.

---

# 📘 **PART B — Access Control Matrix (ACM)**

### **4. In an access control matrix, rows represent:** c

A. Subjects  
B. Objects  
C. Permissions  
D. Audit records

Correct answer: A  
Explanation:  
Rows = subjects (users/processes)  
Columns = objects (files/resources)  
Cells = permissions  
Answer C ("permissions") is the content **inside** the cells, not the row label.  
This is a structural misunderstanding of ACM.

---
### **5. ACM is important because it:** b

A. Encrypts user data  
B. Provides the mathematical model for DAC/MAC/RBAC  
C. Ensures confidentiality through labels  
D. Detects malware

Correct answer: B  
Explanation:  
ACM is the mathematical foundation for DAC, MAC, and RBAC models. Correct.

---

# 📘 **PART C — Bell-LaPadula (Confidentiality)**

### **6. “No Read Up” prevents:**

A. High subjects from reading low data  
B. Low subjects from reading high data  
C. Subjects from modifying data  
D. Untrusted programs from executing

---

### **7. Bell-LaPadula primarily protects:**

A. Integrity  
B. Confidentiality  
C. Availability  
D. Authentication

---

# 📘 **PART D — Biba（Integrity）**

### **8. “No Write Up” means:**

A. Low integrity subjects cannot modify higher integrity data  
B. High integrity subjects cannot modify low integrity data  
C. No subject can write anything  
D. Subjects cannot read high data

---

### **9. Biba is best used in:**

A. Military secrecy  
B. Business accounting systems  
C. Integrity-critical systems  
D. Social media platforms

---

# 📘 **PART E — Clark–Wilson（Integrity with transactions）**

### **10. What is a Constrained Data Item (CDI)?**

A. Data that can be modified freely  
B. Data that can only be modified through authorized transactions  
C. Temporary input data  
D. Audit trail information

---

### **11. What ensures that all data modifications follow business rules?**

A. Trojan horse analysis  
B. Well-Formed Transactions  
C. DAC permissions  
D. Antivirus scans

---

### **12. AEF is responsible for:**

A. Logging audit records  
B. Enforcing who may run which transaction  
C. Checking data integrity rules  
D. Recovering corrupted data

---

### **13. ADF is responsible for:**

A. Verifying if a user may execute a transaction  
B. Preventing write-down operations  
C. Creating constrained data items  
D. Encrypting transaction flows

---

### **14. What is ACR?**

A. Audit Control Record  
B. Access Control Rule defining which user can run which transaction  
C. Anti-Corruption Regulation  
D. Access Confidentiality Rule

---

### **15. ACI refers to:**

A. Audit Control Information, documenting what transactions were executed  
B. All Confidential Information  
C. Access Control Interface  
D. Automatic Configuration Integrity

---

# 📘 **PART F — RBAC（最常用模型）**

### **16. RBAC assigns permissions to:**

A. Users directly  
B. Roles, which are then assigned to users  
C. Files  
D. Viruses

---

### **17. RBAC is most useful for enforcing:**

A. Data classification  
B. Separation of Duties  
C. Malware isolation  
D. Hash integrity checks

---

# 🎯 **PART G — 综合理解（最重要，帮助你建立知识网络）**

### **18. Why do we need Clark–Wilson when we already have DAC/MAC?**

A. DAC/MAC only control basic read/write, not correctness of transactions  
B. DAC is too slow  
C. MAC does not support auditing  
D. Clark–Wilson only protects confidentiality

---

### **19. Which model focuses on confidentiality?**

A. Biba  
B. Clark–Wilson  
C. Bell-LaPadula  
D. RBAC

---

### **20. Which model ensures data is modified only through controlled business processes?**

A. DAC  
B. MAC  
C. Clark–Wilson  
D. Biba


### **1. What is the primary purpose of DHCP?** b

A. Encrypt traffic  
B. Assign network configuration automatically  
C. Resolve domain names  
D. Block unauthorized users

正确答案：B ✔

解释：  
DHCP=自动分配 IP、网关、DNS 等网络配置。你已经理解核心。

---

### **2. Which DHCP message does the client broadcast first?** a

A. Offer  
B. Request  
C. Ack  
D. Discovery

正确答案：D ❌

解释：  
DHCP 的顺序是 **DORA**：

1. **D**iscovery（客户端广播）
    
2. **O**ffer（服务器回应）
    
3. **R**equest（客户端确认）
    
4. **A**ck（服务器最终确认）
    

你把 **Offer** 错当成第一个步骤。  
这说明你对 DHCP 的流程还没有完全形成“自动化认知”

---

### **3. Why is DHCP vulnerable to spoofing attacks?** b

A. It uses UDP  
B. It lacks authentication  
C. It uses TCP  
D. It requires encryption

正确答案：B ✔

解释：  
DHCP 没有任何认证机制 → 任何人都能假装是 DHCP server。  
你掌握得很好。

---

### **4. Which configuration can DHCP assign?** a

A. MAC address  
B. Subnet mask  
C. Firewall rules  
D. File permissions

正确答案：B ❌

解释：  
DHCP 不能分配 **MAC address**。  
MAC 是设备硬件烧录的地址，不可修改。

DHCP 可以分配：  
✔ IP address  
✔ Subnet mask  
✔ Gateway  
✔ DNS

这说明你需要更清楚：“哪些东西是系统自动给的（动态），哪些是硬件固定（静态）”。

---

### **5. How does a rogue DHCP server compromise security?** b

A. Stops DNS from resolving  
B. Provides malicious gateway or DNS  
C. Deletes IP addresses  
D. Encrypts network traffic

正确答案：B ✔

解释：  
伪造 DHCP 服务器 → 给你恶意 DNS / 网关 → 劫持你的所有流量。  
你完全理解了重点。

---

### **6. How does DHCP relate to DNS?**

A. DHCP resolves domain names  
B. DHCP assigns the DNS server  
C. DNS assigns IP addresses  
D. DNS provides routing

---

### **7. DHCP fits into which risk category?**

A. Access control  
B. Identity provisioning  
C. Data classification  
D. Authentication factor
