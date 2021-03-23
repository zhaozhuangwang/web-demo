---
title: Web前端开发规范
date: 2021-03-01
tags:
 - nom       
categories: 
 - javascript
---

## 开发规范简介

开发规范是一个提高效率，包括沟通效率，理解效率和开发效率，所以很多规范是可以与时俱进的方案，也是养成良好习惯，提高个人逻辑，团队与工程的好方案，本规范是以阿里巴巴为主。开发的规范！。
此编写规范是根据W3C规范与微软规范的基础上制定的一套开发规范，以后陆续更新！。
现代软件架构的复杂性需要协同开发完成，如何高效地协同呢？无规矩不成方圆，无规范难以协同，适当的规范和标准绝不是消灭代码内容的创造性、优雅性，而是限制过度个性化，以一种普遍认可的统一方式一起做事，提升协作效率，降低沟通成本。代码的字里行间流淌的是软件系统的血液，质量的提升是尽可能少踩坑，杜绝踩重复的坑，切实提升系统稳定性，码出质量。
<!-- more -->


## THML规范

html规范是以符合[w3c标准](https://www.w3.org/standards/webdesign/)，然后整理出一套符合日常开发良好的规范。
<br>
其中有 标准规范(w3c) 语义化规范 命名规范 注释规范。
<br>
语义化规范 是更好的SEO，看标签结构一目了然，具有语言表达意义的结构规范。
<br>
命名规范 是提交效率一个工程开发与维护，一个团队合作友好，个人良好的命名习惯。
<br>
注释规范 工程易修改，以时间，组件名称，关联模块，逻辑简述。四个步骤为主。
<br>
示例
```md
<!-- 传统目录结构 -->
└── 工程               
      ├── css       # 样式目录
      ├── js        # 逻辑目录
      ├── images    # 图片目录
      ├── modules   # 第三方模块
      └── ivew      # 视图文件夹
```
```html
<!DOCTYPE html>
<html lang="en">
<html>
<head>
    <meta charset="utf-8">
    <title>我是顶部标题</title>
    <!--顶部导航 #headerTop CSS 开始  ---------------------------------------------------------------------- -->
    <!--2020-03-01
        顶部导航组件CSS
        关联ID #headerTop
        作用 布局响适应  
    -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet.css"/>
    <!--顶部导航 #headerTop CSS 完结  ---------------------------------------------------------------------- -->
</head>
<!-- 2 个空格进行缩进 -->
<body>
    <div>
        <h1>我的第一个标题</h1>
        <p>我的第一个段落。</p>
    </div>
    <!-- 使用html5的header和nav标签 -->
    <!--顶部导航 #headerTop DOM 开始  ---------------------------------------------------------------------- -->
    <!--2020-03-01
        顶部导航DOM
        关联CSS 顶部导航 #headerTop
        关联JS  顶部导航 #headerTop
    -->
    <header id="headerTop" class="header-top">
        <h1>html5语义化标签</h1>
        <nav>
            <h1>导航</h1>
            <ul>
                <li >章节标签</li>
                <li>标题标签</li>
                <!-- 2020-03-01，加入图层按钮，关联JS  顶部导航 #headerTop  headerTopBtnOn() -->
                <li onclick="headerTopBtnOn()">
                    <button>按钮1。。</button>
                </li>
            </ul>
        </nav>
    </header>
    <!--顶部导航 #headerTop DOM 完结  ---------------------------------------------------------------------- -->
</body>
<!--顶部导航 #headerTop JS 开始  ---------------------------------------------------------------------- -->
<!--2021-03-01
    顶部导航组件JS
    关联ID #headerTop
    作用 点击事件 导航标题
 -->
<script charset="utf-8" src="https://map.qq.com/api/...."></script>
<!--2021-03-01
    加入图层按钮
    关联 顶部导航 #headerTop 按钮1
    作用 点击事件 按钮  修改状态后，加入图层......
 -->
<script>
     // 示例  驼峰命名，语义化命名，状态 headerTopBtnStatus
    let headerTopBtnStatus=false
    // 示例  驼峰命名，语义化命名， 名称 headerTopBtnOn
    function headerTopBtnOn() {
        // 点击修改状态
        headerTopBtnStatus =true
        //加入图层
        map.addLayers([layer, vector]);
        //显示地图范围
        map.setCenter(new SuperMap.LonLat(0, 0), 0);
    }
</script>
<!--顶部导航 #headerTop JS 完结 ---------------------------------------------------------------------- -->
</html>
```

### DOCTYPEhtml
DOCTYPE是DocumentType（文档类型）的简写，在页面中，用来指定页面所使用的XHTML（或者HTML）的版本。
要想制作符合标准的页面，一个必不可少的关键组成部分就是DOCTYPE声明。只有确定了一个正确的DOCTYPE，XHTML里的标识和CSS才能正常生效。<br>
DOCTYPE声明的写法遵循一定的规则，它指出阅读程序应该用什么规则集来解释文档中的标记。
在Web文档的情况下，“阅读程序”通常是浏览器或者校验器这样的一个程序，“规则”则是w3c所发布的一个文档类型定义（dtd）中包含的规则。
::: warning
DOCTYPE是DocumentType（文档类型）的简写。<br>
:::
```html
<!--正确 -->
<!DOCTYPE html>
<!-- 语言 必须定义并且包含在 html 标签中 -->
<html lang="en">
```
### meta属性
::: warning
meta 必须声明文档的编码charset，且与文件本身编码保持一致，指定字符编码的 meta 必须是 head 的第一个直接子元素。推荐使用UTF-8编码。<br>
:::

网页显示字符集 http-equiv属性
```html
<!--html5格式-->
<meta charset="UTF-8">
<!--简体中文 -->
<meta http-equiv="content-type" content="text/css;charset=gb2312">
<!--繁体中文-->
<meta http-equiv="content-type" content="text/css;charset=gbk">
<!--英文-->
<meta http-equiv="content-type" content="text/css;charset=utf-8">
<!-- X-UA-Compatible(浏览器采取何种版本渲染当前页面  指定IE和Chrome) -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<!-- expires(网页到期时间 过期后网页必须到服务器上重新传输) -->
<meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT" />
<!-- refresh(自动刷新并指向某页面 //意思是2秒后跳转向我的博客) -->
<meta http-equiv="refresh" content="2；URL=http://www.lxxyx.win/"> 
<!-- Set-Cookie(cookie设定)  //格式-->
<meta http-equiv="Set-Cookie" content="name, date"> 
<!-- //具体范例 -->
<meta http-equiv="Set-Cookie" content="User=Lxxyx; 
path=/; expires=Sunday, 10-Jan-16 10:00:00 GMT"> 
<!-- cache-control(指定请求和响应遵循的缓存机制) -->
<meta http-equiv="cache-control" content="no-cache">
<!-- 用于禁止当前页面在移动端浏览时，被百度自动转码。 -->
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

| cache-control                 | 说明                                                                              |
| ----------------------- | --------------------------------------------------------------------------------- |
| no-store              | 不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）                                                  |
| public                | 缓存所有响应，但并非必须。因为max-age也可以做到相同效果               |
| private               | 只为单个用户缓存，因此不允许任何中继进行缓存（比如说CDN就不允许缓存private的响应）                       |
| maxage                | 表示当前请求开始，该响应在多久内能被缓存和重用 ，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒。                |
| no-cache              | 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。 |

name属性 主要用于描述网页，网页的关键词，叙述等。与之对应的属性值为content
内容是对name填入类型的具体描述，便于搜索引擎抓取。meta标签中name属性语法格式是

```html
<meta name="参数" content="具体的描述">。
<!-- keywords(关键字) -->
<!-- 用于告诉搜索引擎，你网页的关键字。举例： -->
<meta name="keywords" content="Lxxyx,博客，文科生，前端">
<!--description(网站内容的描述)-->
<!-- 用于告诉搜索引擎，你网站的主要内容。举例： -->
<meta http-equiv="content-type" content="text/css;charset=gbk">
<meta name="description" content="热爱前端与编程。这是我的前端博客">
<!--英文-->
<meta http-equiv="content-type" content="text/css;charset=utf-8">
<!-- viewport(移动端的窗口) -->
<!-- 这个概念较为复杂，具体的会在下篇博文中讲述。这个属性常用于设计移动端网页
在用bootstrap,AmazeUI等框架时候都有用过viewport。 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- robots(定义搜索引擎爬虫的索引方式) -->
<!-- robots用来告诉爬虫哪些页面需要索引，哪些页面不需要索引
content的参数有all,none,index,noindex,follow,nofollow。默认是all。 -->
<meta name="robots" content="none">
```

### body语义化使用

header头部，body下的直接子元素header一般用于放页面的介绍性的信息如网站名称、logo或者导航栏nav。

```html
<!-- 使用html5的header和nav标签 -->
<header id="headerTop" class="header-top">
    <h1>html5语义化标签</h1>
    <nav id="headerNavTop" class="header-nav-top">
        <h1>导航</h1>
        <ul>
            <li>章节标签</li>
            <li>标题标签</li>
        </ul>
    </nav>
</header>
```
### CSS语义化命名
::: warning
CSS 命名 具有语义化，ID 为驼峰名，class以 - 分割。<br>
:::
```css
  /* 推荐 缩写 */
  .content > .title {
      font-size: 2rem;
      border-top: 0;
      font: 100%/1.6 palatino, georgia, serif;
      padding: 0 1em 2em;
  }

  /* 顶部导航  id驼峰  */
  #headerTop{
  }
  /* 顶部导航  calss -分割 */
  .header-top{
  }
  /* 顶部导航菜单  id驼峰  */
  #headerNavTop{
  }
  /* 顶部导航菜单  calss -分割 */
  .header-nav-top{
  }
