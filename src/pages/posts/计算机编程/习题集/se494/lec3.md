---
layout: ../../../../../layouts/PostLayout.astro
title: 🧠 **PART A — Multiple Choice Questions (MCQ)**
description: 🧠 PART A — Multiple Choice Questions MCQ 2. In DES, which part
  introduces non linearity? b A. Expansion E B. XOR with k
date: 2025-12-09T05:47:12.980Z
updated: 2025-12-09T07:39:51.550Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 8
sourceFolder: 计算机编程/习题集/se494
---

# 🧠 **PART A — Multiple Choice Questions (MCQ)**

### **2. In DES, which part introduces non-linearity?** b

A. Expansion E  
B. XOR with key  
C. S-box substitution  
D. Permutation P
Correct answer: C  
Result: ❌ Incorrect  
Explanation:  
Non-linearity in DES comes **only** from the S-box substitution.

- Expansion E → linear
    
- XOR with key → linear
    
- Permutation P → linear  
    Only S-boxes break linearity and resist differential/linear attacks.  
    记忆方法：**“S-box = DES 的灵魂 = 唯一非线性”**

---

### **3. Which mode of operation must _not_ be used for encrypting images or repetitive structured data?** a

A. CBC  
B. CTR  
C. ECB  
D. GCM
Correct answer: C  
Result: ❌ Incorrect  
Explanation:  
ECB（Electronic Codebook）模式 **绝对不能**用在图片、重复数据，因为：  
相同明文块 → 相同密文块  
会直接暴露图案。  
CBC 和 CTR 都是安全的，不能用的是 **ECB**。

---
### **6. AES uses which structural design?** a

A. Feistel Network  
B. Substitution-Permutation Network  
C. Linear Feedback Shift Register  
D. Rotor Machine Design
Correct answer: B  
Result: ❌ Incorrect  
Explanation:  
AES **不是** Feistel Network。  
AES 是 **Substitution–Permutation Network (SPN)**：

- S-box → SubBytes
    
- Permutation → ShiftRows / MixColumns  
    而 DES 才是 Feistel。  
    记忆方法：DES = F; AES = SPN。

---

### **7. What is the primary vulnerability of ECB mode?** b

A. Slow performance  
B. Requires IV reuse  
C. Leaks patterns because identical blocks map identically  
D. Cannot be parallelized
Correct answer: C  
Result: ❌ Incorrect  
Explanation:  
ECB 的真正弱点：  
**相同明文块 → 相同密文块 → 图案泄露**  
不是什么需要 IV reuse（ECB 根本没有 IV）。  
正确记忆：**ECB = Pattern Leak（模式泄露）**

---

### **8. Cryptography can fail even if the algorithm is strong because:** a

A. Keys are too long  
B. Key management is poor  
C. Users encrypt too frequently  
D. AES cannot handle large data
Correct answer: B  
Result: ❌ Incorrect  
Explanation:  
加密失败通常不是因为 key 太长，而是因为：

- 密钥管理做得不好
    
- 通道不安全
    
- 实现漏洞  
    **Key management is the #1 reason cryptographic systems fail.**

---

### **9. A block cipher mode that supports _full parallel encryption_ is:** a

A. CBC   
B. CFB  
C. CTR  
D. OFB
Correct answer: C  
Result: ❌ Incorrect  
Explanation:  
CBC **不能并行加密**，因为每一块依赖前一块。  
CTR 计数器模式可以完全并行，非常适合高速硬件。  
记忆：CTR = “Counter = 可以提前生成 keystream = 并行”。

---

### **10. A pseudorandom permutation (PRP) differs from a truly random permutation because:** c

A. PRP is slower  
B. PRP requires a small key to generate the permutation  
C. Random permutations are insecure  
D. PRP output has fixed patterns
Correct answer: B  
Result: ❌ Incorrect  
Explanation:  
PRP 与真正随机排列的区别：

- Truly random permutation → 需要天文数字级别的 key
    
- PRP → 用一个 small key（如 128-bit）生成“看似随机”的排列  
    这正是 block cipher（例如 AES）设计的基础。
    

随机排列并不是不安全（你的答案 C），只是 **不可实现**。
# 📝 **PART B — Concept Explanation Questions**

Write short answers.

---

### **1. Explain why cryptography is foundational to cybersecurity.**

(Reference: CIAAN)

---

### **2. Why is the S-box design critical to the security of DES?**

---

### **3. Describe the avalanche effect and explain why it is important in block cipher design.**

---

### **4. Explain the difference between symmetric and asymmetric encryption. Include one advantage of each.**

---

### **5. What is an Initialization Vector (IV), and why is IV reuse dangerous?**

---

### **6. Describe why AES replaced DES in modern cryptographic systems.**

---

### **7. What does “algorithm selection is strategic” mean in real-world security system design?**

---

### **8. Briefly explain the purpose of block cipher modes of operation.**

---

### **9. Why are compliance frameworks (e.g., GDPR, HIPAA) relevant to cryptographic design?**

---

### **10. Explain why a block cipher must behave like a pseudorandom permutation (PRP).**

---

---

# ⚖️ **PART C — Comparison Questions (Short Essay)**

_(Write a short paragraph for each)_

---

