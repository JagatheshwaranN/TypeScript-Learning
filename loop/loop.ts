//  Loop in TypeScript
// Loop is used to execute a block of code repeatedly until a certain condition is met.
// TypeScript supports several types of loops, including for, while, do...while, and for...in loops.

// 1. For Loop
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0 1 2 3 4

// 2. While Loop
console.log("While Loop:");
let j = 0;  
while (j < 5) {
    console.log(j);
    j++;
}
// Output: 0 1 2 3 4

// 3. Do...While Loop
console.log("Do...While Loop:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
// Output: 0 1 2 3 4

// Break and Continue Statements
console.log("Break and Continue:");
for (let m = 0; m < 10; m++) {
    if (m === 5) {
        break; // Exit the loop when m is 5
    }
    if (m % 2 === 0) {
        continue; // Skip even numbers
    }   
    console.log(m); // Output: 1 3
}

// 4. For...In Loop
console.log("For...In Loop:");
const person = { name: "Alice", age: 25, city: "New York" };
for (const key in person) {
    console.log(`${key}: ${person[key as keyof typeof person]}`);
}
// Output: name: Alice age: 25 city: New York
// Note: In the for...in loop, we use 'keyof typeof person' to ensure type safety when accessing object properties.

// For...Of Loop (for iterable objects)
console.log("For...Of Loop:");
const numbers = [10, 20, 30, 40, 50];   
for (const num of numbers) {
    console.log(num);
}
// Output: 10 20 30 40 50
// Note: The for...of loop is used to iterate over iterable objects like arrays, strings, etc.
// It provides a simpler syntax compared to traditional loops when working with collections.

// forEach Method (Array)
console.log("forEach Method:"); 
numbers.forEach((num) => {
    console.log(num);
});
// Output: 10 20 30 40 50
// Note: The forEach method is an array method that executes a provided function once for each array element.
// It is often used as an alternative to traditional loops for iterating over arrays.