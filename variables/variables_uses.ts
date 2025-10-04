var age:number = 20;
var studentName:string = "John";
var isStudent:boolean = true;
var grades:number[] = [90, 80, 95];
console.log("Name: " + studentName);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);
console.log("Grades: " + grades.join(", "));

// Var keyword (function scope)

function varTest() {
    console.log("Var Test:");
    if(true) {
        var x = 1;
        console.log(x); // 1
        var y = 2;
    }
    console.log(y); // 2
}
varTest();


// Let keyword (block scope)

function letTest() {    
    console.log("Let Test:");
    if(true) {
        let a = 10;
        console.log(a); // 10
        let b = 20;
    }
    // console.log(b); // Error: b is not defined
}
letTest();

// Const keyword (block scope, cannot be reassigned)

function constTest() { 
    console.log("Const Test:");
    if(true) {   
        const pi = 3.14;
        console.log(pi); // 3.14
        // pi = 3.14159; // Error: Assignment to constant variable.
    }
}
constTest();

// Scope Diff
function scopeDiff() {
    console.log("Scope Difference:");
    if(true) {
        var varVariable = "I am a var variable";
        let letVariable = "I am a let variable";
        const constVariable = "I am a const variable";
    }       
    console.log(varVariable); // I am a var variable
    // console.log(letVariable); // Error: letVariable is not defined
    // console.log(constVariable); // Error: constVariable is not defined
}
scopeDiff();

// Declaration without initialization
function declarationWithoutInitialization() {
    console.log("Declaration without initialization:");
    var uninitializedVar: string;
    let uninitializedLet: number;
    const initializedConst: number = 10; // Must be initialized
    uninitializedVar = "Hello";
    uninitializedLet = 5;
    console.log(uninitializedVar); // Hello
    console.log(uninitializedLet); // 5
    console.log(initializedConst); // 10
}
declarationWithoutInitialization();

// Re-declaration
function redeclarationTest() {
    console.log("Re-declaration:");
    var redeclaredVar = "First declaration";
    var redeclaredVar = "Second declaration";       
    console.log(redeclaredVar); // Second declaration

    let redeclaredLet = "First declaration";        
    // let redeclaredLet = "Second declaration"; // Error: Cannot redeclare block-scoped variable 'redeclaredLet'
    console.log(redeclaredLet); // First declaration

    const redeclaredConst = "First declaration";        
    // const redeclaredConst = "Second declaration"; // Error: Cannot redeclare block-scoped variable 'redeclaredConst'
    console.log(redeclaredConst); // First declaration
}
redeclarationTest();

// Reinitialization & Reassignment
function reassignmentTest() {
    console.log("Reassignment:");
    var reinitVar = "Initial value";
    reinitVar = "Reassigned value";       
    console.log(reinitVar); // Reassigned value 
    
    let reinitLet = "Initial value";
    reinitLet = "Reassigned value";       
    console.log(reinitLet); // Reassigned value

    const reinitConst = "Initial value";
    // reinitConst = "Reassigned value"; // Error: Assignment to constant variable.
    console.log(reinitConst); // Initial value
}   
reassignmentTest();

// Hoisting
function hoistingTest() {
    console.log("Hoisting:");
    console.log(hoistedVar); // undefined
    var hoistedVar = "I am hoisted";
    console.log(hoistedVar); // I am hoisted

    // console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
    let hoistedLet  =   "I am not hoisted";
    console.log(hoistedLet); // I am not hoisted

    // console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization
    const hoistedConst = "I am not hoisted";
    console.log(hoistedConst); // I am not hoisted
}
hoistingTest();