// TypeScript Operators

// Arithmetic Operators
console.log("Arithmetic Operators:");
let a: number = 10;
let b: number = 5;  
let sum: number = a + b; // Addition
let difference: number = a - b; // Subtraction
let product: number = a * b; // Multiplication
let quotient: number = a / b; // Division
let remainder: number = a % b; // Modulus
let exponentiation: number = a ** b; // Exponentiation

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
console.log(`Remainder: ${remainder}`);
console.log(`Exponentiation: ${exponentiation}`);

// Assignment Operators
console.log("Assignment Operators:");
let x: number = 20;
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 4; // x = x / 4
x %= 3; // x = x % 3
x **= 2; // x = x ** 2  
console.log(`Final value of x: ${x}`);

// Relational Operators
console.log("Relational Operators:");
let isEqual: boolean = (a == b); // Equal to
let isNotEqual: boolean = (a != b); // Not equal to
let isStrictEqual: boolean = (a === b); // Strict equal to
let isStrictNotEqual: boolean = (a !== b); // Strict not equal to
let isGreater: boolean = (a > b); // Greater than
let isLess: boolean = (a < b); // Less than
let isGreaterOrEqual: boolean = (a >= b); // Greater than or equal to
let isLessOrEqual: boolean = (a <= b); // Less than or equal to     
console.log(`isEqual: ${isEqual}`);
console.log(`isNotEqual: ${isNotEqual}`);
console.log(`isStrictEqual: ${isStrictEqual}`);
console.log(`isStrictNotEqual: ${isStrictNotEqual}`);
console.log(`isGreater: ${isGreater}`);
console.log(`isLess: ${isLess}`);
console.log(`isGreaterOrEqual: ${isGreaterOrEqual}`);
console.log(`isLessOrEqual: ${isLessOrEqual}`);
// Note: Difference between '==' and '==='
// '==' checks for value equality with type coercion
// '===' checks for both value and type equality without type coercion
console.log(`5 == '5': ${5 == '5'}`); // true, because of type coercion
console.log(`5 === '5': ${5 === '5'}`); // false, because types are different

// Logical Operators
console.log("Logical Operators:");
let p: boolean = true;
let q: boolean = false;
let andResult: boolean = p && q; // Logical AND
let orResult: boolean = p || q; // Logical OR
let notResult: boolean = !p; // Logical NOT
console.log(`AND Result: ${andResult}`);
console.log(`OR Result: ${orResult}`);
console.log(`NOT Result: ${notResult}`);

// Use of Logical Operators with Relational Operators
let isInRange: boolean = (a > 5 && a < 15); // true if a is between 5 and 15
let isOutOfRange: boolean = (a < 5 || a > 15); // true if a is less than 5 or greater than 15
console.log(`isInRange: ${isInRange}`);
console.log(`isOutOfRange: ${isOutOfRange}`);

// Increment and Decrement Operators
console.log("Increment and Decrement Operators:");
let count: number = 0;
console.log(`Initial count: ${count}`); // count is 0
count++; // Post-increment
console.log(`After post-increment: ${count}`); // count is now 1
++count;
console.log(`After pre-increment: ${count}`); // count is now 2
count--; // Post-decrement
console.log(`After post-decrement: ${count}`); // count is now 1
--count;
console.log(`After pre-decrement: ${count}`);   // count is now 0

// Note: Difference between post-increment (x++) and pre-increment (++x)
let n: number = 5;
let y: number = n++; // y gets 5, n becomes 6
console.log(`y (post-increment): ${y}, x after post-increment: ${n}`);
n = 5; // reset x
let z: number = ++n; // n becomes 6, z gets 6
console.log(`z (pre-increment): ${z}, x after pre-increment: ${n}`);        
// Similar behavior for post-decrement (n--) and pre-decrement (--n)

// Ternary Operator
console.log("Ternary Operator:");
// The ternary operator is a shorthand for an if-else statement
// Syntax: condition ? expressionIfTrue : expressionIfFalse
let age: number = 18;
let eligibility: string = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(`Age: ${age}, Eligibility: ${eligibility}`);

// Typeof Operator
console.log("Typeof Operator:");
let str: string = "Hello, TypeScript!";
let num: number = 42;
let bool: boolean = true;
let obj: object = { name: "Alice", age: 30 };
let arr: number[] = [1, 2, 3];  
let func: Function = function() { return "I am a function"; };
console.log(`Type of str: ${typeof str}`);  // string
console.log(`Type of num: ${typeof num}`);  // number
console.log(`Type of bool: ${typeof bool}`);  // boolean
console.log(`Type of obj: ${typeof obj}`);  // object
console.log(`Type of arr: ${typeof arr}`);  // object (arrays are of type object in JavaScript/TypeScript)
console.log(`Type of func: ${typeof func}`);  // function
// Note: 'typeof' can be useful for type checking and debugging

// Bitwise Operators
console.log("Bitwise Operators:");
let m: number = 5; // Binary: 0101
let n2: number = 3; // Binary: 0011
let andBitwise: number = m & n2; // Bitwise AND: 0001 (1 in decimal)
let orBitwise: number = m | n2; // Bitwise OR: 0111 (7 in decimal)
let xorBitwise: number = m ^ n2; // Bitwise XOR: 0110 (6 in decimal)
let notBitwise: number = ~m; // Bitwise NOT: 1010 (-6 in decimal, two's complement)
let leftShift: number = m << 1; // Left shift: 1010 (10 in decimal)
let rightShift: number = m >> 1; // Right shift: 0010 (2 in decimal)
console.log(`Bitwise AND: ${andBitwise}`);
console.log(`Bitwise OR: ${orBitwise}`);
console.log(`Bitwise XOR: ${xorBitwise}`);
console.log(`Bitwise NOT: ${notBitwise}`);
console.log(`Left Shift: ${leftShift}`);
console.log(`Right Shift: ${rightShift}`);
// Note: Bitwise operators work on the binary representations of numbers
// They are often used in low-level programming, graphics, and performance optimization tasks   
// However, they are less commonly used in everyday TypeScript programming

// Nullish Coalescing Operator
console.log("Nullish Coalescing Operator:");
// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand 
// is null or undefined
// It is useful for providing default values
// Syntax: value1 ?? value2
let undefinedValue: string | null = null;
let defaultValue: string = "Default Value";
let result: string = undefinedValue ?? defaultValue; // result will be "Default Value" because undefinedValue is null
console.log(`Result using Nullish Coalescing Operator: ${result}`); // Output: Default Value     

console.log("Comparison: Logical OR (||) vs Nullish Coalescing (??)");

let a1: any = null;
let a2: any = undefined;
let a3: any = 0;
let a4: any = "";
let a5: any = false;

// Using Logical OR (||)
console.log("Using || Operator:");
console.log(a1 || "Default"); // Output: Default   (null is falsy)
console.log(a2 || "Default"); // Output: Default   (undefined is falsy)
console.log(a3 || "Default"); // Output: Default   (0 is falsy)
console.log(a4 || "Default"); // Output: Default   ('' is falsy)
console.log(a5 || "Default"); // Output: Default   (false is falsy)

// Using Nullish Coalescing (??)
console.log("\nUsing ?? Operator:");
console.log(a1 ?? "Default"); // Output: Default   (null is nullish)
console.log(a2 ?? "Default"); // Output: Default   (undefined is nullish)
console.log(a3 ?? "Default"); // Output: 0         (0 is NOT nullish)
console.log(a4 ?? "Default"); // Output: ''        ('' is NOT nullish)
console.log(a5 ?? "Default"); // Output: false     (false is NOT nullish)
// Summary:
// The || operator returns the right-hand operand if the left-hand operand is falsy 
// (null, undefined, 0, '', false).
// The ?? operator returns the right-hand operand only if the left-hand operand is 
// null or undefined.
// Use ?? when you want to provide defaults only for nullish values, preserving other
// falsy values like 0, '', and false.

// Shortcircuit Evaluation
console.log("Shortcircuit Evaluation:");
// Shortcircuit evaluation occurs with logical operators (&& and ||)
// In the case of &&, if the first operand is falsy, the second operand is not evaluated
// In the case of ||, if the first operand is truthy, the second operand is not evaluated
let shortCircuitA: boolean = false && (console.log("This will not be printed") || true);    
let shortCircuitB: boolean = true || (console.log("This will not be printed") && false);
console.log(`shortCircuitA: ${shortCircuitA}`); // false
console.log(`shortCircuitB: ${shortCircuitB}`); // true

// This behavior can be useful for conditionally executing code or providing default values
let userInput: string | null = null;
let finalInput: string = userInput || "Default Input"; // "Default Input" because userInput is null
console.log(`Final Input: ${finalInput}`); // Output: Default Input

// Optional Chaining Operator
console.log("Optional Chaining Operator:");
// The optional chaining operator (?.) allows safe access to deeply nested object properties
// without having to explicitly check for null or undefined at each level
// Syntax: obj?.prop, obj?.[expr], func?.(args)
interface Address {
    street?: string;
    city?: string;
}
interface User {
    name: string;
    address?: Address;
    getAddress?: () => Address;
}

let user1: User = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Wonderland"
    },
    getAddress: function() {
        return this.address!;
    }
};
let user2: User = {
    name: "Bob"
};
// Accessing nested properties safely
console.log(`User1 Street: ${user1.address?.street}`); // Output: 123 Main St
console.log(`User2 Street: ${user2.address?.street}`); // Output: undefined (no error)
// Calling methods safely
console.log(`User1 Address: ${user1.getAddress?.().city}`); // Output: Wonderland
console.log(`User2 Address: ${user2.getAddress?.().city}`); // Output: undefined (no error)
// Note: Optional chaining is particularly useful when dealing with data from external sources
// where certain properties may not be present, helping to avoid runtime errors due to null or undefined values.
// It enhances code readability and maintainability by reducing the need for multiple null checks.

// Spread Operator
console.log("Spread Operator:");
// The spread operator (...) allows an iterable (like an array or string) to be expanded
// in places where zero or more arguments (for function calls) or elements (for array literals) are expected
// It can also be used to spread the properties of an object into another object
// Syntax: ...iterable or ...object
// Example with Arrays
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
let combinedArr: number[] = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
console.log(`Combined Array: ${combinedArr}`);  // Output: [1, 2, 3, 4, 5, 6]
// Example with Objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
console.log("Combined Object:", combinedObj);
// Example with Function Calls
function sumThreeNumbers(x: number, y: number, z: number): number {
    return x + y + z;
}  
let numbers: [number, number, number] = [1, 2, 3];
let total: number = sumThreeNumbers(...numbers); // Equivalent to sumThreeNumbers(1, 2, 3)
console.log(`Total Sum: ${total}`); // Output: 6
// Note: The spread operator is a powerful feature that enhances code readability and conciseness
// It is widely used in modern JavaScript and TypeScript for various tasks such as merging arrays/objects,
// cloning objects, and passing arguments to functions