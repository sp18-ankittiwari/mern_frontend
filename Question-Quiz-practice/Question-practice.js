


// ======================================Hackerrank ===========================================================


// Question :- Complete the following functions in the editor below:

// getArea(length, width): Calculate and return the area of a rectangle.
// getPerimeter(length, width): Calculate and return the perimeter of a rectangle.

function getArea(length, width) {
    let area;
    // Write your code here
    area = length*width ;
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2*(length + width);
    return perimeter;
}

// FUCNTION

// Question : Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).
// Code : 
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}





// Question 2:  It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by 2.
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.

// Code 
console.log("Hello World");

function modifyArray(nums) {3
    return nums.map((num) => {
        if (num % 2 === 0){
            return num * 2;
        } else {
            return num * 3;
        }
    });
}

const nums = [2, 3, 4, 5, 6, 7, 8];
const modified = modifyArray(nums);
console.log("Modified array", modified);




// ======================================Leetcode ====================================================


// Question : Return Length of Arguments Passed
// Code

var argumentsLength = function(...args) {
    const temp = args.length ;
    return temp;
};























