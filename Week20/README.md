# 学习笔记
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


### 操作指令

```git log 查看提交记录```
```ls -a 查看隐藏git 文件夹```
```open ./.git 打开git```
`ls -l ./pre-commit 查看pre-commit文件权限```
```chmod +x ./pre-commit 给文件添加权限```
```npm eslint --init 设置config```

