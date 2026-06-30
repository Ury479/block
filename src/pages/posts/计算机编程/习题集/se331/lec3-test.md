---
layout: ../../../../../layouts/PostLayout.astro
title: lec3 test
description: A. Multiple Choice 一周目 1. Which statement best describes
  TypeScript? b A. A replacement for JavaScript that only runs in
date: 2025-08-12T09:06:16.155Z
updated: 2025-08-18T07:15:43.949Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 5
sourceFolder: 计算机编程/习题集/se331
---

## **A. Multiple Choice** #一周目

1. Which statement best describes TypeScript?  b
    A. A replacement for JavaScript that only runs in browsers  
    B. A strict superset of JavaScript adding optional static typing and OOP features  
    C. A browser plugin for ES6 features  
    D. A Java framework for web applications

	1. **✅ Correct**
> 	**Your answer:** B  
> 	**Correct:** **B** — A strict superset of JavaScript adding optional static typing and OOP features.  
> 	**Why:** TS extends JS syntax with types, interfaces, classes, etc., and compiles to plain JS.
    
2. In TypeScript, which keyword prevents both reassignment and mutation of tuple elements?  b -c
    A. const  
    B. let  
    C. readonly  
    D. static
    
 **❌ Incorrect**
> **Your answer:** B (`let`)  
> **Correct:** **C** (`readonly`)  
> **Why (knowledge point):** `readonly [T1, T2]` locks both **binding and element mutation** at the type level; `let` is just a variable declaration keyword and doesn’t add immutability.
    
3. In Vue 3 `<script setup>`, props can be declared:  a
    A. Only via `export default` object syntax  
    B. Using `defineProps()` directly inside the setup block  
    C. Only in the template section  
    D. In the `main.ts` entry file

	1. **❌ Incorrect**
> 	**Your answer:** A  
> 	**Correct:** **B** — Use `defineProps()` inside `<script setup>`.  
> 	**Why (knowledge point):** `<script setup>` is Composition API sugar; `export default { props }` is Options API style.
> `<script setup>` , Composition API sugar;`defineProps()`,Options API style
4. Which folder in a Vue project contains compiled dependencies installed via npm?  c
    A. public  
    B. src  
    C. node_modules  
    D. assets
    
5. In Vue Router, which component acts as a placeholder for rendering matched routes?  d
    A. `<router-link>`  
    B. `<router-view>`  
    C. `<router-outlet>`  
    D. `<view-router>`
    
> 5. **❌ Incorrect**
> **Your answer:** D (`<view-router>`)  
> **Correct:** **B** — `<router-view>`  
> **Why (knowledge point):** `<router-view>` renders the matched component; `<router-link>` handles navigation.
    
6. Which Axios feature allows handling successful and failed requests separately?  b
    A. `.map()` and `.filter()`  
    B. `.then()` and `.catch()`  
    C. `.bind()` and `.apply()`  
    D. `.resolve()` and `.reject()`
    
7. In Separation of Concerns, why keep API calls in a separate `services` file?  a
    A. To improve syntax highlighting  
    B. To simplify components and make logic reusable  
    C. To force TypeScript type checking  
    D. To avoid using Axios

>	1. **❌ Incorrect**
> 	**Your answer:** A  
> 	**Correct:** **B** — To simplify components and make logic reusable.  
> 	**Why (knowledge point):** Services isolate data-access logic (Axios), improving reusability, testing, and maintainability.    
> 	Axios -reusability, testing, and maintainability.

---

## **B. Concept Explanation**

1. Explain the purpose of **`readonly` tuples** in TypeScript and give an example use case.
`readonly` tuples could locks both **binding and element mutation** at the type level.

2. Describe how **Hot Module Replacement (HMR)** improves developer productivity.
    **Hot Module Replacement (HMR)**  updates only the changed code without reloading the full page
    
