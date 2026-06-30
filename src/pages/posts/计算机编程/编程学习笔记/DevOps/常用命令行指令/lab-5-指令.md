---
layout: ../../../../../../layouts/PostLayout.astro
title: lab 5 指令
description: 📌 Explanation of Commands Used in the Images This guide provides a
  step by step explanation of all Linux and Git comman
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/DevOps/常用命令行指令
---

### **📌 Explanation of Commands Used in the Images**

This guide provides a step-by-step explanation of all **Linux and Git commands** required for the lab.

---

## **✅ 1. Directory Navigation Commands (`cd`)**

### **Commands:**

```sh
cd .      # Stays in the current directory
cd ..     # Moves to the parent directory
cd ~      # Moves to the home directory
cd /      # Moves to the root directory
cd $      # Moves to the last working directory (depends on environment variable)
```

📌 **Explanation:**

- `cd .` → Does nothing, remains in the same directory.
- `cd ..` → Moves up one level in the directory hierarchy.
- `cd ~` → Moves to the user’s home directory (`/home/username`).
- `cd /` → Moves to the root directory (`/`).
- `cd $` → If `$OLDPWD` is set, it moves to the previous directory.

---

## **✅ 2. Creating and Managing Directories**

### **Commands:**

```sh
mkdir 953234       # Creates a directory named "953234"
mkdir -p 953234/task01  # Creates a directory "task01" inside "953234"
```

📌 **Explanation:**

- `mkdir` → Creates a new directory.
- `-p` → Creates a directory and its parent directories if they don’t exist.

---

## **✅ 3. Downloading Files (`wget`)**

### **Commands:**

```sh
wget https://raw.githubusercontent.com/fivethirtyeight/data/master/most-common-name/new-top-firstNames.csv -O file1.csv
wget https://raw.githubusercontent.com/fivethirtyeight/data/master/most-common-name/new-top-surnames.csv -O file2.csv
```

📌 **Explanation:**

- `wget` → Downloads a file from a given URL.
- `-O` → Saves the downloaded file with a specified name.

---

## **✅ 4. Listing Files (`ls`)**

### **Commands:**

```sh
ls        # Lists files in the current directory
ls -alt   # Lists all files, including hidden ones, sorted by modification time
```

📌 **Explanation:**

- `ls` → Shows file names in the current directory.
- `-a` → Includes hidden files.
- `-l` → Displays detailed information (permissions, owner, size, etc.).
- `-t` → Sorts files by modification time.

---

## **✅ 5. Changing File Permissions (`chmod`)**

### **Commands:**

```sh
chmod 400 file2.csv  # Sets read-only permission for everyone
```

📌 **Explanation:**

- `400` → File is **read-only** for the owner, **no permissions** for others.

---

## **✅ 6. Removing Files (`rm`)**

### **Commands:**

```sh
rm file1.csv file2.csv  # Deletes the specified files
```

📌 **Explanation:**

- `rm` → Deletes a file.
- If **permission denied**, use `sudo rm file1.csv`.

---

## **✅ 7. Viewing File Content**

### **Commands:**

```sh
cat name.csv        # Displays the full content of the file
more name.csv       # Displays content page by page
head name.csv       # Shows the first 10 lines of the file
tail name.csv       # Shows the last 10 lines of the file
wc name.csv         # Shows the number of lines, words, and characters
```

📌 **Explanation:**

- `cat` → Displays the entire file.
- `more` → Similar to `cat`, but allows scrolling.
- `head` → Shows the first 10 lines.
- `tail` → Shows the last 10 lines.
- `wc` → Counts lines, words, and characters.

---

## **✅ 8. Viewing Environment Variables**

### **Commands:**

```sh
echo $PATH         # Displays the system path variable
man which          # Shows documentation for "which" command
which ls           # Displays the absolute path of the "ls" command
which man          # Displays the absolute path of the "man" command
```

📌 **Explanation:**

- `$PATH` → Lists directories where executables are stored.
- `which <command>` → Finds the absolute path of a command.

---

## **✅ 9. Networking Commands**

### **Commands:**

```sh
ifconfig            # Displays IP and network interfaces (use `ip a` if unavailable)
nslookup www.google.com  # Finds the IP address of a domain
ping google.com     # Sends packets to check network connectivity
traceroute google.com  # Shows the route packets take to reach a destination
netstat -n         # Displays active network connections numerically
```

📌 **Explanation:**

- `ifconfig` → Shows network configurations.
- `nslookup` → Gets the IP address of a domain.
- `ping` → Checks if a host is reachable.
- `traceroute` → Displays the path packets take.
- `netstat -n` → Displays active network connections.

---

## **✅ 10. System Monitoring Commands**

### **Commands:**

```sh
top                # Shows real-time CPU & memory usage
htop               # An enhanced version of `top` (requires installation)
```

📌 **Explanation:**

- `top` → Monitors system performance.
- `htop` → More interactive version of `top`.

---

## **🎯 Final Summary**

|**Category**|**Commands**|
|---|---|
|**Navigation**|`cd .`, `cd ..`, `cd ~`, `cd /`, `cd $`|
|**Directories**|`mkdir <dir-name>`, `mkdir -p <dir1/dir2>`|
|**Downloading Files**|`wget <URL> -O <filename>`|
|**Listing Files**|`ls`, `ls -alt`|
|**Permissions**|`chmod 400 <file>`|
|**File Operations**|`rm <file>`, `cat <file>`, `more <file>`, `head <file>`, `tail <file>`|
|**Networking**|`ifconfig`, `nslookup`, `ping`, `traceroute`, `netstat -n`|
|**Monitoring**|`top`, `htop`|
|**Environment Variables**|`echo $PATH`, `which <command>`|

🚀 **Follow these steps to complete your lab tasks efficiently!** If you have any questions, feel free to ask. 💡
