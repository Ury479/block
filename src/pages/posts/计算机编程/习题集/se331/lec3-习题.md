---
layout: ../../../../../layouts/PostLayout.astro
title: Lecture 3 – Practice Set
description: "Awesome—here’s a clean, exam style set built only from your
  Lecture 3 slides Vite, TypeScript features, Linting, REST: C"
date: 2025-08-17T09:36:52.406Z
updated: 2025-08-17T14:59:10.684Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 13
sourceFolder: 计算机编程/习题集/se331
---

Awesome—here’s a clean, exam-style set built **only from your Lecture 3 slides** (Vite, TypeScript features, Linting, REST: Cacheability & Client–Server, Vue project structure). English only, answers on request. #一周目

---

# Lecture 3 – Practice Set

## A. Multiple Choice (single answer)

1. Vite starts instantly in dev primarily because it serves modules using:  b
    A. Webpack bundles  
    B. Native ES modules  
    C. SystemJS loaders  
    D. CDN prebundles
    
2. Vite’s production build uses which tool under the hood?  b
    A. Parcel  
    B. Rollup  
    C. Snowpack  
    D. Babel
    
3. Hot Module Replacement (HMR) in Vite mainly benefits developers by:  a -b
    A. Reducing bundle size  
    B. Preserving state while updating changed modules  
    C. Enabling SSR by default  
    D. Generating type definitions
	>### 3) HMR benefit — **Correct: B**

- **Your answer:** A “reducing bundle size”
    
- **Why it’s wrong:** Bundle size is a **build-time** concern (tree-shaking/code splitting).
    
- **Correct idea:** **HMR** swaps just the changed module during **development**, often **preserving component/store state** so you get instant feedback without a full reload.
	>
4. Which statement about Vite’s plugin system is correct?  c
    A. Plugins run only during development  
    B. Plugins run only for production builds  
    C. One unified plugin API works for both dev and build  
    D. Plugins are not typed
    
5. What’s the safest place for assets that should be **optimized and hashed** by the build pipeline?  c
    A. `public/`  
    B. `node_modules/`  
    C. `src/assets/`  
    D. Project root
    
