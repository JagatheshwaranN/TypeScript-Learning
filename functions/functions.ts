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

// Function with Optional Parameters
console.log("Function with Optional Parameters");
// Optional parameters are defined by appending a question mark (?) to the parameter name.
function buildName(firstName: string, lastName?: string): string {  
    if (lastName) {
        return `${firstName} ${lastName}`;
    }   
    return firstName;
}
console.log(buildName("John")); // Output: John
console.log(buildName("John", "Doe")); // Output: John Doe

// Function with Default Parameters
console.log("Function with Default Parameters");
// Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.
function multiply(a: number, b: number = 1): number {
    return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10
// Note: In TypeScript, parameters with default values are treated as optional.

// Function with Anonymous Function
console.log("Function with Anonymous Function");
// Anonymous functions are often used as arguments to other functions, such as in array methods like map, filter, and reduce.
const square = function(x: number): number {
    return x * x;
}
console.log(square(4)); // Output: 16
// Note: The function above is assigned to a variable named 'square'. 
// It can be called using this variable name.

// Function with Arrow Function
console.log("Function with Arrow Function");
// Arrow functions provide a concise syntax for writing functions and lexically bind the 'this' value.
const divide = (x: number, y: number): number => x / y;
console.log(divide(10, 2)); // Output: 5
// Note: Arrow functions are always anonymous. They are often used for short functions.
// They are especially useful in functional programming and when working with callbacks.

// Function with Function Overloading
console.log("Function with Function Overloading");  
// Function overloading allows you to define multiple signatures for a function.
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b; // Concatenate strings
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b; // Add numbers
    }
    throw new Error("Invalid arguments");
}
console.log(combine("Hello, ", "World!")); // Output: Hello, World!
console.log(combine(10, 20)); // Output: 30
// console.log(combine("Hello", 10)); // Error: Invalid arguments

// Why Callback Functions?
// Callback functions are used to handle asynchronous operations, such as fetching data
// from a server, reading files, or handling events. They allow you to define what should
// happen once the asynchronous operation is complete, without blocking the main thread of
// execution.

// Function with Callback
console.log("Function with Callback");  

// A callback function is a function passed into another function as an argument, which is
// then invoked inside the outer function to complete some kind of routine or action.
function greetUser(name: string, callback: (greeting: string) => void): void {
    const greetingMessage = `Hello, ${name}!`;
    callback(greetingMessage); // Invoke the callback with the greeting message
}
greetUser("Bob", logGreeting);  // Output: Hello, Bob!

// Callback function definition
function logGreeting(message: string): void {
    console.log(message);
}

// Example of an asynchronous operation using a callback
function fetchData(callback: (data: string) => void): void {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        const data = "Sample Data";
        callback(data); // Invoke the callback with the fetched data
    }, 1000);
}       
fetchData((data) => {
    console.log("Data received:", data); // Output: Data received: Sample Data
});