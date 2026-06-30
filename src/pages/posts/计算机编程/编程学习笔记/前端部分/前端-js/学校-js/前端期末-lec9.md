---
layout: ../../../../../../../layouts/PostLayout.astro
title: 前端期末 lec9
description: 🔥 Advanced Questions Based on API, Node.js, and MySQL Concepts
  These high difficulty questions challenge your understan
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 18
sourceFolder: 计算机编程/编程学习笔记/前端部分/前端 js/学校 js
---

### **🔥 Advanced Questions Based on API, Node.js, and MySQL Concepts**

These **high-difficulty questions** challenge your **understanding of APIs, authentication, HTTP methods, asynchronous programming, and database integration with Node.js**.

---

## **🔹 Concept Explanation Questions**

### **1. API vs. Web Service**

📌 **Challenge:** Explain the key differences between an **API** and a **Web Service**. Provide at least **two real-world examples** where an API is used but **not classified as a web service**.
the **API** could use locally to handle the data like Mac API while the **Web Service**. must base on the internet and web sever.The API is the subset of Web Service.

---

### **2. Why is JSON preferred for API communication?**

📌 **Challenge:** Explain why **JSON** is widely used in APIs instead of XML. Discuss at least **three advantages** JSON provides over XML when transmitting data between servers and clients.
	**JSON** is a kind of principle and easier to read for human parsing .
---

### **3. Why does API authentication require an API key?**

📌 **Challenge:** Describe the purpose of an **API key** in API authentication. What security risks arise from **exposing an API key in client-side code**, and how can developers **secure API keys** in a Node.js application?
	**API key** will be stolen by the hacker 。developers need to store it in the environment variables.	
### **Review and Corrections**

---

## **🔹 1. API vs. Web Service**

📌 **Challenge:** Explain the key differences between an **API** and a **Web Service**. Provide at least **two real-world examples** where an API is used but **not classified as a web service**.

- **Your Answer:**  
    _"The **API** is included in the web service and is used to handle data from the web server for post/fetch/put/delete and connect with a database. A **Web Service** is responsible for the whole front-end using a framework."_ ❌
    - The API is a broader concept which defines the rules for software communication even without web while a web service is a specific type of API that use HTTP and operates over a network.
- **Correction:**
    - **An API (Application Programming Interface)** is a **broader concept** that defines a set of rules for **software communication**. APIs **do not need to use the web** (e.g., OS-level APIs like Windows API).
    - **A Web Service** is a **type of API that operates over a network (usually HTTP/HTTPS).** Web services are meant for **machine-to-machine communication** and typically use formats like **REST, SOAP, or GraphQL**.
    - **Mistake in your explanation:** A web service does **not** manage the **entire front-end framework**—that is the role of **frontend frameworks like React, Vue, or Angular**.
- **Real-World Examples of APIs (but NOT Web Services):**
    1. **Operating System APIs** – Windows API (Win32 API) allows software to interact with OS features like file management.
    2. **Local Database API** – SQLite provides an API for applications to perform database operations without needing a web connection.
- **Corrected Answer:**  
    _"An API is a broader concept that defines rules for software communication and can exist without the web. A web service is a specific type of API that operates over a network, usually using HTTP. Examples of APIs that are not web services include the Windows API (for OS-level operations) and the SQLite database API."_

---

## **🔹 2. Why is JSON preferred for API communication?**

📌 **Challenge:** Explain why **JSON** is widely used in APIs instead of XML. Discuss at least **three advantages** JSON provides over XML when transmitting data between servers and clients.

- **Your Answer:**  
    _"**JSON** is easier for humans to read and stores data from APIs with lightweight for the front-end server."_ ❌
    - JSON Is lightweight and faster to process with better readability which could paresed into js objects,making it more efficient for web application.
