---
layout: ../../../../../layouts/PostLayout.astro
title: lab8
description: "🚀 CI/CD and Deployment Quiz: Test Your Knowledge! 📝 Section 1:
  Multiple Choice Questions MCQ 1. What does SCP stand fo"
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 7
sourceFolder: 计算机编程/编程学习笔记/DevOps
---

### **🚀 CI/CD and Deployment Quiz: Test Your Knowledge!**

---

## **📝 Section 1: Multiple Choice Questions (MCQ)**

1. **What does SCP stand for in the context of deployment?**  c
    a) Secure Computing Protocol  
    b) Secure Copy Protocol  
    c) Server Configuration Process  
    d) Source Code Protection
	 
- **Your Answer:** c ❌
- **Correct Answer:** b) **Secure Copy Protocol** ✅
- **Explanation:**
    - SCP (**Secure Copy Protocol**) is a **network protocol used to securely transfer files** between a local and a remote system.
    - **Option c ("Server Configuration Process")** is incorrect because SCP **does not configure servers**, it only transfers files.
    
### **Review and Corrections**
---
### **1. Which of the following is NOT a benefit of Continuous Integration (CI)?**

- **Your Answer:** d ✅ (Correct)
- **Explanation:**
    - Continuous Integration (CI) **helps automate testing, detect bugs early, and reduce integration conflicts**.
    - **Option a** is correct because **automated testing ensures fewer bugs**.
    - **Option b** is correct because **CI merges code frequently to avoid conflicts**.
    - **Option c** is incorrect because **CI does not replace human developers**, but rather enhances their workflow.
    - **Option d** is the correct answer because **CI does not directly provide immediate feedback on code quality**; it provides feedback on build/test success.

---

### **3. Which of the following tools is commonly used for Continuous Deployment (CD)?**

- **Your Answer:** a ✅ (Correct)
- **Explanation:**
    - **GitHub Actions** is a popular **CI/CD tool** that automates **code building, testing, and deployment**.
    - **Options b, c, and d (Google Docs, Excel, PowerPoint)** are unrelated to **Continuous Deployment (CD)**.

---

### **4. What is the main advantage of using GitHub Actions for CI/CD?**

- **Your Answer:** b ✅ (Correct)
- **Explanation:**
    - **GitHub Actions automates workflows** for **building, testing, and deploying** applications directly from a GitHub repository.
    - **Option a** is incorrect because **GitHub Actions does not replace Git repositories**; it works alongside them.
    - **Option c** is incorrect because **GitHub Actions is not a programming language**.
    - **Option d** is incorrect because **GitHub Actions is not a cloud storage service**.

---

### **5. Which of the following file formats is used for defining CI/CD workflows in GitHub Actions?**

- **Your Answer:** c ✅ (Correct)
- **Explanation:**
    - **YAML (Yet Another Markup Language)** is the standard format used for **GitHub Actions workflow definitions**.
    - **Option a (XML)** and **option b (JSON)** are not used for defining GitHub Actions workflows.
    - **Option d (CSV)** is incorrect because **CSV is a data format, not a workflow configuration format**.

---

### **Final Score & Areas to Improve**

✅ **Correct Answers:** 4/5  
❌ **Incorrect Answers:** 1/5

### **Weak Areas & Suggested Study Topics**

1. **Understanding Deployment Protocols (SCP vs. FTP vs. SSH)**
    - Review **how SCP is used for secure file transfer** and how it differs from **SFTP (Secure FTP)**.

Would you like additional **practice questions** on **CI/CD pipelines, GitHub Actions, or DevOps deployment strategies**? 🚀😊
    
### **🚀 Additional Practice Questions on CI/CD Pipelines**

These questions cover **Continuous Integration (CI), Continuous Deployment (CD), GitHub Actions, and DevOps workflows**.

---

## **🔹 Multiple Choice Questions (MCQs)**

### **1. What is the primary goal of Continuous Integration (CI)?** b

- a) To automate software testing and merging
- b) To automatically deploy applications to production
- c) To manage infrastructure as code
- d) To replace human developers

### **2. In a CI/CD pipeline, what is the main purpose of an artifact repository (e.g., JFrog, Nexus, or GitHub Packages)?** c

- a) To store build logs
- b) To store compiled binaries and dependencies for deployment
- c) To manage server configurations
- d) To replace Git repositories

### **3. Which command is commonly used to run tests in a Node.js CI/CD pipeline?** c

- a) `npm start`
- b) `npm install`
- c) `npm test`
- d) `npm build`

### **4. What is the key difference between Continuous Deployment and Continuous Delivery?** a

