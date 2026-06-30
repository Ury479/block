---
layout: ../../../../../layouts/PostLayout.astro
title: test
description: "Chapter 1: Computer System Multiple Choice 20 1. In a system bus,
  which bus primarily determines how many bits can be tr"
date: 2026-01-24T04:00:49.668Z
updated: 2026-01-24T14:51:47.153Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 35
sourceFolder: 计算机编程/习题集/se214
---

Chapter 1: Computer System

Multiple Choice (20)

1. In a system bus, which bus primarily determines how many bits can be transferred at a time?  b
    A. Address bus  
    B. Data bus  
    C. Control bus  
    D. Cache bus

2. Which control-bus signal commonly indicates a memory read operation?  c
    A. WR  
    B. RD  
    C. RESET  
    D. CLK
    Correct answer: B (RD) ❌  
Explanation: “RD” (Read) is the control signal used to indicate a read operation. “RESET” reinitializes the system and is not a read/write control signal.
    
3. In the fetch–decode–execute cycle, which step typically updates the Program Counter (PC)?  a
    A. Decode  
    B. Execute  
    C. Fetch  
    D. Write-back only
    Correct answer: C (Fetch) ❌  
Explanation: The PC is typically incremented (or updated) during/after instruction fetch so it points to the next instruction (unless a branch/jump changes it during execute).
    
4. Which is an example of a control-bus signal?  b
    A. 0xFF  
    B. 64-bit data line  
    C. RD  
    D. Memory cell
    Correct answer: C (RD) ❌  
Explanation: A “data line” belongs to the data bus (it carries data bits). “RD” is a control signal (control bus).
    
5. Which CPU subcomponent primarily sequences and coordinates instruction execution?  c
    A. ALU  
    B. Control Unit  
    C. I/O Controller  
    D. RAM
    Correct answer: B (Control Unit) ❌  
Explanation: The Control Unit coordinates the steps of executing instructions (signals, sequencing). I/O controllers manage devices, not instruction sequencing.
    
6. During “decode,” the CPU mainly:  c
    A. Reads the next instruction from memory  
    B. Interprets the instruction and determines required actions  
    C. Writes results back to memory  
    D. Powers down unused devices
    Correct answer: B (Interprets the instruction and determines required actions) ❌  
Explanation: Decode = interpret opcode/operands and decide what resources/operations are needed. Writing results back happens at the end (write-back stage).
      
7. Which bus carries signals such as clock and reset?  a
    A. Data bus  
    B. Address bus  
    C. Control bus  
    D. Expansion bus only
    Correct answer: C (Control bus) ❌  
Explanation: Clock/reset are control signals, so they belong to the control bus, not the data bus.
    
8. A wider data bus generally implies:  b
    A. Fewer addressable memory locations  
    B. Higher potential throughput per transfer  
    C. Lower need for a control unit  
    D. Slower instruction execution
    
    
9. “Write result to memory” happens most naturally in which stage of an instruction cycle?  c
    A. Fetch  
    B. Decode  
    C. Execute  
    D. Write-back (end of execute)
    Correct answer: D (Write-back (end of execute)) ❌  
Explanation: Many descriptions separate “write-back” as the stage where results are stored (register/memory). Execution computes; write-back commits the result. 

Concept Explanation (5)

1. Explain the difference between the data bus, address bus, and control bus in a computer system.
    
    Answer  data bus is store the data and the register of information, address bus is to deliver the data and transfer it to CPU, and control bus is to manage the CPU and ALU.
    Result: ❌  
Explanation:

- Data bus: carries actual data values between CPU, memory, and I/O.
	    Data: actual data CPU,memory,I/O
- Address bus: carries the address (which memory location / which device register to access).
	- Address: carry address
    
- Control bus: carries control and timing signals (e.g., RD/WR, interrupt lines, clock, reset), coordinating operations and indicating what action is happening.
	- control: carry control and timing signal
    
2. Explain why the Program Counter must be incremented during the fetch–decode–execute cycle.
    
    Answer Program Counter is the part of the ALU.
    Result: ❌  
Explanation:

- The Program Counter (PC) is a CPU register that holds the address of the next instruction to fetch.
	PC CPU register hold address
- It must be incremented so the CPU proceeds to the next sequential instruction after fetching the current one.
	CPU proceeds next sequential instruction fetching current one	
- For control-flow instructions (jump/branch/call/return), the PC may be updated to a non-sequential target address during execution.
	    PC updated non-sequential target address
	    
3. Explain the roles of ALU, registers, and the control unit inside the CPU.
    
    Answer  ALU is to calculate the data and accumulate together and do the increment base on instruction.register is to fetch the control line and reinitializes the control signal.control unit is to manage the 64-bit data line. ❌
	    ALU:arithmetic logic operation,
	    Register:small,fast, CPU operands,intermediate results,key CPU state.
	    Explanation:

- ALU: performs arithmetic and logic operations (add/subtract/compare/AND/OR/shift), often used when executing instructions.
    
- Registers: very small, very fast storage inside the CPU for operands, addresses, intermediate results, and key CPU state (e.g., PC, IR, general-purpose registers).
    
- Control Unit: coordinates the instruction cycle (fetch/decode/execute/write-back) by generating control signals that tell ALU, registers, memory, and I/O what to do and when.  
    Common confusion to avoid:
    
- Registers do not “fetch control lines.” Control signals are produced by the control unit.
    
- A “64-bit data line” belongs to the data bus concept; the control unit does not “manage” it as its definition—rather it orchestrates signals including read/write timing and selects which registers/buses are enabled.
    
