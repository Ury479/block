---
layout: ../../../../../layouts/PostLayout.astro
title: lec6
description: Multiple Choice 2. Why are placement algorithms required in Dynamic
  Partitioning ? c A. Because partitions are fixed in
date: 2025-12-25T07:33:50.912Z
updated: 2025-12-25T07:43:33.676Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/习题集/se214
---

### **Multiple Choice**

2. Why are **placement algorithms** required in **Dynamic Partitioning**?  c
    A. Because partitions are fixed in size  
    B. Because memory must be allocated contiguously  
    C. Because there are multiple free memory blocks of different sizes  
    D. Because paging requires address translation
    

---

3. Which statement best describes **Best-Fit** allocation?  c
    A. It selects the first available block that is large enough  
    B. It allocates the largest available hole  
    C. It minimizes leftover space but may create many small unusable holes  
    D. It avoids external fragmentation entirely
    Explanation:  
Best-Fit selects the smallest free block that can satisfy the request. While it minimizes immediate leftover space, it tends to create many tiny unusable holes, increasing external fragmentation.

---

### **Concept Explanation**

4. Explain **why Dynamic Partitioning can still suffer from external fragmentation**, even though it allocates memory based on program size.
    
    Answer: Dynamic Partitioning could partition divided into several parts and operate in the system.
    
---

### **Concept Comparison**

5. Compare **First-Fit** and **Best-Fit** allocation strategies in terms of:
    
    - allocation speed
        
    - fragmentation behavior
        
    
    Answer:
