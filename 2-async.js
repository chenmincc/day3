var fs = require('fs');
var async = require('async');

var rawData = '';
console.time('test');
async.series([
  function(cb) {
    // 读文件
    fs.readFile('./data/1.json', function(err, data) {
      if (err) {
        cb(err);
      } else {
        console.log('======');
        console.log(data);
        rawData = data;
        console.log(rawData);
        cb(null);
      }
    })
  },

  function(cb) {
    console.log('================================');
    console.log(rawData);
    // 写文件
    fs.writeFile('./data/2.json', rawData, function(err) {
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
        cb(null);
      }
    })
  }
], function(error, result) {
  console.timeEnd('test');
  if (error) {
    // 在最终的回调函数中来处理操作
    console.log(error.message);
  } else {
    console.log('操作完成');
  }
})