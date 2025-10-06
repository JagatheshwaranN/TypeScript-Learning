// Functions in TypeScript
// A function is a block of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).
console.log("Functions in TypeScript");

// Syntax
// function functionName(parameters): returnType {
//     // function body
//     return value; // if returnType is not void
// }

// Function with Parameters and no Return Value
console.log("Function with Parameters and no Return Value");
function printMessage(message: string): void {
    console.log(message);
}
printMessage("Hello, World!"); // Output: Hello, World!

// Function with Parameters and Return Value
console.log("Function with Parameters and Return Value");
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

function add(a:number, b:number):number {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// Function with Rest Parameters
console.log("Function with Rest Parameters");
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
function sum(...numbers: number[]): number {
 let total: number = 0;
 for (const num of numbers) {
     total += num;
 }    
 return total;
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Function with Rest Parameters with multiple types
console.log("Function with Rest Parameters with multiple types");
function displayInfo(id: number, ...info: (string | number)[]): void {
    console.log(`ID: ${id}`);
    console.log("Info:");   
    for (const item of info) {
        console.log(` - ${item}`);
    }   
}
displayInfo(101, "Alice", 30, "Engineer", 50000);
// Output:
// ID: 101
// Info:
//  - Alice
//  - 30
//  - Engineer
//  - 50000