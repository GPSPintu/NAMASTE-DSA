// ---------------------------------------------
// 1) Simple For Loop
// ---------------------------------------------
// This loop runs from i = 0 to i = 2 (total 3 times)
for (let i = 0; i <= 2; i++) {
    console.log("Hello World", i);
}
// Explanation: 
// i starts at 0 → prints → increments → repeats until i becomes 3.


    
// ---------------------------------------------
// 2) Loop from 3 to 4
// ---------------------------------------------
// This loop runs for i = 3 and i = 4
for (let i = 3; i < 5; i++) {
    console.log("Namaste Kapil", i);
}
// Explanation:
// Condition i < 5 means the loop stops when i reaches 5.


    
// ---------------------------------------------
// 3) Print i + 1
// ---------------------------------------------
// Prints numbers 2, 3, 4, 5, 6
for (let i = 1; i <= 5; i++) {
    console.log(i + 1);
}
// Explanation:
// i runs 1 → 5 but you print i + 1, so numbers shift by +1.


    
// ---------------------------------------------
// 4) Loop with custom increment (i = i + 3)
// ---------------------------------------------
// Values: 2, 5, 8
for (let i = 2; i < 9; i = i + 3) {
    console.log("Hello Kapil Sarkar", i);
}
// Explanation:
// i jumps by 3 every time → 2 → 5 → 8 → stops at 11 (which is > 9)


    
// ---------------------------------------------
// 5) Reverse Loop
// ---------------------------------------------
// Prints 5, 4, 3, 2, 1
for (let i = 5; i > 0; i--) {
    console.log("Hello Piku", i);
}
// Explanation:
// i decreases by 1 until it becomes 0.


    
// ---------------------------------------------
// 6) Loop that never runs
// ---------------------------------------------
for (let i = 5; i < 4; i++) {
    console.log("Hello World");
}
// Explanation:
// 5 < 4 is FALSE, so loop does not run even once.


    
// ---------------------------------------------
// 7) Infinite Loop (commented out)
// ---------------------------------------------
// for (let i = 1; i > 0; i++) {
//     console.log(i);
// }
// Explanation:
// i always increases → condition i > 0 is always true → infinite loop.


    
// ---------------------------------------------
// 8) Function with parameter
// ---------------------------------------------
function greet(i) {
    console.log("Namaste India", i);
}

// Call greet() inside loop
for (let i = 0; i <= 10; i++) {
    greet(i);
}
// Explanation:
// greet() prints “Namaste India” with numbers 0 to 10.


    
// ---------------------------------------------
// 9) Array and its length
// ---------------------------------------------
let arr = [10, 6, 2, 0, 8, 3, 5];
let length = arr.length;

console.log(length); 
// Explanation:
// arr.length = 7 because array has 7 elements.



// ---------------------------------------------
// 10) Print all elements of the array
// ---------------------------------------------
// IMPORTANT: Use i < arr.length (NOT <=)
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Explanation:
// Valid index range → 0 to 6 (7 elements)



// ---------------------------------------------
// 11) Print all EVEN numbers
// ---------------------------------------------
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log("Even Number:", arr[i]);
    }
}
// Explanation:
// num % 2 == 0 → number is even



// ---------------------------------------------
// 12) Print all ODD numbers
// ---------------------------------------------
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        console.log("Odd Number:", arr[i]);
    }
}
// Explanation:
// num % 2 == 1 → number is odd



// ---------------------------------------------
// 13) WHILE LOOP
// ---------------------------------------------
let j = 0;

while (j < 5) {
    console.log(j);
    j++;
}
// Explanation:
// while loop runs until the condition becomes false.
// j prints 0 → 4 then stops.
