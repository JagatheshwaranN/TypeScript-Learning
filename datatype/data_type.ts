// TypeScript is a statically typed superset of JavaScript.
console.log("TypeScript Statically Type Language:");
var age = 25; // Number
console.log("Type:", typeof(age)); // Output: Type: number
console.log("Age:", age);

//age = "twenty five"; // Error: Type 'string' is not assignable to type 'number'

let data: string = "John"; // String
console.log("Type:", typeof(data)); // Output: Type: string
console.log("Data:", data)


// Typescript is type safe language
console.log("Type Safety in TypeScript:");
// let num1:number = "100"; // Error: Type 'string' is not assignable to type 'number'
let num1:number = 100; // Number
let num2 = 50; // Number
let totalValue = num1 + num2; // String concatenation
console.log("Total Value:", totalValue); // Output: Total Value: 10050

// Type/DataType, Annotation, and Type Inference
let doorNo:number = 204; // Number
// number // DataType
// :number // Annotation - The process of explicitly specifying the type of a variable

// Type Inference - The process by which TypeScript automatically deduces the type of a variable 
// based on its initial value
console.log("Door No:", doorNo); // Output: Door No: 204
let streetName = "MG Road"; // Here, TypeScript infers the type as string

// Data Types in TypeScript
console.log("Data Types in TypeScript:");
// 1. Primitive Data Types
console.log("1. Primitive Data Types:");
// Primitive data types are the most basic data types in TypeScript. They include:
// a. Number
// b. String
// c. Boolean
// d. Null
// e. Undefined
// f. Symbol
// g. BigInt
// h. Any
// i. Void
// j. Never
// k. Union Type
// l. Unknown

// 2. Non-Primitive Data Types
console.log("2. Non-Primitive Data Types:");
// Non-primitive data types are more complex data types that can hold multiple values or objects. They include:
// a. Array 
// b. Tuple
// d. Object
// e. Function
// f. Class
// g. Interface
// etc.

// Example of Primitive Data Types
// Number Data Type can be defined using integer or floating-point numbers
let count: number = 10; // Number
console.log("Count:", count); // Output: Count: 10
let bagPrice: number = 99.99; // Number
console.log("Bag Price:", bagPrice); // Output: Bag Price: 99.99

// String Data Type can be defined using single quotes, double quotes, or backticks (template literals)
let firstName: string = "Alice"; // String
console.log("First Name:", firstName); // Output: First Name: Alice
let lastName: string = 'Smith'; // String
console.log("Last Name:", lastName); // Output: Last Name: Smith
let greeting: string = `Hello, ${firstName} ${lastName}!`; // String (Template Literal)
console.log("Greeting:", greeting); // Output: Greeting: Hello, Alice Smith!

// Boolean Data Type can be defined using true or false
let isActive: boolean = true; // Boolean
console.log("Is Active:", isActive); // Output: Is Active: true
let isAdmin: boolean = false; // Boolean
console.log("Is Admin:", isAdmin); // Output: Is Admin: false

// Null Data Type represents the intentional absence of any object value
let middleName:null = null;
console.log("Middle Name:", middleName); // Output: Middle Name: null

// Undefined Data Type represents a variable that has been declared but not assigned a value    
let address:undefined; // Undefined
console.log("Address:", address); // Output: Address: undefined

// Any Data Type can hold any type of value
// Have to avoid using 'any' as it defeats the purpose of TypeScript's type safety
let randomValue: any = 42; // Any
console.log("Random Value (Number):", randomValue); // Output: Random Value (Number): 42
randomValue = "Hello"; // Any
console.log("Random Value (String):", randomValue); // Output: Random Value (String): Hello

// Union Type allows a variable to hold multiple types
let multiType: number | string; // Union Type
multiType = 100; // Number
console.log("Multi Type (Number):", multiType); // Output: Multi Type (Number): 100
multiType = "One Hundred"; // String
console.log("Multi Type (String):", multiType); // Output: Multi Type (String): One Hundred

// Void Data Type represents the absence of any type, typically used for functions that do not return a value
function logMessage(message: string): void {
    console.log("Log Message:", message);
}
logMessage("This is a log message."); // Output: Log Message: This is a log message.

// Never Data Type represents a value that never occurs, typically used for functions that always throw an 
// error or never return
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}
// Uncommenting the following line will throw an error
// throwError("This is an error message."); // Output: Uncaught Error: This is an error message.

// Symbol Data Type represents a unique identifier
let sym1: symbol = Symbol("unique");
let sym2: symbol = Symbol("unique");
console.log("Symbol 1:", sym1); // Output: Symbol 1: Symbol(unique)
console.log("Symbol 2:", sym2); // Output: Symbol 2: Symbol(unique)
console.log("Are symbols equal?", sym1 === sym2); // Output: Are symbols equal? false   

// BigInt Data Type represents integers with arbitrary precision
let bigIntValue: bigint = 9007199254741991n; // BigInt
console.log("BigInt Value:", bigIntValue); // Output: BigInt Value: 9007199254741991
let anotherBigInt: bigint = BigInt(9007199254741991); // BigInt
console.log("Another BigInt Value:", anotherBigInt); // Output: Another BigInt Value: 9007199254741991

// Unknown Data Type represents a value that could be any type
let unknownValue: unknown; // Unknown
unknownValue = 10; // Number
console.log("Unknown Value (Number):", unknownValue); // Output: Unknown Value (Number): 10
unknownValue = "Hello"; // String
console.log("Unknown Value (String):", unknownValue); // Output: Unknown Value (String): Hello
// unknownValue = true; // Boolean
// console.log("Unknown Value (Boolean):", unknownValue); // Output: Unknown Value (Boolean): true
// To use unknown type, we need to perform type assertion or type checking  
if (typeof unknownValue === "string") {
    console.log("Unknown Value as String:", unknownValue.toUpperCase()); // Output: Unknown Value as String: HELLO
}

