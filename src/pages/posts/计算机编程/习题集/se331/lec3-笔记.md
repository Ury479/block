---
layout: ../../../../../layouts/PostLayout.astro
title: "**How Concepts Link**"
description: Lecture 3 – TypeScript + Vite 1. TypeScript Core Concepts Transpile
  TypeScript → JavaScript not executed directly . “Tra
date: 2025-08-17T14:26:06.416Z
updated: 2025-08-17T14:26:28.179Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 5
sourceFolder: 计算机编程/习题集/se331
---

## **Lecture 3 – TypeScript + Vite**

## **1. TypeScript Core Concepts**

- **Transpile**
    
    - TypeScript → JavaScript (not executed directly).
        
    - “Transform + Compile” → ES5/ES6 compatible code.
        
- **Program execution models**
    
    - Interpreter: statement by statement, easier debugging, slower execution.
        
    - Compiler: scans whole program, faster runtime, harder debugging.
        
    - TypeScript = **Hybrid** (transpiles + compiles to JS).
        
- **Why TypeScript?**
    
    - Superset of JavaScript (all JS is valid TS).
        
    - Adds **types**, **OOP features**, **modules**.
        
    - Safer (compile-time errors), easier to maintain large apps.
        
- **Features**
    
    - Cross-platform.
        
    - Object-oriented (classes, interfaces).
        
    - Static type-checking (compile-time).
        
    - Optional typing.
        
    - Full ES6+ features (modules, arrow functions, etc.).
        
- **Data types**
    
    - `number`, `string`, `boolean`, `array`, `tuple`, `enum`, `union`, `any`, `void`, `never`.
        
    - **Tuple**: fixed-length, per-position types. Use `readonly` to enforce immutability.
        
    - **Enum**: named constants.
        
    - **Any**: disables type-checking (avoid when possible).
        
- **Advanced TS**
    
    - **Interfaces**: define structure of objects.
        
    - **Optional props** with `?`.
        
    - **Classes**: default public, can implement interfaces.
        
    - **Modules**: ES6 `import/export` vs CommonJS `require/module.exports`.
        
    - **Iterables**: `for…of` (values) vs `for…in` (keys).
        

---

## **2. Vite Framework**

- **What is Vite?**
    
    - Next-gen frontend tooling.
        
    - Dev: **Native ES modules** (no bundling at start).
        
    - Build: **Rollup** (optimized production bundles).
        
- **Key features**
    
    - Instant dev server (serve ESM directly).
        
    - Lightning-fast HMR (Hot Module Replacement).
        
    - Fully typed plugin API.
        
    - Framework-agnostic (Vue, React, Svelte, etc.).
        
- **Why Vite?**
    
    - Faster builds (no initial bundling).
        
    - Smaller optimized production code.
        
    - Supports modern JS standards.
        
- **npm ecosystem**
    
    - `npm install <pkg>` or `yarn add <pkg>`.
        
    - Dependencies live in `node_modules`.
        
- **Lint & Prettier**
    
    - **ESLint**: static analysis → find bugs/style violations.
        
    - **Prettier**: auto-formatting (quotes, indentation).
    
---

## **3. Vue Project Structure (with Vite)**