```
### JS语义化使用
除兼容（IE8），之外严格使用ES6+标准，代码简写。
加入注释，函数 变量 名称以 dom元素相关联
::: warning
JS 命名 具有语义化，方法名称驼峰命名，相关变量也是驼峰。<br>
:::
```js
/*
    2021-03-01
    加入图层按钮
    关联 顶部导航 #headerTop 按钮1
    作用 点击事件 按钮  修改状态后，加入图层......
*/
<script>
    // headerTopBtn 命名关联
    // 驼峰命名，语义化命名，状态 headerTopBtnStatus
    let headerTopBtnStatus=false
    // 驼峰命名，语义化命名， 点击事件名称 headerTopBtnOn
    function headerTopBtnOn() {
        // 点击修改状态
        headerTopBtnStatus =true
        //加入图层
        map.addLayers([layer, vector]);
        //显示地图范围
        map.setCenter(new SuperMap.LonLat(0, 0), 0);
    }
    // 不要直接使用 undefined 进行变量判断
    if (typeof person === 'undefined') {
        ...
    }
    //  对上下文 this 的引用只能使用’self’来命名
    console.log 慎用，模块结束后，相关的及时去除

</script>
```
常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。

```js
// var MAX_STOCK_COUNT
const MAX_STOCK_COUNT
```
函数方法常用的动词:
```js
// get 获取/set 设置,
// add 增加/remove 删除
// create 创建/destory 移除
// start 启动/stop 停止
// open 打开/close 关闭,
// read 读取/write 写入
// load 载入/save 保存,
// create 创建/destroy 销毁
// begin 开始/end 结束,
// backup 备份/restore 恢复
// import 导入/export 导出,
// split 分割/merge 合并
// inject 注入/extract 提取,
// attach 附着/detach 脱离
// bind 绑定/separate 分离,
// view 查看/browse 浏览
// edit 编辑/modify 修改,
// select 选取/mark 标记
// copy 复制/paste 粘贴,
// undo 撤销/redo 重做
// insert 插入/delete 移除,
// add 加入/append 添加
// clean 清理/clear 清除,
// index 索引/sort 排序
// find 查找/search 搜索,
// increase 增加/decrease 减少
// play 播放/pause 暂停,
// launch 启动/run 运行
// compile 编译/execute 执行,
// debug 调试/trace 跟踪
// observe 观察/listen 监听,
// build 构建/publish 发布
// input 输入/output 输出,
// encode 编码/decode 解码
// encrypt 加密/decrypt 解密,
// compress 压缩/decompress 解压缩
// pack 打包/unpack 解包,
// parse 解析/emit 生成
// connect 连接/disconnect 断开,
// send 发送/receive 接收
// download 下载/upload 上传,
// refresh 刷新/synchronize 同步
// update 更新/revert 复原,
// lock 锁定/unlock 解锁
// check out 签出/check in 签入,
// submit 提交/commit 交付
// push 推/pull 拉,
// expand 展开/collapse 折叠
// begin 起始/end 结束,
// start 开始/finish 完成
// enter 进入/exit 退出,
// abort 放弃/quit 离开
// obsolete 废弃/depreciate 废旧,
// collect 收集/aggregate 聚集
```

### 注释规范
::: warning
注释规范： 时间，组件名称，关联模块，逻辑简述。<br>
:::
```js
/*
    2021-03-01
    加入图层按钮
    关联 顶部导航 #headerTop 按钮1
    作用 点击事件 按钮  修改状态后，加入图层......
*/
```
## vue框架规范
继承html规范之上，全部采用小写方式， 以中划线分隔。 除基本配置模块外，每个模块与页面想关联，名称文件夹语义化

### 基本目录结构 
webpack 目录,基本结构
```md
├── mock                       # Mock文件目录
├── public                     # 静态资源
│   ├── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── assets                 # 静态资源
│   │   ├── css                # 项目公用 CSS 样式
│   │   ├── iconsvg            # svg icons
│   │   └── images             # 项目图片
│   ├── components             # 全局公用组件
│   ├── composables            # 全局 组合式 API
│   ├── config                 # 配置
│   │   │── i18n.ts            # 国际化配置入口
│   │   │── routes.ts          # 路由配置入口
│   │   │── settings.ts        # 站点配置
│   │   └── store.ts           # Vuex Store 配置入口
│   ├── directives             # 全局 自定义指令
│   ├── layout                 # 项目 layout
│   │   ├── IndexLayout        # 项目默认主 Layout
│   │   │   ├── components     # IndexLayout 公共组件
│   │   │   ├── composables    # IndexLayout 公共组合式 API
│   │   │   ├── locales        # IndexLayout 国际化，主要为路由菜单
│   │   │   ├── index.vue      # IndexLayout 模板入口
│   │   │   └── routes.ts      # 使用 IndexLayout 的页面路由配置
│   │   ├── UserLayout         # 项目 UserLayout
│   │   │   ├── locales        # UserLayout 国际化，主要为路由菜单
│   │   │   ├── index.vue      # UserLayout 模板入口
│   │   │   └── routes.ts      # 使用 UserLayout 的页面路由配置
│   │   ├── BlankLayout.vue    # 空 Layout
│   │   └── SecurityLayout.vue # 认证 Layout
│   ├── locales                # 全局国际化文件目录
│   │   ├── en-US.ts           # 全局公用英文国际化配置
│   │   ├── zh-CN.ts           # 全局公用中文简体国际化配置
│   │   ├── zh-TW.ts           # 全局公用中文繁体国际化配置
│   │   └── xxx.ts             # 全局公用其他语言国际化配置
│   ├── services               # 公共数据接口目录（AJAx 请求）
│   ├── store                  # 全局 Store 数据模型目录（Vuex）
│   │   ├── global.ts          # 全局 StoreModule
│   │   └── user.ts            # user 公共StoreModule
│   ├── utils                  # 全局工具函数目录
│   ├── views                  # 页面组件目录(所有页面放在这里)
│   │   └── home               # 页面-首页(这里作为说明样例)
│   │       ├── components     # 当前页面组件目录(可选)
│   │       ├── composables    # 当前页面组合式 API(可选)
│   │       ├── locales        # 当前页面国际化目录(可选)
│   │       ├── data.d.ts      # TS 类型定义文件(可选)
│   │       ├── index.vue      # 当前页面入口
│   │       ├── service.ts     # 当前页面数据接口文件(可选)
│   │       └── store.ts       # 当前页面数据模型文件(可选)
│   ├── App.vue                # App 入口
│   ├── main.ts                # 入口文件 加载组件 初始化等
│   └── shims-vue.d.ts         # Vue TypeScript 配置
├── tests                      # 测试目录
├── .browserslistrc            # 项目的浏览器配置
├── .env.development           # 开发环境变量配置
├── .env.production            # 生产环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # Git忽略文件配置
├── babel.config.js            # babel-loader 配置
├── jest.config.js             # jest config
├── package.json               # 项目信息
├── README.md                  # readme
├── tsconfig.json              # TypeScript 配置
└── vue.config.js              # vue-cli 配置 
```
vite 目录,基本结构 (暂不用)
```md
├── mock                       # Mock文件目录
├── public                     # 静态资源
│   └── favicon.ico            # favicon图标
├── src                        # 源代码
│   ├── assets                 # 静态资源
│   │   ├── css                # 项目公用 CSS 样式
│   │   ├── iconsvg            # svg icons
│   │   └── images             # 项目图片
│   ├── composables            # 全局公用组件
│   ├── config                 # 配置
│   │   │── i18n.ts            # 国际化配置入口
│   │   │── routes.ts          # 路由配置入口
│   │   │── settings.ts        # 站点配置
│   │   └── store.ts           # Vuex Store 配置入口
│   ├── directives             # 全局 自定义指令
│   ├── layout                 # 项目 layout
│   │   ├── IndexLayout        # 项目默认主 Layout
│   │   │   ├── components     # IndexLayout 公共组件
│   │   │   ├── composables    # IndexLayout 公共组合式 API
│   │   │   ├── locales        # IndexLayout 国际化，主要为路由菜单
│   │   │   ├── index.vue      # IndexLayout 模板入口
│   │   │   └── routes.ts      # 使用 IndexLayout 的页面路由配置
│   │   ├── UserLayout         # 项目 UserLayout
│   │   │   ├── locales        # UserLayout 国际化，主要为路由菜单
│   │   │   ├── index.vue      # UserLayout 模板入口
│   │   │   └── routes.ts      # 使用 UserLayout 的页面路由配置
│   │   ├── BlankLayout.vue    # 空 Layout
│   │   └── SecurityLayout.vue # 认证 Layout
│   ├── locales                # 全局国际化文件目录
│   │   ├── en-US.ts           # 全局公用英文国际化配置
│   │   ├── zh-CN.ts           # 全局公用中文简体国际化配置
│   │   ├── zh-TW.ts           # 全局公用中文繁体国际化配置
│   │   └── xxx.ts             # 全局公用其他语言国际化配置
│   ├── API(services)          # 公共数据接口目录（AJAx 请求）
│   ├── store                  # 全局 Store 数据模型目录（Vuex）
│   │   ├── global.ts          # 全局 StoreModule
│   │   └── user.ts            # user 公共StoreModule
│   ├── utils                  # 全局工具函数目录
│   ├── views                  # 页面组件目录(所有页面放在这里)
│   │   └── home               # 页面-首页(这里作为说明样例)
│   │       ├── components     # 当前页面组件目录(可选)
│   │       ├── composables    # 当前页面组合式 API(可选)
│   │       ├── locales        # 当前页面国际化目录(可选)
│   │       ├── data.d.ts      # TS 类型定义文件(可选)
│   │       ├── index.vue      # 当前页面入口
│   │       ├── service.ts     # 当前页面数据接口文件(可选)
│   │       └── store.ts       # 当前页面数据模型文件(可选)
│   ├── App.vue                # App 入口
│   ├── main.ts                # 入口文件 加载组件 初始化等
│   └── shims-vue.d.ts         # Vue TypeScript 配置
├── tests                      # 测试目录
├── .env.development           # 开发环境变量配置
├── .env.production            # 生产环境变量配置
├── .eslintignore              # eslint 忽略配置
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # Git忽略文件配置
├── .prettierignore            # prettier 忽略配置
├── index.html                 # html模板
├── jest.config.js             # jest config
├── package.json               # 项目信息
├── prettier.config.js         # prettier 配置
├── README.md                  # readme
├── tsconfig.json              # TypeScript 配置
└── vite.config.ts             # vite 配置 
```
### 框架目录与组件规范
目录名按照上面的命名规范，其中 components 组件用大写驼峰<br>
其余除 components 组件目录外的所有目录均使用 kebab-case 命名。
```js
// mall-management-system
// 小写 - 分割
// head-search / page-loading / authorized / notice-icon
--------------------------------------------------------------------
src                             源码目录
|-- api                         所有api接口
|-- assets                      静态资源，images, icons, styles等
	|-- config-styles          		全局样式