4. Explain the core idea of the von Neumann architecture and one implication for performance.
    
    Answer  von Neumann architecture could do the increasement and calculate the data base on the ALU.
    ❌ instructions data stored same memory same pathways 
     von Neumann architecture instrauction fetch and data access CPU stalled.
    
5. Explain why instruction fetch time is affected by memory access time and bus activity.
    
    Answer instruction fetch time is influenced by address unit and data line.
	    fetch:put instruction address  address bus,memory slow,fetch longer
	Result: ❌ (incomplete)  
Explanation:

- Fetch requires: (1) put instruction address on the address bus, (2) memory responds after its access latency, (3) instruction bits travel on the data bus back to CPU.
    
- If memory is slow (high latency), fetch takes longer.
    
- If the bus is busy/contended (e.g., other transfers, wait states, arbitration), the CPU may have to wait before it can place an address or receive data, increasing fetch time.  
    Key points to include next time:
    
- memory latency/access time
    
- bus contention / wait states / arbitration
    
- instruction travels via address bus + data bus, controlled by control signals (RD, timing)

Concept Comparison (5)

1. Compare the data bus vs address bus in terms of what they carry and what “width” means.
    
    Answer:data bus is to carry the data of system while address bus is to carry the address of data to store."width" is the storage of data to deliver in the memory.
data bus:transfer CPU,memory,I/O
address bus:memory,I/O
data width:data bus transfer
address width:address represented.
    
2. Compare registers vs main memory in terms of speed, size, and typical usage.
    
    Answer:registers is to store the data of data line while main memory is to store the data of CPU
    register:fastest store in CPU
    main memory:slower register,higher latency.
- Speed:
    
    - Registers are the fastest storage in the system (inside the CPU, accessed in ~1 CPU cycle or a few cycles).
        
    - Main memory (RAM) is slower than registers (and typically slower than caches), with much higher access latency.
        
- Size:
    
    - Registers are very small (a limited number of words).
        
    - Main memory is much larger (GBs).
        
- Typical usage:
    
    - Registers hold immediate operands, intermediate results, addresses, and CPU state (e.g., PC, general-purpose registers) during instruction execution.
        
    - Main memory holds programs and data currently in use (process code, stack, heap, global data) that don’t fit in registers/caches.
        

Why your answer is wrong:

- Registers do not “store the data of data line.” The data bus carries values during transfers; registers store CPU working values.
    
- Main memory does not “store the data of CPU.” It stores programs and data for running processes; the CPU reads/writes it via buses and caches.
    
3. Compare control unit vs ALU in terms of responsibility during instruction execution.
    
    Answer: control unit  is responsible for the data deliver and store while ALU is for calculate the data and emphasize.
    Your answer: ❌  
Correct answer:

- Control Unit: coordinates and sequences instruction execution. It decodes the instruction and generates control signals that direct data movement (which registers/buses are enabled), selects the ALU operation, and controls memory read/write timing.
    
- ALU: performs the actual arithmetic and logic operations (add, subtract, compare, AND/OR, shifts) on operand values provided to it, producing a result and status flags.
    

Why your answer is wrong:

- The control unit is not mainly responsible for “data deliver and store.” Data movement/storage occurs via registers, buses, and memory, while the control unit _signals_ when/how those transfers happen.
    
- “Emphasize” is not a CPU responsibility term; the ALU’s responsibility is computation (arithmetic/logic), not storage or control.
    
4. Compare “program stored on disk” vs “program in execution” from a system viewpoint.
    
    Answer:the CPU is responsible for the data store and control the information while program in execution will do in the control unit.
    store on disk:no memory,no running
    CPU execution
    
Your answer: ❌

Correct answer:

- Program stored on disk:
    
    - A passive file (executable) on secondary storage.
        
    - Not running; it has no CPU state, no PCB, no memory image loaded.
        
    - Exists as bytes in the file system; OS can read it when needed.
        
- Program in execution (a process):
    
    - An active instance running under OS control.
        
    - Loaded into main memory with an address space (code/text, data, heap, stack).
        
    - Has CPU execution context (PC, registers), and OS management metadata (PCB: state, scheduling info, memory mappings, open files, etc.).
        
    - Can be scheduled on the CPU; may have multiple instances of the same program running as separate processes.
    
5. Compare “fetch” vs “decode” stages in the instruction cycle in terms of inputs and outputs.
    
    Answer:fetch is to catch data from CPU and deliver with data line while decode is to sevive for the control unit for control signal.
    

---

Chapter 2: Operating System Overview + OS Services

Multiple Choice (20)

1. Which statement best describes the primary role of an operating system?  d
    A. Replace all application software  
    B. Act as an intermediary between applications/users and hardware  
    C. Eliminate the need for device controllers  
    D. Compile programs into machine code
    OS intermediary users hardware,resources services compile program.

Your answer: D  
Correct answer: B ❌  
Explanation: The OS primarily acts as an intermediary between users/applications and hardware, managing resources and providing services. Compiling programs is a compiler’s job, not the OS’s primary role.
    
2. Which is a typical OS service?  a
    A. Printing silicon chips  
    B. Program creation and execution support  
    C. Removing all context switches  
    D. Making hardware upgrades unnecessary
OS file-system manipulation,detection,I/O operations

    Correct answer: B ❌  
Explanation: OS services include program execution support, I/O operations, file-system manipulation, communications, error detection, etc. “Printing silicon chips” is not an OS service.
    
