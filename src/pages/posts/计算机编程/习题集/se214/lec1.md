---
layout: ../../../../../layouts/PostLayout.astro
title: "✅ **Part 1 — Multiple Choice Questions (MCQs)** #一周目"
description: 明白！下面我重新按照你的 出题规范 提供考试题： ❗ 不提供答案 ❗ 英文出题 ❗ 包含：Multiple Choice +
  Concept Explanation + Concept Comparison ❗ 解释题与比较题必须有「具体案
date: 2025-11-20T06:29:23.121Z
updated: 2026-01-25T15:50:44.052Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 6
sourceFolder: 计算机编程/习题集/se214
---

![Pasted image 20251120132928.png](/media/c8f7c6544ebd758d.png)
明白！下面我重新按照你的 **出题规范** 提供考试题：

❗ **不提供答案**  
❗ **英文出题**  
❗ **包含：Multiple Choice + Concept Explanation + Concept Comparison**  
❗ **解释题与比较题必须有「具体案例」**

---

# ✅ **Part 1 — Multiple Choice Questions (MCQs)** #一周目 

### **2. Which system call is used in UNIX to replace a process’s memory space with a new program?** d -B

A. fork()  
B. exec()  
C. wait()  
D. clone()

Correct answer: B  
Status: ❌ Incorrect  
Explanation:  
clone() creates a new process with specific shared resources.  
exec() is the system call that replaces the current process image with a new program.  
After exec(), the PID stays the same but the entire memory layout is replaced.

---

### **4. Which memory allocation method is most affected by external fragmentation?** b

A. Paging  
B. Segmentation  
C. Fixed Partitioning  
D. Dynamic Partitioning

Your answer: B  
Correct answer: D  
Status: ❌ Incorrect  
Explanation:  
Segmentation suffers from external fragmentation, but **dynamic partitioning** is the classic textbook case that is most affected because partitions are constantly created and destroyed, generating many small unusable holes.  
Segmentation also has external fragmentation, but the question asks “most affected,” which refers to dynamic partitioning.

---
### **6. Which I/O technique allows data transfer between memory and device without CPU involvement?** b

A. Polling  x
B. Interrupt-driven I/O  
C. Direct Memory Access (DMA)  
D. System Call Layer

Correct answer: C  
Status: ❌ Incorrect  
Explanation:  
Interrupt-driven I/O notifies the CPU when I/O completes, but the CPU still participates in every data transfer.  
DMA transfers data directly between device and memory without CPU involvement and significantly improves throughput.

---

### **7. In a multi-core system, Amdahl’s Law states that the overall speedup is primarily limited by which program component?** a

A. Memory access latency  
B. I/O throughput  
C. Serial portion of the program  
D. Thread creation overhead

Your answer: A  
Correct answer: C  
Status: ❌ Incorrect  
Explanation:  
Amdahl’s Law says that speedup is limited by the **serial portion** of the program.  
Even with infinite cores, the serial part becomes the bottleneck.

---

### **8. Which of the following best describes a page table’s valid/invalid bit?** c

A. Indicates whether the page is read-only  
B. Indicates whether the page is inside physical memory  
C. Indicates whether the page belongs to kernel memory  
D. Indicates whether the page is shared with another process

Your answer: C  
Correct answer: B  
Status: ❌ Incorrect  
Explanation:  
Valid/invalid bit indicates:

- valid: page is in physical memory
    
- invalid: page is not in memory (page fault needed)  
    It does **not** represent whether the page belongs to kernel memory.

---
# ✅ **Part 2 — Concept Explanation (with Real Case Scenarios)**
### **1. Explain the difference between user mode and kernel mode. Provide a concrete real-world case where switching modes is required.**
 user mode  is just the idea of users while the  real-world case is the modle for requirement of world 

---

### **2. Describe what a context switch is. Provide a real application scenario where excessive context switching causes performance degradation.**

---

### **3. Explain external fragmentation. Give an example of a real computing environment where external fragmentation becomes a problem.**
external fragmentation is the sequence to solve the problems with BPMN

---

### **4. Explain the producer–consumer problem. Provide a real-world scenario where incorrect synchronization leads to incorrect or corrupted output.**
---

# ✅ **Part 3 — Concept Comparison (with Real Case Scenarios)**

_(No answers provided)_

---

### **1. Compare Paging and Segmentation in terms of memory management characteristics. Provide a scenario where segmentation is more suitable than paging.**

---

### **2. Compare Polling and Interrupt-driven I/O. Provide a concrete scenario where polling is actually better than interrupt-driven I/O.**

---

### **3. Compare Linked Allocation, FAT, and Indexed Allocation. Provide a real case where FAT is clearly the best choice.**

---

### **4. Compare User-level threads and Kernel-level threads. Provide a specific scenario where user-level threads perform poorly.**

---

### **5. Compare DMA-based I/O and Interrupt-driven I/O. Provide a case where DMA is required for performance reasons.**

---

Multiple Choice (4)  
2. Which register temporarily holds the instruction/data fetched from memory before it is used?  a
    A. MAR  
    B. ACC  
    C. MBR  
    D. PC
Correct answer: C  
Result: ❌  
Boundary rule: MAR holds an address; MBR holds the data/instruction value transferred to/from memory.  
Minimal example: To read memory, CPU puts address in MAR, memory returns the word into MBR.  
Common trap: Confusing “address register” (MAR) with “buffer/data register” (MBR).

Concept Comparison (2)

1. Compare PC vs IR in terms of what each holds and when it changes during the instruction cycle.
    
    Answer:  PC is to store the instruction and data while IR is to execute the instruction.
PC: holds the address of the next instruction (or current instruction address, depending on design) and is updated each fetch (incremented or branched).  
IR: holds the actual instruction word currently being decoded/executed; it changes when a new instruction is fetched into it.  
Result: ❌  
Boundary rule: PC = address pointer; IR = instruction contents.  
Minimal example: Fetch: PC -> MAR, memory word -> MBR -> IR; then PC increments.  
Common trap: Treating IR as “the executor” (execution is done by CU/ALU), or treating PC as storing instruction contents.
    
2. Compare MAR vs MBR in terms of what each carries and how each relates to the address bus vs data bus.
    
    Answer:  MAR is to store the data and memorize the information.MBR is to store the address of data.address bus is to deliver address and data bus deliver the data.

Your answer: MAR stores data; MBR stores address; address bus delivers address and data bus delivers data.  
Correct answer:  
MAR: holds the memory address being accessed; closely associated with the address bus.  
MBR: holds the data/instruction word being transferred to/from memory; closely associated with the data bus.  
Result: ❌  
Boundary rule: MAR = address; MBR = data value.  
Minimal example: Write: MAR gets target address; MBR gets data to write; then memory write occurs.  
Common trap: Swapping MAR and MBR because both participate in memory operations.

Concept Analysis (1)

1. A student claims: “The data bus is the same as MAR, because both deal with data movement.”  
    Analyze why this statement is incorrect, and state the correct boundary between (a) buses and (b) CPU registers.
    
    Answer: data bus and MAR are in different layer.CPU registers are the core.
    
Correct answer (what you needed to state):  
A bus is a shared set of signal lines that carries information between components; a register is internal CPU storage.  
Data bus carries data values between CPU/memory/I/O; MAR is an internal CPU register that holds an address (not the shared bus itself).  
Result: ❌  
Boundary rule: Bus = communication pathway (lines); Register = CPU storage element (holds a value).  
Minimal example: Address placed in MAR, driven onto address bus; returned data travels on data bus into MBR.  
Common trap: Thinking “anything involved in transfer” is the same thing; registers hold values, buses carry signals.
