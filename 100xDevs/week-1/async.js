// writing simple function to print sum after some secound using async functions

let sumFunction = (n1, n2)=>{
    let ans = (n1+n2);
    return ans;
}

let callBackFunction = ()=>{
    console.log(sumFunction(50, 60));
}

setTimeout(callBackFunction, 3000)

// promises 
const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile().then(onDone);