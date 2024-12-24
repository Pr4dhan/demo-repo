// const fs = require("fs");
// console.log("---------Top of the file----------");
// function readTheFile(waitforit){
//   console.log("readTheFile called");
//   setTimeout(function(){
//     console.log("callback based setTimeout completed");
//     waitforit();
//   }, 3000)
// }



// function setTimeoutPromisified(waitFor3S){
//   console.log("setTimeoutPromisified called")
//   return new Promise(readTheFile)
// }

// p = setTimeoutPromisified();

// function callback(){
//   console.log("Timer is done....!!!");
// }


// p.then(callback);
// console.log("---------End of the file----------");


// class Promise2 {
//   constructor(fn) {
//     function afterDone() {
//       this.resolve();
//     }
//     fn(afterDone)
//   }
//   then(callback) {
//       this.resolve = callback;
//   }
// }



class Promise2 {
  constructor(fn) {
    this.fn = fn;
    this.fn(() => {
      this.resolve();
    })
  }
  then(callback) {
      this.resolve = callback;
  }
}

function readTheFile(resolve) {
  setTimeout(function() {
    console.log("callback based setTimeout completed");
    resolve();
  }, 3000);
}


function setTimeoutPromisified() {
 return new Promise2(readTheFile)
}

let p = setTimeoutPromisified();
function callback(){
  console.log("callback has been called");
}

p.then(callback);