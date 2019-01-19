-------------------------------------------------
[slide]
# 安装
<div class="columns2">
  <div>
    1 <img src="/img/install-1.jpg" height="100" alt="">
  </div>
  <div>
    2 <img src="/img/install-2.jpg" height="100" alt="">
  </div>
  <div>
    3 <img src="/img/install-3.jpg" height="100" alt="">
  </div>
  <div>
    4 <img src="/img/install-4.jpg" height="100" alt="">
  </div>
  <div>
    5 <img src="/img/install-5.jpg" height="100" alt="">
  </div>
  <div>
    6 <img src="/img/install-6.jpg" height="100" alt="">
  </div>
  <div>
    (7) <img src="/img/install-7.jpg" height="100" alt="">
  </div>
  <div>
    (8) <img src="/img/install-8.jpg" height="100" alt="">
  </div>
</div>

<br>

> 图7与图8是设置系统服务的，相关命令如下：

<br>

```shell
# 安装
mongod --dbpath "D:\Program Files\MongoDB\Server\4.0\data" --logpath "D:\Program Files\MongoDB\Server\4.0\log\mongod.log" --install --serviceName "MongoDB"

# 卸载
mongod.exe --remove --serviceName "MongoDB"
```

-------------------------------------------------
[slide]
# 进入 MongoDB 交互模式

```shell
# 需要在安装目录下的 bin 目录下运行如下命令：

mongo

# 如果将 bin 目录添加到环境变量中的话，即可在电脑任意路径下都可以运行 mongo 命令
```

<img src="/img/mongo-shell.jpg" >

-------------------------------------------------
[slide]
# 图形化界面 “Robo 3T”


