---
layout: ../../../../../layouts/PostLayout.astro
title: 1. TypeScript Tuples and readonly Modifier
description: Alright — based on Lecture 2 Introduction to Web Framework +
  TypeScript + Vite + Vue basics from your slides , here’s a
date: 2025-08-11T09:57:24.878Z
updated: 2025-08-17T08:44:55.858Z
type: 文稿
topic: 习题集
tags: []
readingMinutes: 32
sourceFolder: 计算机编程/习题集/se331
---

Alright — based on **Lecture 2** (Introduction to Web Framework + TypeScript + Vite + Vue basics from your slides), here’s a fresh set of **questions only** (no answers, per your request).

---

## **A. Multiple Choice** #一周目 

1. Which statement best describes TypeScript?  b
    A. A replacement for JavaScript that only runs in browsers  
    B. A superset of JavaScript adding optional static typing and OOP features  
    C. A browser plugin for ES6 features  
    D. A Java framework for web applications    
2. Which Vue directive is used for **two-way data binding**?  A -c
    A. `v-bind`  
    B. `v-if`  
    C. `v-model`  
    D. `v-for`
    2. **❌ Incorrect** — Two-way data binding in Vue uses `v-model`, not `v-bind`. Correct answer: **C**.
3. In Pinia, which store property is used to return a computed version of the state?  D -b
    A. `state`  
    B. `getter`  
    C. `action`  
    D. `mutation`
	    3. **❌ Incorrect** — In Pinia, computed state is returned via `getters`, not `mutation`. Correct answer: **B**.
4. Which Vue Router navigation guard runs **before every route change** globally?  C
    A. `beforeEnter`  
    B. `afterEach`  
    C. `beforeEach`  
    D. `beforeResolve`
    
5. What happens if a Vue Router navigation guard returns `false`?  D -b
    A. Navigation continues  
    B. Navigation is canceled  
    C. Page reloads  
    D. A 404 is thrown
	     **❌ Incorrect** — Returning `false` from a navigation guard **cancels** navigation, it doesn’t throw a 404. Correct answer: **B**.
6. Which REST constraint ensures that the client and server evolve independently, without knowledge of each other's implementation details?  B
    A. Stateless  
    B. Client-Server  
    C. Cacheable  
    D. Layered System
## **A. Multiple Choice Review**

1. **✅ Correct** — TypeScript is a superset of JavaScript adding optional static typing and OOP features.

2. **❌ Incorrect** — Two-way data binding in Vue uses `v-model`, not `v-bind`. Correct answer: **C**.
    
3. **❌ Incorrect** — In Pinia, computed state is returned via `getters`, not `mutation`. Correct answer: **B**.
    
4. **✅ Correct** — `beforeEach` runs before every route change globally.
    
5. **❌ Incorrect** — Returning `false` from a navigation guard **cancels** navigation, it doesn’t throw a 404. Correct answer: **B**.
    
6. **✅ Correct** — Client-Server constraint ensures independent evolution of client and server.
    
---

## **B. Concept Comparison Feedback & Corrections**

1. **beforeEach vs beforeEnter** #不熟悉
    
    - _beforeEach_: Global guard, runs before **every** navigation, useful for authentication checks and logging.
        
    - _beforeEnter_: Route-specific guard, runs only when entering that route, useful for route-level validation.
        
    
    > Your answer confused runtime vs compile time — both are runtime features.
    
2. **Props vs Pinia** #不熟悉
    
    - _Props_: Pass data **parent → child** in a one-way, component-local manner.
        
    - _Pinia_: Centralized store; any component can access/update state without explicit prop passing.
        
    > Your "chain call" description was vague — props are explicit, Pinia is global.
    
3. **TypeScript Modules (ES5 vs ES6)**
    
    - _ES5/CommonJS_: `require()` / `module.exports` (Node.js).
        
    - _ES6_: `import` / `export` syntax, static structure, tree-shaking-friendly.
        
    > Your answer didn’t address module syntax differences.
    
4. **Statelessness vs Cacheability in REST** #不熟悉
    
    - _Statelessness_: Server stores no client session state; each request is self-contained.
        
    - _Cacheability_: Responses can be cached to improve performance.
        
    
    > Your answer mixed unrelated concepts — "function couldn’t be used" is incorrect.
    
5. **HMR vs Full Page Reload**
    
    - _HMR_: Replaces only changed modules in the running app, preserving state.
        
    - _Full reload_: Reloads the entire app from scratch, losing state.

---
## **B. Concept Comparison**

1. Compare **beforeEach** and **beforeEnter** navigation guards in Vue Router in terms of scope and usage.

beforeEach will be used for statement in each test for run time while beforeEnter is used in the compile time

2. Distinguish between **props** and **state management via Pinia** for passing data in Vue.

the props is used for chain call while the state management via Pinia is just for the Pinia and control the whole process of pages.

