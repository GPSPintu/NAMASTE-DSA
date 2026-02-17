// Problem:
// Given an integer array nums, move all 0s to the end
// while maintaining the relative order of non-zero elements.
//
// Conditions:
// 1. Modify the array in-place.
// 2. Do NOT create a new array.

var moveZeroes = function(nums) {

    // Pointer 'x' tracks the position where next non-zero element should be placed
    let x = 0;

    // First loop:
    // Move all non-zero elements to the front of the array
    for (let i = 0; i < nums.length; i++) {

        // If current element is not zero
        if (nums[i] !== 0) {

            // Place it at index 'x'
            nums[x] = nums[i];

            // Move pointer forward
            x++;
        }
    }

    // Second loop:
    // Fill remaining positions (after last non-zero) with zeros
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
};
