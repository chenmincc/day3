// 使用 串行有关联来实现文件的剪切
var fs = require('fs');
var async = require('async');
console.time('test');
async.waterfall([
  function(cb) {
    // 读文件
    fs.readFile('./data/1.json', function(err, data) {
      if (err) {
        cb(err);
      } else {
        cb(null, data, '2');
      }
    })
  },
  function(data, str, cb) {
    console.log(data);  // 文件内荣
    console.log(str);   // '2'
    // 写文件
    fs.writeFile('./data/2.json', data, function(err) {
      if (err) {
        cb(err);
      } else {
        cb(null);
      }
    })
  },

  function(cb) {
    // 删除 1.json
    fs.unlink('./data/1.json', function(err) {
      if (err) {
        cb(err);
      } else {
        cb(null, '3443234');
      }
    })
  }
], function(error, result) {
  console.timeEnd('test');
  if (error) {
    // 在最终的回调函数中来处理操作
    console.log(error.message);
  } else {
    console.log(result);
    console.log('操作完成');
  }
})