// function setTimeoutPromisified(duration){
//   return new Promise(function(resolve){
//     setTimeout(resolve, duration);
//   });
// }

function callback() {
  console.log("hi")
}

setTimeout(function(){
  console.log("hi")
  setTimeout(function(){
    console.log("hello");
    setTimeout(function(){
      console.log("hello there")
    }, 5000);
  }, 3000);
}, 1000)