3. Compare **TypeScript modules** in ES5 (CommonJS) vs ES6 syntax.

TypeScript modules are limited style base on js while ES6 syntax add the arrow functions

4. Explain the difference between **statelessness** and **cacheability** in REST architecture.

statelessness means the function couldn be used in any position while the cacheability means the data will be destroyed after used.

5. Compare **Hot Module Replacement (HMR)** and **full page reload** in development.
    
Hot Module Replacement (HMR) just replace the updated part of the code while the full page reload replace the whole page

---
## **C. Short Answer / Problem Solving** #代码编写题

1. In Pinia, write a store definition for managing a `counter` with:
    
    - `state`: `count` initialized to `0`
        
    - `getter`: `doubleCount` returning `count * 2`
        
    - `action`: `increment` adding 1 to `count`
        
2. In Vue, convert the following to use `<script setup>` syntax:
    

```vue
<script>
export default {
  props: ['title']
}
</script>
<template>
  <h1>{{ title }}</h1>
</template>
```

3. Given the REST endpoint `/api/events`, write an Axios call in TypeScript that fetches the data on component mount and logs it.
    
4. Write a Vue Router per-route guard (`beforeEnter`) that redirects unauthenticated users to `/login`.
    
5. Given the following TypeScript interface:
    

```ts
interface Event {
  id: number;
  name: string;
  location?: string;
}
```

Explain what `location?` means and give an example of a valid `Event` object.

---

If you like, I can next prepare a **mock exam** mixing Lecture 1 + Lecture 2 so you practice switching between **JS fundamentals** and **Vue + TypeScript + Pinia** concepts.

---
# 1. TypeScript Tuples and readonly Modifier
## **A. Multiple Choice** #二周目 

1. In TypeScript, what does the `readonly` modifier on a tuple prevent?  c
    A. Only reassignment of the tuple variable  
    B. Changing any element value inside the tuple  
    C. Both reassignment and changing element values  
    D. Accessing the tuple elements
    
2. Which of the following is **not** a characteristic of a tuple in TypeScript?  d -c
    A. Fixed length  
    B. Elements have predefined types  
    C. Can freely change element types after creation  
    D. Indexed access to elements
    
>**❌ Incorrect** — The option that is **not** a characteristic is **C** ("Can freely change element types after creation"), not D. Tuples do support indexed access to elements.

3. What is a common use case for a `readonly` tuple?  b
    A. Storing temporary mutable data  
    B. Defining immutable configurations or constants  
    C. Performing array sorting  
    D. Dynamic data binding
    

---

## **B. Concept Explanation**

1. Explain the concept of a tuple in TypeScript and how it differs from a regular array.

a tuple could reassignment and change element values  while regular array couldn't do it.

>**Tuple concept** —  
>Your answer is inverted:
>- Regular tuples **are mutable by default** (you can reassign element values, change content length if not fixed).
>- The difference from a regular array: tuples have **fixed length** and **known types for each position**.

2. Describe the purpose of the `readonly` modifier when applied to a tuple and its practical implications.

readonly modifier could defining immutable configurations or constants base on tuple.

>**Purpose of `readonly`** —  
Correct direction, but add: It enforces immutability **at compile time** — you cannot reassign the tuple or change its elements. This prevents bugs from accidental mutation.

3. Give a real-world example where using a `readonly` tuple would be beneficial in a web application.

for the important information,the readonly could help to protect the value to be changed by users.

---
## **C. Concept Comparison**

1. Compare a `readonly` tuple with a `const` array in terms of mutability and element type restrictions.

`readonly` tuple is much more mutable than the const array.

>**`readonly` tuple vs `const` array** —  
>Your answer is reversed.
>- `const` on an array variable: prevents **reassignment**, but allows **element mutation**.
>- `readonly` tuple: prevents **both reassignment and element mutation**.

2. Compare a `readonly` tuple and a regular tuple in terms of allowed operations.

`readonly` tuple can both reassignment and change element values while  a regular tuple coudn't.

>**`readonly` tuple vs regular tuple** —  
>Your answer is reversed.
>- Regular tuple: allows reassignment of elements (mutable).
>- `readonly` tuple: forbids changing elements or reassignment.
>- Contrast `readonly` tuples with JavaScript's `Object.freeze()` in terms of immutability and use cases.
>- `readonly` tuples could have fixed length and can freely change element types after creation

---
# 2. Vue.js Data Binding: #二周目
Got it — here’s the **question set** based on your image content for **Vue.js Data Binding**.

---

## **A. Multiple Choice**

1. Which Vue directive is primarily used for **two-way data binding**?  c
    A. `v-bind`  
    B. `v-if`  
    C. `v-model`  
    D. `v-on`
**✅ Correct** — `v-model` is the directive for two-way data binding.
    
