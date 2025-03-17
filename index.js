// Arrow Function Example 1: Add two numbers
const add = (a, b) => a + b;
console.log(add(10, 5)); // 15

// Arrow Function Example 2: Square a number
const square = num => num ** 2;
console.log(square(5)); // 25

// Arrow Function Example 3: Using map with arrow function
const nums = [1, 2, 3, 4];
const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// using a function declaration(hoisting) to define the function
console.log(divide(2000, 100));

function divide(a, b) {
    return a / b;
}


// Arrow Function Example 4: A function that calculates the sum and logs steps
const sumWithLog = (a, b) => {
  console.log(`Adding ${a} and ${b}`);
  return a + b;  // Return sum after logging
};
console.log(sumWithLog(3, 4));  // "Adding 3 and 4", 7
