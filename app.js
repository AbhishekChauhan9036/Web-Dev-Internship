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

let firstname = "Rahualaa";
console.log(firstname.length);
console.log(firstname.charAt(0));
console.log(firstname[0]);
console.log(firstname.codePointAt(0));
console.log(firstname.indexOf('a'));
console.log(firstname.lastIndexOf('a'));

let x = 10;
let y = 20;
[x,y]=[y,x];
console.log(x,y);


let str1 = "Rohan";
console.log(str1)

// let aa = NaN;
// console.log('5' + 6.7 + 'A');
// console.log(5 - 'A');


let yy = new Number(123);
let zz = 123;
console.log(yy === zz);

let a1 = 10;
let b1 = 10;
console.log(a1 === b1);

/**
 * 1. Take Something Return Something
 * 2. Take Something Return Nothing
 * 3. Take Nothing Return Something
 * 4. Take Nothing Return Nothing
 */
// function sum(a,b){
//     return a+b;
// }

const sum = (a,b) => a+b;

function sub(){
    let a = 10;
    let b = 20;
    return a + b;
}

function mul(a,b){
    let c = a*b;
    console.log(c);
}

// function seyHello(){
//     console.log("Hello");
// }

const seyHello=()=>"Hello";

seyHello();
console.log(sum(10,20));


const student = {
    name : "Arvind",
    age : 20,
    adress : "Patna",
    branch : "CSE",
}
student.rollnum = 12;
console.log(student)
console.table(student)

let arr = [12,17,29,20];
arr[2] = 100;
arr.push(10);
arr.push(50);
console.log(arr.sort().reverse());

arr1 = [1,2,3,[10,20,30,[23,67,89]]];
console.table(arr1);



