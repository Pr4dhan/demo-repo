const fs = require("fs");

function readFileAsync() {
  return new Promise(function(resolve, reject){
    fs.readFile("a.txt", "utf-8", function(err, data) {
      //err
      if (err) {
        reject("File not found")
      } else {
        resolve(data);
      }
    })
  })
}

readFileAsync()
  .then(function(x){
    console.log("file has been read     " + x)
  })
  .catch(function(e){
    console.log(e)
  })