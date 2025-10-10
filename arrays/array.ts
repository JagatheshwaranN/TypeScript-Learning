// Arrays in TypeScript
// An array is a collection of elements of the same type, stored in a contiguous memory location.
// TypeScript provides several ways to define and work with arrays.

// Array Declaration and Initialization
// You can declare and initialize arrays using two main syntaxes:
// 1. Using square brackets [] to denote an array type.
// 2. Using the generic Array<T> type.

// Array initialization examples:
// Using square brackets
console.log("Array Initialization Examples:");
let numArray: number[] = [];
let strArray: string[] = [];
let boolArray: boolean[] = [];
let mixedArray: (number | string)[] = [];

// Adding elements to the arrays
console.log("Adding elements to arrays:");
numArray[0] = 1;
numArray[1] = 2;
strArray[0] = "Hello";
strArray[1] = "World";
boolArray[0] = true;
boolArray[1] = false;
mixedArray[0] = 1;
mixedArray[1] = "Two";
mixedArray[2] = 3;

// Using the generic Array type
console.log("Using Generic Array Type:");
let genericNumArray: Array<number> = [];
let genericStrArray: Array<string> = [];
let genericBoolArray: Array<boolean> = [];
let genericMixedArray: Array<number | string> = [];

// Adding elements to the generic arrays
console.log("Adding elements to generic arrays:");
genericNumArray.push(10);
genericNumArray.push(20);
genericStrArray.push("TypeScript");
genericStrArray.push("JavaScript");
genericBoolArray.push(true);
genericBoolArray.push(false);
genericMixedArray.push(100);
genericMixedArray.push("One Hundred");

// Examples of Array Usage
// You can create arrays of different types and use various methods to manipulate them.
// Here are some examples:
// Creating arrays with initial values

// 1. Array Type Annotation
console.log("Array initialization with Type Annotations:");
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["Hello", "World"];
let booleans: boolean[] = [true, false, true];
let mixed: (number | string)[] = [1, "two", 3, "four"];

// 2. Generic Array Type
console.log("Array initialization with Generic Types:");
let genericNumbers: Array<number> = [10, 20, 30];
let genericStrings: Array<string> = ["TypeScript", "JavaScript"];
let genericBooleans: Array<boolean> = [false, true, false];
let genericMixed: Array<number | string> = [100, "one hundred", 200, "two hundred"];
let nestedArrays: Array<Array<number>> = [[1, 2], [3, 4], [5, 6]];
let multiTypeArrays: Array<number | string | boolean> = [1, "two", true, 3, "four", false];

// Printing arrays to the console
console.log("Printing arrays:");
console.log("Numbers:", numbers);
console.log("Strings:", strings);
console.log("Booleans:", booleans);
console.log("Mixed:", mixed);
console.log("Generic Numbers:", genericNumbers);
console.log("Generic Strings:", genericStrings);
console.log("Generic Booleans:", genericBooleans);
console.log("Generic Mixed:", genericMixed);
console.log("Nested Arrays:", nestedArrays);
console.log("Multi-Type Arrays:", multiTypeArrays);

// Printing specific elements
console.log("Accessing specific elements:");
console.log("First number:", numbers[0]);
console.log("Second string:", strings[1]);
console.log("First boolean:", booleans[0]);
console.log("Third mixed element:", mixed[2]);

// Printing lengths of arrays
console.log
console.log("Length of numbers array:", numbers.length);
console.log("Length of strings array:", strings.length);
console.log("Length of booleans array:", booleans.length);
console.log("Length of mixed array:", mixed.length);

// Iterating over arrays using different loops
console.log("Iterating over numbers array:");
for (let i = 0; i < numbers.length; i++) {
    console.log(`Number at index ${i}:`, numbers[i]);
}

console.log("Iterating over strings array:");
for(let data in strings) {
    console.log(`String at index ${data}:`, strings[data]);
}

console.log("Iterating over mixed array:");
for (let value of mixed) {
    console.log("Mixed value:", value);
}

