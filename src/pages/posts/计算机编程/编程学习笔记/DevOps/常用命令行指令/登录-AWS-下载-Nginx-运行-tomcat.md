---
layout: ../../../../../../layouts/PostLayout.astro
title: 登录 AWS 下载 Nginx 运行 tomcat
description: 🎯 最终总结 | 步骤 | 命令 | 作用 | | | | | | 1. 设置 SSH 密钥权限 | chmod 400 "4
  key.pem" | 确保 SSH 密钥可用 | | 2. 连接 EC2 服务器 | ssh i "4 key
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 6
sourceFolder: 计算机编程/编程学习笔记/DevOps/常用命令行指令
---

## **🎯 最终总结**

| **步骤**                         | **命令**                                                                                     | **作用**                     |
| ------------------------------ | ------------------------------------------------------------------------------------------ | -------------------------- |
| **1. 设置 SSH 密钥权限**             | `chmod 400 "4_key.pem"`                                                                    | 确保 SSH 密钥可用                |
| **2. 连接 EC2 服务器**              | `ssh -i "4_key.pem" ubuntu@your-ec2-public-ip`                                             | 远程登录服务器                    |
| **3. 更新软件包**                   | `sudo apt update`                                                                          | 更新系统                       |
| **4. 创建 Tomcat 用户**            | `sudo useradd -m -d /opt/tomcat -U -s /bin/false tomcat`                                   | 创建 Tomcat 专用用户             |
| **5. 下载 Tomcat**               | `wget https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.34/bin/apache-tomcat-10.1.34.tar.gz` | 获取 Tomcat 安装包              |
| **6. 解压 Tomcat**               | `sudo tar -xzf apache-tomcat-10.1.34.tar.gz -C /opt/tomcat --strip-components=1`           | 安装 Tomcat                  |
| **7. 设置 Tomcat 目录权限**          | `sudo chown -R tomcat:tomcat /opt/tomcat`                                                  | 修改 Tomcat 目录归属             |
| **8. 安装 Java**                 | `sudo apt install openjdk-11-jdk -y`                                                       | 安装 Java 运行环境               |
| **9. 配置 Java 环境变量**            | `sudo nano /etc/environment`                                                               | 让 Java 可用                  |
| **10. 配置 Tomcat `systemd` 服务** | `sudo nano /etc/systemd/system/tomcat.service`                                             | 让 Tomcat 作为 `systemd` 服务运行 |
| **11. 启动 Tomcat**              | `sudo systemctl start tomcat`                                                              | 启动 Tomcat                  |
| **12. 检查 Tomcat 状态**           | `sudo systemctl status tomcat`                                                             | 确保 Tomcat 正常运行             |
### **📌 以上指令的作用：在 Linux 服务器上安装和配置 Apache Tomcat**

这些指令是用于在 **Ubuntu Linux 服务器** 上安装 **Apache Tomcat**（一个用于运行 Java Web 应用的服务器），同时配置环境变量、权限和 `systemd` 服务管理。  
下面是每个指令的详细讲解：

---

## **✅ 1. 设置 SSH 密钥权限**

```sh
chmod 400 "/Users/ury/Downloads/4_key.pem"
```

📌 **作用：**

- 这个命令用于 **设置 SSH 私钥的权限**，防止其他用户访问它。
- **SSH 密钥需要 `400` 权限**，否则 SSH 连接可能会被拒绝。

---

## **✅ 2. 连接 EC2 服务器**

```sh
ssh -i "/Users/ury/Downloads/4_key.pem" ubuntu@<your-ec2-public-dns>
```

📌 **作用：**

- 使用 **SSH 密钥** 连接到远程服务器（EC2）。
- `<your-ec2-public-dns>` **是你的 EC2 服务器的公网地址**，示例：
    
    ```sh
    ssh -i "/Users/ury/Downloads/4_key.pem" ubuntu@ec2-44-203-142-249.compute-1.amazonaws.com
    ```
    

---

## **✅ 3. 更新系统软件包**

```sh
sudo apt update
```

📌 **作用：**

- **更新 Ubuntu 软件包列表**，确保安装的是最新版本的软件。

---

## **✅ 4. 创建 Tomcat 用户**

```sh
sudo useradd -m -d /opt/tomcat -U -s /bin/false tomcat
```

📌 **作用：**

- 创建一个名为 `tomcat` 的 Linux **系统用户**，用于运行 Tomcat 服务器。
- 选项解释：
    - `-m` 👉 自动创建 `/opt/tomcat` 目录
    - `-d /opt/tomcat` 👉 设置 `tomcat` 用户的主目录
    - `-U` 👉 为 `tomcat` 用户创建 **同名用户组**
    - `-s /bin/false` 👉 禁止 `tomcat` 用户通过 SSH 登录

---

## **✅ 5. 下载 Apache Tomcat**

```sh
cd /tmp
wget https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.34/bin/apache-tomcat-10.1.34.tar.gz
```

