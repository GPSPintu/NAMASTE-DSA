// -----------------------------
// Function to print Hello World
// -----------------------------
function printHelloWorld() {
    console.log("Hello World");
}

// Call the function
printHelloWorld();


// -----------------------------------------
// Function to greet a person by their name
// -----------------------------------------
function greet(name) {
    console.log("Namaste, " + name);
}

// Calling greet() with values
greet("Kapil");
greet("Akshay");

let x = "Virat Kohli";
greet(x);


// -----------------------------
// Function to add two numbers
// -----------------------------
function add(a, b) {
    let result = a + b;
    console.log("Addition of Two Numbers:", result);
}

// Call add function
add(10, 5);


// ---------------------------------
// Function to multiply two numbers
// ---------------------------------
function multiply(a, b) {
    let result = a * b;
    console.log("Multiplication of Two Numbers:", result);
}

// Call multiply function
multiply(10, 20);


// ----------------------------------
// Function to return square of a number
// ----------------------------------
function square(num) {
    return num * num;
}

let squareResult = square(5);
console.log(squareResult);

let z = square(10);
console.log(z);


// ------------------------------------------------
// Function to check voting eligibility
// ------------------------------------------------
function votingEligibility(age) {
    if (age <= 0) {
        console.log("Invalid age");
    } else if (age >= 18) {
        console.log("Eligible For Voting");
    } else {
        console.log("Not Eligible for Vote");
    }
}

// Function calls
votingEligibility(20);
votingEligibility(10);
votingEligibility(-1);


// ----------------------------------
// Function to check Even or Odd
// ----------------------------------
function oddEven(n) {
    if (n % 2 === 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}

// Function calls
oddEven(10);
oddEven(11);
