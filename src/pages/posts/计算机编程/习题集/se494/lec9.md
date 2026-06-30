---
layout: ../../../../../layouts/PostLayout.astro
title: ✅ **Lecture 9 — Multiple Choice Questions（20 Questions）**
description: 下面是 完全基于 Lecture 9（Limited Wireless、WLL、Cellular Infrastructure）内容
  制作的 20 道选择题 + 5 道问答题 。 ⚠️ 你要求 不需要参考答案 ，所以我只提供题目本身。 你可
date: 2025-12-11T13:03:42.288Z
updated: 2025-12-12T04:55:02.513Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 8
sourceFolder: 计算机编程/习题集/se494
---

下面是 **完全基于 Lecture 9（Limited Wireless、WLL、Cellular Infrastructure）内容** 制作的 **20 道选择题 + 5 道问答题**。  
⚠️ 你要求 **不需要参考答案**，所以我只提供题目本身。

你可以用于作业、模拟考试、或做成 Anki 题库。

---

# ✅ **Lecture 9 — Multiple Choice Questions（20 Questions）**

### **1. Cordless wireless systems are mainly designed for use in:** c

A. Military bases  
B. Homes and offices  
C. Satellites  
D. Underwater communication

### **正确答案：B — Homes and offices**

### 📘 课件知识点

Cordless wireless = **limited-area wireless**  
→ 主要在 **home / office** 使用  
→ 范围很小（室内 or 室外 200m 以内）

### ❌ 你的选项：C — Satellites

错误原因：  
卫星通信属于 **广域无线通信**，不是 limited wireless。

---
### **4. Wireless Local Loop (WLL) systems primarily connect users to:** c

A. Undersea cables  
B. Base stations through fixed antennas  
C. Bluetooth devices  
D. Power-line networks

### **正确答案：B — Base stations through fixed antennas**

### 📘 课件知识点

WLL（Wireless Local Loop）：

- 用户 → 自己屋顶的固定天线
    
- 固定天线 → 基站（BS）
    
- BS → Provider（交换中心）
    

所以关键点是：**fixed antenna → base station**

### ❌ 你的选项：C — Bluetooth devices

错误原因：  
Bluetooth 是 **短距离个人网络（PAN）**，和 WLL 完全不相关。

---
### **6. Which of the following is an advantage of WLL?** d

A. No frequency license required  
B. Easy installation  
C. Unlimited mobility  
D. Supports satellite roaming

### **正确答案：B — Easy installation**

### 📘 课件知识点

WLL 两大优势：

1. **Less expensive after startup cost**
    
2. **Easy to install**
    

### ❌ 为什么 D（Supports satellite roaming）是错的？

WLL 是 **固定无线网络**，完全不支持卫星或移动性。  
你选错是因为看到 "wireless"，以为有 mobility，但 WLL 完全没有移动性。

---
### **7. Cordless telephones were originally developed to provide:** a

A. Long-distance communication  
B. Mobility within a limited area  
C. Secure government messaging  
D. Internet-only connectivity
### **正确答案：B — Mobility within a limited area**

### 📘 课件知识点

Cordless phones = 只在家/办公室附近移动  
不是全国通信，也不是 long-distance。

### ❌ 你的答案 A：Long-distance

Cordless 电话根本不走长途线路，只是 base station 内的无线替代方案。

---

### **8. Cordless systems become popular in homes because they provide:** d

A. Only data services  
B. Voice and data support for small areas  
C. Nationwide roaming  
D. Satellite messaging
### **正确答案：B — Provide voice and data support for small areas**

### 📘 课件知识点

Cordless 很受欢迎，因为：

- 提供 voice（语音）
    
- 提供 limited data（数据）
    
- 覆盖区域：只在家里/办公室附近（少量房间）
    

### ❌ 为什么 D（Satellite messaging）是错的？

Cordless 根本不使用卫星，完全是**基站 + 小型天线**的系统

---

### **9. In large office environments, cordless systems may be extended by:** c

A. Installing a PBX connected to multiple base stations  
B. Adding 5G antennas  
C. Using satellite repeaters  
D. Using submarine cables
### **正确答案：A — Install PBX connected to multiple BS**

### 📘 课件知识点

大公司要扩展 cordless → 安装 PBX + 多个 Base Stations

**办公楼里每一层放一个 BS → 全楼 coverage**

### ❌ 你的选项：C — Using satellite repeaters

没有任何 cordless 系统使用 satellite，中看不中用 + 成本巨大。

---

### **11. The SID in cellular systems stands for:** a

A. Subscriber Identity Device  
B. System Identification Code  
C. Signal Index Descriptor  
D. Secure Identity Detector
### **正确答案：B — System Identification Code**

### 📘 课件知识点

手机一直监听 provider 发送的 SID。  
如果匹配 → 说明你在本网络覆盖区内。

### ❌ 你选 A（Subscriber Identity Device）为什么错？

因为：

- "subscriber" 指用户
    
- SID 指 **系统编码**，不是用户编号  
    用户编号是 IMSI，在 SIM 卡里。

---

### **12. A mobile device continuously listens to the provider’s SID to:** b

A. Authenticate all nearby users  
B. Confirm it is inside the provider’s service area  
C. Download updates  
D. Select the fastest frequency

**你的答案：B（正确 ✅）**

### ✔ 正确，因为：

手机必须不断接收基站广播的 **SID（System ID）** ，来确认：

- 自己是否仍在同一家运营商的覆盖区
    
- 是否需要切换到漫游模式
    

课件原文：

> phone continuously listens to SID to determine if it is within home system.

---

### **13. When a device moves across cell boundaries, the event is called:** b

A. Frequency hopping  
B. Roaming delay  
C. Handover  
D. Signal inversion

**正确答案：C — Handover（或 handoff）**

### ❌ 为什么不是 Roaming delay？

Roaming delay 是漫游时的延迟，不是切换过程本身。

### ✔ Handover（切换）是课件中的定义：

当手机从 Cell A 移到 Cell B，为保证通话不中断，需要进行 **handover**。

课件原文：

> when user moves from one cell to another → handoff/handover

---

### **14. In order for a mobile device to place a call, it must first:** b

A. Disable its antenna  
B. Identify itself using its assigned SID  
C. Switch to airplane mode  
D. Request a new SIM card

**正确答案：D — Register with the system / authentication (not SID)**

### ❌ 课件中没有提到 "identify itself using its assigned SID"

SID 是提供商系统的 ID，不是手机的 ID。

### ✔ 手机必须先做的是：

- 注册到网络（using MIN/ESN）
    
- 得到 channel assignment
    
- 再开始呼叫流程

---

### **15. The MTSO connects cellular towers to:** a

A. Fiber backbones or other switching centers  
B. Bluetooth access points  
C. USB devices  
D. Wi-Fi repeaters
**你的答案：A（正确 ✅）**

### ✔ 原文来自 Lecture：

MTSO（Mobile Telephone Switching Office）连接：

- 各个基站（BS）
    
- 公共交换电话网络（PSTN）
    
- 长途交换中心 / fiber backbone

---
### **17. One limitation of cordless wireless is:** b

A. Too many users sharing the same frequency  
B. Only one or a few users share the system, reducing frequency flexibility  
C. Cannot support telephony  
D. Requires 5G infrastructure
**你的答案：B（正确 ✅）**

### ✔ 原文内容：

Cordless systems 有一个限制：

> only one/few users → limited frequency flexibility.

---

### **18. The key purpose of the PBX in office cordless systems is to:** d

A. Provide public Internet service  
B. Connect multiple base stations into one network  
C. Block unauthorized devices  
D. Provide satellite tracking
**正确答案：B — Connect multiple base stations**

### ❌ PBX 不做 satellite tracking

PBX（Private Branch Exchange）作用：

- 把多个 cordless base stations 连接到一起
    
- 让办公室内所有 cordless phones 共用同一个内部电话网络

---

### **19. A mobile device’s identity is verified by:** b

A. Comparing its SID against a database of valid SIDs  
B. Checking battery level  
C. Measuring radio temperature  
D. Asking the user for confirmation
**正确答案：A — Compare mobile ID (MIN/ESN) with provider database**

### ❌ Battery level 和手机身份完全无关

SID 不是手机身份，而是运营商身份。

### ✔ 课件原文：

系统通过手机发送的：

- **MIN（Mobile Identification Number）**
    
- **ESN（Electronic Serial Number）**
    

来验证身份。

---

# ✅ **Lecture 9 — Short Answer Questions（5 Questions）**

### **1. Explain why cordless wireless systems are considered limited-area communication technologies.**
cordless wireless systems help to connect mobile phone by cell network in limited-area.

---

### **2. Describe how a Wireless Local Loop (WLL) system connects a subscriber to a base station.**

---

### **3. Why does a cellular device need to continuously listen to the provider’s SID?**

---

### **4. What role does the MTSO play in the cellular communication network?**

---

### **5. Describe the handover process when a mobile device moves from one cell to another.**

---

如果你需要，我还可以：

✅ 帮你把这 25 道题 **转成 TSV 格式 Anki 题库**  
✅ 再做一套 **更难的考试模拟题**  
✅ 生成 **Lecture 9 思维导图**（超级适合复习）

要继续吗？
