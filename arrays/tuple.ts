// Tuples in TypeScript
// A tuple is a special type of array with fixed size and known types at each index.
// You can define a tuple using square brackets [] with specific types for each position.

// Tuple Declaration and Initialization
console.log("Tuple Declaration and Initialization:");
let tuple1: [number, string] = [1, "Hello"];
let tuple2: [boolean, number, string] = [true, 42, "World"];

// Accessing tuple elements
console.log("Accessing tuple elements:");
console.log(`First element of tuple1: ${tuple1[0]}`);   
console.log(`Second element of tuple1: ${tuple1[1]}`);
console.log(`First element of tuple2: ${tuple2[0]}`);   
console.log(`Second element of tuple2: ${tuple2[1]}`);
console.log(`Third element of tuple2: ${tuple2[2]}`);

// Iterating over tuples
console.log("Iterating over tuples:");
tuple1.forEach((value, index) => {
    console.log(`Index ${index}: ${value}`);
});
tuple2.forEach((value, index) => {
    console.log(`Index ${index}: ${value}`);
});

// Itrating using for...of loop
console.log("Iterating over tuple1 using for...of loop:");
for (let value of tuple1) {
    console.log(value);
}
// Note: for...of loop works well with tuples as they are iterable

// Iterating using for...in loop
console.log("Iterating over tuple2 using for...in loop:");  
for (let index in tuple2) {
    console.log(`Index ${index}: ${tuple2[index as any]}`); // Type assertion to avoid error
}
// Note: for...in loop iterates over indices, so we need to use type assertion

console.log("Iterating over tuple2 using traditional for loop:");
for (let i = 0; i < tuple2.length; i++) {
    console.log(`Index ${i}: ${tuple2[i]}`);
}
// Note: Traditional for loop works well with tuples as they have a fixed length

// Printing lengths of tuples
console.log("Lengths of tuples:");
console.log(`Length of tuple1: ${tuple1.length}`);
console.log(`Length of tuple2: ${tuple2.length}`);

// Array of Tuples
console.log("Array of Tuples:");
let arrayOfTuples: [number, string][] = [[1, "One"], [2, "Two"], [3, "Three"]];
arrayOfTuples.forEach((tuple, index) => {
    console.log(`Tuple at index ${index}: ${tuple[0]}, ${tuple[1]}`);
});
// Note: Array of tuples can be iterated similarly to regular arrays

// Accessing specific elements in array of tuples
console.log("Accessing specific elements in array of tuples:");
console.log(`First tuple first element: ${arrayOfTuples[0][0]}`);
console.log(`Second tuple second element: ${arrayOfTuples[1][1]}`);
console.log(`Third tuple first element: ${arrayOfTuples[2][0]}`);