|-- components                  公用组件
|-- constants                   常量信息，项目所有Enum, 全局常量等
|-- config                      配置信息
|-- directives                  自定义指令
|-- filters                     过滤器，全局工具
|-- datas                       模拟数据，临时存放 
|-- layouts                     导航目录
|-- mock                        模拟接口，临时存放
|-- plugins                     插件，全局使用
|-- router                      路由，统一管理
|-- store                       vuex, 统一管理
|-- themes                      自定义样式主题
|-- utils                       封装的工具和方法全局共享	
|-- views                       视图目录
|   |-- role                    role模块名 
|   |-- |-- role-list.vue       role列表页面
|   |-- |-- role-add.vue        role新建页面
|   |-- |-- role-update.vue     role更新页面
|   |-- |-- index.less          role模块样式
|   |-- |-- components          role模块通用组件文件夹
|   |-- employee                employee模块
--------------------------------------------------------------------
// 组件文件名为 pascal-case 格式
components/
|- my-component.vue

// 基础组件文件名为 base 开头，使用完整单词而不是缩写。
components/
|- base-button.vue
|- base-table.vue
|- base-icon.vue

// 和父组件紧密耦合的子组件应该以父组件名作为前缀命名
components/
|- todo-list.vue
|- todo-list-item.vue
|- todo-list-item-button.vue
|- user-profile-options.vue （完整单词）

