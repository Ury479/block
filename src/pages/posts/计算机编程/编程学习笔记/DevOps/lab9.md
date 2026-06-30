---
layout: ../../../../../layouts/PostLayout.astro
title: lab9
description: '12. Describe the difference between a Docker image and a Docker
  container. Your Answer: "Docker image is static, while D'
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 9
sourceFolder: 计算机编程/编程学习笔记/DevOps
---

---
![Pasted image 20250318184952.png](/archive/?q=Pasted%20image%2020250318184952.png)![Pasted image 20250318184955.png](/archive/?q=Pasted%20image%2020250318184955.png)![Pasted image 20250318184957.png](/archive/?q=Pasted%20image%2020250318184957.png)![Pasted image 20250318184958.png](/archive/?q=Pasted%20image%2020250318184958.png)![Pasted image 20250318185000.png](/archive/?q=Pasted%20image%2020250318185000.png)![Pasted image 20250318185001.png](/archive/?q=Pasted%20image%2020250318185001.png)![Pasted image 20250318185003.png](/archive/?q=Pasted%20image%2020250318185003.png)![Pasted image 20250318185004.png](/archive/?q=Pasted%20image%2020250318185004.png)![Pasted image 20250318185006.png](/archive/?q=Pasted%20image%2020250318185006.png)

---
### **12. Describe the difference between a Docker image and a Docker container.**

- **Your Answer:**  
    _"Docker image is static, while Docker container could store different images."_ ❌
    
Docker image immutable template create containers
Docker container  **running instance**

- **Corrected Answer:**
    - **A Docker image** is a **read-only template** used to create containers.
    - **A Docker container** is a **running instance** of an image.

---

### **13. What command would you use to stop a running container?**

- **Your Answer:**  
    _"docker run"_ ❌
- **Corrected Answer:**
    - **Use `docker stop <container_id>`** to stop a running container.

---

### **14. How does Docker improve portability across different environments?**

- **Your Answer:**  
    _"I don't know."_ ❌

- **Corrected Answer:**
    - Docker packages applications with **all dependencies** into **containers**, ensuring they run **identically** across different environments.
    
- Docker packages dependencies of applications to containers and make sure they run identically in different environments.

---

### **15. Explain the significance of volume mapping in Docker and provide an example command.**

- **Your Answer:**  
    _"The volume could change the Docker on the local machine and influence the result of the virtual machine."_ ❌
    
- **Corrected Answer:** persistent storage 
    - **Volume mapping allows persistent storage** so data is not lost when a container stops.
    docker run -v /local/path:/container/path my-image
    
the volume mapping could support persistent storage so that data will not be lost when a container stops.

11. **Explain the difference between `docker images` and `docker ps`.**  
    📌 **Answer:** the  `docker images` solve the problems for persistent storage and `docker ps`. just show the container in use.

- `docker images` **lists available images** on the system.
- `docker ps` **lists running containers**.

---

12. **What command removes all stopped containers?**  
    📌 **Answer:** docker rm


`docker container prune`

---

13. **How does Docker improve software portability across different environments?**      📌 **Answer:**  Docker allow different containers could be used into the same localhost and store static images while support the persistent storage. 

    Docker **packages applications with all dependencies** inside containers, ensuring they run **consistently across different systems**.

---

14. **What is the role of a Dockerfile in containerization?**  
    📌 **Answer:**  Dockerfile support centrolize of the containner and support the integrate and automate release of software.

    A **Dockerfile** is a script that contains **instructions** for building a Docker image.

Example:

dockerfile

`FROM node:latest COPY . /app CMD ["node", "app.js"]`

---

15. **What happens if a container is deleted without using a volume?**  
    📌 **Answer:**  
    All **data inside the container is lost** unless a **volume was used**.

---

## **🔹 Scenario-Based Questions**

16. **A developer created a Docker container, but all files are lost when the container stops. How can they prevent this?**  
    📌 **Answer:**  
    Use **Docker volumes**:

bash

Copy code

`docker run -v /host/path:/container/path my-container`

---

17. **A developer runs `docker run -p 8080:80 my-app`, but the app is unreachable. What could be wrong?**  
    📌 **Possible Issues:**

- The app might **not be listening on port 80** inside the container.
- The firewall might **block port 8080**.
- Use `docker logs <container_id>` to check for errors.

---

18. **You need to run a container in the background. What flag should you use?**  
    📌 **Answer:**  
    Use the `-d` flag (**detached mode**):

bash

Copy code

`docker run -d my-container`

---

19. **What is the difference between a bind mount and a volume?**  
    📌 **Answer:**

- **Bind mounts**: Directly map a host directory (`/host/path`) to a container.
- **Volumes**: Managed by Docker (`docker volume create my-volume`).
---
## **🔹 Short Answer Questions**

16. **Explain the difference between `docker run` and `docker start`.** 
	1. the docker run will run the docker app while docker start just open the app.
17. **How does volume mapping (`-v`) work in Docker? Provide an example.**
18. **What is the benefit of using `docker-compose` instead of individual `docker run` commands?**
	. - - **Docker Compose** simplifies **multi-container management** with a single **YAML configuration file** instead of multiple `docker run` commands.
19. **How do you expose a Docker container’s port to the host? Provide a command example.**
20. **What happens if you run `docker run --rm my-container`?**

---
### **🚀 Additional Practice Questions on Docker & Containers**

### **2. What does the `docker ps -a` command do?** a

- a) Lists all running containers
- b) Lists only active containers
- c) Lists all containers, including stopped ones
- d) Removes all containers

- **Your Answer:** a ❌
- **Correct Answer:** c) **Lists all containers, including stopped ones** ✅
- **Explanation:**
    - **`docker ps`** lists **only running** containers.
    - **`docker ps -a`** lists **all** containers, including stopped ones.
    - **Option d (Removes all containers)** is incorrect; the correct command for that is **`docker rm $(docker ps -aq)`**.

## **🔹 Fill in the Blanks**

6. **The `docker __run up -d__` command is used to download images from Docker Hub.**
	1. **The `docker ____pull____` command is used to download images from Docker Hub.**
7. **To remove all stopped containers from a system, the command used is `docker __rm__`.**
	1. **To remove all stopped containers from a system, the command used is `docker ____prune____`.** ❌ → **Correct Answer:** `docker container prune`
	
8. **The flag `-d` is used in `docker run` to run a container in ____ mode.**
	1. **The flag `-d` is used in `docker run` to run a container in ****detached**** mode.** ✅
	
9. **To persist data across container restarts, we use ____ in Docker.**
	1. **To persist data across container restarts, we use ****volumes**** in Docker.** ✅
	
10. **A Docker container is a running instance of a _____.**
	1. **A Docker container is a running instance of a ****Docker image****.** ✅

---
## **🔹 True/False Questions**
11. - **Docker images are mutable, meaning they can be modified after creation.** _(True)_ ❌ → **Correct Answer:** **False** (Docker images are **immutable**; to modify, you must create a new image).
---
### **Multiple-Choice Questions (MCQs)**

2. **How does virtualization improve resource utilization?**  a -b
    A) By allowing multiple physical servers to run the same application  
    B) By running multiple virtual machines (VMs) on a single physical server  
    C) By requiring each application to have its own physical machine  
    D) By eliminating the need for an operating system
    
    - **Your Answer:** a ❌
- **Correct Answer:** b) **By running multiple virtual machines (VMs) on a single physical server** ✅
- **Explanation:**
    - **Virtualization** improves resource utilization by **allowing multiple virtual machines (VMs) to run on a single physical server**, reducing wasted resources.
    - **Option a is incorrect** because multiple physical servers running the same application does **not optimize resource usage**.
    - **Option c is incorrect** because virtualization **does not require each application to have its own physical machine**.
    - **Option d is incorrect** because virtualization **still relies on an operating system** to manage VMs.
    
3. **Which of the following statements about containers is true?**  a
    A) Containers share the same OS kernel but isolate applications  
    B) Each container requires its own guest operating system  
    C) Containers consume more memory than VMs  
    D) Containers are slower to start than VMs
    
