---
layout: ../../../../../../layouts/PostLayout.astro
title: 使用官方 Nginx 镜像作为基础镜像
description: 在容器化和 CI/CD 部署流程中， GitHub Workflow .yml 、 Dockerfile 和 docker
  compose.yml 都是 YAML 格式 ，但作用、语法结构和适用场景完全不同。下面我们从 语法、结构、作用、使
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 3
sourceFolder: 计算机编程/编程学习笔记/DevOps/常用命令行指令
---

在容器化和 CI/CD 部署流程中，**GitHub Workflow (`.yml`)、`Dockerfile` 和 `docker-compose.yml`** 都是**YAML 格式**，但作用、语法结构和适用场景完全不同。下面我们从 **语法、结构、作用、使用场景** 进行详细对比。

---

## **📌 1. `workflow.yml`（GitHub Actions CI/CD 自动化）**

GitHub Actions `workflow.yml` **用于 CI/CD 自动化部署**，可以在 `push`、`merge` 等事件触发时执行 **Docker 构建、推送、SSH 远程部署等任务**。

### **✅ 示例：CI/CD 自动构建 & 部署 Docker**

```yaml
name: CI/CD Pipeline
on:
  push:
    branches:
      - main  # 监听 main 分支的 push 操作

jobs:
  build:
    runs-on: ubuntu-latest  # 运行环境
    steps:
      - name: Checkout Code  # 拉取 Git 仓库代码
        uses: actions/checkout@v3

      - name: Login to Docker Hub  # 登录 Docker Hub
        run: echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u "${{ secrets.DOCKER_USERNAME }}" --password-stdin

      - name: Build Docker Image  # 构建 Docker 镜像
        run: docker build -t uryy/my-custom-nginx:v6 .

      - name: Push to Docker Hub  # 推送 Docker 镜像到 Docker Hub
        run: docker push uryy/my-custom-nginx:v6

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: SSH into Server & Deploy  # SSH 登录服务器并部署
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_IP }}
          username: ubuntu
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            docker pull uryy/my-custom-nginx:v6
            docker-compose up -d
```

### **📌 语法特点**

|**字段**|**作用**|
|---|---|
|`name:`|指定 CI/CD 工作流名称|
|`on:`|触发条件，如 `push` 到 `main`|
|`jobs:`|定义多个任务，如 `build` 和 `deploy`|
|`runs-on:`|运行环境，如 `ubuntu-latest`|
|`steps:`|任务步骤，如 `docker build`、`docker push`|
|`uses:`|GitHub Actions 插件，如 `appleboy/ssh-action@master`|
|`with:`|配置参数，如 SSH 远程部署服务器|

---

## **📌 2. `Dockerfile`（Docker 容器构建）**

`Dockerfile` **用于定义 Docker 镜像**，包含 **基础镜像、环境变量、文件拷贝、端口映射、启动命令** 等。

### **✅ 示例：Nginx + 自定义 HTML**

```dockerfile
# 使用官方 Nginx 镜像作为基础镜像
FROM nginx:latest

# 复制本地 index.html 到容器 Nginx 目录
COPY index.html /usr/share/nginx/html/index.html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
```

### **📌 语法特点**

|**字段**|**作用**|
|---|---|
|`FROM`|指定基础镜像（`nginx:latest`）|
|`COPY`|复制本地文件到 Docker 容器|
|`EXPOSE`|暴露容器端口（80 端口）|
|`CMD`|容器启动时执行的命令|

---

## **📌 3. `docker-compose.yml`（管理多个容器）**

`docker-compose.yml` **用于定义和管理多个容器**，简化 `docker run` 命令，支持 **端口映射、挂载卷、环境变量、依赖关系** 等。

### **✅ 示例：Nginx + MySQL + Redis**

```yaml
version: '3'
services:
  web:
    image: uryy/my-custom-nginx:v6  # 指定 Docker 镜像
    ports:
      - "8080:80"  # 端口映射
    volumes:
      - ./custom-html:/usr/share/nginx/html  # 绑定本机 HTML 目录
    restart: always  # 自动重启

  db:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: testdb
    volumes:
      - db-data:/var/lib/mysql

  redis:
    image: redis:latest
    restart: always

volumes:
  db-data:
```

### **📌 语法特点**

|**字段**|**作用**|
|---|---|
|`version:`|指定 Compose 版本|
|`services:`|定义多个服务（`web`、`db`、`redis`）|
|`image:`|指定 Docker 镜像|
|`ports:`|端口映射（`8080:80`）|
|`volumes:`|持久化存储|

---

## **📌 🚀 三者的主要区别**

|**特点**|**workflow.yml（CI/CD 自动化）**|**Dockerfile（定义镜像）**|**docker-compose.yml（管理多个容器）**|
|---|---|---|---|
|**用途**|自动化构建、推送、部署|定义单个 Docker 镜像|运行和管理多个 Docker 容器|
|**执行方式**|GitHub Actions 自动触发|`docker build -t myimage .`|`docker-compose up -d`|
|**是否需要 Docker**|需要，但可以远程执行|需要，用于构建镜像|需要，用于运行容器|
|**适用场景**|CI/CD 自动化部署|构建基础镜像|开发、测试、生产环境管理|

---

## **📌 🚀 最佳实践**

1️⃣ **本地开发**

```bash
docker-compose up -d  # 运行 Nginx + MySQL + Redis
nano custom-html/index.html  # 修改 HTML
```

2️⃣ **本地构建 Docker 镜像**

```bash
docker build -t uryy/my-custom-nginx:v6 .
docker push uryy/my-custom-nginx:v6
```

3️⃣ **CI/CD 自动部署**

```yaml
on:
  push:
    branches:
      - main
jobs:
  deploy:
    steps:
      - name: SSH into Server
        uses: appleboy/ssh-action@master
        with:
          script: |
            docker pull uryy/my-custom-nginx:v6
            docker-compose up -d
```

🚀 **这样，你的 `workflow.yml` 可以自动触发 `Dockerfile` 构建，并通过 `docker-compose.yml` 运行多个容器，实现高效部署！** 🚀
