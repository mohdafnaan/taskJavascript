//hoisting is a behaviour in which a function or a varaible can be used before declaration

let a = 10 ;
console.log(a);
// we get the output 

console.log(a);
let a = 10;
// we get the error

function hello(){
    console.log("hello");
}
hello();
// we get the output 
// -------------------------------
hello();
function hello(){
    console.log("hello");
}
// we also get the output


let hello = ()=>{
    console.log("hello");
}
hello();
// we get the output

hello();
let hello = (){
    console.log("hello");
}
// we get error


// we cant get the output if we call a function before the code in(arrow function, expression function)