// Using Array with functions
console.log("Using arrays with functions:");
function searchInArray(arr: number[], target: number): boolean {
    for(let i=0; i < arr.length; i++) {
        if(arr[i] === target) {
            return true;
        }
    }
    return false;
}
console.log("Searching for 3 in numbers array:", searchInArray(numbers, 3));
console.log("Searching for 10 in numbers array:", searchInArray(numbers, 10));

console.log("Transforming strings array to uppercase:");
function transformArray(arr:string[]):string[] {
    for( let data in arr) {
        arr[data] = arr[data].toUpperCase()
    }
    return arr;
}
console.log("Transforming strings array to uppercase:", transformArray(strings));

// 3. Array Methods
console.log("Using Array Methods:");
let sampleArray: number[] = [1, 2, 3, 4, 5];

// Push - Adds one or more elements to the end of an array and returns the new length of the array.
console.log("Pushing elements to array:");
sampleArray.push(6, 7);
console.log("Array after push:", sampleArray);

// Pop - Removes the last element from an array and returns that element.
console.log("Popping element from array:");
sampleArray.pop();
console.log("Array after pop:", sampleArray);

// Shift - Removes the first element from an array and returns that removed element.
console.log("Shifting element from array:");
sampleArray.shift();
console.log("Array after shift:", sampleArray);

// Unshift - Adds one or more elements to the beginning of an array and returns the new length of the array.
console.log("Unshifting elements to array:");
sampleArray.unshift(0);
console.log("Array after unshift:", sampleArray);

// Sort - Sorts the elements of an array in place and returns the sorted array.
// Note: The default sort order is according to string Unicode code points.
console.log("Sorting an array:");
let anotherArray:number[] = [14, 15, 17, 16];
console.log("Original Array:", anotherArray);
console.log("Sorted Array:", anotherArray.sort((a, b) => a - b));

// Reverse - Reverses the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.
console.log("Original Array:", anotherArray);
console.log("Reversed Array:", anotherArray.reverse());

// Concat - Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.
console.log("Concatenating arrays:");
let array1: number[] = [1, 2, 3];   
let array2: number[] = [4, 5, 6];
let concatenatedArray: number[] = array1.concat(array2);
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Concatenated Array:", concatenatedArray);

// Slice - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// Note: The start index is inclusive, and the end index is exclusive.
console.log("Slicing an array:");
console.log("Original Array:", sampleArray);
console.log("Sliced Array (1,4):", sampleArray.slice(1, 4));

// Splice - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
console.log("Splicing an array:");
console.log("Original Array:", sampleArray);
console.log("Spliced Array (1,2):", sampleArray.splice(1, 2, 8, 9));    
console.log("Array after splice:", sampleArray);


console.log("Popped Element:", sampleArray.pop());
console.log("Array after pop:", sampleArray);
sampleArray.push(10);   
console.log("Array after push:", sampleArray);
console.log("Shifted Element:", sampleArray.shift());
console.log("Array after shift:", sampleArray);
sampleArray.unshift(20);
console.log("Array after unshift:", sampleArray);
console.log("Sliced Array (1,3):", sampleArray.slice(1, 3));
console.log("Spliced Array (1,2):", sampleArray.splice(1, 2));
console.log("Array after splice:", sampleArray);
console.log("Index of 8 in array:", sampleArray.indexOf(8));
console.log("Includes 3 in array:", sampleArray.includes(3));
console.log("Includes 100 in array:", sampleArray.includes(100));
console.log("Concatenated Array:", sampleArray.concat([30, 40, 50]));
console.log("Joined Array:", sampleArray.join(", "));
console.log("Array to String:", sampleArray.toString());

// IndexOf - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log("IndexOf examples:");
console.log("Index of 3 in array:", sampleArray.indexOf(5));
console.log("Index of 100 in array:", sampleArray.indexOf(100));

// Includes - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log("Includes examples:");
console.log("Includes 3 in array:", sampleArray.includes(5));
console.log("Includes 100 in array:", sampleArray.includes(100));

// ToString - Returns a string representing the array and its elements.
console.log("ToString example:");
console.log("Array to String:", sampleArray.toString());