2. What is the purpose of `v-bind` in Vue.js?  b
    A. To handle events  
    B. To bind HTML attributes to data properties (one-way)  
    C. To update data when the user types  
    D. To render lists
    **✅ Correct** — `v-bind` binds HTML attributes to data properties (one-way).
    
3. Under the hood, `v-model` in Vue combines:  d -c
    A. `v-bind` and `v-if`  
    B. `v-on` and `v-for`  
    C. `v-bind` and `v-on`  
    D. `v-show` and `v-bind`
    
**❌ Incorrect** — Correct answer: **C**.

> **Your answer:** D (`v-show` and `v-bind`)  
> **Correct:** `v-model` combines `v-bind` and `v-on` under the hood.
    
4. Which statement about one-way and two-way binding is **true**?  b
    A. One-way binding automatically updates component state when the UI changes  
    B. Two-way binding allows changes in the UI to update component state and vice versa  
    C. Two-way binding only updates data from the component to the UI  
    D. One-way binding is only available for input elements
- **✅ Correct** — Two-way binding updates both UI and component state.

5. In a form with `v-model`, changing the input value will:  c
    A. Only update the DOM  
    B. Only update the component data  
    C. Update both the DOM and the component data  
    D. Not update anything
    **✅ Correct** — `v-model` updates both DOM and component data.

---

## **B. Concept Explanation** #不熟悉

1. Explain the difference between one-way and two-way data binding in Vue.js.

the one-way bind HTML attributes to data properties while two-way only updates data from the component to the UI  

- **❌ Incorrect** —
    
    > **Your answer:** “one-way bind HTML attributes to data properties while two-way only updates data from the component to the UI”   
    > **Correct:** One-way binding (`v-bind`) flows data **from component state → UI** only. Two-way binding (`v-model`) flows **both directions**: UI changes update state, and state changes update UI.  
    > >one -component state to UI,two -both direction

2. Describe what `v-model` does internally to achieve two-way data binding.

`v-model` use the function of  `v-show` and `v-bind` to achieve two-way data binding and update both the DOM and the component data

- **❌ Incorrect** —
    
    > **Your answer:** “`v-model` uses `v-show` and `v-bind`”  
    > **Correct:** `v-model` internally uses **`v-bind`** for passing the value and **`v-on`** for listening to input/change events.

3. Explain why `v-bind` is considered one-way binding and give an example.

It bind HTML attributes to data properties

>**✅ Partially Correct** — `v-bind` is one-way binding because data flows only from the state to the attribute, not back to the state. 
>>`v-bind:folw only state to attribute`
---

## **C. Concept Comparison**

1. Compare `v-model` and `v-bind` in terms of data flow direction and typical use cases.

`v-model` use the function of  `v-show` and `v-bind` to achieve two-way data binding and update both the DOM and the component data  while `v-bind` just bind HTML attributes to data properties

**❌ Incorrect** —

> **Your answer:** “`v-model` uses `v-show` and `v-bind`…”  
> **Correct:** `v-model` = `v-bind:value` + `v-on:input` for inputs (or equivalent events for other elements). `v-bind` = one-way from state to attribute.

2. Compare one-way binding in Vue to `readonly` properties in TypeScript in terms of immutability.

one-way binding use HTML attributes to data properties and change configurations while `readonly` properties could  defining immutable configurations or constants base on tuple which enforces immutability **at compile time**.

>**✅ Partially Correct** — Your link to immutability is valid but wording is unclear.  
Correct idea: One-way binding limits data flow direction (not immutability at compile time), while `readonly` in TypeScript enforces compile-time immutability.

3. Compare `v-model` usage on an `<input>` element vs on a custom component.

 `v-model` include v-show` and `v-bind while a custom component could only bind HTML attributes to data properties like `v-blind`.

**❌ Incorrect** —

> **Your answer:** “`v-model` include v-show and v-bind…”  
> **Correct:** On `<input>`, `v-model` binds the value and listens for `input` events. On a custom component, it binds to a prop (default name `modelValue`) and listens for an `update:modelValue` event.
---

Here’s the **question set** for the image content on **Pinia Store: Getters**.

---

## **A. Multiple Choice** #二周目 

1. In Pinia, which store property is used to hold raw, unprocessed data?  c
    A. `getter`  
    B. `state`  
    C. `action`  
    D. `mutation`
**❌ Incorrect** —

> **Your answer:** C (`action`)  
> **Correct:** **B** (`state`)  
> **Explanation:** In Pinia, `state` holds the raw, unprocessed data. `actions` are for updating state, not storing data.
	
2. Which statement about Pinia `getters` is correct?  c
    A. They modify state directly  
    B. They return computed/derived values from state  
    C. They store asynchronous functions  
    D. They replace `state` entirely
    
    **❌ Incorrect** —
