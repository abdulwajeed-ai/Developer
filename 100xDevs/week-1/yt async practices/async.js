console.log('one')
console.log('two')
console.log('three')

// writing function inside setTimeout function>
// setTimeout(()=>{console.log('hello world')}, ((60)*(1000)) * (60) ) this async function run after 1 hour.

function sum(a, b){
    let ans = (a+b);
    return ans;
}

function calci(a, b, callbackFunction){
    console.log(callbackFunction(a, b));
}
calci(9, 8, (a,b)=>{
    let ans = a+b;
    return a+b;
});


// Callback Hell: nested callbacks stacked below one another forming apyramid structure. 
// nesting