```

### dom规范
尽量不要手动操作 DOM,因使用 vue 框架，所以在项目开发中尽量使用<br>
 vue 的数据驱动更新 DOM 尽量（不到万不得已）不要手动操作 DOM<br>
 包括：增删改 dom 元素、以及更改样式、添加事件等。

```HTML
<template>
  <div>
     <p>{{ normalizedFullName }}</p>
  </div>
</template>

```
### 框架css
将公共less文件放置在style/less/common文件夹
```css
/* 为组件样式设置作用域  scoped` 特性 */
<style scoped>
  /*  1、@import;
    2、变量声明;
    3、样式声明; */
@import "mixins/size.less";
@default-text-color: #333;
.page {
  width: 960px;
  margin: 0 auto;
}
/* 避免嵌套层级过多 */
.main-title{
   .name{
      color:#fff
   }
}
</style>

```
### 框架js规范
顺序：components > props > data > computed ><br> 
watch > filter > 钩子函数（钩子函数按其执行顺序） > methods
```js

// 且命名规范为多个单词驼峰 KebabCase格式。
export default {
  name: 'TodoItem'
  // ...
};

// Prop 定义应该尽量详细 camelCase 驼峰命名
props: {
  // 组件状态，用于控制组件的颜色
   status: {
// 必须指定类型
     type: String, 
// 必须加上 required 或者 default，两者二选其一
     required: true,
// 如果有业务需要，必须加上 validator 验证
     validator: function (value) {
       return [
         'succ',
         'info',
         'error'
       ].indexOf(value) !== -1
     }
   },
    // 用户级别，用于显示皇冠个数
   userLevel：{
      type: String,
      required: true
   }
}

```