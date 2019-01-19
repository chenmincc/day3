var async = require('async');
// console.time('test');
// async.parallel([
//   function(cb) {
//     setTimeout(function() {
//       console.log('11111');
//       cb('我错了');
//     }, 1000);
//   },
//   function(cb) {
//     setTimeout(function() {
//       console.log('22222');
//       cb(null);
//     }, 3000);
//   }
// ], function(err, result) {
//   console.timeEnd('test');
//   console.log(err);
//   console.log(result);
// })


// 这个方法也是 并行无关联 加多了一个 并发量的限制，通过第二个参数来限制的。
console.time('test');
async.parallelLimit([
  function(cb) {
    setTimeout(function() {
      console.log('1');
      cb(null);
    }, 1000);
  },

  function(cb) {
    setTimeout(function() {
      console.log('2');
      cb(null);
    }, 8000);
  },

  function(cb) {
    setTimeout(function() {
      console.log('3');
      cb(null);
    },4000);
  },

  function(cb) {
    setTimeout(function() {
      console.log('4');
      cb(null);
    }, 4000);
  }
], 2, function(err, result) {
  console.timeEnd('test');
})