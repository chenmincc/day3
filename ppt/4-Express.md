[slide]
# Express

> 基于 Node.js 平台，快速、开放、极简的 Web 开发框架 。


[slide]
# Hello World

```js
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('服务启动成功！ http://localhost:3000');
});

```


[slide]
# Request

> **Express** 帮我们在 **request** 对象上，做了一些封装，新增了如下一些常用属性or方法

- req.baseUrl：获取路由当前安装的URL路径
- req.body / req.cookies：获得「请求主体」/ Cookies
- req.hostname / req.ip：获取主机名和IP地址
- req.params：获取路由的parameters
- req.path：获取请求路径
- req.protocol：获取协议类型
- req.query：获取URL的查询参数串
- req.route：获取当前匹配的路由
- req.get()：获取指定的HTTP请求头


[slide]
# Response

> **Express** 帮我们在 **response** 对象上，做了一些封装，新增了如下一些常用属性or方法

- res.set()：设置HTTP头，传入object可以一次设置多个头
- res.status()：设置HTTP状态码
- res.send()：传送HTTP响应
- res.redirect()：设置响应的Location HTTP头，并且设置状态码302
- res.json(); 传送JSON响应
- res.cookie(name，value [，option])：设置Cookie
- res.clearCookie()：清除Cookie
- res.download()：传送指定路径的文件
- res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
- res.render(view [, locals] [, callback]) 渲染一个view


[slide]
# 路由


[slide]
# 静态资源文件托管
```js
express.static()
```


[slide]
# 生成器 (脚手架工具)
```
// 全局安装
npm install express-generator -g
```

<br>

```
// 生成项目
express --view=ejs myapp
```


[slide]
# EJS 模板引擎

[官网 - https://ejs.bootcss.com/](https://ejs.bootcss.com/)

> "E" 代表 "effective"，即【高效】。EJS 是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面。EJS 没有如何组织内容的教条；也没有再造一套迭代和控制流语法；有的只是普通的 JavaScript 代码而已。


[slide]
# EJS 模板引擎 - 常用标签

1. <% %> 流程控制标签
2. <%= %> 输出标签 (会对 HTML 代码转义)
3. <%- %> 输出标签 (不对 HTML 代码转义)
4. <%# %> 注释标签
5. <%%    会输出 '<%'

<br>

include 包含

```js
<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>
```
