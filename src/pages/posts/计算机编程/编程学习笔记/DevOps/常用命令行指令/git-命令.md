---
layout: ../../../../../../layouts/PostLayout.astro
title: git 命令
description: 🚀 总结 | 操作 | 命令 | | | | | 克隆仓库 | git clone <repo url | | 创建
  development 分支 | git checkout b development | | 创建 profile.h
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/DevOps/常用命令行指令
---

## **🚀 总结**
![Pasted image 20250301071721.png](/media/57455e732d78a5d5.png)

| **操作**                  | **命令**                                        |
| ----------------------- | --------------------------------------------- |
| **克隆仓库**                | `git clone <repo-url>`                        |
| **创建 `development` 分支** | `git checkout -b development`                 |
| **创建 `profile.html`**   | `touch profile.html`                          |
| **创建新功能分支**             | `git checkout -b feature:setup-profile-page`  |
| **提交修改**                | `git add . && git commit -m "message"`        |
| **推送分支到 GitHub**        | `git push origin <branch-name>`               |
| **创建发布分支**              | `git checkout -b release-v1.0 development`    |
| **合并到 `main` 进行发布**     | `git checkout main && git merge release-v1.0` |
| **启用 GitHub Pages**     | `Settings -> Pages -> 选择 main 分支`             |
## **🎯 总结**

|**操作**|**Git 指令**|
|---|---|
|修改最近的 commit|`git commit --amend -m "new text."`|
|修改更早的 commit|`git rebase -i HEAD~N`|
|处理 Rebase 冲突|`git rebase --continue`|
|合并分支|`git merge feature-branch`|
|解决合并冲突|`git commit -m "Resolved merge conflict"`|
|GitHub Pages 部署|`Settings → Pages → 选择 main 分支`|
|查看 Git 历史|`git log --oneline --graph --all`|

🚀 **按照这些步骤，你可以高效管理 Git 版本、修改 commit、合并分支并发布网站！** 如果有任何问题，欢迎继续提问！💡
## **🎯 总结**

| **操作**              | **Git 指令**                            |
| ------------------- | ------------------------------------- |
| **修改最近的 commit**    | `git commit --amend -m "new message"` |
| **修改历史 commit**     | `git rebase -i HEAD~N`                |
| **删除错误的 commit**    | `git reset --hard <commit-hash>`      |
| **强制推送**            | `git push origin branch-name --force` |
| **查看 Git 历史**       | `git log --oneline --graph --all`     |
| **创建 GitHub Issue** | `GitHub → Issues → New Issue`         |

🚀 **按照这些步骤，你可以高效管理 Git 版本，并在 GitHub 创建 Issue！** 如果有任何问题，欢迎继续提问！💡