3. Explain what `<script setup>` does in Vue 3 and why it reduces boilerplate code.
`<script setup>` use `defineProps()` inside `<script setup>`.  #不熟悉 
**❌ Incomplete**
> **Your answer:** “`<script setup>` use `defineProps()` inside `<script setup>`.”  
> **Correct/complete:**
> - **What it is:** Compile‑time sugar for the **Composition API** inside SFCs—everything you declare is available in the template **without `return`** and without an `export default`.
>     Compile‑time sugar，Composition API
> - **Why less boilerplate:** No `setup()` wrapper, no manual `return`, direct `import`/usage, built‑in support for `defineProps()` / `defineEmits()` / `defineExpose()`.
>	No `setup()` wrapper, no manual `return

4. Describe the difference between **public** and **src** folders in a Vue project.
 **public** store the assist file and **src** store the page file. #不熟悉 
**❌ Too vague**
> **Your answer:** “**public** store the assist file and **src** store the page file.”  
> **Correct/complete:**
> 
> - **`public/`**: Files are **copied as‑is** to the build output root and **not processed** by Vite (no hashing, no imports). Good for `favicon.ico`, static robots.txt, third‑party scripts you reference by **absolute path**.
>     file not processed by vite.
>     
> - **`src/`**: **All application code** (components, assets, styles) that **goes through the build pipeline** (module graph, optimizations, asset hashing, treeshaking). Import assets from `src` to get **fingerprinted URLs** and optimizations.  
>     **Rule of thumb:** If you need **imports/optimizations**, put it in `src/`. If you need a file to **exist verbatim** at a known URL, put it in `public/`.
>		
5. Explain why **Statelessness** is important in REST APIs.
    Statelessness ensures the server keeps no client session and every request is self-contained.

---
## **C. Concept Comparison**
1. Compare **Tuple** vs **Array** in TypeScript in terms of type safety and length.
**Tuple** could redesign the length of the array while  **Array** couldn't change the length.

**Tuple vs Array in TypeScript**  
**Your answer:** “Tuple could redesign the length of the array while Array couldn't change the length.”  
**❌ Incorrect** —

- **Correct:**
    
    - **Tuple**: Fixed length, each position has a predefined type (e.g., `[string, number]`).
        
    - **Array**: Variable length, all elements share the same type unless explicitly union-typed.
        
    - Tuples are more type-safe because each position has a specific expected type.		
	
2. Compare **ES5/CommonJS modules** vs **ES6 modules** in syntax and tree-shaking support.
 ES5/CommonJS modules didn't have the feature for TypeScripe while  ES6 modules support TypeScripe style.
	 1. **Your answer:** “ES5/CommonJS modules didn't have the feature for TypeScript while ES6 modules support TypeScript style.”  
    **❌ Incorrect** —
    
    - **Correct:**
        
        - **ES5/CommonJS**: Uses `require()` and `module.exports`, supports dynamic loading but not tree-shaking-friendly.
            
        - **ES6 modules**: Uses `import`/`export` syntax, statically analyzable for tree shaking, better tooling integration.
            
        - TypeScript supports **both** syntaxes; choice affects bundling and optimization, not TS compatibility.

4. Compare **`v-bind`** and **`v-model`** in Vue in terms of data flow.
v-model conclude v-bind and v-on which is two-way while the `v-bind` is one-way

5. Compare **Cacheability** and **Statelessness** in REST APIs.
    Cacheability allows the client to reuse previously fetched data without contacting the server while Statelessness let server responses being stored and reused

	**❌ Incorrect** —
	
	- **Correct:**
	    
	    - **Cacheability**: Client (or intermediaries) can reuse server responses to improve performance; requires explicit cache-control.
	        
	    - **Statelessness**: Server stores **no client session**; each request is self-contained.
	        
	    - They are **independent** constraints — Statelessness is about request context, Cacheability is about response reuse.
6. Compare **Axios `.then()`/`.catch()`** with `async/await` in error handling.
    5. - `.then()`/`.catch()`: Promise chaining syntax; `.catch()` handles errors.
        
    - `async/await`: Synchronous-looking syntax for Promises; errors are handled with `try...catch`.
        
    - Functionally equivalent; `async/await` is often cleaner for complex async flows.

---