- **Correction:**
    - JSON is **not just for front-end servers**—it is used for data interchange between **any** systems (backend-to-backend, client-to-server, etc.).
    - **Three key advantages of JSON over XML:**
        1. **Lightweight & Faster** – JSON uses fewer characters and **transfers data more efficiently** compared to XML, which has extensive opening and closing tags.
        2. **Easier to Parse** – JSON can be **directly parsed into JavaScript objects**, whereas XML requires additional parsing.
        3. **Better JavaScript objects & Simplicity** – JSON’s key-value structure is more **human-readable** and easier for developers to work with.
- **Corrected Answer:**  
    _"JSON is preferred over XML in API communication because it is lightweight, faster to process, and easier to read. Unlike XML, JSON can be directly parsed into JavaScript objects, making it more efficient for modern web applications."_

---

## **🔹 3. Why does API authentication require an API key?**

📌 **Challenge:** Describe the purpose of an **API key** in API authentication. What security risks arise from **exposing an API key in client-side code**, and how can developers **secure API keys** in a Node.js application?

- **Your Answer:**  
    _"**API key** in API authentication is important for information security and detecting the identity of users to decrease system risk. Developers can use JSON and POST to **secure API keys** in a Node.js application."_ ❌
    - An API key is helpful to authenticate API requests and prevent unauthorized access.API exposure will lead to security risks such as abuse and key theft.To make sure the security of api keys,developers should store them in environment variables,use a backend proxy.
- **Correction:**
    - **An API key is a unique identifier** used to authenticate a request to an API.
    - **Security risks of exposing an API key in client-side code:**
        - Attackers can **steal the key** and **make unauthorized API requests**.
        - If the API has a **usage limit**, the attacker can exceed it, making the API unavailable for legitimate users.
    - **Ways to secure API keys in Node.js:**
        1. **Use Environment Variables (`process.env`)** – Store API keys in a `.env` file and access them securely in the backend.
        2. **Use a Backend Proxy** – Instead of making API requests from the front end, route them through a **secure backend server** that stores the API key.
        3. **Use Authentication Tokens (OAuth, JWT)** – Instead of API keys, use more secure authentication mechanisms like **OAuth 2.0** or **JWT (JSON Web Tokens)**.
- **Corrected Answer:**  
    _"An API key is used for authenticating API requests and preventing unauthorized access. Exposing it in client-side code can lead to security risks such as key theft and abuse. To secure API keys in Node.js, developers should store them in environment variables, use a backend proxy, or switch to OAuth-based authentication."_

---

### **Final Knowledge Areas to Improve**

1. **APIs vs. Web Services** – Understand that **APIs** exist beyond the web, and web services are a **subtype of APIs** that use network communication.
2. **Why JSON is Preferred Over XML** – Learn JSON’s advantages in **parsing speed, simplicity, and data efficiency** compared to XML.
3. **API Key Security** – Avoid exposing API keys in the front end and use **environment variables, backend proxies, and OAuth tokens** for secure authentication.

Would you like more practice questions on API security or data formats? 😊🚀

---

## **🔹 HTTP Methods & API Behavior Questions**

### **4. Why is it insecure to send sensitive user data using a `GET` request?**

📌 **Challenge:** Many developers mistakenly use a `GET` request to submit form data, including passwords. Explain the **security risks** involved in sending sensitive data via `GET`, and suggest the **correct HTTP method to use instead**.

---

### **5. What is wrong with this HTTP request-response flow?**

📌 **Challenge:** The following API **does not update user data correctly**. Identify the problem and correct the code.

```http
PUT /users/1 HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```

✅ **What is wrong with this request, and how should the API handle updates properly?**

---

### **6. Explain the difference between `PUT` and `PATCH` methods.**

📌 **Challenge:** Many developers confuse `PUT` and `PATCH` when updating resources via APIs. Explain the **key difference** between these two HTTP methods and provide an example for each.

---

## **🔹 Debugging & Problem-Solving Questions**

### **7. What will be the output of this asynchronous Node.js code?**

📌 **Challenge:** Predict the **exact console output** of the following code and explain why.