6. Files in the **public/** folder are:  b
    A. Transformed and hashed by Vite  
    B. Copied as-is to the output and referenced by absolute path  
    C. Removed from the build by default  
    D. Only available during development
    
7. In a Vite + Vue project, which file boots your app and mounts it to the DOM?  d -b
    A. `App.vue`  
    B. `main.ts`  
    C. `index.html`  
    D. `router/index.ts`
>### 7) App bootstrap file — **Correct: B (`main.ts`)**

- **Your answer:** D `router/index.ts`
    
- **Why it’s wrong:** `router/index.ts` only **creates/exports** the router.
    
- **Correct idea:** **`main.ts`** is the **entry point** that creates the Vue app, installs plugins (router/pinia), and **mounts** to the DOM (e.g., `app.mount('#app')`).
>
8. Which tool is designed to **statically analyze** code and flag probable bugs or style violations?  b
    A. Prettier  
    B. ESLint  
    C. TypeScript compiler only  
    D. Babel
    
9. Which tool is responsible for **opinionated code formatting** (line width, quotes, etc.)?  a -b
    A. ESLint  
    B. Prettier  
    C. TSC  
    D. Jest
	>  ### 9) Formatting tool — **Correct: B (Prettier)**

- **Your answer:** A ESLint
    
- **Why it’s wrong:** **ESLint** = **linting** (rules, possible bugs, code smells).
    
- **Correct idea:** **Prettier** = **opinionated formatting** (line width, quotes, semi-colons). In teams, combine them and disable style-conflicting ESLint rules via `eslint-config-prettier`.  
	  
	  
10. In REST, **Cacheability** primarily aims to:  a -b
    A. Store client session state on the server  
    B. Allow clients/CDNs to reuse responses with headers like `Cache-Control`/`ETag`  
    C. Merge client and server concerns  
    D. Disable intermediate proxies
    >### 10) REST Cacheability — **Correct: B**

- **Your answer:** A “store client session state on the server”
    
- **Why it’s wrong:** That describes **statefulness**, not caching.
    
- **Correct idea:** **Cacheability** lets **clients/CDNs** reuse responses when allowed by headers like `Cache-Control`, `ETag`, `Expires`, reducing latency and server load.
    >
11. The **Client–Server** constraint in REST implies:  a -b
    A. Tight coupling between UI and data storage  
    B. The client and server can evolve independently  
    C. All clients must be browsers  
    D. Clients manage database schemas
>### 11) REST Client–Server — **Correct: B**

- **Your answer:** A “tight coupling”
    
- **Why it’s wrong:** Client–Server is **about separation of concerns**.
    
- **Correct idea:** The **client and server evolve independently** (UI vs data/logic), enabling independent deployment and scaling.
>
12. Which statement about TypeScript in this stack is accurate?  b
    A. TypeScript is required only for backend code  
    B. TypeScript offers optional static typing and works well with Vite’s typed APIs  
    C. TypeScript cannot be used inside Vue SFCs  
    D. TypeScript disables HMR

---
## B. Multiple Select (choose all that apply)

13. Vite’s strengths include:  
    ☐ Instant dev server start  
    ☐ Lightning-fast HMR  
    ☐ Universal plugin API (dev + build)  
    ☐ Production bundling via Rollup
    
14. Linting best practices for a team include:  
    ☐ Run ESLint in CI  
    ☐ Use `eslint --fix` and Prettier on pre-commit  
    ☐ Keep conflicting ESLint/Prettier rules on purpose  
    ☐ Treat warnings as errors for critical paths
    
15. Pick **cache-related** HTTP headers/mechanisms:  
    ☐ `Cache-Control`  
    ☐ `ETag` / `If-None-Match`  
    ☐ `Content-Type`  
    ☐ `Expires`
    
16. In the Vite project layout, which folders/files are correctly matched to their purpose?  
    ☐ `node_modules/` — third-party dependencies  
    ☐ `src/` — code that goes through the build pipeline  
    ☐ `.gitignore` — excludes files from version control  
    ☐ `public/` — processed by Rollup for hashing
    
17. TypeScript features highlighted in the slides:  
    ☐ Optional static typing  
    ☐ Interfaces/classes/modules (OOP tools)  
    ☐ DOM APIs can be typed  
    ☐ Forces dynamic typing only
    
18. When should you **prefer `src/assets/` over `public/`**?  
    ☐ When you want bundler optimizations and fingerprinted URLs  
    ☐ When the file must be copied 1:1 and reachable at a fixed URL  
    ☐ When you import the asset in a component  
    ☐ When you never import the asset in code
    

---

## C. Concept Comparison (short answers)

19. Compare **Vite dev server** vs **Vite production build** in terms of module handling and goals.
    
20. Compare **ESLint** and **Prettier**: purpose, typical rule boundaries, and how to avoid conflicts.
    
21. Compare **Cacheability** and **Client–Server** constraints: what each controls and how they work together.
    
22. Compare **`public/`** vs **`src/assets/`**: how files are referenced, processed, and typical use cases.
    
23. Compare **TypeScript’s static type checking** with **runtime checks**: when errors are caught and what each prevents.
    

---

## D. Code/Practical Tasks

24. Add Vue support to Vite in `vite.config.ts` (show the minimal typed config with the Vue plugin).
    
25. You imported an image as `src="/logo.png"` after placing it in `public/`.  
    a) Explain why it works.  
    b) Move it to `src/assets/` and show how to import/bind it in a component so it’s optimized and hashed.
    
26. Configure **npm scripts** to run ESLint and Prettier (one script each), and suggest how to run them automatically on pre-commit.
    
27. Your API serves static data that changes at most every 10 minutes.  
    a) Propose a `Cache-Control` policy.  
    b) Show how `ETag` helps avoid sending the full payload.
    
28. A teammate relies on HMR to keep temporary UI state alive between edits. Explain when this is safe and when you should persist state in **Pinia** or localStorage instead.
    

---

## E. Debugging / Pitfalls (explain the issue + fix)

29. Large images were placed in `public/` and referenced via `/img/hero.png`. The production bundle is heavy. What happened and how to fix?
    
30. Prettier and ESLint fight over formatting every commit. What config change resolves this?
    
31. `App.vue` renders, but navigation fails with missing imports and deep relative paths like `../../../components/Card.vue`. What organization and tooling features from the slides help?
    

---
Perfect 👍 — let’s generate a **3-part practice set** (Multiple Choice, Concept Explanation, Concept Comparison) based **only on Lecture 3 (TypeScript + Vite + Vue + REST)** knowledge we just summarized.

---

# **A. Multiple Choice (Single Answer)** #一周目

1. TypeScript code runs in the browser after being:   a
    A. Interpreted directly by the JS engine  
    B. Transpiled into plain JavaScript  
    C. Bundled only with Webpack  
    D. Parsed only by Node.js
>**Correct: B – Transpiled into plain JavaScript**

- TS **cannot run directly** in browsers. It must be **transpiled (compiled down)** to JS.
    
- ❌ Mistake: Thinking it is “interpreted directly.” Browsers only understand JS, not TS.
>
2. Which of the following is a **TypeScript-specific feature** (not native to JavaScript)?  c
    A. Arrow functions  
    B. Interfaces  
    C. Template literals  
    D. Async/await
>**Correct: B – Interfaces**

- **Interfaces** are unique to TS (define contracts for objects/classes).
    
- Template literals, arrow functions, async/await = part of ES6/ES2017 JS.
    
- ❌ Mistake: Confusing ES6+ features with TypeScript-only features.
>
3. In TypeScript, which type is used for a **fixed-length array** where each index has a different type?  b
    A. Enum  
    B. Tuple  
    C. Union  
    D. Any
    
4. Vite starts instantly in development mainly because it serves code using:  b
    A. Rollup bundles  
    B. Native ES modules  
    C. CommonJS modules  
    D. Webpack loaders
    
5. Which tool does Vite use internally for **production builds**?  d
    A. Babel  
    B. Rollup  
    C. Snowpack  
    D. ESLint
>**Correct: B – Rollup**

- Vite uses **Rollup** internally for optimized builds.
    
- ❌ Mistake: ESLint is for linting, not building.
>
6. In a Vue project, assets inside `public/` differ from those in `src/assets/` because:  a
    A. They are optimized and hashed automatically  
    B. They are copied as-is without processing  
    C. They are removed during build  
    D. They must only contain CSS
>**Correct: B – Copied as-is without processing**

- Files in **`public/`** are copied **verbatim** to dist.
    
- Files in **`src/assets/`** go through bundler (optimized, hashed).
    
- ❌ Mistake: Reversed their roles.
>
7. In Vue 3 `<script setup>`, props are declared using:  c
    A. `export default { props: … }`  
    B. `this.props`  
    C. `defineProps()`  
    D. `PropTypes`
    
8. Which Vue Router component renders the matched component in the DOM?  b
    A. `<router-link>`  
    B. `<router-view>`  
    C. `<view-router>`  
    D. `<router-placeholder>`
    
9. Which REST constraint states that **each request must contain all required context** and the server does not store client session state?  b
    A. Cacheability  
    B. Statelessness  
    C. Layered System  
    D. Client–Server
    
10. Which tool ensures **consistent code formatting** in a Vite project (quotes, line width, indentation)?  b
    A. ESLint  
    B. Prettier  
    C. TypeScript Compiler  
    D. Babel

---

# **B. Concept Explanation**

1. Explain the difference between **TypeScript transpilation** and **JavaScript interpretation**.
    
2. What problem does **Hot Module Replacement (HMR)** solve for developers using Vite?
    
3. Explain why `<script setup>` reduces boilerplate in Vue compared to the Options API.
    
4. What is the role of **Axios** in a Vue + Vite project? Give a short example.
    
5. Why is **Separation of Concerns** (keeping API logic in services) important for Vue projects?
    

---

# **C. Concept Comparison**

1. Compare **Tuple** and **Array** in TypeScript in terms of type safety and flexibility.
    
2. Compare **public/** and **src/assets/** in a Vue project in terms of build processing.
    
3. Compare **ES5/CommonJS modules** and **ES6 modules** in terms of syntax and tree-shaking support.
    
4. Compare **`<router-link>`** and **`<router-view>`** in Vue Router.
    
5. Compare **Statelessness** and **Cacheability** in REST APIs in terms of request vs response handling.
    

---
Got it ✅ — here’s a **targeted practice set** (only knowledge point + question). No answers are shown, so you can test yourself.

---

## 🎯 Targeted Training Set

### 1. **TypeScript Execution Model**

> Knowledge point: Browsers cannot run TypeScript directly.  
> **Q:** When running in the browser, TypeScript code must first be:  b
> A. Interpreted directly by the JS engine  
> B. Transpiled into plain JavaScript  
> C. Bundled only with Webpack  
> D. Parsed only by Node.js

---

### 2. **TypeScript-Only Feature**

> Knowledge point: TypeScript adds types, interfaces, and generics beyond ES features.  
> **Q:** Which of the following is unique to TypeScript (not native JS)?  c
> A. Arrow functions  
> B. Template literals  
> C. Interfaces  
> D. Async/await

---

### 3. **Vite Production Build Tool**

> Knowledge point: Vite uses one engine for dev (ESM) and another for production.  
> **Q:** Which tool does Vite rely on internally to produce optimized production builds?  c
> A. Webpack  
> B. Babel  
> C. Rollup  
> D. ESLint

---

### 4. **Vue Project Assets (`public/` vs `src/assets/`)**

> Knowledge point: Different treatment of static vs processed assets.  
> **Q:** In a Vue + Vite project, what is the difference between files in `public/` and `src/assets/`? c 
> 
> A. Both are optimized and hashed by default  
> B. `public/` files are copied as-is, while `src/assets/` files are processed and hashed  
> C. `public/` files are deleted in production, only `src/assets/` remain  
> D. Only images can go into `public/`, only CSS into `src/assets/`

**❌ Incorrect**

✅ Correct: **B**

- `public/` → files are copied **as-is**, no processing, referenced by absolute paths (`/favicon.ico`).
    
- `src/assets/` → files go through the bundler (hashed, optimized, tree-shaken).
    
- `public/` files are **not deleted**; they remain as static assets in the final build, just untouched.
---

Perfect 👍  
Since you’ve got a **Lecture 3 knowledge map (TypeScript + Vite + Vue)**, I’ll now design a **comprehensive exercise set** with **Multiple Choice**, **Concept Explanation**, and **Concept Comparison**.

---

# 📘 **Lecture 3 – Practice Questions**

## **A. Multiple Choice (single answer)** 

1. In REST, which constraint means the server stores no client session and each request is self-contained?  a
    A. Cacheability  
    B. Statelessness  
    C. Client–Server  
    D. Layered System
	    - Correct: **B (Statelessness)**.
- **Why:** Cacheability = reusing responses; Statelessness = server stores no session.
## **B. Concept Explanation**

1. Explain why TypeScript is called a **superset of JavaScript**.
	    the TypeScript could be compiled to the JavaScript
		    - ❌ Too shallow.
    
- ✅ Correct: _TypeScript is called a superset because **all valid JavaScript is also valid TypeScript**, with extra features like static types, interfaces, and classes. It compiles to plain JS so it can run anywhere._
	>all valid JavaScript is also valid TypeScript

2. What problem does **Hot Module Replacement (HMR)** solve in development?
	    It reduce the storage for files to just replace the specific component,not whole packages.
>- ❌ Misleading.
    
- ✅ Correct: _HMR updates only the changed modules **in memory**, without reloading the entire page. This preserves app state and speeds up feedback during development._
> update only the changed modules in memory,no reload whole page

3. Explain how `<script setup>` reduces boilerplate compared to the Options API.
>✅ Correct: _It’s compile-time sugar for Composition API. Removes the need for `setup()` + `return`, lets you use `defineProps` and `defineEmits` directly, reducing boilerplate and improving IDE type inference._
>compile-time sugar,reduce boilerplate,improve type inference


4. Describe the difference between placing assets in `public/` vs `src/assets/`.
	    the file in src/assets/ couldn't be changed while  file in public/ must show the output.
	>public/： verbatim,copy the whole page to `dist` ,reference absolute path
	>src/assets/ ：process by vite
	
```
❌ Correct version:

- **`public/`**: Files copied verbatim to `dist`, no hashing or processing. Referenced via absolute paths.
    
- **`src/assets/`**: Processed by Vite, optimized, hashed. Use imports for images, fonts, etc.
```

5. Why is **Separation of Concerns** important when organizing API calls in a Vue project?
	>keep component focused,improve reusability
	>✅ Correct: _Keeping API calls in `/services` keeps components UI-focused, improves reusability, testability, and maintainability of the code._    

---

## **C. Concept Comparison**

1. Compare **Tuple** vs **Array** in TypeScript in terms of length and type safety.
	    the Tuple could change the length and incerease the safety while Array couldn't change the length.
	>tuple:fixed length,predifined type
	>array:variable length,uniform element type
```
✅ Correct:

- **Tuple**: Fixed length, each position has predefined types (`[string, number]`).
    
- **Array**: Variable length, uniform element type (unless union-typed).
```

2. Compare **ES5/CommonJS modules** and **ES6 modules** in terms of syntax and tree-shaking support.
```
✅ Correct:

- **CommonJS**: `require()`, `module.exports`, dynamic, not tree-shake-friendly.
    
- **ES6**: `import/export`, static analysis, supports tree-shaking.
```

3. Compare **`v-bind`** and **`v-model`** in terms of data flow between state and UI.
	    v-bind is one-way which could transfer data from state to UI while the v-model is two-way which could deliver data on two side.
4. Compare **Statelessness** vs **Cacheability** in REST.
	    Statelessness deliver data to client without storage while Cacheability just send the data base on the context
```
Statelessness:no client session,request, context
Cacheability:client reuse responses

- Your answer: ❌ Wrong.
    
- ✅ Correct:
    
    - **Statelessness**: Server stores no client session, each request has all context.
        
    - **Cacheability**: Clients/CDNs may reuse responses when headers allow.
```

5. Compare Axios `.then()/.catch()` with `async/await` for handling errors.
```
1.sytax
2.async synchronous

✅ Correct:

- **`.then/.catch`**: Promise chaining syntax.
    
- **`async/await`**: Makes async code look synchronous; use `try...catch` for errors.
    
- Both are equivalent in capability.
```
---

👉 Do you want me to also **provide the correct answers + explanations** right now, or keep it in **quiz mode** so you try first and I only check afterward (like we did last time)?
