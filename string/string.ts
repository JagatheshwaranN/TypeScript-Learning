// A String object represents a sequence of characters. JavaScript strings are
// immutable, meaning that once a string is created, it is not possible to modify it.
// Any operation that seems to modify a string actually creates a new string.

// String objects are used to store and manipulate text. They can be created using
// string literals or the String constructor.

// Example of creating a string using a string literal

// Using double quotes
let str1: string = "Hello, World!";
console.log(str1); // Output: Hello, World!

// Using single quotes
let str2: string = 'Hello, World!';
console.log(str2); // Output: Hello, World!

// Using backticks (template literals)
let username: string = "Alice";
let str3: string = `Hello, ${username}!`;
console.log(str3); // Output: Hello, Alice!

// Example of creating a string using the String constructor
let str4: String = new String("Hello, World!");
console.log(str4); // Output: [String: 'Hello, World!']
console.log(str4.toString()); // Output: Hello, World!

// Common string methods
let sampleStr: string = "  Hello, TypeScript!  ";   
console.log(sampleStr.length);           // Output: 21
console.log(sampleStr.toUpperCase());     // Output: "  HELLO, TYPESCRIPT!  "
console.log(sampleStr.toLowerCase());     // Output: "  hello, typescript!  "
console.log(sampleStr.trim());          // Output: "Hello, TypeScript!"
console.log(sampleStr.indexOf("Type")); // Output: 9
console.log(sampleStr.slice(2, 7));      // Output: "Hello"
console.log(sampleStr.replace("TypeScript", "JavaScript")); // Output: "  Hello, JavaScript!  "

// Strings can also be accessed like arrays
console.log(sampleStr[2]); // Output: H
console.log(sampleStr.charAt(2)); // Output: H
console.log(sampleStr.charCodeAt(2)); // Output: 72 (ASCII code for 'H')

// Note: Since strings are immutable, methods like toUpperCase(), toLowerCase(),
// trim(), and replace() return new strings and do not modify the original string.
console.log(sampleStr); // Output: "  Hello, TypeScript!  " (original string remains unchanged) 
let newStr: string = sampleStr.toUpperCase();
console.log(newStr); // Output: "  HELLO, TYPESCRIPT!  " (new string)
console.log(sampleStr); // Output: "  Hello, TypeScript!  " (original string remains unchanged)


// Substring extraction methods
let text: string = "Hello, TypeScript!";
console.log(text.substring(7, 17)); // Output: "TypeScript"

// Includes method
console.log(text.includes("Type")); // Output: true
console.log(text.includes("Java")); // Output: false