```javascript
const fs = require('fs');

console.log("Start");

fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log("File Read Completed");
});

console.log("End");
```

✅ **Explain why the output does not follow a top-to-bottom execution order.**

---

### **8. Why does this MySQL connection fail?**

📌 **Challenge:** The following Node.js script **fails to connect to a MySQL database**. Identify the issue and fix it.

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed!");
  }
});

console.log("Connected to MySQL!");
```

✅ **Why does the console log `"Connected to MySQL!"` even if the connection fails? How should error handling be implemented correctly?**

---

### **9. What is wrong with this API call using Axios?**

📌 **Challenge:** The following API call to **OpenWeatherMap** fails with an error. Identify the issue and correct it.

```javascript
const axios = require('axios');

const city = "London";
const appKey = "my_api_key";
const unit = "metric";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=${unit}`;

axios.get(url)
  .then(response => { 
    console.log(response.weather.main.temp); 
  })
  .catch(error => { 
    console.error('API call failed:', error);
  });
```

✅ **Identify the issue and fix the API request.**

---

## **🔹 Advanced Node.js Asynchronous Handling**

### **10. When should you use `async/await` over Promises?**

📌 **Challenge:** Explain **when and why** using `async/await` is preferred over `.then()` and `.catch()`. Provide an example where `async/await` makes code more readable.

---

### **11. What is wrong with this `async/await` implementation?**

📌 **Challenge:** The following `async` function does **not return the expected data**. Identify the issue and fix it.

```javascript
async function fetchData() {
  let data;
  setTimeout(() => {
    data = "Data loaded";
  }, 1000);
  return data;
}

console.log(fetchData()); // Expected: "Data loaded", Actual: undefined
```

✅ **Explain why the function returns `undefined` and how to fix it using `await`.**

---

### **12. Why is MySQL integration with Node.js asynchronous?**

📌 **Challenge:** Explain why **database operations in Node.js are asynchronous**. How does this benefit scalability and performance in real-world applications?

---

## **🔹 Critical Thinking & Application Questions**

### **13. How would you design a secure REST API for a user authentication system?**

📌 **Challenge:** You are designing a **RESTful API** for a web application. Describe how you would implement **secure authentication** using:

- API keys
- OAuth
- JWT (JSON Web Tokens)

✅ **Compare the advantages and disadvantages of each approach.**

---

### **14. How can an attacker exploit an API without proper authentication?**

📌 **Challenge:** Describe **three ways** an attacker can exploit an **insecure API**, and how developers can mitigate these security risks.

---

### **15. Why should APIs implement rate limiting?**

📌 **Challenge:** Explain the importance of **rate limiting** in APIs. How can it prevent **DDoS attacks** and **API abuse**?

✅ **Provide an example of how to implement rate limiting in an Express.js API.**

---

### **🔥 High-Level Questions to Strengthen Your Knowledge in APIs, JSON, and Security**

These **challenging questions** will test your ability to differentiate APIs from web services, justify the preference for JSON over XML, and reinforce best practices in API security.

---

## **🔹 Concept Explanation Questions**

### **1. API vs. Web Services: Why is Every Web Service an API but Not Every API a Web Service?**

📌 **Challenge:** Explain why **all web services are APIs**, but not all APIs are web services.

- Provide **two examples** of APIs that do not qualify as web services.
	- the API could store the data without website and solve problems which framework couldt't do while web services mostly use the framework to respond.

---

### **2. JSON vs. XML: Why Has JSON Become the Standard for APIs?**

📌 **Challenge:** JSON has **replaced XML** in modern APIs. Explain **three major reasons** why JSON is preferred over XML for data exchange.

- How do JSON's **parsing efficiency** and **lightweight structure** contribute to better API performance?
	- the JSON is easier to read and build a standard to store the data with lightweight and parsing efficiency which XML couldn't.

---

### **3. What Are the Security Risks of Exposing API Keys on the Frontend?**