📌 **作用：**

- 切换到 `/tmp` 目录，并下载 **Tomcat 10.1.34** 版本的压缩包。

---

## **✅ 6. 解压 Tomcat**

```sh
sudo mkdir -p /opt/tomcat
sudo tar -xzf apache-tomcat-10.1.34.tar.gz -C /opt/tomcat --strip-components=1
```

📌 **作用：**

- **创建 Tomcat 安装目录** `/opt/tomcat`
- **解压 Tomcat 压缩包** 到 `/opt/tomcat`
- `--strip-components=1` 👉 只解压 `apache-tomcat-10.1.34/` 目录内部的文件，去掉最外层文件夹

---

## **✅ 7. 修改 Tomcat 目录权限**

```sh
sudo chown -R tomcat:tomcat /opt/tomcat
sudo chmod -R u+x /opt/tomcat/bin
```

📌 **作用：**

- **修改 Tomcat 目录的所有者** 为 `tomcat` 用户
- **给 `bin/` 目录下的所有脚本** (`.sh` 文件) 添加执行权限

---

## **✅ 8. 安装 Java**

```sh
sudo apt install openjdk-11-jdk -y
```

📌 **作用：**

- **安装 OpenJDK 11**，因为 Tomcat 需要 Java 运行环境（JRE）。

---

## **✅ 9. 配置 Java 环境变量**

```sh
sudo nano /etc/environment
```

📌 **作用：**

- **编辑系统环境变量**，在文件里添加：
    
    ```sh
    JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"
    ```
    
- 让 Java 相关工具（如 `javac`、`java`）可用。

然后执行：

```sh
source /etc/environment
echo $JAVA_HOME
```

📌 **作用：**

- **使环境变量生效**
- **检查 `JAVA_HOME` 是否正确配置**

---

## **✅ 10. 创建 `systemd` 服务**

```sh
sudo nano /etc/systemd/system/tomcat.service
```

📌 **作用：**

- 创建 `systemd` 配置文件，让 Tomcat **以服务的方式运行**。

在 `tomcat.service` 中添加：

```ini
[Unit]
Description=Apache Tomcat Application Server
After=network.target

[Service]
Type=forking
User=tomcat
Group=tomcat
Environment="JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64"
Environment="CATALINA_HOME=/opt/tomcat"
ExecStart=/opt/tomcat/bin/startup.sh
ExecStop=/opt/tomcat/bin/shutdown.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

📌 **作用：**

- **定义 Tomcat 作为 `systemd` 服务启动**
- **设置 Tomcat 的环境变量**
- **指定 Tomcat 启动和关闭的命令**

---

## **✅ 11. 启动 Tomcat**

```sh
sudo systemctl daemon-reload
sudo systemctl start tomcat
sudo systemctl status tomcat
```

📌 **作用：**

- `daemon-reload` 👉 重新加载 `systemd` 配置
- `start tomcat` 👉 启动 Tomcat 服务器
- `status tomcat` 👉 查看 Tomcat 运行状态

---

## **🎯 最终总结**

|**步骤**|**命令**|**作用**|
|---|---|---|
|**1. 设置 SSH 密钥权限**|`chmod 400 "4_key.pem"`|确保 SSH 密钥可用|
|**2. 连接 EC2 服务器**|`ssh -i "4_key.pem" ubuntu@your-ec2-public-ip`|远程登录服务器|
|**3. 更新软件包**|`sudo apt update`|更新系统|
|**4. 创建 Tomcat 用户**|`sudo useradd -m -d /opt/tomcat -U -s /bin/false tomcat`|创建 Tomcat 专用用户|
|**5. 下载 Tomcat**|`wget https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.34/bin/apache-tomcat-10.1.34.tar.gz`|获取 Tomcat 安装包|
|**6. 解压 Tomcat**|`sudo tar -xzf apache-tomcat-10.1.34.tar.gz -C /opt/tomcat --strip-components=1`|安装 Tomcat|
|**7. 设置 Tomcat 目录权限**|`sudo chown -R tomcat:tomcat /opt/tomcat`|修改 Tomcat 目录归属|
|**8. 安装 Java**|`sudo apt install openjdk-11-jdk -y`|安装 Java 运行环境|
|**9. 配置 Java 环境变量**|`sudo nano /etc/environment`|让 Java 可用|
|**10. 配置 Tomcat `systemd` 服务**|`sudo nano /etc/systemd/system/tomcat.service`|让 Tomcat 作为 `systemd` 服务运行|
|**11. 启动 Tomcat**|`sudo systemctl start tomcat`|启动 Tomcat|
|**12. 检查 Tomcat 状态**|`sudo systemctl status tomcat`|确保 Tomcat 正常运行|

---

🚀 **现在，Tomcat 服务器已经成功安装并运行！** 你可以在浏览器访问：

```
http://your-ec2-public-ip:8080
```

如果你有更多问题，欢迎继续提问！💪
