document.getElementById("btn").addEventListener("click" , ()=>{
    alert("Lets start practing let var const indepth");
});

console.log(y); // output : undefined
var y = 10;

// console.log(z); // output : Reference Error
// let z = 10;


// {
//   var a = 10;
// }
// console.log(a); // 10



// {
//   let b = 20;
// }
// console.log(b);


// var a = 1;
// let b = 2;

// {
//   var a = 3;
//   let b = 4;
//   console.log(a); // 3
//   console.log(b); // 4
// }

// console.log(a); // 3
// console.log(b); // 2




// function test() {
//   console.log(x); // Reference Error
//   let x = 10;
// }
// test();


// var x = 10;
// {
//   let x = 20;
//   {
//     var x = 30;
//   }
// }
// console.log(x); // SyntaxError: Identifier 'x' has already been declared



// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// // Explain the difference in outputs.


// const obj = { count: 0 };
// obj.count++;
// console.log(obj.count); // 1




// function hoistTest() {
//   console.log(a); // undefined
//   console.log(b); // ReferenceError: Cannot access 'b' before initialization
//   var a = 10;
//   let b = 20;
// }
// hoistTest();





// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1,2,3,4]

// arr = [1, 2, 3, 4]; // [1,2,3,4,5]



// {
//   const a = 5;
//   {
//     const a = 6;
//     console.log(a); // 6
//   }
//   console.log(a); // 5
// }


// let x = 1;
// if (x) {
//   let x = 2;
//   console.log(x); // 
// }
// console.log(x); // 
// var x = 3;
// console.log(x); // output : SyntaxError: Identifier 'x' has already been declared




//========================================== Array==============================================================
let myArray = [1,2,3,4] ;

console.log(myArray);
myArray.push(6);
console.log(myArray.push(6)); // its return the element of new array

console.log(myArray.pop()); // it return the remove element

// slice vs splice 
let arr = [10, 20, 30, 40, 50];
console.log(arr);
console.log(arr.slice(1, 3)); // its does not change the original array , its return its copy
console.log(arr);


let arr1 = [10, 20, 30, 40, 50];
let removed = arr1.splice(1, 2);

console.log(removed); // [20, 30]
console.log(arr1);     // [10, 40, 50]

// indexOf() vs join() vs includes()
let colors = ["red", "blue", "green", "blue"];

console.log(colors.indexOf("blue"));     // 1
console.log(colors.indexOf("yellow"));   // -1 (not found)
console.log(colors.indexOf("blue", 2));  // 3 (skips the first "blue")

let nums = [10, 20, 30, 40];

console.log(nums.includes(20));    // true
console.log(nums.includes(50));    // false
console.log(nums.includes(30, 3)); // false (search from index 3)



let words = ["Hello", "World"];

console.log(words.join());        // "Hello,World"
console.log(words.join(" "));     // "Hello World"
console.log(words.join("-"));     // "Hello-World"


// concat
let letters = ['a', 'b'];
let result = letters.concat(['c', 'd'], 'e', ['f', 'g']);

console.log(result); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']



//================= OBJECT ===================


// creation of object using {}
const object = {firstName : "Ankit" , lastName : "Tiwari" , dob : "02-04-2002" , age : "23"};


// document.getElementById("demo").innerHTML = object.firstName + object.lastName + "age" + "is" + object.age + "year old."; 

// creation of object using new keyword

const person = new Object ();
person.firstname = "Ank";
person.lastname = "Tiw";
person.age = 23 ;

console.log(person);

// we can declare properties and method inside object using the property:value pair , or key:value pair 

const person = {
    first : "ankit",
    last : "Tiwari",
    age : 23,
    fullName : function () {
         return this.first + " " + this.last ;
    }
};

document.getElementById("demo").innerHTML = person.fullName();

// In JavaScript, almost "everything" is an object.

// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects
// All JavaScript values, except primitives, are objects.

// JavaScript Objects are Mutable :== share the same memory address

const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// now x is also a object ans share a smae memory address of person , any change in x it change the value of person 
const x = person;

// This will change age in person:
x.age = 10;


const person = {
  firstName: "John",
  lastName : "Doe",
  age      :  50
};

let x = "firstName";
let y = "age";
document.getElementById("demo").innerHTML = person[x] + " is " + person[y] + " years old.";

// modification in javascript property object

const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};
// access 
console.log(person.firstName);

// adding new property
person.nationality = "indian";
console.log (nationality);

//delete
delete person.age;

// practice if object is empty and you trying to access

let empty = {};
console.log(empty.name); // undefined 

// Nested  object
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
myObj.myCars.car2;


const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};