📌 **Challenge:** Many developers mistakenly store API keys in **frontend JavaScript code**. Explain the **three major security risks** associated with this practice.
the environment variables could store the API keys to avoid the security risks and stolen from hacker using authenticatiion method.

✅ **How can environment variables and backend authentication be used to mitigate these risks?**
### **Review and Corrections**

---

## **🔹 1. API vs. Web Services: Why is Every Web Service an API but Not Every API a Web Service?**

📌 **Challenge:** Explain why **all web services are APIs**, but not all APIs are web services.

- **Your Answer:**  
    _"The API could store the data without a website and solve problems that frameworks couldn't do, while web services mostly use the framework to respond."_ ❌
- **Correction:**
    - **APIs (Application Programming Interfaces)** define a set of rules for **software communication**.
    - **Web services** are a **subset of APIs** that specifically use network communication (usually HTTP) to exchange data.
    - **Why all web services are APIs:** Every web service **exposes functionalities programmatically**, making it an API.
    - **Why not all APIs are web services:** Some APIs work **locally** (e.g., OS APIs, database APIs) and do not require web-based communication.
- **Examples of APIs that are NOT Web Services:**
    1. **Operating System API (Windows API)** – Allows applications to interact with system components **without the web**.
    2. **SQLite Database API** – Allows local applications to perform **database operations without an internet connection**.
- **Corrected Answer:**  
    _"All web services are APIs because they expose functionality over the web for programmatic use. However, not all APIs are web services because some APIs, like OS-level APIs and local database APIs, do not rely on network communication."_

---

## **🔹 2. JSON vs. XML: Why Has JSON Become the Standard for APIs?**

📌 **Challenge:** JSON has **replaced XML** in modern APIs. Explain **three major reasons** why JSON is preferred over XML for data exchange.

- **Your Answer:**  
    _"JSON is easier to read and builds a standard to store data with lightweight and parsing efficiency, which XML couldn't."_ ❌
- **Correction:**
    - JSON has **simpler syntax** than XML, making it easier to read.
    - JSON’s **lightweight structure** (fewer characters, no closing tags) makes data transmission **faster**.
    - JSON can be **directly parsed into JavaScript objects**, while XML requires extra processing.
- **Three Major Reasons JSON is Preferred Over XML:**
    1. **Lightweight & Faster** – JSON uses fewer characters, reducing **data transfer size** and improving performance.
    2. **Easier to Parse** – JSON integrates directly with JavaScript using `JSON.parse()`, while XML requires **complex DOM parsing**.
    3. **Better Readability** – JSON’s key-value structure is **simpler and less verbose** compared to XML’s nested tags.
- **Corrected Answer:**  
    _"JSON is preferred over XML because it is lightweight, easier to parse, and has better readability. JSON reduces data size, improving API response times, and can be directly parsed into JavaScript objects, making it highly efficient for modern web applications."_

---

## **🔹 3. What Are the Security Risks of Exposing API Keys on the Frontend?**

📌 **Challenge:** Many developers mistakenly store API keys in **frontend JavaScript code**. Explain the **three major security risks** associated with this practice.

- **Your Answer:**  
    _"The environment variables could store API keys to avoid security risks and being stolen by hackers using authentication methods."_ ❌
- **Correction:**
    - **Storing API keys in frontend code is dangerous** because JavaScript is visible to anyone who inspects the browser.
    - **Security Risks of Exposing API Keys on the Frontend:**
        1. **Unauthorized Access** – Attackers can **steal the API key** and use it to make requests **on behalf of legitimate users**.
        2. **Quota Exhaustion** – If an API has a **rate limit**, hackers can abuse the key, **exceeding the allowed requests** and causing **denial of service**.
        3. **Financial and Data Loss** – Some APIs charge **per request** (e.g., Google Maps API). A stolen key can lead to **unexpected billing** or **data leaks**.
