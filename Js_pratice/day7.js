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


