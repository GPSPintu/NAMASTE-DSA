// Function to check if a number is a palindrome or not
function checkNumPalindrome(n) {

    // If the number is negative, it cannot be a palindrome
    // because of the minus sign.
    if (n < 0) {
        return false;
    }

    // Store the original number to compare later
    let original = n;

    // rev will store the reversed number
    let rev = 0;

    // Loop runs until n becomes 0
    while (n > 0) {

        // Extract the last digit of the number
        let rem = n % 10;

        // Build the reversed number
        // Multiply existing number by 10 and add last digit
        rev = (10 * rev) + rem;

        // Remove the last digit from n
        n = Math.floor(n / 10);
    }

    // If reversed number matches the original → palindrome
    if (rev === original) {
        return true;
    } else {
        // Otherwise → (NOT palindrome)
        return false;
    }
}

// Test numbers
let n = 121;     //Palindrome
let m = 12121;   // Palindrome
let o = -121;    // 

// Output results
console.log(checkNumPalindrome(n));  // true
console.log(checkNumPalindrome(m));  // true
console.log(checkNumPalindrome(o));  // false