> **Your answer:** C ("store asynchronous functions")  
> **Correct:** **B** ("return computed/derived values from state")  
> **Explanation:** `getters` are like computed properties in Vue — they derive and return values from the state, they do not store async functions.
> 
3. In Pinia, what is a key difference between `getters` and `actions`?  d
    A. `getters` can be asynchronous while `actions` cannot  
    B. `getters` are for data derivation, `actions` are for updating state  
    C. `getters` directly mutate state, `actions` only read state  
    D. They have identical functionality
**❌ Incorrect** —

> **Your answer:** D ("identical functionality")  
> **Correct:** **B** ("getters are for data derivation, actions are for updating state")  
> **Explanation:** `getters` never mutate state; `actions` are where state changes happen, and they can be async.

4. Which of the following is an example of a `getter` use case?  b
    A. Fetching data from an API  
    B. Calculating the total price of items in a cart from the state  
    C. Clearing all state data  
    D. Logging a user out
- **✅ Correct** — Calculating total price from cart state is a classic `getter` use case.
    
5. Can Pinia `getters` depend on other `getters`?  b
    A. No  
    B. Yes, they can reference other getters within the same store  
    C. Only in strict mode  
    D. Only with async/await
    **✅ Correct** — Getters can reference other getters within the same store.
    
---
## **B. Concept Explanation**

1. Explain the role of `state` in a Pinia store and how it relates to `getters`.

state store asynchronous functions  and getters can reference other getters within the same store  using asynchronous functions.  
**❌ Incorrect** —

> **Your answer:** "state store asynchronous functions"  
> **Correct:** State is a reactive object storing raw application data. Getters read from state to produce derived values; they do not require async functions to work.

2. Describe what `getters` do in Pinia and give an example.

getters can reference other getters within the same store and  store asynchronous functions .

**❌ Incorrect** —

> **Your answer:** "getters can reference other getters... store asynchronous functions"  
> **Correct:** Getters compute derived state from `state` (and optionally other getters). They should be pure functions — they do not store async functions.
> 
3. Explain why `actions` are necessary in a Pinia store.
    
action is used to hold raw, unprocessed data.

**❌ Incorrect** —

> **Your answer:** "action is used to hold raw, unprocessed data"  
> **Correct:** Actions are functions that update the state, and they can contain async logic (like fetching data from APIs).

---
## **C. Concept Comparison**

1. Compare Pinia `getters` to Vue computed properties.

getters could fetch the data from attribute while computed properties is just compute the data.

**❌ Incorrect** —

> **Your answer:** "getters could fetch the data from attribute..."  
> **Correct:** Pinia getters are functionally the same as Vue computed properties but for store state — they auto-update when dependencies change.

2. Compare Pinia `actions` to Vue methods.

actions is base on the global management while the Vue methods is just use the function.

- **✅ Partially Correct** — Actions are global store functions; Vue methods are component-local. Both are used to perform operations, but Pinia actions often mutate store state.

3. Compare `getters` and `actions` in terms of mutating state and performance impact.
    
`getters` and `actions` have identical functionality .

**❌ Incorrect** —

> **Your answer:** "identical functionality"  
> **Correct:** Getters never mutate state and are cached until dependencies change (better performance for derived data). Actions can mutate state and are re-run whenever called.

---

Got it — I’ll turn this REST Basics mind map into a **Monica AI–ready question set** (multiple choice + concept explanation + concept comparison), with a focus on **confusion traps** so you can recall the right term under pressure. #三周目

---

## **A. Multiple Choice**

1. Which statement best describes **Statelessness** in REST?  b
    A. The server stores session data for each client request.  
    B. Each request contains all necessary context, and the server does not store session state.  
    C. Server responses can be reused by the client.  
    D. The server caches all requests for faster performance.

**✅ Correct** — Statelessness means each request carries all needed context and the server does not store session state.

2. Which REST constraint allows the client to reuse previously fetched data without contacting the server?  b
    A. Statelessness  
    B. Client-Server  
    C. Cacheability  
    D. Layered System

	1. **❌ Incorrect** —
> **Your answer:** B (Client-Server)  
> **Correct:** **C** (Cacheability)  
> **Explanation:** Cacheability is the REST constraint that allows the client to reuse previously fetched responses without contacting the server again.
    
3. Which is **NOT** a property of Cacheability in REST?  b
    A. Improves performance.  
    B. Requires ensuring data validity.  
    C. Allows client to reuse responses.  
    D. Requires the server to store client session state.

**✅ Correct** — Storing client session state is not part of Cacheability.
    
4. Which is **NOT** a property of Statelessness?  d
    A. Server keeps no client session.  
    B. Each request is independent.  
    C. Client sends all context with each request.  
    D. Server responses are stored and reused.
    
**✅ Correct** — Server responses being stored and reused describes Cacheability, not Statelessness.
    
5. If a REST API endpoint must work even when the client is offline using previously saved data, which principle is being applied?  a
    A. Statelessness  
    B. Cacheability  
    C. Client-Server  
    D. Uniform Interface

