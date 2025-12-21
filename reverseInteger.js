// Reverse an Integer
// Signed 32-bit integer

function reverseInteger(n) {
    let rev = 0;
    let original = n;

    // Convert number to positive for processing
    n = Math.abs(n);

    while (n > 0) {
        let last = n % 10;          // Extract last digit
        rev = (rev * 10) + last;   // Build reversed number
        n = Math.floor(n / 10);    // Remove last digit
    }

    const limit = Math.pow(2, 31) - 1; // 32-bit signed integer max

    // Check overflow
    if (rev > limit) {
        return 0;
    }

    // Restore sign if original number was negative
    return original < 0 ? -rev : rev;
}

// Test
const result = reverseInteger(123456789);
console.log(result); // 987654321
