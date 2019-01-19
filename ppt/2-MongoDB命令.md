[slide]
# MongoDB - 常用命令

- 创建/切换数据库
```shell
use [数据库名]
```
- 显示所有数据库
```shell
show dbs
```
- 查看当前所处数据库
```shell
db / db.getName()
```
- 显示当前DB状态
```shell
db.stats()
```

[slide]
# MongoDB - 数据库常用命令
- 查看当前DB版本
```shell
db.version()
```
- 查看当前DB的链接机器地址
```shell
db.getMongo()
```
- 删除当前数据库
```shell
db.dropDatabase()
```

[slide]
# MongoDB - 集合常用命令

- 创建集合
```shell
db.createCollection('collName', { capped: true, size: 20, max: 100 })
db.collName.isCapped(); // 判断集合是否为定容量集合
```
- 得到指定名称的集合
```shell
db.getCollection(name);
```
- 得到当前db的所有集合
```shell
db.getCollectionNames();
```
- 显示当前db所有集合的状态
```shell
db.printCollectionStats()
```

[slide]
# MongoDB - 集合常用命令 - 添加

- save
- insertOne
- insertMany

```shell
db.users.save({name: '张三', age: 16});

db.users.insertOne({name: '张三', age: 18});

db.users.insertMany([{name: '李四', age: 19}, {name: '王五', age: 20}]);
```

[slide]
# MongoDB - 集合常用命令 - 修改
- save

> 传入 _id 时，可作为更新操作。

- update

> 语法：
```js
db.collection.update(
    <query>,
    <update>,
    {
        upsert: <boolean>,
        multi: <boolean>,
    }
)
// query: update的查询条件，类似sql update查询内where后面的。
// update: update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
// upsert: 可选，如果未找到，是否允许插入一条记录，默认为 false。
// multi: 可选，是否更新多条记录，默认为 false。
```

- updateOne
- updateMany

```shell
db.users.update({age: 25}, {$set: {name: 'changeName'}});
// update users set name = 'changeName' where age = 25;
db.users.update({name: 'lisi'}, {$inc: {age: 50}});
// update users set age = age + 50  where name = 'lisi';
db.users.update({name: 'lisi'}, {$inc: {age: 50}, $set: {name: 'hoho'}});
// update users set age = age + 50, name = 'hoho' where name = 'lisi';
```

[slide]
# MongoDB - 集合常用命令 - 删除
- remove

> 语法：
```js
db.collection.remove(
    <query>,
    {
        justOne: <boolean>
    }
)
// query: 条件
// justOne: 是否只删除一条，默认为 false 。
```

- deleteOne
- deleteMany


[slide]
# MongoDB - 集合常用命令 - 查询修改删除
```js
db.users.findAndModify({
    query: {age: {$gte: 25}},
    sort: {age: -1},
    update: {$set: {name: 'a2'}, $inc: {age: 2}},
    remove: true
})
```
<img src="/img/pic9.jpg" width="200" />

[slide]
# MongoDB - 集合常用命令

- 查询所有记录
```js
db.users.find()
// select * from users
```
- 查询 age = 22 的记录
```js
db.users.find({'age': 22});
// select * from users where age = 22;
```
- 查询 age > 22 的记录
```js
db.users.find({'age': {$gt: 22}});
// select * from users where age > 22;
```
- 查询 age < 22 的记录
```js
db.users.find({'age': {$lt: 22}});
// select * from users where age < 22;
```

[slide]
# MongoDB - 集合常用命令

- 查询 age >= 22 的记录
```js
db.users.find({'age': {$gte: 22}});
// select * from users where age >= 22;
```
- 查询 age <= 22 的记录
```js
db.users.find({'age': {$lte: 22}});
// select * from users where age <= 22;
```
- 查询 age != 22 的记录
```js
db.users.find({'age': {$ne: 22}});
// select * from users where age != 22;
```

[slide]
# MongoDB - 集合常用命令
- 查询 age >= 23 并且 age <= 26
```shell
db.users.find({'age': {$gte: 23, $lte: 26}});
```
- 查询 age >= 23 或者 name == '张三'
```shell
db.users.find({$or: [{age: {$gte: 23}}, {name: '张三'}]);
```

[slide]
# MongoDB - 集合常用命令

- 查询 name 中包含 mongo 的数据
```shell
db.users.find({'name': /mongo/});
// select * from users where name like %mongo%;
```
- 查询 name 中已 mongo 开头的数据
```shell
db.users.find({'name': /^mongo/});
// select * from users where name like 'mongo%';
```
- 查询 指定列 name 、age 的数据
```shell
db.users.find({}, {name: 1, age: 1});
// select name, age from users;
```
- 查询 指定列 name 、age 并且 age > 25
```shell
db.users.find({age: {$gt: 25}}, {name: 1, age: 1});
// select name, age from users where age > 25;
```

[slide]
# MongoDB - 集合常用命令

- 升序
```shell
db.users.find().sort({age: 1});
```
- 倒序
```shell
db.users.find().sort({age: -1});
```
- 查询 name = zhangsan , age = 20 的数据
```shell
db.users.find({name: '张三', age: 20});
// select * from users where name='zhangsan' and age='20';
```

[slide]
# MongoDB - 集合常用命令

- 查询 前5条数据
```shell
db.users.find().limit(5);
// select top 5 * from users;
```
- 查询 10条以后的数据
```shell
db.users.find().skip(10);
```
- 查询 在 5 - 10 之间的数据
```shell
db.usres.find().limit(10).skip(5);
```

[slide]
# MongoDB - 集合常用命令
- 查询 第一条数据
```shell
db.users.findOne();
```
- 查询 某个结果集的记录条数
```shell
db.users.find().count();
```