>**❌ Incorrect** —
     **Your answer:** A (Statelessness)  
> **Correct:** **B** (Cacheability)  
> **Explanation:** Working offline using previously saved data is a feature of Cacheability, not Statelessness. Statelessness is about the server not holding client session information.

---

## **B. Concept Explanation**

1. Explain **Statelessness** in REST and give one real-world example.

the Statelessness means server keeps no client session while  each request is independent.  

**✅ Correct (Partially)**    

> **Your answer:** “the Statelessness means server keeps no client session while each request is independent.”  
> **Improvement:**
> 
> - **Definition:** Statelessness means the server keeps no client session; each request from the client must contain all the information needed to understand and process it.
>     
> - **Example:** In an online store API, every `POST /checkout` request must include all cart details and user information, because the server does not remember anything from previous requests.
>

2. Explain **Cacheability** in REST and give one real-world example.

the Cacheability means client to reuse previously fetched data without contacting the server and a REST API endpoint must work even when the client is offline using previously saved data,as well as Each request is independent.  

2. **❌ Incorrect / Partially Correct** —

> **Your answer:** “the Cacheability means client to reuse previously fetched data without contacting the server and a REST API endpoint must work even when the client is offline using previously saved data, as well as Each request is independent.”  
> **Correct:**
> 
> - **Definition:** Cacheability means that server responses can be stored by clients or intermediaries and reused for future requests, reducing the need to contact the server again.
>     
> - **Key Property:** Must ensure the cached data is valid and not stale.
>     
> - **Example:** A weather API’s `GET /current-weather` could allow caching for 10 minutes so the app doesn’t request fresh data every time, improving performance.
>     
> - **Note:** “Each request is independent” is **not** a Cacheability property — that belongs to Statelessness.
>

3. Why is Cacheability considered the **opposite/confusable** concept to Statelessness?
    
the Cacheability allows the client to reuse previously fetched data without contacting the serve while Statelessness means each request carries all needed context and the server does not store session state.

4. **✅ Correct (with improvement)** —
> **Your answer:** “the Cacheability allows the client to reuse previously fetched data without contacting the server while Statelessness means each request carries all needed context and the server does not store session state.”  
> **Improvement:**
> 
> - These two can be confused because:
>     
>     - Statelessness focuses on **no server session state** (each request is self-contained).
>         
>     - Cacheability focuses on **reusing server responses** to improve performance.
>         
> - They are opposite in the sense that Statelessness treats each request independently, while Cacheability **benefits from storing past data**.
>

---

## **C. Concept Comparison**

1. Compare Statelessness and Cacheability in terms of **data storage location**.

    Statelessness let server to stroe data while the Cacheability not.
    >- **Statelessness** → Server stores **no** client session data; all context is stored **client-side** and sent with each request.
    >-   **Cacheability** → Data (responses) may be stored **client-side or in intermediaries** (like CDNs or proxy servers) for reuse.
    >- 
2. Compare Statelessness and Cacheability in terms of **performance impact**.
   Statelessness  requires the server to store client session state.

	 Cacheability is the REST constraint that allows the client to reuse previously fetched responses without contacting the server again.
>- **Statelessness** → Improves scalability because the server doesn’t maintain per-client state; however, every request must send all required data, which may increase payload size.- **Cacheability** → Improves performance by avoiding repeated processing for unchanged data; reduces latency and bandwidth usage.
>
3. Compare Statelessness and Cacheability in terms of **server load**.
       Statelessness  requires the server to store client session state.
       
	 Cacheability is the REST constraint that allows the client to reuse previously fetched responses without contacting the server again.
>- **Statelessness** → Reduces server memory usage because no session data is stored; each request is handled independently.- **Cacheability** → Reduces server CPU and network load by serving cached responses instead of reprocessing identical requests.
>
---

## **A. Multiple Choice** #三周目

1. In REST, what does **Statelessness** mean?  b
    A. The server saves a session for each client  
    B. The server processes requests without storing any client session data  
    C. The server stores data in memory for faster retrieval  
    D. The server caches all client requests
    ✅ **B** — The server processes requests without storing any client session data.  
_Statelessness means every request is independent; the server does not hold previous session state._

2. Which of the following is a **key property** of Statelessness?  b
    A. Server stores minimal data in cookies  
    B. Client sends all necessary context with every request  
    C. Server reuses the last request’s data for the next one  
    D. Client caches responses locally
✅ **B** — Client sends all necessary context with every request.  
_Without server-side session storage, all context must come with each request._

3. **Cacheability** in REST improves performance by:  c -A
    A. Allowing clients or intermediaries to store and reuse responses  
    B. Forcing every request to be processed fresh by the server  
    C. Storing client session data  
    D. Avoiding data validity checks
❌ **A** — Allowing clients or intermediaries to store and reuse responses.  
_Cacheability lets responses be stored locally or by intermediaries, reducing server load and improving speed._

