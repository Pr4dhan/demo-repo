function setTimeoutPromisified(duration){
  return new Promise(function(resolve){
    setTimeout(resolve, duration);
  });
}
// // Promise chaning
// setTimeoutPromisified(1000).then( function () {
//   console.log("hi");
//   return setTimeoutPromisified(3000)
// }).then(function(){
//     console.log("hello");
//     return setTimeoutPromisified(5000)
// }).then(function(){
//     console.log("hi there");
// });
// console.log("outside the callback hell");


async function solve() {
  await setTimeoutPromisified(1000);
  console.log("hi");
  await setTimeoutPromisified(3000);
  console.log("hello");
  await setTimeoutPromisified(5000);
  console.log("hi there");
}

solve();

console.log("after solve function");