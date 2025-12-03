// Function to count the number of digits in a given integer
function countDigit(n) {

    // Special case: if the number is exactly 0, it has one digit
    if (n == 0) return 1;

    let count = 0; // This variable will keep track of how many digits we’ve counted so far

    // Handle negative numbers by converting them to positive
    // Math.abs(n) returns the absolute value of n (e.g., -123 → 123)
    n = Math.abs(n);

    // Repeat until there are no digits left
    while (n > 0) {
        // Remove the last digit of n
        // For example: if n = 2789 → Math.floor(2789 / 10) = 278
        n = Math.floor(n / 10);

        // Increase the digit count for every iteration
        count++;
    }

    // After the loop, `count` holds the total number of digits
    return count;
}

// Example test
let result = countDigit(278907589);
console.log(result); // Output: 9