// Add a Method
person.name = function() {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(person.name());


// How to Display JavaScript Objects?
// Displaying a JavaScript object will output [object Object].

const person = {
    firstname : "Ankit",
    lastName : "Tiwari",
}

console.log(person); // it will give [object Object]


// displaying object using the property value , we have seen it earlier
// Now we are going to see how to dispaly the poperties using the loop

let person = {
    name : "John",
    age : 30 ,
    city : "New Work",
}
// Traverse using for-in loop 
//Build the text
let text = "";
for(let x in person){
    text += person[x] + " ";
};

console.log(text);


// object.value create a array from object 

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
// const myArray = Object.values(person);
// console.log(myArray);// [ 'John', 30, 'New York' ]

//  JSON.stringify()
let ankit = {
    name : "ankit",
    city : "Balrampur",
    age : 23
};

const myString = JSON.stringify(ankit);
console.log(myString);// {"name":"ankit","city":"Balrampur","age":23} json format mein string print hoga


// object entries
const user = {
  name: "Ankit",
  age: 23,
  role: "Developer"
};

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
//output 
// name: Ankit
// age: 23
// role: Developer

// Adding property to Constructor

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create 2 Person Objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

myFather.nationality = "English"; // this will only add to myFather object
Person.nationality = "English"; // this will not work 

myMother.nationality ; // it will give unefined 
// i want to add property in Person object
Person.prototype.nationality = "English"; // this will add the property to Person Object


// Constructor Function Methods , we can add function
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

myMother.changeName = function (name) {  // The new method will be added to myMother. Not to any other Person Objects.
  this.lastName = name;
}



// You cannot add a new method to an object constructor function.

// This code will produce a TypeError:

Person.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe"); //  TypeError: myMother.changeName is not a function

// if we want to add method to person object then we have to add like this :-

Person.prototype.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");


// Global object :- like
//The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math

// native object  :- like

// new Object()   // A new Object object
// new Array()    // A new Array object


// Note :- 
// "";           // primitive string
// 0;            // primitive number
// false;        // primitive boolean

// {};           // object object
// [];           // array object
// /()/          // regexp object
// function(){}; // function

// object.assign()

const obj1 = {name : "Ankit" , age : 23}; 
const obj2 = {lastname : "tiwari" , reverse_age : 32};

console.log(Object.assign(obj1 , obj2)); // return target modified object obj1 return hoga


// fromEntries 

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits); // it will make object from array


// object.keys()
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get the Keys
const keys = Object.keys(person); // [firstname , lastname , age , eyecolor]
const values = Object.values(person);//[john , Doe , 50 , blue]




// traverse over the properties on object 
const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};

let txt = "";
for (let x in person) {
  txt += person[x];
}


const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
}

// Display all Properties
document.getElementById("demo").innerHTML = Object.getOwnPropertyNames(person); // get all property names 


const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Change the "language" Property
Object.defineProperty(person, "language", {enumerable:false});

// Get all Enumerable Properties in an array
Object.keys(person);

// object preventation
const person = {firstName:"John", lastName:"Doe"};
Object.preventExtensions(person);

// This will throw an error
person.nationality = "English"; // object is prevented we cannot change

// Create Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Seal Object
Object.seal(person) ;


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Freeze Object
Object.freeze(person);

// ===================Loop ===========================================

// for loop
for (let i = 0 ; i < n ; i++ ){
  console.log(i);
  i =  i+1 
}


// Two good case of for loop
var i = 5 ;

for (var i  = 0 ; i < 10 ; i++ ){
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
}
console.log(i); // 10

let i = 5 ;

for (let i  = 0 ; i < 10 ; i++ ){
    console.log(i);// 0 1 2 3 4 5 6 7 8  9
}
console.log(i); // 5


for (; i < 5; i++) {
  console.log(i);
} // it will give refernece error , because i is not defined for this for loop



// while 

let i = 0 ; 
while ( i < 10 ){
  console.log(i);
}

// do while 
let i  =0 ;
do {
  console.log(i);
}while(i < 10);

// for-of

let arr2 = ["Ank", "Tiw", "How", "are", "you"];

for (let x of arr2) {
  console.log(x);
}


// for-in over the object
const person = {fname:"John", lname:"Doe", age:25};

let text1 = "";
for (let x in person) {
  text1 += person[x];
}

// for-each

let arr5 = ["Ank" , "Tiw" , "How" , "are" , "you"];

arr5.forEach ((item , index , arr) => {
    console.log(item);
})

// foreach does not return anything
const result1 = [1, 2, 3].forEach(num => num * 2);
console.log(result1); // undefined

// foreach skip empty 
let arr3 = [1, , 3]; // index 1 is empty

arr3.forEach((val, i) => {
  console.log(i, val);
});


// break 
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop entirely
  }
  console.log(i);
}

// continue 

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // it only skip one step
  }
  console.log(i);
}


// ===========================Function==========


// Function Parameters : what function take while definning the function 
// Function argument : when we call the function then what we pass that is functio arguments




//If a function is called with missing arguments (less than declared), the missing values are set to undefined
function myFunction(x, y) {
  console.log(x); // 4
  console.log(y);// undefined
  }
myFunction(4);

// that why give default paarameter
function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5);

// rest parameter

function sum (... args){
    console.log(args); // [ 23, 4, 5, 5,7, 8, 9]
}
sum(23,4,5,5,7,8,9);


function sum (x , y , ... args){
    console.log(args);
}
sum(23,4,5,5,7,8,9);


// arguments 
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

// if a function is declared with too many arguments , you can access all the argument by using arguments properties

// passed by value
function modifyValue(x) {
  x = x + 10;
  console.log("Inside:", x);
}

let a = 5;
modifyValue(a);
console.log("Outside:", a);

// passed object as refernce 
function modifyObject(obj) {
  obj.name = "Ankit";
}

let person = { name: "John" };
modifyObject(person);
console.log(person.name); // ✅ Ankit

// invoking a function

function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2); // 20
window.myFunction(10, 2); // 20 both are same thing

// generator  function 
function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generateNums();
console.log(gen.next()); 


// this 

// call
const obj3 = {
  name: "Ankit",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

const obj4 = {
  name: "Rahul"
};

obj3.greet.call(obj4); // ✅ Hello Rahul

// apply 

// bind