- ✅ **How to Secure API Keys in Node.js?**
    1. **Use Environment Variables (`process.env`)** – Store API keys in a `.env` file instead of hardcoding them.
    2. **Use Backend Authentication** – Instead of exposing API keys on the frontend, create a **secure backend** to handle API requests.
    3. **Use OAuth or JWT Authentication** – Instead of API keys, use **secure authentication mechanisms** like OAuth 2.0 or **JWT (JSON Web Tokens)**.
- **Corrected Answer:**  
    _"Storing API keys in frontend JavaScript code is risky because attackers can steal them and make unauthorized API requests. This can lead to unauthorized access, quota exhaustion, and financial loss. To secure API keys, developers should store them in environment variables, use backend authentication, and switch to OAuth-based authentication when possible."_

---

### **Key Areas to Improve**

1. **API vs. Web Services** – APIs **do not require a web connection**, but **web services do**.
2. **JSON vs. XML** – JSON is **faster, lighter, and easier to parse** than XML.
3. **API Key Security** – API keys should **never** be stored in the frontend; use **environment variables and authentication methods** instead.

Would you like more **hands-on practice questions** on API security or JSON handling? 😊🚀

---

## **🔹 API Authentication & Security Questions**

### **4. Why is API Key Authentication Not Enough for Secure APIs?**

📌 **Challenge:** API key authentication is a common method, but it has **security limitations**. Explain why API keys **alone** are not sufficient for securing APIs.

- How do **OAuth tokens** and **JWTs** provide better security?

---

### **5. What is the Difference Between OAuth and API Keys?**

📌 **Challenge:** Compare **OAuth authentication** and **API keys** for API security.

- When should OAuth be used instead of API keys?

---

### **6. How Can You Secure API Keys in a Node.js Application?**

📌 **Challenge:** API keys should **never be exposed** in frontend applications. Describe three best practices for **securing API keys** in a **Node.js backend**.

✅ **Hint:** Think about **environment variables (`.env` files), backend proxies, and secrets management services**.

---

## **🔹 Debugging & Problem-Solving Questions**

### **7. Why Does This API Key Authentication Fail?**

📌 **Challenge:** The following API call **fails to authenticate**, even though the API key is correct. Identify the problem and fix it.

```javascript
const axios = require('axios');

const apiKey = "1234567890abcdef";
const url = `https://api.example.com/data?apiKey=${apiKey}`;

axios.get(url)
  .then(response => console.log(response.data))
  .catch(error => console.error("API request failed:", error));
