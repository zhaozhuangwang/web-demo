---
title: git
date: 2021-03-01
tags:
 - git       
categories: 
 - git
---

## Gitblit

Gitblit 配置https，但是没有证书，git在克隆时候会提示<br>
SSL certificate problem: self signed certificate in certificate chain<br>
取消https  git中输入以下
```js
git config --global http.sslVerify false
```
<img src="/images/githttps.jpg" alt="foo">
