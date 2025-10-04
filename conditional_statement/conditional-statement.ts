// Conditional Statements in TypeScript

let age: number = 20;

// If statement
if (age > 18) {
    console.log("You are an adult.");
}

// If-else statement
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

// If-else-if ladder
if (age < 13) {
    console.log("You are a child.");
}   else if (age < 20) {
    console.log("You are a teenager.");
}   else {
    console.log("You are an adult.");
}   

// Switch statement
let day: number = 3;
let dayName: string;
switch (day) {
    case 1:
        dayName = "Monday";
        break;  
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log("Day:", dayName);

// Switch expression
let month: number = 4;
// Using an IIFE (Immediately Invoked Function Expression) to simulate switch expression
// and assign the result to monthName   
// Note: TypeScript does not have native switch expressions like some other languages
// but we can achieve similar functionality using an IIFE
// or a function that returns a value based on the switch cases
// Here, we use an IIFE for demonstration   
// The parentheses around the function and the immediate invocation
// allow us to execute the switch and return a value directly
// This is a common pattern to simulate expressions in languages that do not support them natively
// The result of the switch is assigned to monthName
// This approach keeps the code concise and functional

// This is an Immediately Invoked Function Expression (IIFE) written as an arrow function.
// (() => { ... }) defines an anonymous arrow function that returns a string.
// The trailing () immediately calls that function and the returned value is assigned to monthName.
// monthName is typed as string, so TypeScript will ensure the function returns a string.

let monthName: string = (() => { 
    switch (month) {
        case 1: return "January";
        case 2: return "February";  
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";  
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "Invalid month";
    }
})();
console.log("Month:", monthName);

// Switch takes expression as input and matches the value with case labels
// If a match is found, the corresponding block of code is executed
// If no match is found, the default block is executed (if provided)
let x: number = 10;
let y: number = 20;

switch(x+y) {
    case 10:
        console.log("Sum is 10");   
        break;
    case 20:
        console.log("Sum is 20");
        break;
    case 30:
        console.log("Sum is 30");
        break;
    default:
        console.log("Sum is not 10, 20 or 30");
        break;
}