4. Which statement is **NOT true** about Cacheability in REST?  d -c
    A. Cached data must be validated for accuracy  
    B. It improves performance by reducing redundant requests  
    C. It eliminates the need for HTTP headers  
    D. It can be implemented at the client or intermediary
    ❌ **C** — It eliminates the need for HTTP headers.  
_HTTP headers (like `Cache-Control`, `ETag`, `Expires`) are actually essential for implementing cacheability._

5. If a REST API endpoint is designed so the client can send a request without relying on any prior server memory of that client, which constraint is being applied?  b
    A. Cacheability  
    B. Statelessness  
    C. Layered System  
    D. Client-Server
    
6. If an API uses **ETags** and `Cache-Control` headers to allow browsers to reuse unchanged resources, which REST constraint is this an example of?  b
    A. Statelessness  
    B. Cacheability  
    C. Uniform Interface  
    D. Layered System
    ✅ **B** — Cacheability.  
_Those headers are part of HTTP’s caching mechanism to enable Cacheability in REST._

---

## **B. Concept Explanation**

1. Explain **Statelessness** in REST and why it benefits scalability.
    Statelessness don't store the data from server so that it could deliver information from client to others.
>**❌ Incorrect / Incomplete**  
**Correct:**
> Statelessness means the server keeps **no client session data** between requests; each request contains all necessary context.  
> **Scalability benefit:** Since no session data needs to be stored server-side, requests can be handled by **any available server instance**, enabling horizontal scaling and reducing memory overhead.
>
2. Explain **Cacheability** in REST and how it can reduce server load.
    Cacheability could store client session data.
    >**❌ Incorrect** — Cacheability is **not** about storing client session data.  
**Correct:**
> Cacheability means responses from the server can be **stored and reused** by clients or intermediaries if marked as cacheable.  
> **Performance benefit:** Reduces the number of identical requests hitting the server, which lowers server load and improves response time.
>
3. Why might **Cacheability** be confused with **Statelessness**?
    both of them could exchange data from server to client.
>**❌ Incorrect** — This is too vague and misses the key distinction.  
**Correct:**
> They can be confused because **both involve client-side responsibility**:
> 
> - In Statelessness, the client must send all context on each request.
>     
> - In Cacheability, the client (or intermediary) may reuse stored responses instead of re-requesting them.  
>     The confusion comes from both shifting part of the workload away from the server.
>
>
4. Give an example of an HTTP header that supports **Cacheability** and explain how it works.
     Cacheability let an API uses **ETags** and `Cache-Control` headers to allow browsers to reuse unchanged resources
>**Correct / Expanded:**
> Example: `Cache-Control: max-age=3600` tells clients and intermediaries they can reuse the cached response for 1 hour without revalidating.  
> Example: `ETag: "abc123"` lets the client send `If-None-Match: "abc123"` on the next request; if unchanged, the server responds with `304 Not Modified` instead of sending the whole resource.
>
5. Give a real-world analogy for **Statelessness** that illustrates client responsibility in sending context.
    the server processes requests without storing any client session data  
>**❌ Too technical — needs an analogy.**  
**Correct / Example analogy:**
> **Analogy:** Ordering coffee at a shop where the barista does not remember you — each time, you must tell them your exact order, size, milk preference, and name. The shop keeps no record of past orders (like a stateless server).
---

## **C. Concept Comparison**

1. Compare **Statelessness** and **Cacheability** in REST in terms of:
    
    - What they control (request vs response)
        >the Statelessness will send the request to the client and not fetch the response while Cacheability help server to store the data  
        >**❌ Incorrect** — both descriptions are off.  
**Correct:**
>- **Statelessness** controls **requests** — each request from client → server must include all necessary context; server keeps no session state.
    - **Cacheability** controls **responses** — specifies if/how the response can be stored and reused by client or intermediaries.

    - Where data is stored
        >for Statelessness,the data is stored in the request when sendinng to the client while Cacheability stores the data in the server for each context
        >**❌ Incorrect** — Cacheability storage location is wrong.  
**Correct:**

- **Statelessness**: The _client_ stores any state/context it needs and sends it with each request (in headers, body, params, etc.).
    
- **Cacheability**: The _client_ or _intermediary_ (like a CDN) stores the cached **responses**, not the server.

    - How they affect performance
        >Statelessness is more scalability than the Cacheability because it couldn't store the data on the client while the Cacheability is more mutable.
  >      
>        **❌ Incorrect** — You mixed up client storage and scalability.  
**Correct:**- **Statelessness**: Improves scalability (server doesn’t need to keep session info; any server node can handle any request).  
>- **Cacheability**: Improves performance (reduces latency & server load by reusing stored responses).
        
2. Compare **Cache-Control** headers with the **ETag** mechanism for Cacheability.
    >Cacheability will let API uses **ETags** and `Cache-Control` headers to allow browsers to reuse unchanged resources
    >**✅ Partially correct** — needs distinction.  
