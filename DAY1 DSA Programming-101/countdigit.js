// Function that returns the count of digits in a number
function countDigit(n) {

    // If the number is 0, it has exactly 1 digit
    if (n == 0) return 1;

    let count = 0; // Variable to store number of digits

    n = Math.abs(n); // Convert to positive for handling negative numbers

    // Loop runs while n is greater than 0
    while (n > 0) {
        n = Math.floor(n / 10); // Remove the last digit
        count++;                // Increase count for each removed digit
    }

    return count; // Return the total number of digits
}

// Test the function
let result = countDigit(278907589);
console.log(result);
