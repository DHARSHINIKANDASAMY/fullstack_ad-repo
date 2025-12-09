let fun=function(){
console.log("hi");
}
console.log("hello world");
fun();
let userdetails=function(name,age){//functional parameters
    console.log(`Hello, ${name} Your age is ${age}`);

    //function with return type
    return [10,20,30];
    return "hello";
    return 100;
    return null;
    return {name:"John",age:25};  //returns only the first return statement     

}
//userdetails();//function call//return name:undefined age:undefined
// userdetails("Alice", 30);//actual parameters
console.log(userdetails("Bob", 28));//function call with parameters
//GEC-Global Execution Context
// 1.Creation Phase
//     a. Global Object Creation(window)       
//     b. 'this' keyword window object ko point karega
//     c. Memory allocation for variables and functions
// 2.Execution Phase
//     a. Code is executed line by line


let res=userdetails("Charlie", 35); //function call with parameters
console.log(res);
//console.log(res.name);//undefined
//console.log(res.age);//undefined  
console.log(res[0]);//10
console.log(res[1]);//20
console.log(res[2]);//30
console.log(res[3]);//undefined
//Function Expression
let add=function(a,b){
    return a+b;
}
let sum=add(15,25);
console.log(sum);//40   

//normal function vs arrow function
//normal function
let multiply=function(x,y){ 
    return x*y;
}   
let result1=multiply(5,6);
console.log(result1);//30

function empdetails(name,role,salary,address){
    return `Name:${name} Role:${role} Salary:${salary} Address:${address}`;
}
let emp1=empdetails("David","Developer",75000,"123 Main St");
console.log(emp1);
let emp2=empdetails("Eva","Designer",68000,"456 Oak Ave");
console.log(emp2);
let emp3=empdetails("Frank","Manager",85000,"789 Pine Rd");
console.log(emp3);
let emp4=empdetails("Grace","Analyst",72000,"321 Maple Ln");
console.log(emp4);  
let emp5=empdetails("Hannah","Tester",65000,"654 Cedar St");
console.log(emp5);

//arrow function
let multiplyArrow=(x,y)=>{
    return x*y;
}
let resultArrow=multiplyArrow(7,8);
console.log(resultArrow);//56
//arrow function with implicit return

//immediate invoking function expression(IIFE)
(function(name){
    console.log(`IIFE executed ${name}`);
})("Dharshini");
//arrow function roles
//role of this keyword
let arrow=()=>{
    console.log(this);
    window.console.log("hello");
} 
arrow();//window object

function outerFunc1(){
    console.log(this);
    function innerFunc(){
        console.log(this);
    }   
    innerFunc();
}
outerFunc1();//window object

//lexical scoping in js means inner function can access variables of outer function
//closure-function along with its lexical scope
function outerFunc(){
    let a=10;
    return function (){
        //  let a=10;
        console.log(a++);
    }
}
let result=outerFunc();
result();  
result();  
result();
result();
result();
//higher order function
function hof(func){
    console.log("Inside higher order function");
    func();
}
function callback(){
    console.log("Inside callback function");
}
hof(callback);//passing function as an argument

function hofReturn(){
    return function(){
        console.log("Function returned from higher order function");
    }
}
let returnedFunc=hofReturn();
returnedFunc();//calling the returned function
//or directly
hofReturn()();
function LandingPage(reg,log){
    console.log("Welcome to the Landing Page");
}
function Register(){
    console.log("User registered successfully");
}
function Login(){
    console.log("User logged in successfully");
}
LandingPage(Register(),Login());

//generator function with yield keyword
function* generatorFun(){
    console.log("Generator started");
}
generatorFun();//no output
console.log(generatorFun());//generatorFun {<suspended>}
generatorFun().next();//Generator started  {value: undefined, done: true}
//generator with yield
function* genNumbers(){
    yield 1;
    yield 2;
    yield 3;
}
let genObj=genNumbers();
console.log(genObj.next().value);//{value: 1, done: false}
console.log(genObj.next().value);//{value: 2, done: false}
console.log(genObj.next().value);//{value: 3, done: false}
console.log(genObj.next().value);//{value: undefined, done: true}
genObj.next();//done:true