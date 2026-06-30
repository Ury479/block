---
layout: ../../../../../../layouts/PostLayout.astro
title: DevOps lab
description: 📌 Step by Step Guide for Exam Questions This guide will walk you
  through all 16 exam questions , covering Git, GitHub,
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 4
sourceFolder: 计算机编程/编程学习笔记/DevOps/常用命令行指令
---

### **📌 Step-by-Step Guide for Exam Questions**

This guide will walk you through all **16 exam questions**, covering **Git, GitHub, Linux commands, and system administration**.

---

## **✅ 1. Create a repository on your own computer**

**Command:**

```sh
git init my-repo
cd my-repo
```

📌 **Explanation:**

- `git init my-repo` → Creates a local Git repository named **my-repo**
- `cd my-repo` → Navigates into the repository

---

## **✅ 2. Create a repository on GitHub**

**Steps:**

1. Go to [GitHub](https://github.com/)
2. Click on **New Repository**
3. Name your repository (e.g., `exam-repo`)
4. Select **Public or Private**
5. Click **Create Repository**
6. Copy the repository URL

Now, link your local repository to GitHub:

```sh
git remote add origin <your-repo-URL>
git branch -M main
git push -u origin main
```

---

## **✅ 3. Open a repository, add a new file, and push the code**

```sh
cd my-repo
echo "Hello, world!" > hello.txt
git add hello.txt
git commit -m "Added hello.txt"
git push origin main
```

📌 **Explanation:**

- `echo "Hello, world!" > hello.txt` → Creates a new file
- `git add hello.txt` → Stages the file
- `git commit -m "Added hello.txt"` → Commits the changes
- `git push origin main` → Pushes changes to GitHub

---

## **✅ 4. Create a new branch**

```sh
git checkout -b feature-branch
git push origin feature-branch
```

📌 **Explanation:**

- `git checkout -b feature-branch` → Creates and switches to a new branch
- `git push origin feature-branch` → Pushes the branch to GitHub

---

## **✅ 5. Create a tag and push it to the remote repository**

```sh
git tag v1.0
git push origin v1.0
```

📌 **Explanation:**

- `git tag v1.0` → Creates a version tag `v1.0`
- `git push origin v1.0` → Pushes the tag to GitHub

---

## **✅ 6. Create an issue and convert it to a task**

**Steps:**

1. Go to your **GitHub repository** → Click **Issues**
2. Click **New Issue**
3. Set **Title:** `Fix Homepage Layout`
4. Set **Description:** `The homepage layout is broken`
5. Click **Submit New Issue**
6. Click **Convert to Task** (Available in GitHub Projects)

---

## **✅ 7. Create a task and assign it to yourself**

**Steps:**

1. Open the **GitHub repository**
2. Go to **Projects** → Select an existing project or create a new one
3. Click **+ New Task**
4. Enter the task name (e.g., `Update Readme`)
5. Click **Assign** → Select **your GitHub username**

---

## **✅ 8. Create a "todo" tag for the issue**

**Steps:**

6. Open the **GitHub Issue**
7. Click **Labels**
8. Create a new label **todo**
9. Click **Save**

---

## **✅ 9. Change the commit message of the previous commit**

```sh
git commit --amend -m "New commit message"
git push origin main --force
```

📌 **Explanation:**

- `git commit --amend -m "New commit message"` → Edits the last commit message
- `git push origin main --force` → Pushes the amended commit to GitHub (force push required)

---

## **✅ 10. Change the commit message for an older commit**

```sh
git rebase -i HEAD~3
```

📌 **Explanation:**

- Replace `3` with the number of commits you want to modify
- Change `pick` to `reword`
- Save and close
- Enter new commit message
- Continue with:
    
    ```sh
    git rebase --continue
    git push origin main --force
    ```
    

---

## **✅ 11. Create a new project in GitHub and add a "design" column**

**Steps:**

10. Open **GitHub repository**
11. Click **Projects** → **New Project**
12. Name the project **UI Updates**
13. Click **+ Add Column**
14. Name the column **Design**
15. Click **Save**

---

## **✅ 12. Move to `/var` folder and return to home folder**

```sh
cd /var
cd ~  # or use cd /home/your-username
```

📌 **Explanation:**

- `cd /var` → Moves to `/var`
- `cd ~` → Returns to home directory

---

## **✅ 13. Change the file permission to `444`**

```sh
chmod 444 filename.txt
```

📌 **Explanation:**

- `444` → Read-only permission for all users

---

## **✅ 14. Show the last 10 lines of `name.csv`**

```sh
tail -n 10 name.csv
```

📌 **Explanation:**

- `tail -n 10` → Displays the last **10 lines** of the file

---

## **✅ 15. Show the path environment variable**

```sh
echo $PATH
```

📌 **Explanation:**

- `$PATH` stores system paths where executable files are located

---

## **✅ 16. Show CPU usage**

```sh
top
```

📌 **Explanation:**

- `top` → Displays real-time CPU usage

**Alternative:**

```sh
htop  # More detailed interactive view (install with `sudo apt install htop`)
```

---

## **🎯 Final Summary**

|**Task**|**Command/Steps**|
|---|---|
|**1. Create local Git repo**|`git init my-repo && cd my-repo`|
|**2. Create GitHub repo**|GitHub UI → `git remote add origin <repo>`|
|**3. Add file & push to GitHub**|`echo "Hello" > hello.txt && git add . && git commit -m "Added hello.txt" && git push origin main`|
|**4. Create branch**|`git checkout -b feature-branch && git push origin feature-branch`|
|**5. Create & push tag**|`git tag v1.0 && git push origin v1.0`|
|**6. Create & convert issue to task**|GitHub UI (`Issues` → `New Issue` → `Convert to Task`)|
|**7. Assign task to yourself**|GitHub UI (`Projects` → `New Task` → Assign yourself)|
|**8. Add "todo" tag to issue**|GitHub UI (`Labels` → Create Label `todo`)|
|**9. Change last commit message**|`git commit --amend -m "New message" && git push --force`|
|**10. Change older commit message**|`git rebase -i HEAD~N && git push --force`|
|**11. Create GitHub project column**|GitHub UI (`Projects` → Add Column `Design`)|
|**12. Move to `/var` and return**|`cd /var && cd ~`|
|**13. Change file permission to `444`**|`chmod 444 filename.txt`|
|**14. Show last 10 lines of file**|`tail -n 10 name.csv`|
|**15. Show PATH variable**|`echo $PATH`|
|**16. Show CPU usage**|`top`|

🚀 **Follow these steps to complete your exam tasks successfully! If you need further help, feel free to ask!** 💡