```

✅ **What is wrong with this approach, and how should the API key be securely sent?**

---

### **8. Why Is This API Returning a `401 Unauthorized` Error?**

📌 **Challenge:** The following API call **returns a 401 error**, even though the API key is included. Identify the issue.

```javascript
fetch("https://api.example.com/data", {
  headers: {
    "Authorization": "1234567890abcdef"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```

✅ **What mistake has been made in the authentication header?**

---

## **🔹 Advanced API Security & Best Practices**

### **9. What Are the Best Practices for Preventing API Abuse and Unauthorized Access?**

📌 **Challenge:** Explain **three methods** for **preventing API abuse** (e.g., excessive requests, unauthorized access, or API key leakage).

✅ **Hint:** Consider **rate limiting, access control, and API monitoring**.

---

### **10. How Does Rate Limiting Protect an API From Attacks?**

📌 **Challenge:** API rate limiting is commonly used to prevent **brute-force attacks and denial-of-service (DoS) attacks**.

- How does **rate limiting work** in an Express.js API?
- Provide an example of implementing **rate limiting** using `express-rate-limit`.

---

### **11. How Can You Prevent Cross-Origin API Abuse?**

📌 **Challenge:** Many public APIs suffer from **cross-origin resource sharing (CORS) abuse**.

- Explain how CORS protects APIs.
- How can a Node.js/Express server **enable CORS securely**?

---

## **🔹 Real-World API Implementation Challenges**

### **12. How Would You Design a Secure API for User Authentication?**

📌 **Challenge:** You are building a **secure authentication system** for a web application. Describe how you would implement:

- **JWT-based authentication**
- **OAuth 2.0 authentication**
- **Role-based access control (RBAC) in an API**

✅ **Compare their security trade-offs.**

---

### **13. How Would You Handle Sensitive Data Transmission in an API?**

📌 **Challenge:** A healthcare API needs to transmit **sensitive patient data** securely.

- What encryption methods should be used?
- How should the API **comply with security standards like HIPAA**?

✅ **Hint:** Think about **HTTPS, tokenization, and request validation**.

---

### **### 🚀 **Node.js Quiz: Test Your Knowledge!**

#### **📝 Section 1: Multiple Choice Questions (MCQ)**

1. **What is Node.js primarily used for?**  b
    a) Frontend development  
    b) Server-side development  
    c) Mobile app development  
    d) Game development
    
2. **Which engine does Node.js use to execute JavaScript?**  c
    a) SpiderMonkey  
    b) Chakra  
    c) V8  
    d) Rhino
    
3. **Which of the following is TRUE about Node.js?**  b
    a) It is a multi-threaded programming language.  
    b) It runs JavaScript in the browser.  
    c) It uses a non-blocking I/O model.  
    d) It does not support asynchronous operations.
    
4. **Which command initializes a new Node.js project?**  c
    a) `npm install`  
    b) `node init`  
    c) `npm init -y`  
    d) `node create`
    
5. **How do you install Express in a Node.js project?**  a
    a) `install express`  
    b) `npm add express`  
    c) `npm install express`  
    d) `node install express`
    

---

#### **🖥️ Section 2: Code Output Questions**

6. **What will be the output of the following code?**
    
    ```javascript
    console.log("Start");
    setTimeout(() => {
        console.log("Middle");
    }, 0);
    console.log("End");
    ```
    
    a) Start → Middle → End  
    b) Start → End → Middle  
    c) Middle → Start → End  
    d) End → Start → Middle
    
7. **What happens when this code is executed?**
    
    ```javascript
    const fs = require('fs');
    const data = fs.readFileSync('file.txt');
    console.log("File read complete");
    ```
    
    a) The file is read asynchronously.  
    b) The program moves to the next line without waiting for the file read to complete.  
    c) The program is blocked until the file is completely read.  
    d) An error will occur because `fs.readFileSync` is asynchronous.
    

---

#### **📜 Section 3: True or False**

8. **Node.js is single-threaded but can handle concurrent operations.** _(True / False)_
    
9. **Asynchronous programming in Node.js always blocks the execution of other tasks.** _(True / False)_
    
10. **The `package.json` file is necessary for every Node.js project.** _(True / False)_
    

---

#### **🔗 Section 4: Short Answer Questions**

11. **What is the purpose of `npm` in Node.js?**
    
12. **Explain the difference between synchronous and asynchronous programming in Node.js.**
    
13. **What does the following Express.js code do?**
    

```javascript
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
```

14. **What is the role of the `__dirname` variable in Node.js?**
    
15. **List three real-world applications of Node.js.**
    

---

#### **🎯 Section 5: Practical Coding Questions**

16. **Write a simple Node.js script that starts an Express server on port 4000 and responds with `"Welcome to Node.js!"` when the user visits the root URL (`/`).**
    
17. **Modify the following code to use asynchronous file reading instead of synchronous file reading.**
    

```javascript
const fs = require('fs');
const data = fs.readFileSync('file.txt');
console.log(data.toString());
```

18. **Create an Express server that serves a static HTML file (`index.html`) when the user visits the homepage.**

---

### 🏆 **Scoring System**

- **0-5**: Beginner – Keep learning! 🚀
- **6-10**: Intermediate – You're on the right track! 🔥
- **11-15**: Advanced – Impressive knowledge! 🎯
- **16-18**: Expert – You are a Node.js Pro! 💡

---

Would you like answers or explanations for any of the questions? 😃
