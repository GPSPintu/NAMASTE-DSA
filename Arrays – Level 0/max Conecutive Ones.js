// Given a binary array nums, return the maximum number of consecutive 1’s in the array.
// Example 1:
// Input:
// nums = [1,1,0,1,1,1]

// Output:
// 3

// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.




/**
 * Find maximum consecutive 1s in a binary array
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

    let currentCount = 0; // counts current streak of 1s
    let maxCount = 0;     // stores maximum streak

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {
            // increase streak
            currentCount++;
        } else {
            // update max and reset
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
    }

    // handle case when array ends with 1s
    return Math.max(maxCount, currentCount);
};
