// -----------------------------
// Function to print Hello World
// -----------------------------
function printHelloWorld() {
    console.log("Hello World");  // Print message to console
}

// Calling the function
printHelloWorld();


// -----------------------------------------
// Function that greets a person by their name
// -----------------------------------------
function greet(name) {           
    console.log("Namaste," + name);  // Print greeting with name
}

// Calling greet() with different names
greet("Kapil");
greet("Akshay");

let x = "Virat Kohli";  // Storing a name in variable x
greet(x);               // Passing variable x to the function


// ----------------------------------
// Function to add two numbers
// ----------------------------------
function add(a, b) {
    let c = a + b;  // Add numbers a and b
    console.log("Addition of Two Numbers:", c);  // Print the result
}

// Calling add function
add(10, 5);


// ----------------------------------
// Function to multiply two numbers
// ----------------------------------
function multiply(a, b) {
    let c = a * b;  // Multiply numbers a and b
    console.log("Multiplicatiion of two numbers:", c);  // Print result
}

// Calling multiply function
multiply(10, 20);


// ----------------------------------
// Function to return the square of a number
// ----------------------------------
function square(x) {
    let result = x * x;  // Square the number

    return result;       // Return the squared value
}

let squareResult = square(5);  // Calling square(5)
console.log(squareResult);     // Printing 25

let z = square(10);   // Calling square(10)
console.log(z);       // Printing 100


// ----------------------------------------------------------
// Function to check if a person is eligible for voting or not
// ----------------------------------------------------------
function votingEligibility(age) {
    
    if (age >= 18) {  // Condition for voting eligibility
        console.log("Eligible For Voting");
    }
    else if (age <= 0) {  // Invalid age check
        console.log("Invalid age");
    }
    else {  // If age is positive but less than 18
        console.log("Not Eligible for Vote");
    }
}

// Calling the votingEligibility function with different ages
votingEligibility(20);
votingEligibility(10);
votingEligibility(-1);


// ----------------------------------
// Function to check if a number is Even or Odd
// ----------------------------------
function oddEven(n) {
    
    // Find remainder when n is divided by 2
    let rem = n % 2;  
    
    if (rem === 0) {
        console.log("Even Number");  // If remainder is 0 → Even
    }
    else {
        console.log("Odd Number");   // If remainder is not 0 → Odd
    }
}

// Calling oddEven function
oddEven(10);  // Even
oddEven(11);  // Odd