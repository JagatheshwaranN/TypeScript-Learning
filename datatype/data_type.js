// Javascript is dynamically typed language.

var age = 25; // Number
console.log("Type:", typeof(age)); // Output: Type: number
console.log("Age:", age);

age = "twenty five"; // String
console.log("Type:", typeof(age)); 
console.log("Age:", age);

age = true; // Boolean
console.log("Type:", typeof(age)); 
console.log("Age:", age); // Output: Age: true

// Javascript is not type-safe language.
let score1 = "100"; // Number
let score2 = 50; // Number
let totalScore = score1 + score2; // String concatenation
console.log("Total Score:", totalScore); // Output: Total Score: 10050

