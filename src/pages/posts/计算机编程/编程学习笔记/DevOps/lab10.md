---
layout: ../../../../../layouts/PostLayout.astro
title: lab10
description: Multiple Choice Questions 1. Which of the following statements
  about Docker containers are true? a,d,e a Containers shar
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 8
sourceFolder: 计算机编程/编程学习笔记/DevOps
---

### **Multiple Choice Questions**

1. **Which of the following statements about Docker containers are true?** a,d,e
    
    - a) Containers share the host OS kernel
    - b) Containers are heavier than virtual machines
    - c) Containers can run with or without a network
    - d) Containers cannot persist data across restarts
    - e) Containers can be created from Docker images
    
- **Your Answer:** a, d, e ❌
- **Correct Answer:** a, c, e ✅
- **Explanation:**
    - **(a) TRUE** ✅: Containers share the **host OS kernel**, making them lightweight.
    - **(b) FALSE** ❌: Containers are **lighter** than VMs because they do not require a full OS.
    - **(c) TRUE** ✅: Containers **can run without a network** (e.g., in an isolated environment).
    - **(d) FALSE** ❌: Containers **can persist data** across restarts using **volumes or bind mounts**.
    - **(e) TRUE** ✅: Containers **are created from Docker images**.
    
2. **Which Docker command is used to create and start a container from an image?** a
    
    - a) `docker build`
    - b) `docker start`
    - c) `docker run`
    - d) `docker commit`
    
- **Your Answer:** a ❌
- **Correct Answer:** c) **`docker run`** ✅
- **Explanation:**
    - **`docker run`** creates and starts a **new** container from an image.
    - **`docker build`** is used to create a **Docker image** from a Dockerfile.
    - **`docker start`** starts an **existing stopped container** (does not create a new one).
    - **`docker commit`** saves changes made to a running container as a new image.
    
3. **Which of the following statements about Docker networking are correct?** a
    
    - a) A container can only communicate with other containers on the same host
    - b) Docker provides a default bridge network for containers
    - c) Custom networks can be created for inter-container communication
    - d) The `-p` flag allows exposing a container’s port to the host
    
    - **Your Answer:** a ❌
	- **Correct Answer:** b, c, d ✅
	- **Explanation:**
	    - **(a) FALSE** ❌: Containers **can communicate across hosts** using **overlay networks**.
	    - **(b) TRUE** ✅: Docker **provides a default bridge network** for containers.
	    - **(c) TRUE** ✅: Custom networks (**bridge, overlay, host**) allow inter-container communication.
	    - **(d) TRUE** ✅: The `-p` flag maps **container ports to host ports** (`docker run -p 8080:80`).
    
4. **What are the advantages of using a Dockerfile to create images?** a,
    
    - a) It ensures consistency in image creation
    - b) It reduces manual setup
    - c) It allows for version control of container configuration
    - d) It replaces the need for registries

	- **Your Answer:** a ❌
	- **Correct Answer:** a, b, c ✅
	- **Explanation:**
	    - **(a) TRUE** ✅: Dockerfiles **ensure consistency** when building images.
	    - **(b) TRUE** ✅: Dockerfiles **automate** setup, reducing manual steps.
	    - **(c) TRUE** ✅: They allow **version control** for container configurations (e.g., using Git).
	    - **(d) FALSE** ❌: **Registries (like Docker Hub)** are still needed to **store and distribute images**.
---
### **Concept Explanation Questions**

5. **Explain the purpose of a Docker volume and why it is useful for containers.**  **
    **Requirement:** Explain in no more than 50 words.
	    the Docker volume could contain static images and create instance for the virumation and protect the localhost.
	the the Docker volume is to solve the problems of persistence for storage.
	    
	persistent storage,data no lost ,container stops or removed, share across multiple containers,improve efficiency,store
    
    **Correct Answer:** A Docker volume is used for persistent storage, ensuring that data is not lost when a container stops or is removed. It allows data to be shared across multiple containers and improves efficiency by storing data outside of the container’s writable layer.
    
6. **What is the difference between `CMD` and `ENTRYPOINT` in a Dockerfile?**  
    **Requirement:** Explain in no more than 60 words.
	CMD is  to controle the PORT while ENTRYPOINT is about 
	CMD is  to make a default command to override the runtime while ENTRYPOINT is to execute the mandatory
	
	CMD default command overridden runtime define default behavior,ENTRYPOINT mandatory command execute useful - meant to function as excutable

    **Correct Answer:** `CMD` sets a default command that can be overridden at runtime, while `ENTRYPOINT` specifies a mandatory command that always executes. `ENTRYPOINT` is useful when a container is meant to function as an executable, whereas `CMD` is for defining default behavior.
    
---
### **Concept Comparison Questions**

7. **Docker Images vs. Docker Containers**  
    **Prompt:** Explain the key differences between Docker images and Docker containers in terms of immutability, execution, and storage.
		Docker Images  vs. Docker Containers is to 
		
    **Correct Answer:** Docker images are read-only templates used to create containers, while containers are runtime instances of images. Images are immutable and stored in layers, whereas containers can have writable layers and run as isolated processes.
    
8. **Bind Mounts vs. Docker Volumes**  
    **Prompt:** Compare bind mounts and Docker volumes in terms of storage location, persistence, and security.
    
    **Correct Answer:** Bind mounts map a specific host directory to a container, offering flexibility but less isolation. Docker volumes are managed by Docker, ensuring better security, portability, and optimized storage.
