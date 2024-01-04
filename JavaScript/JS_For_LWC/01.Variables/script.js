console.log("Welcome To JavaScript Varibles");

// Variables are the containers for storing data values.
// var, let, const are reserved keywords for declaring variables in JavaScript.
// In js identifiers are case-sensitive.
// Assign value to variables using '=' operator.

/* *********** var keyword ************ */
// it can be updated and also can be re-declared
// var support global scope and function scope .But not block scope(in block scope var value will be append to window)

// global scope
var fullName = 'Vinay Kovvuri';
console.log("fullName: "+fullName);
//console.log("fullname: "+fullname); // you will see 'fullname is not defined'
console.log("window.fullName: "+window.fullName);
// updated
fullName = 'Kovvuri Vinay Kumar Reddy';
console.log("fullName: "+fullName);
console.log("typeof fullName: "+ (typeof fullName))

// re-declared
var fullName = 2412;
console.log("fullName: "+fullName);
console.log("typeof fullName: "+ (typeof fullName))

var course = 'JavaScript';
var time = '2 hours'
console.log("course before funtion: "+course);
console.log("time before funtion: "+time);
// function scope
function sample() {
    var course = "LWC";
    time = "3"
    console.log("course re-declared in funtion: "+course);
    console.log("time updated in funtion: "+time);
}
sample();

console.log("course after funtion: "+course);
console.log("time after funtion: "+time);

/* *********** let keyword ************ */
// let can be updated and cannot be re-declared
// let support block scope and function scope. But not global scope
let x = "Ram"
console.log('x = '+x);
x = 'vinay';
console.log('x = '+x);
console.log('window.x = '+window.x); // you will see 'window.x = undefined'

function abc() {
    let nameOne = 'Satya';
    console.log('nameOne inside function: '+nameOne);
}
abc();
// console.log('nameOne outside function: '+nameOne); // nameOne is not defined

if(true) {
    let y = 6;
    console.log('y ='+y);
}
// console.log('y ='+y); //y is not defined

/* *********** const keyword ************ */
// const cannot be updated and re-declared.
// const support block scope and function scope.

const z = 20;
console.log('z = '+z);
// z= 30; // you will see 'Assignment to constant variable.'
// const z = 10; //Cannot redeclare block-scoped variable 'z'

function xyz() {
    const xy = 10;
    console.log('xy = '+xy);
}
xyz();
// console.log('xy = '+xy); //xy is not defined

if(true){
    const xy1 = 10;
    console.log('xy1 = '+xy1);
}
// console.log('xy1 = '+xy1); //xy1 is not defined