3. Which historical system type allowed several users to interact with the system at the same time?  c
    A. Serial processing  
    B. Simple batch system  
    C. Multiprogrammed batch system  
    D. Time-sharing system
CPU swithing

Correct answer: D ❌  
Explanation: Multiprogrammed batch improves CPU utilization but is still batch-oriented (little/no interactive use). Time-sharing supports interactive use by multiple users concurrently via rapid CPU switching.
    
4. In multiprogrammed batch systems, a key benefit is:  c
    A. No need for memory management  
    B. One program can do I/O while another computes  
    C. Elimination of secondary storage  
    D. No scheduling needed
    Correct answer: B ❌  
Explanation: The key benefit is overlapping CPU and I/O: while one job waits for I/O, another can use the CPU. This increases utilization.
    
5. OS evolution over time is often driven by:  c
    A. Hardware upgrades and new services  
    B. Removing all devices  
    C. Fixing bus width permanently  
    D. Eliminating user programs
Correct answer: A ❌  
Explanation: OS features evolve mainly due to new hardware capabilities and new user/application needs (new services). “Fixing bus width permanently” is not a driver of OS evolution.
      
6. Which OS goal focuses on efficiency?  d
    A. Use hardware in an efficient manner  
    B. Always keep CPU idle  
    C. Avoid memory management  
    D. Disable caching
    Correct answer: A ❌  
Explanation: Efficiency means using hardware resources effectively (CPU, memory, I/O). “Disable caching” generally reduces efficiency.
    
7. Which best characterizes “program creation” support?  c
    A. Editors and compilers  
    B. Only web browsers  
    C. Only hardware interrupts  
    D. Only file deletion tools
    Correct answer: A ❌  
Explanation: Program creation support typically includes tools like editors, compilers, assemblers, debuggers—things that help create programs.
    
8. Which best characterizes “error detection/response” as an OS service?  c
    A. The OS never reacts to errors  
    B. The OS can detect and respond to hardware/software errors  
    C. Errors are handled only by applications  
    D. Errors are impossible in time-sharing systems
    Correct answer: B ❌  
Explanation: The OS detects and responds to errors (hardware faults, I/O errors, illegal instructions, memory protection faults, etc.). Errors are not handled only by applications.
    
9. Which concept best explains why OS is called an intermediary?  b
    A. OS sits between user programs and hardware to provide controlled services  
    B. OS runs only on external storage  
    C. OS replaces all device controllers  
    D. OS removes the need for memory
    Correct answer: A ❌  
Explanation: The OS sits between programs/users and hardware, providing controlled access and abstractions (system calls, device drivers, protection).
    
10. In a simple batch system, a “monitor” typically:  c
    A. Loads jobs and runs the next job when one finishes  
    B. Prevents any job from running  
    C. Acts as a CPU register  
    D. Replaces the compiler
Correct answer: A ❌  
Explanation: The batch monitor controls job sequencing: loads a job, runs it, then automatically loads the next job when one finishes.
    

Concept Explanation (5)

1. Explain the OS roles “resource allocator” and “control program” with a concrete example for each.
    
    Answer resource allocator is to manage the resource for the system and work with CPU.control program is to deliver data by data line from memory in the storage.

- Resource allocator: The OS decides how to allocate limited resources (CPU time, memory space, disk blocks, I/O devices) among programs/users.  
    Example: CPU scheduling gives each ready process a time slice; memory manager assigns frames/pages to processes.
    
- Control program: The OS controls program execution and I/O operations to ensure correct, safe operation (protection, preventing illegal access, coordinating devices).
    
2. Explain why time-sharing systems were an important step beyond multiprogrammed batch systems.
    
    Answer the time-sharing systems enhanced timming.
    Correct answer:

- Multiprogrammed batch systems mainly improved CPU utilization by keeping multiple jobs in memory so the CPU could switch to another job when one was waiting for I/O. They were still batch-oriented with little or no direct user interaction.
    
- Time-sharing systems extended this by enabling interactive use: many users could run programs “at the same time” via rapid CPU context switching and short time slices.
    
- This improved responsiveness (quick feedback at terminals), fairness among users, and made the system usable for interactive editing, debugging, and online work rather than only submitting jobs and waiting.
    
3. Explain what the kernel is and why it is described as “running at all times.”
    
    Answer kernel is the core of the whole system of OS especially for the I/O.
    Correct answer:

- The kernel is the core part of the operating system that runs in privileged mode and provides essential services: process and CPU scheduling, memory management, device and I/O management, file system control, and system call handling.
    
- It is described as “running at all times” because it must always be available to handle interrupts, system calls, and resource management decisions, even when user programs are executing. User programs come and go, but the kernel remains resident and active to control the system.
    
4. Explain how OS services (program execution, I/O access, file access control) reduce application complexity.
    
    Answer OS services  use kernel to run the CPU part.
    Your answer: ❌

Correct answer:

- Program execution service: applications don’t need to implement loading, starting, stopping, and runtime resource setup themselves; they rely on system calls (create process, allocate memory, schedule CPU).
    
- I/O access service: applications don’t need to know device-specific hardware details; they use standard abstractions (read/write, drivers) while the OS handles interrupts, buffering, DMA, and device control.
    
- File access control: applications don’t need to implement security policies; the OS enforces permissions (who can read/write/execute), authentication, and protection, reducing bugs and improving safety.  
    Overall: OS provides standardized APIs + hardware abstraction + protection, so apps can focus on business logic rather than low-level management.
    
