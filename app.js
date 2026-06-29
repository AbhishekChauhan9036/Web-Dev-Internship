console.log('Hello World!')
document.write("Hello JavaScript!");
// var , let , const
let num1 = 10.880;
let num2 = 20;
console.log(num1+num2);
console.log(typeof(num1));

const pi = 3.1416;
console.log(pi);

let a = 5; 
let b = '5'; 
// let c = a++ + ++a + b++ + b;
// console.log(c);
// let ans = a&b;  
// console.log(ans);
console.log(a == b); // Loose Compare
console.log(a === b); // Strict Compare


let num = 20;
if(num%2==0){
  console.log("Even"); 
}else{
    console.log("Odd");
}
console.log(num%2==0?"Even":"Odd");

/*
this is
multiline 
comment
*/

// Loops in JavaScript
for(let i=1;i<=5;i++){
    console.log(i);
}
// 1 2 3 4 5

let name = "Abhishek";
let age = 25;
let sent = "My Name is "+name+" and my age is "+age;
let para = `My Name is ${name} and my age is ${age}`;
console.log(sent);
console.log(para);
