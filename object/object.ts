// Objects in TypeScript. Objects are collections of key-value pairs.
// Keys are strings (or symbols), and values can be of any type.
// Objects can have properties and methods.
// Objects can be created using object literals, constructors, or the Object.create method.
// TypeScript provides type annotations for objects to ensure type safety.

// Different ways to define an object in TypeScript

// 1. Using an object literal
let person: { name: string; age: number } = {
    name: "Alice",
    age: 30
};

// Using dot notation to access properties
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30

let rectangle = {
    width: 10,
    height: 20,
    area: function() {
        return this.width * this.height;
    }
};

// Using dot notation to access properties and methods
console.log(rectangle.width); // Output: 10
console.log(rectangle.area()); // Output: 200


// 2. Using a constructor function
function Car(make: string, model: string) {
    this.make = make;
    this.model = model;
}
let myCar = new (Car as any)("Toyota", "Corolla");
console.log(myCar.make); // Output: Toyota  
console.log(myCar.model); // Output: Corolla

// 3. Using Object.create
let animal = {
    type: "Dog",
    sound: function() {
        console.log("Woof!");
    }   

};
let myDog = Object.create(animal);
myDog.sound(); // Output: Woof!
console.log(myDog.type); // Output: Dog

// 4. Using a class
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let john = new Person("John", 25);
john.greet(); // Output: Hello, my name is John and I am 25 years old.
console.log(john.name); // Output: John
console.log(john.age); // Output: 25