- a) Continuous Deployment includes manual approval, while Continuous Delivery is fully automated
- b) Continuous Delivery includes manual approval, while Continuous Deployment is fully automated
- c) Continuous Deployment does not involve testing, while Continuous Delivery does
- d) Continuous Deployment is only used for database applications

### **5. Which of the following is NOT a step in a typical CI/CD pipeline?** c

- a) Code commit
- b) Build
- c) Manual spreadsheet tracking
- d) Deployment

---

## **🔹 Fill in the Blanks**

6. **In GitHub Actions, CI/CD workflows are defined using the** `______` **file format.**
    
7. **The purpose of a** `______` **job in a CI/CD pipeline is to verify code quality by running unit tests and integration tests.**
    
8. **The command** `git push origin main` **triggers a CI/CD workflow when connected to a platform like GitHub Actions or GitLab CI/CD. This step is known as** `______`.
    
9. **To automate deployments in AWS using CI/CD, developers often use** `______` **as an Infrastructure as Code (IaC) tool.**
    
10. **When a deployment is automatically rolled back due to failure, this process is called** `______`.
    

---

## **🔹 Scenario-Based Questions**

### **11. Your CI/CD pipeline is failing at the testing stage. How would you troubleshoot the issue?**

✅ **Describe at least three steps you would take to diagnose and fix the failure.**

### **13. Suppose your CI/CD pipeline successfully builds an application but deployment fails. What are some possible reasons for this failure?**

✅ **List at least three potential causes and their solutions.**

---

### **🔹 Bonus: Debugging GitHub Actions**

#### **14. Consider the following GitHub Actions YAML file. What is wrong with it?**

```yaml
name: CI Pipeline  
on: push  
  branches: main  
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
      - name: Deploy  
        run: npm deploy  
```

✅ **Identify at least one syntax or configuration issue and suggest a fix.**

---

### **Would You Like More Hands-on Practice with Real CI/CD Scenarios?**

I can provide **step-by-step coding exercises** where you **write and debug CI/CD pipelines** using GitHub Actions, GitLab CI/CD, or Jenkins! 🚀😊
---

## **🔍 Section 2: True or False**

6. **Continuous Deployment (CD) ensures that every change that passes tests is automatically deployed to production.** _(True / False)_
    
7. **Manual deployment is faster and more reliable than automated CI/CD.** _(True / False)_
    
8. **GitHub Actions can only be used for running tests, not for deployment.** _(True / False)_
    
9. **YAML configuration files must use proper indentation and syntax to work correctly.** _(True / False)_
    
10. **The command `scp file.txt user@server:/path` is used to securely copy a file to a remote server.** _(True / False)_
    

---

## **📜 Section 3: Short Answer Questions**

11. **What are the key differences between Continuous Integration (CI) and Continuous Deployment (CD)?** 
	1. CI is to build and test the software for the pipeline while the CD is to  deploy and monitor the software 
	2. 
	 CI is to automatically merge and test the codes for the pipeline while the CD is to  release the whole process while making sure everything is deployed without manual intervention.

	📌 **"Continuous Integration (CI) automates code testing and merging, while Continuous Deployment (CD) automates the entire release process, ensuring every successful change is deployed without manual intervention."**

Would you like **real-world examples or hands-on CI/CD setup guides**? 🚀😊
    
13. **Explain the purpose of the `.github/workflows` directory in a GitHub repository.**
    
14. **How does YAML structure a list of items in a configuration file? Provide an example.**
    
15. **What is the purpose of the `run:` keyword in a GitHub Actions YAML file?**
    
16. **List three popular CI/CD tools besides GitHub Actions.**
    

---

## **🖥️ Section 4: Code Output Questions**

16. **What will be the output of the following YAML configuration in GitHub Actions?**

```yaml
name: Example Workflow
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Echo a message
        run: echo "Hello CI/CD!"
```

a) The workflow will fail because no tests are defined  
b) The workflow will not run because there is no `on` event  
c) The workflow will print `"Hello CI/CD!"` in the logs when a push occurs  
d) The workflow will require manual intervention to execute

---

## **🎯 Section 5: Practical Coding Questions**

17. **Write a simple SCP command to transfer a file named `deploy.zip` from your local machine to a remote server (`192.168.1.100`) under the `/var/www/html` directory.**
    
18. **Modify the following YAML script to trigger the workflow only when changes are pushed to the `main` branch.**
    

```yaml
name: My CI Workflow
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
```

19. **Write a YAML configuration file for GitHub Actions that runs tests using `npm test` whenever a pull request is opened.**
    
20. **How would you define environment variables in a GitHub Actions workflow file? Provide an example.**