5. Explain why OS designs must evolve over time (give two drivers).
    
    Answer OS designs must run base on the limited resourced in the memory space 
    5. Your answer: ❌
    
Correct answer (two drivers):

- Hardware changes: new CPU architectures, multicore/virtualization, new storage (SSD), new device types (GPUs, sensors), faster networks → OS must adapt to manage them efficiently.
    
- User/application needs: demand for interactivity, security, networking, mobile/real-time behavior, cloud/distributed systems, new workloads → OS adds/changes services and policies.
    

Concept Comparison (5)

1. Compare serial processing vs simple batch systems in terms of scheduling/setup efficiency.
    
    Answer: 
    
2. Compare multiprogrammed batch systems vs time-sharing systems in terms of user interaction.
    
    Answer:
    
3. Compare “resource allocator” vs “control program” as two OS viewpoints.
    
    Answer:
    
4. Compare “program creation” vs “program execution” as OS services.
    
    Answer:
    
5. Compare “system access (login)” vs “controlled access to files” in terms of protection goals.
    
    Answer:
    

---

Chapter 3: Processes + IPC

Multiple Choice (20)

1. A process is best defined as:  a runing instance is a process
    A. A program stored on disk  
    B. A program in execution  
    C. A CPU register set only  
    D. A file directory entry
    Result: ❌  
Boundary rule: Program (passive code) vs Process (active execution instance with state).  
Minimal example: “gcc” file on disk is a program; when you run it, the running instance is a process.  
Common trap: Confusing “program stored on disk” with “program in execution.”
    
2. The heap typically contains:  c 
    A. Dynamically allocated memory during runtime  
    B. CPU scheduling queues  
    C. The program counter  
    D. Interrupt vectors only
    Result: ❌  
Boundary rule: Heap = dynamically allocated memory (malloc/new); PC is CPU execution state (stored in PCB/registers), not heap.  
Minimal example: new Node() allocates on heap; the PC points to the next instruction, not a heap object.  
Common trap: Mixing “process memory sections” (heap/stack/text) with “CPU state” (PC, registers).
    
3. Which is a standard process state?  b
    A. New  
    B. Compiled  
    C. Linked  
    D. Encrypted
    Correct answer: A  
Result: ❌  
Boundary rule: Process states are lifecycle/scheduling states (New, Ready, Running, Waiting, Terminated), not build steps.  
Minimal example: A just-created process is New before it becomes Ready.  
Common trap: Confusing compilation pipeline terms (compiled/linked) with OS process states.
    
4. A process in “ready” state is:  b
    A. Currently executing instructions  
    B. Waiting for an event like I/O completion  
    C. Waiting to be assigned to a CPU  
    D. Already terminated
    Correct answer: C  
Result: ❌  
Boundary rule: Ready = waiting for CPU; Waiting/Blocked = waiting for event (e.g., I/O completion).  
Minimal example: Ready queue holds processes that can run if scheduled; disk I/O wait queue holds blocked processes.  
Common trap: Treating “ready” as “waiting for I/O.”

5. A context switch occurs when:  a contest is connected with process and memory in the CPU. 
    A. A process allocates heap memory  
    B. The CPU switches from one process to another  
    C. A file is opened  
    D. A page table is updated only
    
    Correct answer: B  
Result: ❌  
Boundary rule: Context switch = CPU changes which process is running (save old context, load new).  
Minimal example: Timer interrupt triggers scheduler → CPU switches from P1 to P2.  
Common trap: Confusing “context” with memory allocation or general “process + memory” wording.
    
6. Context-switch time is considered:  c context-switch time is base on the timeline for I/O in the disk.
    A. Useful work that advances a user program  
    B. Pure overhead (no useful work while switching)  
    C. A disk allocation method  
    D. A file protection scheme
    
    Correct answer: B  
Result: ❌  
Boundary rule: Context switching does not advance user program progress; it is scheduling overhead.  
Minimal example: Saving registers/loading registers takes time but computes no user output.  
Common trap: Mixing context-switch overhead with disk I/O timing.
    
7. During a context switch, the OS must:  c OS is work on the compiler in kernel 
    A. Delete both processes  
    B. Save the old state and load the new state (via PCB/context)  
    C. Recompile the program  
    D. Rewrite the disk

Correct answer: B  
Result: ❌  
Boundary rule: Must save old CPU state to old PCB and restore new CPU state from new PCB.  
Minimal example: Save P1 registers+PC → PCB1; load PCB2 → P2 registers+PC.  
Common trap: Thinking kernel “recompiles” or “compiler work” happens during context switch.
    
8. Which can reduce context-switch overhead on some hardware?  
    A. Removing registers  
    B. Multiple sets of CPU registers to hold multiple contexts  
    C. Disabling interrupts permanently  
    D. Using only sequential file access
    
9. Process creation often forms:  
    A. A table of disk blocks  
    B. A tree of processes (parent/children)  
    C. A single file system directory  
    D. A RAM disk
    
10. In UNIX-like systems, fork() is used to:  
    A. Replace current process image with a new program  
    B. Create a new process (child)  
    C. Wait for a child to terminate  
    D. Terminate all children immediately
    
11. In UNIX-like systems, exec() is used to:  
    A. Create a child process  
    B. Replace the process memory space with a new program  
    C. Put a process into ready queue  
    D. Allocate disk blocks contiguously
    
12. wait() is commonly used by a parent process to:  
    A. Force the child to run forever  
    B. Wait for child termination and obtain status  
    C. Convert ready to running  
    D. Allocate more heap
    