**Correct:**>
>- **Cache-Control**: Instructs how/when a response can be cached (e.g., `Cache-Control: max-age=3600` for 1-hour freshness).
  >  >- **ETag**: Provides a unique identifier (hash) for a resource version; client sends `If-None-Match` to check freshness. If unchanged, server replies `304 Not Modified` without resending data.
    
    
3. Compare the client’s responsibilities in a Stateless API vs a Stateful API.
    >Stateless API will send contest and request to client while  Stateful API just deliver data to server.
    >**❌ Incorrect** — Wording is unclear & reversed.  
**Correct:**
>- **Stateless API**: Client must store any necessary context and send it **with each request**.
>- **Stateful API**: Server stores client session data, so client doesn’t need to send all context each time.
>
4. Compare the potential downsides of using Cacheability vs not using it.
    >Cacheability is usful for static part like the HTML which will be more mutable.
    >**❌ Incorrect** — “mutable” here is the opposite of what caching is about.  
**Correct:**
>- **Using Cacheability**: Risk of serving stale/invalid data if not revalidated.  
>- **Not using Cacheability**: Every request hits the server → higher latency & server load.

5. Contrast how Statelessness and Cacheability each contribute to REST API performance.
    >a REST API endpoint is designed so the client can send a request without relying on any prior server memory of that client for Statelessness,while Cacheability just let the client (or intermediary) reuse stored responses instead of re-requesting them.  

---
好，我会基于你整理的 **Lecture 2 – Vue.js Fundamentals & Data Binding** 内容出一套题，分成 **选择题、多选题、概念辨析、简答题** 四种题型，方便你导入做训练。 #三周目

---

## **A. Multiple Choice（单选题）**

1. In Vue 3 Composition API, what does `ref()` return?  b
    A. A plain JavaScript object  
    B. A reactive wrapper object with a `.value` property  
    C. A DOM element reference only  
    D. A function to update the DOM
    
2. Which binding method in Vue flows **data only from JavaScript → HTML**?  d
    A. `v-model`  
    B. `v-on`  
    C. One-way binding (`v-bind`)  
    D. `v-show`
    **❌ Incorrect**  
**Your answer:** D (`v-show`)  
**Correct:** **C —** One‑way binding via `v-bind`.  
**Why:** `v-bind` sets DOM attributes from state (one‑way). `v-show` merely toggles visibility.

3. Which Vue directive is used for **two-way data binding**?  c
    A. `v-bind`  
    B. `v-if`  
    C. `v-model`  
    D. `v-show`
    
4. When using `v-show` to hide an element, what happens in the DOM?  b
    A. The element is removed entirely  
    B. The element stays in the DOM but has `display: none` applied  
    C. The element is replaced with a comment node  
    D. The element is re-rendered from scratch each time
    
5. In Vue, which directive listens for DOM events?  a
    A. `v-show`  
    B. `v-bind`  
    C. `v-on`  
    D. `v-model`
    **❌ Incorrect**  
**Your answer:** A (`v-show`)  
**Correct:** **C —** `v-on` (shorthand `@`).  
**Why:** `v-on:click="handler"` binds event listeners; `v-show` is not for events.

---
## **B. Multiple Select（多选题）**

6. Which of the following are **characteristics of two-way binding** in Vue?  a,b 
    ☐ Changes in the UI update JavaScript state  
    ☐ Changes in JavaScript state update the UI  
    ☐ It’s implemented with `v-bind` only  
    ☐ It’s implemented with both `v-bind` and `v-on` under the hood
    
    >6. **Characteristics of two‑way binding in Vue?** — **a, b**  
    **❌ Incomplete**  
    **Your answer:** A, B  
    **Correct:** **A, B, D**
    >- **A** UI changes update JS state. ✅
    - **B** JS state changes update UI. ✅
    - **D** Implemented via `v-bind` + `v-on` under the hood. ✅
    - **C** “`v-bind` only” ❌
    
7. Which of the following are **true about `ref` in Vue**?  a,b
    ☐ Used to create a reactive wrapper for primitive values  
    ☐ Access the value with `.value` in JavaScript  
    ☐ Automatically unwraps when used in a template  
    ☐ Only works with objects, not primitive types
    
    >7. **❌ Incomplete**  
    **Your answer:** A, B  
    **Correct:** **A, B, C**
    - **A** Wraps primitives reactively. ✅
    - **B** Access via `.value` in JS. ✅
    - **C** Auto‑unwraps in templates. ✅
    - “Only works with objects” ❌

---
## **C. Concept Comparison（概念辨析）**

8. Compare **`v-show`** and **`v-if`** in terms of DOM behavior and performance.
    v-show will act the placeholder while the v-if just juge.

