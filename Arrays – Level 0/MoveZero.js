// Given an integer array nums, move all 0s to the end while maintaining the relative order of the non-zero elements.

//  Conditions:
// Do it in-place.
// Do NOT create a new array.

var moveZeroes = function(nums) {

    // Pointer for placing non-zero elements
    let x = 0;

    // Move non-zero elements to front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    // Fill remaining positions with zeros
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
};
