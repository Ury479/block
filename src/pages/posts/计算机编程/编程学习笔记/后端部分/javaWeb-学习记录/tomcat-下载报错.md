---
layout: ../../../../../../layouts/PostLayout.astro
title: tomcat 下载报错
description: '&lt;q&gt;配置 Tomcat 权限（如需） 进入 Tomcat 的 bin 目录，赋予脚 <img
  src="https://r2cdn.perplexity.ai/pplx full logo primary dark%402x.'
date: 2025-07-14T03:56:00.000Z
updated: 2025-07-14T03:56:00.000Z
type: 思考
topic: 编程学习笔记
tags: []
readingMinutes: 3
sourceFolder: 计算机编程/编程学习笔记/后端部分/javaWeb 学习记录
---

[&lt;q&gt;配置 Tomcat 权限（如需）___进入 Tomcat 的 bin 目录，赋予脚](/archive/?q=%26lt%3Bq%26gt%3B%E9%85%8D%E7%BD%AE%20Tomcat%20%E6%9D%83%E9%99%90%EF%BC%88%E5%A6%82%E9%9C%80%EF%BC%89___%E8%BF%9B%E5%85%A5%20Tomcat%20%E7%9A%84%20bin%20%E7%9B%AE%E5%BD%95%EF%BC%8C%E8%B5%8B%E4%BA%88%E8%84%9A)
<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

##### <q>配置 Tomcat 权限（如需）

进入 Tomcat 的 bin 目录，赋予脚本执行权限：
bashsudo chmod 755 *.sh

启动 Tomcat 测试（可选）：
bash./startup.sh

浏览器访问 http://localhost:8080，看到 Tomcat 欢迎页即安装成功。</q> base) ury@192 bin % ./startup.sh

```
Using CATALINA_BASE:   /Users/ury/Library/apache-tomcat-11.0.7
Using CATALINA_HOME:   /Users/ury/Library/apache-tomcat-11.0.7
Using CATALINA_TMPDIR: /Users/ury/Library/apache-tomcat-11.0.7/temp
Using JRE_HOME:        /Users/ury/.sdkman/candidates/java/current
Using CLASSPATH:       /Users/ury/Library/apache-tomcat-11.0.7/bin/bootstrap.jar:/Users/ury/Library/apache-tomcat-11.0.7/bin/tomcat-juli.jar
Using CATALINA_OPTS:
touch: /Users/ury/Library/apache-tomcat-11.0.7/logs/catalina.out: Permission denied
/Users/ury/Library/apache-tomcat-11.0.7/bin/catalina.sh: line 417: /Users/ury/Library/apache-tomcat-11.0.7/logs/catalina.out: Permission denied
```
控制台报错

你的 Tomcat 启动时报错：

```
touch: /Users/ury/Library/apache-tomcat-11.0.7/logs/catalina.out: Permission denied
/Users/ury/Library/apache-tomcat-11.0.7/bin/catalina.sh: line 417: /Users/ury/Library/apache-tomcat-11.0.7/logs/catalina.out: Permission denied
```
### 问题原因

这是因为 Tomcat 在启动时需要写日志到 `logs/catalina.out` 文件，但当前用户没有这个文件或 logs 文件夹的写入权限[^2][^5][^4]。

---

## 解决办法

### 方法一：直接给 catalina.out 文件权限

1. 进入 logs 目录：

```bash
cd /Users/ury/Library/apache-tomcat-11.0.7/logs
```

2. 给 catalina.out 文件加上读写权限（如果文件不存在，先创建一个空文件）：

```bash
sudo touch catalina.out
sudo chmod a+rwx catalina.out
```

这样 Tomcat 启动时就能正常写日志了[^2][^5]。

### 方法二：给整个 logs 目录权限

1. 进入 Tomcat 目录：

```bash
cd /Users/ury/Library/apache-tomcat-11.0.7
```

2. 给 logs 目录和其中所有文件加权限：

```bash
sudo chmod -R a+rwx logs
```

这样 logs 目录下所有文件和文件夹都有读写权限，也能解决问题[^5][^3][^4]。

### 方法三：更改文件/目录所有者

如果你希望更安全，可以把 logs 目录的所有者改成你当前的用户名（如 ury），这样只有你有权限：

```bash
sudo chown -R ury:staff logs
```

（staff 是 Mac 上常见的用户组，如果你用的是别的组，请替换）

---

## 总结

- 这是权限不足导致 Tomcat 日志文件无法写入。
- 推荐用 `sudo chmod a+rwx catalina.out` 或 `sudo chmod -R a+rwx logs` 解决。
- 如果追求更安全，可以用 `sudo chown` 把目录归属权改成当前用户[^6]。

操作完毕后，重新运行 `./startup.sh`，Tomcat 应该就能正常启动了。

如果还有问题，欢迎继续提问！

<div style="text-align: center">⁂</div>

[^1]: https://stackoverflow.com/questions/4672082/a-lots-of-permission-denied-in-catalina-out

[^2]: https://blog.csdn.net/guorenhao/article/details/125068277

[^3]: https://www.suse.com/support/kb/doc/?id=000016449

[^4]: https://askubuntu.com/questions/414402/installed-tomcat-7-but-cannot-run-apps

[^5]: https://blog.csdn.net/qq_35661171/article/details/110873448

[^6]: https://www.360learntocode.com/2018/09/issue-with-tomcat-cataline-permission.html

[^7]: https://superuser.com/questions/632618/best-practice-for-access-permission-to-users-for-apache-tomcat

[^8]: https://community.atlassian.com/forums/Jira-questions/touch-cannot-touch-opt-atlassian-jira-logs-catalina-out/qaq-p/1363569

[^9]: https://superuser.com/questions/382975/how-do-i-add-permissions-to-my-tomcat-sh

[^10]: https://askubuntu.com/questions/313032/touch-cannot-touch-usr-share-tomcat7-logs-catalina-out-no-such-file-or-dire