### **1. Compare ECB vs CBC modes in terms of security behavior, pattern leakage, and parallelization.**

---

### **2. Compare differential cryptanalysis and linear cryptanalysis.

Include what they analyze and how they attempt to break a cipher.**

---

### **3. Compare DES vs AES in terms of structure, security strength, and modern applicability.**

---

### **4. Compare PRP (Pseudorandom Permutation) and PRF (Pseudorandom Function).

Explain when each is used.**

---

### **5. Compare symmetric encryption and hashing (SHA).

What problems does each solve?**

---

---

# 🎯 想进一步提升记忆效果吗？

下面为你生成一套 **RSA 专用练习题**，完全覆盖课堂重点（KeyGen、加密解密、数学基础、服务性质）。  
题型包含：

- **Part A：选择题（Multiple Choice）× 10**
    
- **Part B：概念题（Concept Explanation）× 5**
    
- **Part C：比较题（Comparison）× 5**
    

全部为英文，并符合考试风格。

---

# ✅ **PART A – Multiple Choice Questions**

### **1. Which mathematical problem gives RSA its security?** a

A. Matrix inversion  
B. Integer factorization  
C. Graph coloring  
D. Computing square roots

---

### **2. In RSA, the public key consists of:** d

A. (p, q)  
B. (n, d)  
C. (n, e)  
D. (e, d)

---

### **3. What condition must the public exponent _e_ satisfy?**b

A. e must be even  
B. gcd(e, Φ(n)) = 1  
C. e must divide n  
D. e < p and q

---

### **4. The private exponent _d_ is defined as:** d

A. d = e × Φ(n)  
B. d = n − e  
C. d is the inverse of e mod Φ(n)  
D. d = Φ(n) − e

---

### **5. Which of the following is **NOT** true about RSA?** d

A. Encryption and decryption use different keys  
B. Security increases with key length  
C. Breaking RSA requires factoring n  
D. p and q may be published safely

---

### **6. In RSA encryption, ciphertext is computed as:** a

A. C = (P − e) mod n  
B. C = P × e mod n  
C. C = Pᵉ mod n  
D. C = eᴾ mod n

---

### **7. Φ(n) in RSA is equal to:** d]c

A. n − 1  
B. (p − 1)(q − 1)  
C. n / (p − q)  
D. pq − 1

---

### **8. A major reason symmetric cryptography cannot replace RSA is:** b

A. Symmetric algorithms are slower  
B. Symmetric keys must be distributed securely  
C. Symmetric keys cannot be stored  
D. Symmetric algorithms do not exist

---

### **9. RSA can provide authenticity by:** b

A. Encrypting with the receiver’s public key  
B. Encrypting with the sender’s private key  
C. Using a random IV  
D. Choosing p and q to be close

---

### **10. What happens if p = q in RSA?**  b

A. RSA becomes faster  
B. Security becomes significantly weaker  
C. Encryption fails  
D. d cannot be computed

---

---

# ✅ **PART B – Concept Explanation Questions**

### **1. Explain why RSA requires two keys instead of one.**

_Answer:_

---

### **2. What is the purpose of Φ(n) in RSA? Why is it used?**

_Answer:_

---

### **3. Describe the process of generating RSA keys.**

_Answer:_

---

### **4. Why must p and q be kept secret?**

_Answer:_

---

### **5. What does it mean for _e_ and Φ(n) to be “coprime”? Why is this necessary?**

_Answer:_

---

---

# ✅ **PART C – Comparison Questions**

### **1. Compare symmetric vs. asymmetric encryption in terms of key distribution and scalability.**

_Answer:_

---

### **2. Compare RSA encryption vs RSA signature. What key is used in each operation?**

_Answer:_

---

### **3. Compare the roles of the public exponent _e_ and private exponent _d_.**

_Answer:_

---

### **4. Compare RSA and AES in terms of performance and real-world usage.**

_Answer:_

---

### **5. Compare the security assumptions of RSA and ECC.**

_Answer:_

---
### **Q1: Why can't we use RSA to encrypt all data?** b

A. Too slow  
B. Insecure  
C. No padding  
D. No IV
Correct answer: A (Too slow)  
Explanation:  
RSA 是安全的，但极其慢（约比 AES 慢 1000 倍）。  
现代系统都是：RSA 用于传递对称密钥，AES 用来加密实际数据。  
Insecure 不是原因，速度才是最主要限制。


---

### **Q3: CBC-MAC is insecure for variable-length messages because:** b

A. AES is weak  
B. CBC leaks patterns  
C. Messages can be extended to forge tags  
D. IV must be random
Correct answer: C (Messages can be extended to forge tags)  
Explanation:  
CBC-MAC 的问题不是“泄露模式”，而是：  
攻击者可以构造扩展消息，使得 tag 保持一致，从而伪造 MAC。  
这是考试高频陷阱题。

---

### **Q4: “Encrypt with public key” provides ______.** a

A. Authentication  
B. Confidentiality  
C. Non-repudiation  
D. Integrity

Correct answer: B (Confidentiality)  
Explanation:  
公钥加密的功能是**机密性（confidentiality）**  
只有私钥能解密。

如果题目是 **encrypt with private key** 才是 authentication（签名机制）。

---
