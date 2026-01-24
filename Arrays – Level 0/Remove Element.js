// Problem Statement:
// Given an integer array nums and an integer val,
// remove all occurrences of val in-place.
// The order of elements may be changed.
// Return the number of elements that are NOT equal to val.

var removeElement = function (nums, val) {
    let x = 0; // Pointer to track the position for the next valid element

    for (let i = 0; i < nums.length; i++) {
        // If the current element is NOT equal to val,
        // place it at index x and move x forward
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x++;
        }
    }

    // x represents the count of elements not equal to val
    return x;
};

// Example input
let result = [3, 2, 1, 5, 3, 4, 8, 3];
let k = removeElement(result, 3);

console.log(`The number of removed elements is ${result.length - k}`);
console.log(`The new array is: ${result.slice(0, k)}`);