13. “Cascading termination” refers to:  
    A. Terminating a file system  
    B. Terminating all descendants when a parent terminates (in some OSes)  
    C. Copying a file to many directories  
    D. Paging out all frames
    

Concept Explanation (5)

1. Explain why a program can correspond to multiple processes in a multi-user or multi-instance environment.
    
    Answer
    
2. Explain what information is stored in a PCB and why it is essential for context switching.
    
    Answer
    
3. Explain why context-switch time is considered overhead and what factors can increase it.
    
    Answer
    
4. Explain the typical UNIX process creation flow using fork(), exec(), and wait().
    
    Answer
    
5. Explain the purpose of having ready queues and wait queues in process scheduling.
    
    Answer
    

Concept Comparison (5)

1. Compare “ready” vs “waiting” states in terms of what the process is waiting for.
    
    Answer: ready means the OS is in process,waiting means data line is in operation and its assigned in I/O.
    Ready: the process is ready to run and is waiting for CPU time (to be scheduled onto the CPU).  
Waiting (Blocked): the process cannot run yet because it is waiting for an event, typically I/O completion, a resource to become available, or a signal/interrupt.  
Result: ❌  
Boundary rule: Ready = waiting for CPU; Waiting/Blocked = waiting for an event (often I/O) before it can become ready again.  
Minimal example: Disk read requested → process goes to Waiting until the disk interrupt signals completion; then it returns to Ready.  
Common trap: People think “ready” means “currently running,” but running is a separate state; ready just means it could run if scheduled.
    
2. Compare “program” vs “process” in terms of passive vs active entity and where it resides.
    
    Answer:
    
3. Compare fork() vs exec() in terms of what each changes (process identity vs memory image).
    
    Answer:
    
4. Compare context switch vs mode switch (process change vs privilege change) in practical impact.
    
    Answer:
    
5. Compare “parent terminates child via abort()” vs “cascading termination by OS policy.”
    
    Answer:
    

---

Chapter 4: Threads and Concurrency

Multiple Choice (20)

1. A thread is best described as:  
    A. A complete program stored on disk  
    B. A unit of CPU utilization within a process  
    C. A disk block pointer  
    D. A file permission bit
    
2. Compared to processes, threads in the same process typically share:  
    A. Registers only  
    B. Address space and resources such as code/data  
    C. Their own separate virtual memory always  
    D. Separate open-file tables always
    
3. Which is a main motivation for multithreading?  
    A. To remove the need for scheduling  
    B. To improve responsiveness and resource sharing  
    C. To eliminate memory management  
    D. To force sequential execution only
    
4. On a multicore system, threads can:  
    A. Never run in parallel  
    B. Potentially run in parallel on different cores  
    C. Only run one at a time regardless of cores  
    D. Only run during I/O waits
    
5. Which model maps many user-level threads to one kernel thread?  
    A. One-to-one  
    B. Many-to-one  
    C. Many-to-many  
    D. Two-level indexed
    
6. A major limitation of the many-to-one model is:  
    A. No user-level thread library exists  
    B. A blocking system call can block the entire process  
    C. Too many kernel threads are created  
    D. It requires hardware transactional memory
    
7. Which model creates a kernel thread for each user thread?  
    A. One-to-one  
    B. Many-to-one  
    C. Many-to-many  
    D. Batch-to-time-sharing
    
8. A thread pool mainly helps by:  
    A. Eliminating context switches  
    B. Reusing a set of threads to handle multiple tasks  
    C. Making all code single-threaded  
    D. Disabling interrupts
    
9. Which concurrency problem occurs when multiple threads access shared data without proper synchronization?  
    A. FAT overflow  
    B. Data race  
    C. Disk head crash  
    D. Address bus contention only
    
10. A “critical section” is:  
    A. Code that must run at boot time  
    B. Code that accesses shared resources and must be protected  
    C. Code that is stored in ROM only  
    D. Code that never touches memory
    
11. A mutex primarily provides:  
    A. Random disk access  
    B. Mutual exclusion for critical sections  
    C. Faster paging  
    D. File sharing over a network
    
12. A semaphore is commonly used to:  
    A. Store file names  
    B. Coordinate access and synchronization among threads  
    C. Increase bus width  
    D. Remove scheduling queues
    
13. “Deadlock” refers to:  
    A. A process always finishing quickly  
    B. A set of threads/processes waiting forever for each other’s resources  
    C. Faster I/O throughput  
    D. A paging optimization
    
14. Amdahl’s Law is used to estimate:  
    A. Disk capacity scaling  
    B. Speedup limits from parallelization  
    C. File allocation overhead  
    D. Address bus performance only
    
15. Which is an example of “implicit threading” conceptually?  
    A. Manually creating threads for every request without reuse  
    B. Using a framework/runtime to manage threads (e.g., thread pools)  
    C. Disabling kernel threads  
    D. Using only polling I/O
    
16. A liveness issue is best described as:  
    A. The system always makes progress  
    B. The system fails to make progress (e.g., deadlock/starvation)  
    C. The system runs only in user mode  
    D. The system has infinite memory
    
17. Thread creation inside a process is generally:  
    A. More expensive than creating a whole new process  
    B. Less expensive than creating a whole new process  
    C. Identical cost to disk formatting  
    D. Impossible without DMA
    
