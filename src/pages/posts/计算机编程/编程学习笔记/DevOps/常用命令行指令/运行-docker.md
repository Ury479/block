---
layout: ../../../../../../layouts/PostLayout.astro
title: 运行 docker
description: 检查当前运行的 Docker 容器 docker ps docker version sudo systemctl start
  docker sudo systemctl status docker sudo systemctl enabl
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 1
sourceFolder: 计算机编程/编程学习笔记/DevOps/常用命令行指令
---

检查当前运行的 Docker 容器
docker ps

docker --version
sudo systemctl start docker
sudo systemctl status docker
sudo systemctl enable docker

重新运行 `docker-compose`
docker-compose -f docker-compose-prod.yml up -d

docker 下载
sudo apt update
sudo apt install docker-compose -y

### **✅ 3. 运行 `docker-compose.yml` 部署**

执行以下命令：

sh

CopyEdit

`docker-compose -f docker-compose.yml up -d`

这将会：

- 读取 `docker-compose.yml`
- 拉取镜像
- 创建并运行容器
cd frontend
docker build -t uryy/frontend:latest .
docker push uryy/frontend:latest

**构建 Docker 镜像** 
`docker build --platform linux/amd64 -t uryy/test .`

在另一台设备上执行以下命令，拉取并运行该镜像：
docker pull uryy/test
docker run -d -p 8080:80 uryy/test

如果你想推送新的更新
docker build -t uryy/test .
docker push uryy/test

**安装依赖**
pnpm install

构建 Nuxt.js 项目
pnpm build

docker build -t nuxt-movies .

docker run -d -p 3000:3000 nuxt-movies
