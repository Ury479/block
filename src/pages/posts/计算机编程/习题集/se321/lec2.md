---
layout: ../../../../../layouts/PostLayout.astro
title: lec2
description: "Multiple Choice Questions Question 1: What is the purpose of a
  fork node in an activity diagram? a B A To merge multiple"
date: 2025-07-14T03:55:00.000Z
updated: 2025-08-11T08:33:33.025Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 3
sourceFolder: 计算机编程/习题集/se321
---

### Multiple-Choice Questions

**Question 1:**  
What is the purpose of a fork node in an activity diagram?  a -B
- A) To merge multiple flows into one.  
- B) To split a single flow into multiple concurrent flows.  
- C) To indicate the termination of a flow.  
- D) To represent communication with external systems.  

**Answer:**  
**B) To split a single flow into multiple concurrent flows.**  

---

**Question 2:**  
Which symbol is used to represent the termination of a flow in a parallel path of activities?  B -C
- A) Fork node  
- B) Join node  
- C) Flow final node  
- D) Hourglass  

**Answer:**  
**C) Flow final node**  

---

**Question 3:**  
What does the hourglass symbol in an activity diagram represent?  C -A
- A) Time-based triggers or delays  
- B) Communication with external systems  
- C) Synchronization of flows  
- D) Input and output of actions  

**Answer:**  
**A) Time-based triggers or delays**  

---

**Question 4:**  
In the context of activity diagrams, what does the term "swimlane" refer to?  A -C
- A) A method to depict parallelism.  
- B) A representation of time events.  
- C) A division of the diagram to indicate stakeholder responsibilities.  
- D) A way to merge multiple flows.  

**Answer:**  
**C) A division of the diagram to indicate stakeholder responsibilities.**  

---

**Question 5:**  
What happens when a final node is reached after a fork node?  C
- A) All actions in the parallel paths must complete before termination.  
- B) Only the specific flow ends, while others continue.  
- C) All actions in the parallel paths terminate immediately, even if some are still processing.  
- D) The flow waits for all tokens before proceeding.  

**Answer:**  
**C) All actions in the parallel paths terminate immediately, even if some are still processing.**  

---

### True/False Questions

**Question 6:**  
A join node in an activity diagram allows multiple incoming flows to synchronize into one outgoing flow.   -T
**Answer:**  
**True**  

---

**Question 7:**  
The implicit splitting concept means that multiple outgoing edges from an activity denote sequential execution.  T -F
**Answer:**  
**False** (It denotes concurrent execution.)  

---

**Question 8:**  
A pin in an activity diagram represents the input or output of an action.  
**Answer:**  
**True**  

---

**Question 9:**  
The upside-down pitchfork symbol in an activity diagram is used to represent communication with external systems.  
**Answer:**  
**False** (It represents calling other activities.)  

---

**Question 10:**  
Signals in an activity diagram can be used to depict communication with stakeholders outside the system.  
**Answer:**  
**True**  

---

### Open-Ended Questions

**Question 11:**  
Explain the difference between explicit splitting (fork) and implicit splitting in an activity diagram.  
**Answer:**  
Explicit splitting (fork) uses a fork node to divide a single flow into multiple concurrent flows. Implicit splitting occurs when multiple outgoing edges from an activity itself denote concurrent execution without requiring a fork node.  

---

**Question 12:**  
Describe the purpose of a flow final node and how it differs from a final node in an activity diagram.  
**Answer:**  
A flow final node terminates a specific flow in a parallel path of activities without ending the entire process. In contrast, a final node terminates all actions in the diagram, even if some are still processing.  

---

**Question 13:**  
How can you represent stakeholder responsibilities in an activity diagram?  
**Answer:**  
Stakeholder responsibilities can be represented using swimlanes (dividing the diagram into sections for each stakeholder) or annotations (writing the stakeholder's name in parentheses inside the action).  

---

**Question 14:**  
What is the role of time events in an activity diagram, and how are they represented?  
**Answer:**  
Time events indicate time-based triggers or delays in an activity diagram. They are represented by an hourglass symbol, with text specifying the temporal condition (e.g., "Wait for 3 days").  

---

**Question 15:**  
When should you use a join node instead of a flow final node in an activity diagram?  
**Answer:**  
A join node should be used when you want all parallel actions to complete before proceeding to the next step, while a flow final node is used to terminate one specific flow without requiring all parallel actions to finish.  

--- 

Let me know if you need more questions or adjustments!
