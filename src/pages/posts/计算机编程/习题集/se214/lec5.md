---
layout: ../../../../../layouts/PostLayout.astro
title: lec5
description: Multiple Choice 1. In an I/O system, which component is responsible
  for translating CPU commands into device specific ac
date: 2025-12-22T04:42:49.402Z
updated: 2025-12-22T11:09:07.998Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 4
sourceFolder: 计算机编程/习题集/se214
---

## **Multiple Choice**

1. In an I/O system, which component is responsible for translating CPU commands into device-specific actions?   c
    A. System bus  
    B. Device port  
    C. I/O controller  
    D. DMA controller
    

---

2. Which I/O technique causes the **CPU to wait in a busy loop** checking device status bits?  b
    A. Interrupt-driven I/O  
    B. Direct Memory Access (DMA)  
    C. Programmed I/O (Polling)  
    D. Channel I/O
    
    Your answer: B (Direct Memory Access, DMA)  
Correct answer: C (Programmed I/O, Polling)  
Result: ❌ Incorrect

Explanation:  
Programmed I/O (polling) requires the CPU to repeatedly read the device status register until the device is ready. During this time, the CPU is stuck in a busy-wait loop and cannot perform other useful work.

DMA is designed specifically to avoid this problem: once DMA starts, the CPU is largely free until the transfer completes and an interrupt is generated.

Key distinction to remember:

- Polling → CPU waits and checks repeatedly
    
- Interrupt-driven I/O → CPU waits but does other work
    
- DMA → CPU barely involved during transfer

---

3. Which addressing method allows **memory and I/O devices to share the same address space** and use the same instructions?  d
    A. Isolated (I/O-mapped) I/O  
    B. DMA addressing  
    C. Interrupt vector addressing  
    D. Memory-mapped I/O
    
4. Which I/O technique causes busy waiting?  b
    A. DMA  
    B. Interrupt-driven I/O  
    C. Programmed I/O  
    D. Channel I/O
    
5. What is the main role of an I/O module?  c
    A. Execute user programs  
    B. Control memory allocation  
    C. Interface between CPU, memory, and devices  
    D. Schedule processes
    
6. Why does DMA reduce CPU involvement?  b
    A. CPU executes fewer instructions  
    B. DMA transfers data directly between device and memory  
    C. Devices become faster  
    D. CPU ignores interrupts

---

## **Concept Explanation**

4. Explain why **interrupt-driven I/O** is more efficient than **programmed I/O (polling)** when dealing with slow devices.
    

Answer: the interrupt -driven I/O is better than  **programmed I/O (polling)**

---

5. Describe the **main role of a DMA controller** and explain how it reduces CPU involvement during I/O operations.
    

Answer:I don't know.

---

## **Concept Comparison**

6. Compare **Programmed I/O**, **Interrupt-driven I/O**, and **DMA** in terms of **CPU involvement and performance impact**.
    

Answer:

---

7. Compare **Interrupt-driven I/O** and **DMA** focusing on **context switching, CPU overhead, and data transfer efficiency**.
    

Answer:

1. Which statement best explains **why interrupt-driven I/O was introduced**?  b
    
    A. To eliminate device controllers  
    B. To reduce CPU busy waiting  
    C. To increase device speed  
    D. To remove context switching
    

---

2. In **interrupt-driven I/O**, what task does the CPU still perform? b
    
    A. Polling device status bits continuously  
    B. Transferring data directly between device and memory  
    C. Executing an interrupt service routine to move data  
    D. Controlling the system bus during data transfer

Your answer: B (Transferring data directly between device and memory)  
Correct answer: C (Executing an interrupt service routine to move data)  
Result: ❌ Incorrect

Explanation:  
In interrupt-driven I/O, the CPU **does not transfer data directly between device and memory** in the DMA sense.  
However, the CPU **does execute an interrupt service routine (ISR)**, and inside that ISR, the CPU is responsible for handling the data transfer.

Key distinction (very important):

- Interrupt-driven I/O → CPU moves data (inside ISR)
    
- DMA → DMA controller moves data
    

This error indicates your **main remaining weak point**:  
You are starting to blur the boundary between **interrupt-driven I/O and DMA**.

---

3. Which feature **uniquely distinguishes DMA from interrupt-driven I/O**? b
    
    A. Use of interrupts  
    B. CPU involvement at completion  
    C. CPU moves data word by word  
    D. DMA controller temporarily controls the system 
    
Your answer: B (CPU involvement at completion)  
Correct answer: D (DMA controller temporarily controls the system bus)  
Result: ❌ Incorrect

Explanation:  
CPU involvement at completion exists in **both** interrupt-driven I/O and DMA (both generate interrupts when done).  
What uniquely distinguishes DMA is that **the DMA controller temporarily takes control of the system bus**, acting like the CPU to transfer data.

This confirms the same weak point as Q2:  
You are not yet consistently using **“who controls the bus and who moves the data”** as the comparison criterion.

---

### **2. Concept Explanation**

4. Explain in **2–3 sentences** why **interrupt-driven I/O improves CPU efficiency** compared to programmed I/O, but still does **not fully solve CPU overhead**.
    

Answer:

---

### **3. Concept Comparison**

5. Compare **Programmed I/O** and **Interrupt-driven I/O** focusing only on:
    
    - CPU waiting behavior
        
    - CPU role in data transfer
        

Answer:

---

6. Compare **Interrupt-driven I/O** and **DMA** from a **first-principles perspective**:
    
    - What problem remains after interrupts?
        
    - How does DMA fundamentally solve it?
        

Answer:

---

### **4. One-Sentence First-Principle Check**

7. Complete the sentence:
    

> DMA exists because ___________________________________________.

Answer:
