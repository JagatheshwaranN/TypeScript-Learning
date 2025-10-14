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

// StartsWith and EndsWith methods
console.log(text.startsWith("Hello")); // Output: true
console.log(text.endsWith("Script!")); // Output: true  
console.log(text.endsWith("Type")); // Output: false
console.log(text.startsWith("Type")); // Output: false
console.log(text.endsWith("TypeScript!")); // Output: true

// Repeat method
console.log("Ha".repeat(3)); // Output: "HaHaHa"

// Split method
let csv: string = "apple,banana,cherry";
let fruits: string[] = csv.split(",");
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ] 
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: cherry

// Template literals with expressions
let a: number = 5;
let b: number = 10;
let result: string = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: The sum of 5 and 10 is 15.

// Multiline strings using template literals
let multilineStr: string = `This is a
multiline   
string.`;
console.log(multilineStr);
// Output:  This is a
//          multiline   
//          string.
console.log(multilineStr.length); // Output: 30 (includes newline and spaces)
console.log(multilineStr.trim()); // Output: "This is a\nmultiline   \nstring." (removes leading/trailing whitespace)

// Trim methods
let spacedStr: string = "   Hello, World!   ";
console.log(spacedStr.trim()); // Output: "Hello, World!"
console.log(spacedStr.trimStart()); // Output: "Hello, World!   "
console.log(spacedStr.trimEnd()); // Output: "   Hello, World!"
console.log(spacedStr.length); // Output: 19

// Escape sequences
let escapeStr: string = "First Line\nSecond Line\tTabbed\\Backslash\"Double Quote\'Single Quote";
console.log(escapeStr);
// Output:
// First Line
// Second Line	Tabbed\Backslash"Double Quote'Single Quote
console.log(escapeStr.length); // Output:  sixty-five (includes escape characters)

// Note: In TypeScript, it's recommended to use the primitive string type (lowercase 'string')
// instead of the String object type (uppercase 'String') for most use cases.

// Concatenation
let greet: string = "Hello";
let place: string = "World";
let message: string = greet + ", " + place + "!";
console.log(message); // Output: Hello, World!
let message2: string = `${greet}, ${place}!`;
console.log(message2); // Output: Hello, World!
// Using concat method
let message3: string = greet.concat(", ", place, "!");
console.log(message3); // Output: Hello, World!
// Using array join method for concatenation
let message4: string = [greet, place].join(", ") + "!";
console.log(message4); // Output: Hello, World!
// Using += operator for concatenation
let message5: string = greet;
message5 += ", ";
message5 += place;
message5 += "!";
console.log(message5); // Output: Hello, World! 

// Accessing characters
let sample: string = "TypeScript";
console.log(sample[0]); // Output: T
console.log(sample.charAt(0)); // Output: T
console.log(sample.charCodeAt(0)); // Output: 84 (ASCII code for 'T')
console.log(sample[sample.length - 1]); // Output: t (last character)
console.log(sample.charAt(sample.length - 1)); // Output: t (last character)
console.log(sample.charCodeAt(sample.length - 1)); // Output: 116 (ASCII code for 't')

// Iterating over a string
for (let char of sample) {
    console.log(char);
}   
// Output:
// T
// y        
// p
// e
// S
// c
// r
// i
// p
// t

// Using Array.from to create an array of characters
let charArray: string[] = Array.from(sample);
console.log(charArray); 
// Output: [ 'T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't' ]

// Using spread operator to create an array of characters
let charArray2: string[] = [...sample];
console.log(charArray2); 
// Output: [ 'T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't' ]

// String comparison
let strA: string = "apple";
let strB: string = "banana";
console.log(strA === strB); // Output: false
console.log(strA !== strB); // Output: true
console.log(strA < strB); // Output: true (lexicographical comparison)
console.log(strA > strB); // Output: false (lexicographical comparison)
console.log(strA <= "apple"); // Output: true
console.log(strA >= "apple"); // Output: true
console.log("Apple" < "apple"); // Output: true (uppercase letters come before lowercase letters in Unicode)

// Using localeCompare for locale-aware string comparison
console.log(strA.localeCompare(strB)); // Output: -1 (strA comes before strB)
console.log(strB.localeCompare(strA)); // Output: 1 (strB comes after strA)
console.log(strA.localeCompare("apple")); // Output: 0 (strings are equal)

// Note: String comparison is case-sensitive by default. For case-insensitive comparison,
// you can convert both strings to the same case using toLowerCase() or toUpperCase().
// Example of case-insensitive comparison
let strC: string = "Apple";
let strD: string = "apple";
console.log(strC.toLowerCase() === strD.toLowerCase()); // Output: true
console.log(strC.toUpperCase() === strD.toUpperCase()); // Output: true