- **public/** → static assets, copied as-is (no bundling).
    
- **src/** → all application code, compiled by Vite.
    
    - **assets/** → images/fonts (optimized + hashed).
        
    - **components/** → reusable building blocks.
        
    - **router/** → Vue Router configuration.
        
    - **store/** → Pinia state management.
        
    - **views/** → pages/views.
        
    - **App.vue** → root component.
        
    - **main.ts** → app entry, mounts `App.vue`.
        

---

## **4. Vue + TypeScript Essentials**

- **`<script setup>`**
    
    - Compile-time sugar for Composition API.
        
    - Eliminates `setup()` + `return`.
        
    - Cleaner code, better IDE inference.
        
    - Supports `defineProps` and `defineEmits`.
        
- **Props**
    
    - Pass data from parent → child.
        
    - Declared with `defineProps<Type>()`.
        
- **Global CSS**
    
    - Placed in `App.vue`.
        
    - Scoped CSS applies only to the component.
        

---

## **5. Routing**

- **`<router-view>`** → placeholder where matched component renders.
    
- **`<router-link>`** → navigation without reloading page.
    
- **SPA routing**
    
    - **Client-side**: swaps views without full reload.
        
    - **Server-side**: each navigation hits backend.
        

---

## **6. REST & Data Fetching**

- **Mock server with JSON-Server**
    
    - Uses `.json` files to simulate REST APIs.
        
    - Useful for local dev before real backend.
        
- **REST constraints**
    
    - Uniform interface.
        
    - Statelessness (client must send full context).
        
    - Cacheability (responses can be reused).
        
    - Client–Server separation.
        
    - Layered system.
        
    - (Optional) Code on demand.
        
- **Fetching data with Axios**
    
    - `onMounted(() => { axios.get(...) })`.
        
    - Returns a **Promise**. Handle with `.then/.catch` or `async/await`.
        
- **Separation of Concerns**
    
    - Keep service (API calls) in `/services`.
        
    - Components focus only on UI logic.
        
    - Example: `EventService.ts` handles all event API requests.
        

---

# **How Concepts Link**

1. **TypeScript** → safer coding + scalable architecture.
    
2. **Vite** → tooling layer, compiles TS + Vue efficiently.
    
3. **Vue project structure** → organizes code into components, views, services.
    
4. **Script setup + Props** → simplifies component logic.
    
5. **Vue Router** → enables SPA navigation.
    
6. **REST + Axios** → connects frontend with backend/mock server.
    
7. **Separation of concerns** → services decouple API calls from UI.
    

---

✅ Now you have a **Lecture 3 knowledge map**.  
Do you want me to **turn this into Monica-style nested outline** (so you can import into mind maps like we did for Lecture 2)?
## **2.TypeScript + Vite + Vue Fundamentals**

### 1. TypeScript Overview #笔记 #一周目 

- **Definition**: Microsoft’s extension of JavaScript.
    
- **Key Traits**:
    
    - Strict superset of JavaScript.
        
    - Compiles (transpiles) to plain JS.
        
    - Optional static typing & type annotations.
        
    - OOP features (classes, interfaces, modules).
        
- **Benefits**:
    
    - Easier debugging.
        
    - Catch errors at compile-time.
        
    - Works on any browser, OS, host.
        

---

### 2. TypeScript Features

- Cross-platform compatibility.
    
- Object-oriented language features.
    
- Static & optional typing.
    
- DOM manipulation capabilities.
    
- ES6+ features (classes, arrow functions, etc.).
    
- **Supported Types**:
    
    - Number, String, Boolean, Array, Tuple, Enum, Union, Any, Void, Never.
        
- **Special Types**:
    
    - Tuple (`[type, type]`), `readonly` tuples.
        
    - `let` vs `const` vs `readonly`.
        
- Interfaces:
    
    - Optional properties.
        
    - Extend other interfaces or classes.
        

---

### 3. Modules

- **ES5/CommonJS**: `require()`, `module.exports`.
    
- **ES6**: `import`, `export`.
    
- Syntax for exporting constants, interfaces, re-exports.
    

---

### 4. Vite Overview

- Next-gen frontend tooling.
    
- **Key Features**:
    
    - Instant server start.
        
    - Lightning-fast HMR (Hot Module Replacement).
        
    - Optimized build with Rollup.
        
    - Support for Vue, React, Svelte.
        
- Why Vite:
    
    - Faster builds.
        
    - Native ES module support.
        
    - Optimized code size.
        

---

### 5. Vue Project Structure

- **Folders**:
    
    - `node_modules` (dependencies).
        
    - `public` (static assets).
        
    - `src` (source code).
        
        - `assets`, `components`, `router`, `store`, `views`.
            
- **Main Files**:
    
    - `App.vue` (root component).
        
    - `main.ts` (entry point).
        
    - `.gitignore` (excluded files).
        

---

### 6. Vue Script Setup

- Syntactic sugar for Composition API.
    
- Less boilerplate, better performance.
    
- Direct `props` & events with TypeScript support.
    

---

### 7. Routing

- **Vue Router**:
    
    - Client-side routing via `<router-view>` and `<router-link>`.
        
    - Config in `src/router/index.js`.
        
- Modes:
    
    - History mode for clean URLs.
        

---

### 8. REST & Axios in Vue

- **REST Constraints**:
    
    - Uniform Interface.
        
    - Statelessness.
        
    - Cacheability.
        
    - Client-Server.
        
    - Layered System.
        
    - Code on Demand (optional).
        
- **Axios**:
    
    - Installed via `npm install axios`.
        
    - Used in `onMounted` lifecycle hook.
        
    - Return Promises, handle with `.then()` and `.catch()`.
        

---

### 9. Separation of Concerns

- Keep services (API calls) in separate files.
    
- Simplify components for readability.
    
- Reusable logic.

Alright — here’s a **fresh question set** based on your TypeScript + Vite + Vue fundamentals outline.  
We’ll cover **multiple choice**, **concept explanation**, and **concept comparison** in English, following your preferred style.