- **v-show**: Always renders the element in the DOM but toggles visibility by applying `display: none`. Faster toggle performance because the DOM structure is not recreated, but initial render cost still applies even if hidden.
    
- **v-if**: Adds or removes the element from the DOM entirely based on the condition. Avoids rendering when not needed (better for rarely toggled elements), but slower to toggle because of DOM creation/destruction.
- 
9. Compare **one-way binding** and **two-way binding** in terms of data flow and typical use cases.
	 one-way binding will send the data from 

	- **One-way binding (`v-bind`)**: Data flows **from component state → DOM** only. Used for setting attributes, text, or styles that change when state changes, but do not update state when the user interacts.
	    
	- **Two-way binding (`v-model`)**: Data flows **both ways** — state updates the UI, and UI changes update the state. Commonly used in form controls like `<input>`, `<select>`, and `<textarea>`.
10. Compare **`ref`** and **`reactive`** in Vue for handling reactivity.
    ref will send the reference while the reactive 

- **`ref()`**: Creates a reactive wrapper object for **primitive values** (strings, numbers, booleans) or for a single object reference. Access/change value via `.value` in JavaScript. Automatically unwrapped in templates.
    
- **`reactive()`**: Makes an **entire object** (and its nested properties) deeply reactive. No `.value` is needed; you can read/write properties directly.
---
## **D. Short Answer（简答题）**

11. Explain what happens when you update `cart.value` if `cart` is created using `ref(0)`.
    
12. Give one real-world example of when you would use **`v-on`** in a form.
    
13. Why might `v-show` be preferred over `v-if` for toggling visibility in a frequently shown/hidden UI element?

---
Got it — here’s a **Lecture 2 Data Binding & Directives** review set in English, based on your listed points and the corresponding slide content.  
I’ve included **multiple choice**, **multiple select**, and **short answer** for mixed recall.

---

## **A. Multiple Choice** (Single Answer)

1. In Vue, which directive is used for **two-way binding** between a form field and component state?  c
    A. `v-bind`  
    B. `v-show`  
    C. `v-model`  
    D. `v-on`
    
2. Which directive would you use for **one-way binding** from JavaScript state to an HTML attribute?  b
    A. `v-model`  
    B. `v-bind`  
    C. `v-if`  
    D. `v-for`
    
3. When using `v-show` to hide an element, what happens in the DOM?  b
    A. The element is completely removed from the DOM  
    B. The element remains, but `display: none` is applied  
    C. It replaces the element with a comment node  
    D. It triggers a full component re-render
    
4. Which directive is used to render a list of items in Vue?  b
    A. `v-if`  
    B. `v-for`  
    C. `v-model`  
    D. `v-bind`
    
5. If you want to conditionally render an element so that it is **not created at all** when the condition is false, which directive should you use?  b
    A. `v-show`  
    B. `v-if`  
    C. `v-bind`  
    D. `v-on`

---
## **B. Multiple Select** (Choose all that apply)

6. Which of the following are **true about `v-model`**?  b,d
    ☐ It is shorthand for `v-bind:value` + `v-on:input` (or similar event)  
    ☐ It provides two-way data binding between state and UI  
    ☐ It works only with `<input type="text">` elements  
    ☐ It updates both the DOM and the underlying data when the user changes the value
>Your answer: **B, D** ❌ **Partially correct**
- **Correct answers:** **A, B, D**
    
    - **A:** ✅ `v-model` is shorthand for `v-bind:value` + `v-on:input` (or another relevant event, depending on the element).
        
    - **B:** ✅ It provides two-way binding between state and UI.
        
    - **C:** ❌ It works with many input types, selects, textareas, and even custom components, not just `<input type="text">`.
        
    - **D:** ✅ It updates both DOM and underlying data when the value changes.
    - 
7. Which directives are **used for conditional rendering or visibility control**?  d
    ☐ `v-if`  
    ☐ `v-else`  
    ☐ `v-for`  
    ☐ `v-show`
    
Your answer: **D** ❌ **Incorrect**

- **Correct answers:** **A, B, D**
    
    - **A:** ✅ `v-if` is for conditional rendering.
        
    - **B:** ✅ `v-else` is for the alternative branch of `v-if`.
        
    - **C:** ❌ `v-for` is for list rendering, not visibility control.
        
    - **D:** ✅ `v-show` is for toggling element visibility without removing it from the DOM.
---

## **C. Short Answer**

8. Explain the main difference between **`v-if`** and **`v-show`** in terms of DOM behavior and performance.
    
9. Write a Vue template snippet that:
    
    - Renders a list of `users` with their names using `v-for`
        
    - Shows “No users available” using `v-else` when the list is empty
        
10. In what situations would **`v-bind`** be preferred over `v-model`? Give an example.
    

---

If you want, I can also prepare **trap questions** for these topics — designed to mix similar directives so you’re forced to recall the precise differences under time pressure.  
Do you want me to make that version next?
