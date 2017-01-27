// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('city not found');
// }
//
// getTempCallback('portland', function(err, temp){
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found.');
//
//     }, 4000);
//   });
// }
//
// getTempPromise('Portland').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

//Challenge Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    resolve(5, 6)
  });
}