18. Which statement best describes “synchronization”?  
    A. Ensuring correct ordering/coordination of concurrent access to shared resources  
    B. Ensuring a file is contiguous  
    C. Ensuring a bus is 64-bit  
    D. Ensuring a process is always running
    
19. “Starvation” is:  
    A. A process finishing too quickly  
    B. A thread/process waiting indefinitely because resources keep going to others  
    C. A disk allocation method  
    D. A memory compaction step
    
20. A correct goal of concurrency control is:  
    A. Maximize race conditions  
    B. Ensure correctness while allowing safe parallelism  
    C. Remove all locks by default  
    D. Always force single-thread execution
    

Concept Explanation (5)

1. Explain why threads are considered “lighter weight” than processes.
    
    Answer
    
2. Explain what a data race is and why it can produce non-deterministic results.
    
    Answer
    
3. Explain what a critical section is and how a mutex protects it.
    
    Answer
    
4. Explain deadlock and name one common condition or scenario that can cause it.
    
    Answer
    
5. Explain Amdahl’s Law in terms of “serial portion” limiting parallel speedup.
    
    Answer
    

Concept Comparison (5)

1. Compare process vs thread in terms of resource sharing, isolation, and overhead.
    
    Answer:
    
2. Compare many-to-one vs one-to-one threading models (benefits and limitations).
    
    Answer:
    
3. Compare mutex vs semaphore in terms of typical usage and semantics.
    
    Answer:
    
4. Compare deadlock vs starvation (cause and observable behavior).
    
    Answer:
    
5. Compare “parallelism” vs “concurrency” in a multicore vs single-core context.
    
    Answer:
    

---

Chapter 5: Device Management (I/O)

Multiple Choice (20)

1. Interrupt-driven I/O was introduced mainly to:  
    A. Eliminate device controllers  
    B. Reduce CPU busy waiting  
    C. Increase device speed physically  
    D. Remove context switching
    
2. In interrupt-driven I/O, the CPU still typically:  
    A. Polls device status bits continuously  
    B. Executes an interrupt service routine (ISR) when interrupted  
    C. Transfers every data word without interruption support  
    D. Avoids all involvement
    
3. DMA uniquely distinguishes itself from interrupt-driven I/O because:  
    A. DMA uses no interrupts  
    B. DMA controller can transfer blocks of data with minimal CPU involvement  
    C. CPU must move data word by word in DMA  
    D. DMA disables device controllers
    
4. A device controller is best described as:  
    A. A user-level library  
    B. Hardware that controls a specific device and presents registers/buffers to the system  
    C. A file allocation method  
    D. A page table entry
    
5. “Polling” means the CPU:  
    A. Waits for an interrupt without doing anything  
    B. Repeatedly checks device status in a loop  
    C. Delegates transfers to a DMA controller always  
    D. Writes files contiguously
    
6. An interrupt service routine (ISR) is:  
    A. A disk directory entry  
    B. Code executed in response to a hardware/software interrupt  
    C. A memory compaction algorithm  
    D. A file permission setting
    
7. Which approach typically has the highest CPU busy-waiting overhead?  
    A. DMA  
    B. Interrupt-driven I/O  
    C. Polling I/O  
    D. Spooling
    
8. Buffering in I/O is used primarily to:  
    A. Increase bus width  
    B. Absorb differences in speed between producer/consumer or device/CPU  
    C. Remove the need for interrupts  
    D. Eliminate file permissions
    
9. Caching differs from buffering because caching mainly:  
    A. Stores frequently used data to speed up repeated access  
    B. Always holds only one block  
    C. Only applies to printers  
    D. Requires contiguous allocation
    
10. Spooling is most associated with:  
    A. CPU registers  
    B. Overlapping computation with I/O by staging data (e.g., printing)  
    C. Page replacement policies  
    D. Address translation
    
11. A block device is typically characterized by:  
    A. Only sequential access  
    B. Random access in fixed-size blocks (e.g., disks)  
    C. Character-by-character access only  
    D. No buffering possible
    
12. A character device is typically characterized by:  
    A. Data transferred as a stream of characters/bytes (e.g., keyboard)  
    B. Fixed-size blocks with direct access  
    C. Always uses FAT  
    D. Cannot generate interrupts
    
13. Device drivers are primarily:  
    A. Hardware chips on the motherboard  
    B. OS software modules that know how to operate a device controller  
    C. User documents  
    D. Memory partitioning algorithms
    
14. In DMA, the DMA controller temporarily:  
    A. Disables memory  
    B. Takes control of the system bus to move data between device and memory  
    C. Executes user applications  
    D. Manages file permissions
    
15. Which is a reasonable outcome of using DMA for large transfers?  
    A. CPU spends more time moving each byte  
    B. CPU is freed to do other work until completion interrupt  
    C. CPU must poll the device continuously  
    D. File system becomes unnecessary
    
16. Synchronous I/O means:  
    A. The call returns immediately and continues in background without waiting  
    B. The requesting process waits until I/O completes  
    C. The OS never uses interrupts  
    D. DMA cannot be used
    
17. Asynchronous I/O means:  
    A. The caller can continue without waiting for completion  
    B. The CPU must busy-wait  
    C. The OS cannot signal completion  
    D. The device cannot buffer data
    
18. An I/O “error detection/handling” responsibility is typically part of:  
    A. The instruction decoder  
    B. The operating system and device driver stack  
    C. The ALU  
    D. The address bus
    
19. “Memory-mapped I/O” conceptually means:  
    A. Devices are accessed only by file paths  
    B. Device registers appear as memory addresses in the address space  
    C. Files are mapped into RAM disks only  
    D. Paging is disabled
    
