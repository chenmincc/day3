var async = require('async');

// 串行无关联   async.series
// 串行有关联   async.waterfall
// 并行无关联   async.parallel

// async.series

console.time('test');
async.series({

  'one': function(cb) {
    // 这是第一个异步操作
    setTimeout(function() {
      console.log('第一个异步操作');
      // 如果这个异步操作你觉ok,那么需要主动调用 cb(null) 
      cb(null, '1');
      // cb('第一个发生了错误');
    }, 2000);
  },

  'two': function(cb) {
    // 第二个异步操作
    setTimeout(function() {
      console.log('第二个异步操作');
      cb(null, '2');
    }, 3000);
  }

}, function(error, result) {
  // 是前面的所有异步操作完成之后，才能够进入进来。

  console.timeEnd('test')
  console.log(error);

  console.log(result);
})
