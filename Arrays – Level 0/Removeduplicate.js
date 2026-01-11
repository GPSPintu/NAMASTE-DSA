// Arrays
// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be maintained.
// Return the number of unique elements (k).

var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let x = 0; // pointer for last unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x++;
            nums[x] = nums[i];
        }
    }

    return x + 1;
};

const result = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const uniqueCount = removeDuplicates(result);

console.log(
    `The number of unique elements in the array is ${uniqueCount} and the array is ${result.slice(0, uniqueCount)}`
);