---
### **Question & Answer Set: Continuous Deployment & CI/CD**
📌 **CI** → Tests & integrates code.  
📌 **CD (Continuous Delivery)** → Prepares for release (requires approval).  
📌 **CD (Continuous Deployment)** → Deploys automatically (no approval).

#### **1. Short Answer Questions**

1. **What is the primary goal of Continuous Deployment (CD) in software development?**  
	the primary goal of Continuous Deployment - is to automate the process of release to pass test stages for better feedback and delivery.

    **Answer:** The primary goal of CD is to **automate** the **release** process so that every change that passes all testing stages is deployed to production without human intervention, ensuring faster **feedback** and delivery.
    
2. **Explain the difference between Continuous Integration (CI), Continuous Delivery (CD), and Continuous Deployment (CD).**  
    **Answer:** Continuous Integration (CI) is to automate build and test, Continuous Delivery (CD) is to automate the release process, and Continuous Deployment (CD) .
    
    - **CI** ensures frequent code integration with automated builds and testing.
    - **CD (Continuous Delivery)** **automates** the **release** process but requires manual approval for deployment.
    - **CD (Continuous Deployment)** goes one step further, automatically **deploying** changes that pass all tests to production.
    
3. **Why is automation crucial in the Continuous Deployment pipeline?**  
    **Answer:** Automation removes human intervention, ensuring consistent, fast, and error-free deployments while improving software reliability.
    
4. **What are the advantages of using GitHub Actions for Continuous Deployment?**  
    **Answer:**
    
    - Automates workflows for building, testing, and deploying applications.
    - Supports integration with multiple services.
    - Provides 2,000 free minutes of build time per month for students.
5. **What is a YAML file, and why is it commonly used in CI/CD pipelines?**  
    **Answer:** YAML (Yet Another Markup Language) is a human-readable data serialization format used to define workflows in CI/CD pipelines due to its simplicity and structure.
    
6. **List three common Continuous Deployment (CD) tools.**  
    **Answer:** Jenkins, GitHub Actions, CircleCI.
---
#### **2. Concept Comparison Questions**

7. **Compare manual deployment and automated deployment in terms of efficiency and error handling.**  
    **Answer:**
    
    - **Manual Deployment**: Prone to errors, time-consuming, lacks version control.
    - **Automated Deployment**: Faster, reliable, ensures consistent results, integrates with version control for better tracking.
8. **Differentiate between a dedicated CI/CD server and a cloud-based CI/CD service.**  
    **Answer:**
    
    - **Dedicated Server**: Hosted by a company, provides full control but requires maintenance.
    - **Cloud-Based CI/CD**: Hosted by third-party providers (GitHub Actions, Travis CI), offers scalability but may have usage costs.
9. **What is the purpose of ‘secrets’ in a CI/CD pipeline, and how are they managed securely?**  
    **Answer:** Secrets store confidential data (e.g., API keys, credentials). They are encrypted and managed via environment variables or secret management services.
    
10. **Explain the role of 'runners' in CI/CD pipelines.**  
    **Answer:** Runners execute CI/CD workflows by pulling source code, running scripts, and deploying applications. They can be self-hosted or provided by the CI/CD tool.
    

---

#### **3. Practical Scenario Questions**

11. **Your development team is experiencing deployment delays due to frequent manual testing. How can CI/CD help improve this process?**  
    **Answer:** Implementing CI/CD automates testing and deployment, reducing delays and ensuring high-quality software through continuous testing and integration.
    
12. **A company is deploying a web application using a CI/CD pipeline. Describe a simple GitHub Actions workflow that builds and deploys the application.**  
    **Answer:**
    

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Deploy to Production
        run: ./deploy.sh
```

This workflow triggers on a push to the `main` branch, installs dependencies, runs tests, and deploys the app.

13. **A company needs to ensure that only the ‘main’ and ‘staging’ branches trigger deployments in GitHub Actions. How would they configure this?**  
    **Answer:**

```yaml
on:
  push:
    branches:
      - main
      - staging
```

This ensures deployments only occur when changes are pushed to the `main` or `staging` branch.

14. **A developer accidentally committed sensitive API keys in the CI/CD pipeline. How can they prevent this in the future?**  
    **Answer:**

- Use environment variables or encrypted secrets instead of hardcoding credentials.
- Implement secret scanning tools like GitHub’s secret detection or TruffleHog.
- Add `.env` and credentials files to `.gitignore` to prevent accidental commits.

---

#### **4. Code Analysis Questions**

15. **Analyze the following YAML script for errors and suggest improvements:**

```yaml
name: My CI/CD Pipeline
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run Tests
        run: npm test
      - name: Deploy
        run: deploy.sh
```

**Errors & Improvements:**

- `deploy.sh` might require execution permissions (`chmod +x deploy.sh`).
- Add `working-directory` if deployment occurs in a subfolder.
- Add `if: success()` to the deploy step to prevent deployment on test failures.

16. **What will happen if a GitHub Actions YAML file has the following configuration?**

```yaml
on:
  push:
    branches:
      - '*'
```

**Answer:** This configuration triggers the workflow on every branch push, which may be unintended. It's better to specify necessary branches.

17. **Examine the following CI/CD pipeline script and identify potential security risks:**

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Deploy
        run: |
          curl -X POST "http://example.com/deploy" -H "Authorization: $TOKEN"
```

**Security Risks:**

- `$TOKEN` is not stored securely; should use encrypted secrets (`${{ secrets.TOKEN }}`).
- API URL should be parameterized to avoid exposure in commits.

---

Would you like additional **hands-on lab exercises or debugging scenarios**? 🚀
