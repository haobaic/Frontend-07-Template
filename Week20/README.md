### publish-tool 项目(部署在本地，用来上传文件到服务器)

node项目，核心功能：把本地某个文件夹压缩，使用 http 的流传输上传到服务器。

### publish-server 项目(部署到服务器，用来接收本地服务上传来的文件，再把文件放到指定文件夹)

node项目，核心功能：启动服务后，接受本地服务上传的文件，解压后移动到指定文件夹。


## github 授权登录

其实就是一个使用 github 账号登录的功能。

任何一个 github 账号，可以创建一个应用，得到 Client ID 和 Client Secrets，之后，就是以这个应用的名义，经任一 github 用户同意后，通过 github 接口，获取这位用户的个人信息。



### Github登录开发

Github登录第三方网站的功能的开发者验证流程相对来说很简单。

登陆Github后，打开 Setting > Developer setting > OAuth applications，然后点击 Register a new application，创建一个应用程序。

创建时填写一下信息，提交后就能得到一套 clientID 和 clientSecrets。

 [官方文档 ](https://docs.github.com/en/developers/apps/authorizing-oauth-apps)


## Git Hooks 基本用法 

- 获取 git hooks

```shell
Week20$ mkdir git-demo
Week20$ cd git-demo
Week20/git-demo$ touch README.md
Week20/git-demo$ git init
Week20/git-demo$ git add README.md
Week20/git-demo$ git commit -a -m "init"
Week20/git-demo$ open ./
```
在 .git 文件目录下是所有的 [ git-hooks-name ].sample 文件

- 用 node 执行 hooks

编写用例测试 node 是否执行了 hooks 中的 .pre-commit 文件
```javascript
// Week20/git-demo/.git/hooks/.pre-commit

// 配置可使用的 node 地址在此引用 node 运行下面的代码
#!/usr/bin/env node 
console.log("Hello, hooks!")
```

```shell
Week20/git-demo$ cd .git/hooks
Week20/git-demo/.git/hooks$ chmod +x ./pre-commit
Week20/git-demo/.git/hooks$ node ./pre-commit
```

- Git 自动执行 hooks
测试 Git 自动调用我们重写的 pre-commit hooks，在 git-demo/README.md 文件写入内容（内容不限，这里就是为了 commit 提交的时候观察是否调用了我们重写的 ./pre-commit 文件，看到 console.log 的内容即表明调用 ./pre-commit 成功）

```text
# A Sample Change
```

```shell
Week20/git-demo$ git add .
Week20/git-demo$ git commit -m "A sample change"
Week20/git-demo$
```

## ESLint 基本用法 
ESLint 官网：[https://eslint.org/]

- 安装 eslint

```shell
Week20$ mkdir eslint-demo
Week20$ cd eslint-demo
Week20/eslint-demo$ npm init
Week20/eslint-demo$ npm install --save-dev eslint
Week20/eslint-demo$ npx eslint --init
```

## ESLint API及其高级用法
ESLint 的 NodeJS API：[https://eslint.org/docs/developer-guide/nodejs-api] (使用 an example that autofixes lint problems 部分的代码)


- 在 git_demo 文件夹里新建 .gitignore 目录写入内容 node_modules，以免提交大量的 node_modules 变更到 Git 仓库。



## 使用无头浏览器检查 DOM
[https://developers.google.com/web/updates/2017/04/headless-chrome]
[https://www.npmjs.com/package/puppeteer/v/1.11.0-next.1547527073587]

- 安装 puppeteer - Chrome 无头浏览器插件

```shell
Week20$ mkdir headless-demo
Week20$ cd headless-demo
Week20/headless-demo$ touch main.js
Week20/headless-demo$ npm init
Week20/headless-demo$ npm install --save-dev puppeteer
```

- 测试无头浏览器

```javascript
const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/main.html'); // 这里写自己项目的地址
  
  const a = await page.$("a"); // 解析项目中的 Dom 树
  const img = await page.$$("a"); // 解析项目中的 Dom 树
 
  console.log(a.asElement().boxModel(), img); // 打印观察结果
})();
```


### 操作指令

```
git log 查看提交记录
ls -a 查看隐藏git 文件夹
open ./.git 打开git
ls -l ./pre-commit 查看pre-commit文件权限
chmod +x ./pre-commit 给文件添加权限
npm eslint --init 设置config

```
