---
layout: ../../../../../../../layouts/PostLayout.astro
title: kotlin 基础
description: "main 方法 在 Kotlin 中， args: Array<String 是 main 函数的参数，用于接收命令行传递的参数。
  args: Array<String 表示一个字符串数组（ Array<String ），它用于存储运行程序"
date: 2025-09-19T08:39:43.127Z
updated: 2025-09-19T09:31:17.819Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/移动端开发/kotlin/学习笔记
---

## main 方法
在 Kotlin 中，`args: Array<String>` 是 `main` 函数的参数，用于接收命令行传递的参数。

---
`args: Array<String>` 表示一个字符串数组（`Array<String>`），它用于存储运行程序时通过命令行传递的参数。例如，当你运行一个 Kotlin 程序时，可以在命令行中传递参数，这些参数会被自动存储到 `args` 中。

---

### 示例代码：

以下是一个简单的示例，展示如何使用 `args`：

复制

```
fun main(args: Array<String>) { 
	println("Number of arguments: ${args.size}") // 打印参数数量     println("Arguments: ${args.joinToString(", ")}") // 打印所有参数 
	}
```

## 数组声明
在 Kotlin 中，`args: Array<String>` 是 `main` 函数的参数，用于接收命令行传递的参数。

## 函数
1. **函数功能解释：**
    - `txt.indexOf("locate")`：返回字符串中子字符串 `"locate"` 第一次出现的索引位置。
    - `txt.compareTo(txt2)`：比较两个字符串的大小，返回一个整数值，表示它们的字典顺序关系。
2. 条件判断：
	1. `when` 对应 java 中的`switch` 条件判断
