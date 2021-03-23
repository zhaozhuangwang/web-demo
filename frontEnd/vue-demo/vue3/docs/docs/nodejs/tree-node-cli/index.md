---
title: tree-node-cli目录树
date: 2017-11-01
tags:
 - tree-node-cli目录树    
categories: 
 - nodejs
---

## 简介
```md
+---node_modules
|   +---.bin
|   +---@babel
|   |   +---code-frame
|   |   |   \---lib
|   |   +---core
|   |   |   +---lib
|   |   |   |   +---config
|   |   |   |   |   +---files
|   |   |   |   |   +---helpers
|   |   |   |   |   \---validation
|   |   |   |   +---tools
|   |   |   |   \---transformation
|   |   |   |       +---file
|   |   |   |       \---util
|   |   |   \---node_modules
|   |   |       +---.bin
|   |   |       \---semver
|   |   |           \---bin
```
### 安装
npm install -g tree-node-cli<br>
cnpm<br>
yarn
```bash
npm install -g tree-node-cli
``` 
### 生成目录树结构  
tree -L n 显示项目的层级。n 表示层级数。比如你想要显示项目的 4 层结构，可以用tree -L 4。<br>
tree -I "Scripts|Lib|pycache" 表示要过滤的文件夹/目录。<br>
tree > tree.md 表示将结构输出到 tree.md 这个文件。<br>
```bash
tree -L 4 -I "Scripts|Lib|pycache" > tree.md
```
更多操作可以输入 tree --help 进行查看：
```bash
Options:
  -V, --version             output the version number
  -a, --all-files           All files, include hidden files, are printed.
  --dirs-first              List directories before files.
  -d, --dirs-only           List directories only.
  -I, --exclude [patterns]  Exclude files that match the pattern. | separates alternate patterns. Wrap your entire pattern in double quotes. E.g. `"node_modules|coverage".
  -L, --max-depth <n>       Max display depth of the directory tree.
  -r, --reverse             Sort the output in reverse alphabetic order.
  -F, --trailing-slash      Append a '/' for directories.
  -h, --help                output usage information
```
### 注意
windows用户需要用treee代替tree，避免和系统的tree命令冲突。 treee <br>

指定路径的级别为3级。<br>

-L 3<br>

忽略文件夹（正则表达式匹配的，.git会匹配到.gitignore,所以.gitignore文件没有显示出来）。<br>

-I "node_modules|.idea|objects|.git"<br>

显示所有文件（默认前缀有"."的不会显示，例如".electron-vue"）。<br>

-a<br>

目录在前，文件在后（默认是字母排序，和idea显示的顺序不一致）。<br>

--dirs-first<br>
```js
-V, --version             输出版本号
-a, --all-files           打印所有文件，包括隐藏文件
--dirs-first              目录在前，文件在后
-d, --dirs-only           仅列出目录
-I, --exclude [patterns]  排除与模式匹配的文件。用 | 隔开,用双引号包裹。 例如 “node_modules|.git”
-L, --max-depth <n>       目录树的最大显示深度
-r, --reverse             按反向字母顺序对输出进行排序
-F, --trailing-slash      为目录添加'/'
-h, --help                输出用法信息
```
### 卸载
```js
npm uninstall -g tree-node-cli
```