console.log("Welcome To JavaScript Spread Operator");

// 1. Expanding of string
let course = "JavaScript";
let arr = [...course];
console.log("arr: "+arr);

// 2. Combining and adding value to array
let arr1 = ["Apple", "Banana"];
let arr2 = ["Orange", "Watermelon"];
let arr3 = ["Cherry", ...arr1, ...arr2, "Mango"];
console.log("arr1: "+arr1);
console.log("arr2: "+arr2);
console.log("arr3: "+arr3);

// 3. Combining objects
let course1 = {name : "Salesforce", fee : "Rs 5000", duration : "2 months"};
let course2 = {name : "LWC", duration : "1 months"};
let course3 = {...course1, ...course2};
console.log(course3);

// 5. Shallow copy
let arr4 = ["a","b"];
let arr5 = [...arr4];
arr5.push(20);
console.log(arr4);
console.log(arr5);