20. “Direct I/O” (in general OS usage) most often aims to:  
    A. Bypass caches/buffers in some scenarios for predictable performance  
    B. Force all I/O through a printer spool  
    C. Replace DMA  
    D. Replace interrupts
    

Concept Explanation (5)

1. Explain why polling wastes CPU time compared to interrupt-driven I/O.
    
    Answer
    
2. Explain how DMA reduces CPU involvement during large data transfers.
    
    Answer
    
3. Explain buffering vs caching and give one example use case for each.
    
    Answer
    
4. Explain spooling with a printer example and why it improves system usability.
    
    Answer
    
5. Explain the role of a device driver as an abstraction layer.
    
    Answer
    

Concept Comparison (5)

1. Compare polling I/O vs interrupt-driven I/O in terms of CPU utilization and responsiveness.
    
    Answer:
    
2. Compare interrupt-driven I/O vs DMA in terms of “who moves the data” and when CPU is interrupted.
    
    Answer:
    
3. Compare buffering vs caching in terms of purpose (speed mismatch vs reuse locality).
    
    Answer:
    
4. Compare block devices vs character devices in terms of access patterns and typical examples.
    
    Answer:
    
5. Compare synchronous vs asynchronous I/O in terms of process blocking behavior.
    
    Answer:
    

---

Chapter 6: Memory Management

Multiple Choice (20)

1. Internal fragmentation occurs when:  
    A. Free memory is split into many small holes between allocations  
    B. Allocated memory is slightly larger than requested and unused inside the partition  
    C. A page table entry is invalid  
    D. A disk block pointer is corrupted
    
2. External fragmentation occurs when:  
    A. Unused space is inside allocated partitions  
    B. Free memory exists but is scattered into small holes  
    C. CPU registers overflow  
    D. A process is terminated
    
3. Compaction helps reduce:  
    A. Internal fragmentation  
    B. External fragmentation by shuffling memory contents into one large free block  
    C. Page table size  
    D. The need for an MMU
    
4. Compaction is possible only if:  
    A. Relocation is dynamic and done at execution time  
    B. All programs are read-only  
    C. There is no swapping  
    D. Disk is SSD
    
5. Fixed partitioning means:  
    A. Memory is divided into a set of partitions, each holds one program  
    B. Memory is divided into pages only  
    C. Each process gets all memory  
    D. Processes never terminate
    
6. Equal-sized fixed partitions can cause internal fragmentation because:  
    A. A program may not fill the entire partition  
    B. Programs always exceed partition size  
    C. Compaction is mandatory  
    D. Paging is disabled
    
7. Dynamic partitioning tends to create:  
    A. No holes at all  
    B. External fragmentation (“holes”) as processes swap in/out  
    C. Only internal fragmentation  
    D. Only contiguous free space
    
8. Best-fit placement allocates:  
    A. The first hole large enough  
    B. The smallest hole that is large enough  
    C. The largest hole available  
    D. A random hole
    
9. A typical disadvantage of best-fit is:  
    A. It always fails  
    B. It tends to produce many small leftover holes  
    C. It requires no search time  
    D. It eliminates fragmentation
    
10. First-fit placement allocates:  
    A. The first hole that is large enough  
    B. The smallest hole that is large enough  
    C. The largest hole  
    D. Only exact matches
    
11. Next-fit placement is like first-fit but:  
    A. Always starts searching from the beginning of memory  
    B. Starts searching from the last allocation position  
    C. Chooses the largest hole  
    D. Requires compaction every time
    
12. Buddy system uses block sizes typically of:  
    A. Prime numbers  
    B. Powers of two (2^k)  
    C. Fibonacci numbers  
    D. Random sizes
    
13. Paging divides physical memory into:  
    A. Segments  
    B. Frames  
    C. Files  
    D. Processes
    
14. Paging divides a program (logical address space) into:  
    A. Blocks  
    B. Pages  
    C. Records  
    D. Clusters
    
15. A page table is used to:  
    A. Map pages to frames  
    B. Map files to directories  
    C. Map interrupts to ISRs  
    D. Map buses to controllers
    
16. PTBR (page-table base register) points to:  
    A. The current instruction  
    B. The current page table in memory  
    C. The free-frame list on disk  
    D. The FAT table
    
17. PRLR (page-table length register) indicates:  
    A. CPU frequency  
    B. Size of the page table  
    C. Disk latency  
    D. Stack size
    
18. A valid/invalid bit in a page table is used to:  
    A. Indicate whether a page is in the process’s logical address space / mapped  
    B. Encrypt memory  
    C. Choose best-fit holes  
    D. Control printer spooling
    
19. Segmentation supports:  
    A. Fixed-size partitions only  
    B. User view of memory as logical units (segments) of varying sizes  
    C. Only contiguous allocation  
    D. Only page-based addressing
    
20. Segment tables commonly store:  
    A. File permissions only  
    B. Base address and size (limit) plus protection/status bits  
    C. CPU registers only  
    D. Disk block pointers only
    

Concept Explanation (5)

1. Explain internal vs external fragmentation and give one example scenario for each.
    
    Answer
    
2. Explain why compaction requires dynamic relocation and why it costs processor time.
    
    Answer
    
3. Explain paging with the terms page, frame, and page table.
    
    Answer
    
4. Explain what PTBR and PRLR do in address translation.
    
    Answer
    
5. Explain segmentation and why it matches “user view of memory.”
    
    Answer
    

