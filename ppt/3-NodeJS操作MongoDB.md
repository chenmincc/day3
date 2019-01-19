[slide]
# NodeJS 操作 MongoDB

1. 安装**mongodb**依赖
```shell
npm install mongodb
```
2. 引入
```shell
const MongoClient = require('mongodb').MongoClient;
```
3. 构建 mongodb 的连接地址
```shell
const url = 'mongodb://127.0.0.1:27017';
```
4. 连接
```shell
MongoClient.connect(url, function(err, client) {
    // 4.1 选择数据库
    const db = client.db('数据库名称');

    // 4.2 选择集合并操作
    db.collection('集合名称').find();
    ...

    // 4.3 记得关闭连接
    client.close();
});
```


[slide]
# 增加操作

- 增加一条 **insertOne**
- 增加多条 **insertMany**


[slide]
# 删除操作

- 删除一条 **deleteOne**
- 删除多条 **deleteMany**


[slide]
# 修改操作

- 修改一条 **updateOne**
- 修改多条 **updateMany**


[slide]
# 查询操作

- 查询全部
```js
.find()
```
- 查询特定的数据
```js
.find(whereObj)
```
- 排序
```js
.find().soft(softObj)
```
- 查询指定条数
```js
.find().limit(count)
```
- 跳过的条数
```js
.find().skip(count)
```
