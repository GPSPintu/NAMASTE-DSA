// Printing basic values to the console
console.log("Hello World");
console.log("pintu");
console.log(2);
console.log(true);

// Declaring constants (values cannot be changed)
const a = 10;
const b = 20;

// Performing arithmetic operations
const sum = a + b;        // add
const multiply = a * b;   // multiplication
const difference = a - b; // subtraction

console.log(sum);
console.log(multiply);
console.log(difference);

// Using a variable with 'let' (can be changed later)
let x = 20;
console.log(x); // Prints 20
x = 30;         // Updating the value
console.log(x); // Prints 30

// String variables and concatenation
let firstName = "pintu";
let lastName = "pandit";
let luckyNum = 29;

// Combining strings + number into one full name
let fullName = firstName + " " + lastName + " " + luckyNum;

console.log(fullName);

// Reassigning variable with a different data type
let newValue = "John";
newValue = 5;
console.log(newValue); // Now it prints 5

// Array example
let arr = [2, 9, 50, 30, 60, 27, 100];
console.log(arr);      // Prints entire array
console.log(arr[2]);   // Accessing array element at index 2 → 50

// Multi-type and nested array
let newArr = ["Sachin,Virat", "John", "5", "Brock", true, ["John Cena", [200]]];
console.log(newArr);

// Accessing deeply nested value
// newArr[5] → ["John Cena", [200]]
// newArr[5][1] → [200]
// newArr[5][1][0] → 200
console.log(newArr[5][1][0]);

// Object example
let obj = {
    a: 1,
    myName: "Pintu", //pintu
    bool: true,
    arr: [6, 7, 9]
};

console.log(obj);        // Prints whole object
console.log(obj.myName); // Accessing object property: "Pintu"