Concept Comparison (5)

1. Compare fixed partitioning vs dynamic partitioning in terms of fragmentation and flexibility.
    
    Answer:
    
2. Compare best-fit vs first-fit placement algorithms in typical outcomes and overhead.
    
    Answer:
    
3. Compare paging vs segmentation in terms of unit size (fixed vs variable) and fragmentation type.
    
    Answer:
    
4. Compare external fragmentation vs internal fragmentation in terms of “where wasted space lives.”
    
    Answer:
    
5. Compare buddy system vs paging as approaches to managing variable-sized requests.
    
    Answer:
    

---

Chapter 7: File Management

Multiple Choice (20)

1. A “field” is best defined as:  
    A. A collection of similar records  
    B. The basic element of data (e.g., last name, date, sensor value)  
    C. A collection of related data with explicit relationships  
    D. A disk allocation method
    
2. A “record” is:  
    A. A collection of related fields treated as a unit by an application  
    B. A single byte on disk  
    C. A directory node  
    D. A virtual memory page
    
3. A “file” is:  
    A. A collection of similar records treated as a single entity  
    B. A collection of unrelated devices  
    C. A process state  
    D. A CPU register set
    
4. A “database” is:  
    A. A single file only  
    B. A collection of related data with explicit relationships among elements  
    C. A single record only  
    D. A single field only
    
5. Sequential access typically supports operations like:  
    A. read n, write n  
    B. read next, write next, reset  
    C. position to n only  
    D. rewrite n only
    
6. Direct access typically supports:  
    A. read next only  
    B. read n, write n, position to n  
    C. reset only  
    D. no reads after write ever
    
7. The “n” in direct access read n commonly means:  
    A. CPU core number  
    B. Relative block number  
    C. File permission level  
    D. Thread ID
    
8. Opening a file (Fi) generally involves:  
    A. Deleting Fi first  
    B. Searching directory structure for Fi and moving its entry into memory  
    C. Moving all file blocks into CPU registers  
    D. Formatting the disk
    
9. Closing a file (Fi) generally involves:  
    A. Moving the directory entry from memory back to disk directory structure  
    B. Clearing the address bus  
    C. Converting FAT to indexed allocation  
    D. Swapping out the entire process
    
10. A directory structure is:  
    A. A collection of nodes containing info about all files  
    B. A set of CPU registers  
    C. A page table  
    D. A DMA descriptor list
    
11. A linear-list directory implementation is:  
    A. Complex but fastest  
    B. Simple to program but time-consuming to search  
    C. Impossible on disks  
    D. Only for RAM disks
    
12. A hash-table directory implementation:  
    A. Always removes collisions  
    B. Decreases directory search time but may have collisions  
    C. Works only for sequential access files  
    D. Requires FAT to be disabled
    
13. File sharing on distributed systems is commonly supported by:  
    A. NFS (Network File System)  
    B. PTBR  
    C. PRLR  
    D. ALU
    
14. File protection “types of access” commonly include:  
    A. Add, Multiply, Divide  
    B. Read, Write, Execute, Append, Delete, List  
    C. Fetch, Decode, Execute  
    D. New, Ready, Running
    
15. Contiguous allocation is best described as:  
    A. File blocks scattered anywhere, linked by pointers  
    B. File occupies a set of contiguous disk blocks  
    C. File uses an index block of pointers  
    D. File stored only in memory
    
16. Linked allocation is best described as:  
    A. Each file has an index block for all pointers  
    B. Each block points to the next block in the file  
    C. File is always contiguous  
    D. Requires the entire table in memory all the time
    
17. A key disadvantage of linked allocation (linked chain of blocks) is:  
    A. No sequential access possible  
    B. Pointer overhead in blocks and reliability issues if a pointer is corrupted  
    C. Requires two-level index always  
    D. Cannot store data in blocks
    
18. FAT (File-Allocation Table) improves linked allocation by:  
    A. Removing pointers entirely  
    B. Moving pointers into a table stored in memory  
    C. Making the disk unnecessary  
    D. Disabling random access
    
19. A disadvantage of FAT is:  
    A. Entire table must be in memory all the time  
    B. No data can be stored in blocks  
    C. No random access possible  
    D. It requires compaction
    
20. “Read-ahead” and “free-behind” techniques are mainly used to:  
    A. Optimize sequential access performance  
    B. Encrypt files  
    C. Allocate blocks contiguously  
    D. Replace directories with hash tables
    

Concept Explanation (5)

1. Explain sequential access vs direct access and when each is preferred.
    
    Answer
    
2. Explain what a file directory is and what information it commonly maintains.
    
    Answer
    
3. Explain why hash-table directory implementations can be faster and what “collision” means.
    
    Answer
    
4. Explain FAT and how it changes the performance characteristics compared with linked allocation.
    
    Answer
    
5. Explain the role of caching (disk cache, RAM disk) in file system performance.
    
    Answer
    

Concept Comparison (5)

1. Compare contiguous vs linked vs indexed allocation in terms of random access support and overhead.
    
    Answer:
    
2. Compare linked allocation (pointers in blocks) vs FAT (pointers in memory table) in reliability and speed.
    
    Answer:
    
3. Compare linear-list directory vs hash-table directory in time complexity and practical trade-offs.
    
    Answer:
    
4. Compare file protection “read/write/execute” vs “append/delete/list” in typical user scenarios.
    
    Answer:
    
5. Compare sequential access optimization (read-ahead/free-behind) vs general caching (disk cache).
    
    Answer:
