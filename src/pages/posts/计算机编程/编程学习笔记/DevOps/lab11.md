---
layout: ../../../../../layouts/PostLayout.astro
title: lab11
description: "Question & Answer Set: DevOps & Docker Compose 1. Short Answer
  Questions 1. What is the main objective of DevOps, and ho"
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 5
sourceFolder: 计算机编程/编程学习笔记/DevOps
---

![Pasted image 20250319154721.png](/archive/?q=Pasted%20image%2020250319154721.png)![Pasted image 20250319154732.png](/archive/?q=Pasted%20image%2020250319154732.png)![Pasted image 20250319154747.png](/archive/?q=Pasted%20image%2020250319154747.png)![Pasted image 20250319154757.png](/archive/?q=Pasted%20image%2020250319154757.png)![Pasted image 20250319154807.png](/archive/?q=Pasted%20image%2020250319154807.png)
### **Question & Answer Set: DevOps & Docker Compose**

#### **1. Short Answer Questions**

1. **What is the main objective of DevOps, and how does it benefit software development?**  
	1. the main objective of DevOps is to reduce the resources wasted in the development and lifecycle. - the  main objective is to integrate the development to push the automate operation and deploy app better and reduce the faliures.
	. 
	2. integrate development operate automate,benifit deploy colaboration,reduce failures,increase realease frequency
    **Answer:** The main objective of DevOps is to integrate development and operations to automate, test, and deploy applications efficiently. It benefits software development by improving collaboration, reducing deployment failures, and increasing release frequency.
    
3. **Explain the difference between Continuous Integration (CI) and Continuous Deployment (CD).**  
	1. Continuous Integration (CI) is to increase release frequency and Continuous Deployment (CD).**  is to operate automate and deploy colaboration
	2. 
	3. CI frequently merge code chage shared repository run automated tests,
	4. CD automates process deployment produce environment.

    **Answer:** CI is the practice of frequently merging code changes into a shared repository and running automated tests, while CD automates the process of deploying tested code to production environments.
    
4. **What is the purpose of Configuration Management in DevOps? Name two popular tools used for it.**  
		the purpose of Configuration Management in DevOps is to release deployment for software and integrate the different version of environmnet 
	consistency software deployment automate infrastructure

    **Answer:** Configuration management ensures consistency in software deployment by automating infrastructure setup. Two popular tools are **Ansible** and **Terraform**.
    
6. **What is the key security concern with unverified software updates in a CI/CD pipeline?**  
	the key security concern is risks of attack from haker.
- unverified vulnerability supply chain attack malicious inject

    **Answer:** Unverified software updates can introduce vulnerabilities, such as supply chain attacks, where malicious code is injected through dependencies.
    
7. **Why is it important to use a `.dockerignore` file when building Docker images?**  
	the .dockerignore help to memorize the central command for operation of CI/CD.
- prevent included in the Docker image reduce size improve efficiency.

    **Answer:** A `.dockerignore` file prevents unnecessary files from being included in the Docker image, reducing image size and improving build efficiency.

## **🔹 Short Answer Questions**

16. **Explain the concept of “Shift Left” in DevOps.**
17. **What are the key benefits of using Infrastructure as Code (IaC) in a DevOps environment?**
18. **Describe the role of monitoring and logging in a DevOps pipeline.**
19. **What are two key differences between Docker containers and virtual machines (VMs)?**
20. **How can CI/CD help reduce deployment failures in software development?**


---

#### **2. Multiple Choice Questions**

6. **Which of the following are key phases of DevOps?**
    
    - a) Version Control
    - b) Continuous Integration
    - c) Manual Testing
    - d) Monitoring
    
    **Correct Answer:** a, b, d
    
7. **Which security practice helps in preventing the exposure of sensitive credentials in source code?**
    
    - a) Storing credentials in environment variables
    - b) Committing API keys directly to GitHub
    - c) Using a `.gitignore` file to exclude sensitive files
    - d) Enabling secret scanning tools
    
    **Correct Answer:** a, c, d
    
8. **Which of the following statements about Docker Compose are true?**
    
    - a) It is used to define and run multi-container applications
    - b) It requires manual container management
    - c) It allows containers to share networks and volumes
    - d) It replaces Kubernetes
    
    **Correct Answer:** a, c
    
9. **What is the primary function of `depends_on` in a `docker-compose.yml` file?**
    
    - a) Ensures that a service starts only after its dependencies
    - b) Exposes ports for services
    - c) Specifies environment variables
    - d) Controls container networking
    
    **Correct Answer:** a
    

---

#### **3. Concept Comparison Questions**

10. **Compare and contrast DevOps and traditional software development approaches.**  
    **Answer:** DevOps emphasizes automation, continuous integration, and rapid deployment, whereas traditional software development follows a linear, manual process with separate development and operations teams. DevOps reduces time-to-market and enhances collaboration.
    
11. **Explain the difference between static code analysis (SAST) and dynamic application security testing (DAST).**  
    **Answer:** SAST analyzes source code for vulnerabilities without executing it, detecting issues like SQL injection at the code level. DAST tests running applications by simulating real-world attacks.
    
12. **How do Docker Volumes differ from Bind Mounts in terms of persistence and security?**  
    **Answer:** Docker Volumes are managed by Docker, providing better security and isolation, while Bind Mounts directly map host directories, offering more flexibility but less security.
    

---

#### **4. Practical Scenario Questions**

13. **A company wants to deploy a microservices-based application using Docker Compose. The application consists of a web service and a database. Describe how they should structure the `docker-compose.yml` file.**  
    **Answer:**

- Define two services: **web** (e.g., Nginx or Node.js) and **db** (e.g., MySQL or PostgreSQL).
- Use `depends_on` to ensure the web service waits for the database.
- Expose necessary ports for web access.
- Use a Docker volume to persist database data.

14. **Your DevOps team is facing deployment failures due to unverified third-party libraries. What security measures should be implemented to prevent this?**  
    **Answer:**

- Implement **Software Bill of Materials (SBOM)** to track dependencies.
- Use **dependency scanning** tools to detect vulnerabilities.
- Validate CI/CD pipelines to allow only trusted package sources.

15. **A web application has high downtime due to improper monitoring. What tools and strategies should be used to improve uptime and observability?**  
    **Answer:**

- Use **Prometheus & Grafana** for real-time monitoring.
- Implement **centralized logging** with ELK Stack (Elasticsearch, Logstash, Kibana).
- Set up **alerts** to detect failures early.

---

Would you like additional **hands-on coding tasks or debugging scenarios**? 🚀