- **Your Answer:** a ✅ (Correct)
- **Explanation:**
    - **Containers share the same OS kernel but isolate applications** for security and resource efficiency.
    - **Option b is incorrect** because **containers do not require a separate guest operating system**.
    - **Option c is incorrect** because **containers consume less memory than VMs**.
    - **Option d is incorrect** because **containers start faster than VMs** due to their lightweight nature.

4. **Which Docker command is used to create and start a container from an image?**  a
    A) `docker build`  
    B) `docker run`  
    C) `docker pull`  
    D) `docker push`

	- **Your Answer:** a ❌
- **Correct Answer:** b) **`docker run`** ✅
- **Explanation:**
    - **`docker run`** is used to **create and start a container** from an image.
    - **`docker build`** is used to **build images**, not run containers.
    - **`docker pull`** is used to **download images** from Docker Hub.
    - **`docker push`** is used to **upload images** to Docker Hub.
    
5. **What is the purpose of the `-p` flag in Docker?**  c
    A) To specify environment variables  
    B) To link a container’s port to a host’s port  
    C) To set the container’s memory limit  
    D) To rename the container
    
    - **Your Answer:** c ❌
- **Correct Answer:** b) **To link a container’s port to a host’s port** ✅
- **Explanation:**
    - **`-p <host_port>:<container_port>`** maps a container’s internal port to a host machine’s port.
    - **Option A (Setting environment variables)** is incorrect—use `-e` for that.
    - **Option C (Setting memory limits)** is incorrect—use `--memory` for that.
    - **Option D (Renaming a container)** is incorrect—use `--name` for that.
    

---

### **True/False Questions**

6. **Virtual machines require an entire guest operating system, whereas containers share the host’s OS kernel.** _(True/False)_ false
	1. - **Your Answer:** False ❌
	- **Correct Answer:** **True** ✅
	- **Explanation:**
	    - **VMs require a full guest OS** and run on a **hypervisor**.
	    - **Containers share the host OS kernel**, making them more lightweight.
    
	1. **A Docker image is a read-only template used to create containers.** _(True/False)_ true
			- **Your Answer:** True ✅ (Correct)
	- **Explanation:**
	    - A **Docker image** is a **blueprint** for creating **containers** and cannot be modified.
		1. **Running a container in detached mode allows it to run in the background.** _(True/False)_ true
    
7. **The command `docker ps` lists only the active running containers.** _(True/False)_ false
	    - **Your Answer:** False ❌
- **Correct Answer:** **True** ✅
- **Explanation:**
    - **`docker ps`** only lists **currently running containers**.
    - To see **all** containers, use **`docker ps -a`**.

---   
## **🔹 Short Answer Questions**

### **11. What are two advantages of using containers instead of virtual machines?**

- **Your Answer:**  
    _"Containers could use different environments for deployment, while virtual machines couldn't."_ ❌
- **Corrected Answer:**
    1. **Faster startup time** – Containers start in **seconds**, whereas VMs take **minutes**.
    2. **Lower resource usage** – Containers share the **host OS**, consuming **less CPU & memory**.

- **What is the main difference between a Docker image and a Docker container?**  
	 Docker image  and a Docker container?
- 
    **Answer:** A **Docker image** is a **read-only blueprint** that defines an application’s environment, dependencies, and configuration, while a **Docker container** is a **running instance** of that image, including a writable layer that allows temporary modifications.
    
- **How does Docker’s copy-on-write (COW) system work in relation to images and containers?**  
    **Answer:** Docker **reuses** existing image layers and only creates new layers when modifications occur in a running container. This reduces storage usage and speeds up deployments.
    
- **What happens when you delete a container but keep the image?**  
    **Answer:** The container's **writable layer and runtime state are lost**, but the image remains intact and can be used to create new containers.
    
- **Can an image be modified after it is built?**  
    **Answer:** No, Docker images are **immutable**. However, you can create a new image by running `docker commit` on a modified container or updating the `Dockerfile` and rebuilding.
    
- **Why do we use volumes in Docker containers?**  
    **Answer:** Volumes ensure **data persistence**, allowing files to remain available even after a container is removed or restarted.
