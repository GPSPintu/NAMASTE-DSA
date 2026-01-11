🧹 Remove Duplicates from Sorted Array (In-Place)
📌 Problem Statement

Given a sorted integer array nums (sorted in non-decreasing order), remove the duplicates in-place such that each unique element appears only once.

The relative order of the elements must be maintained.

Return the number of unique elements k.

✅ Requirements

Modify the input array in-place

The first k elements of nums should contain the unique values

Values beyond index k do not matter

Return k

🧠 Approach (Two Pointer Technique)

Since the array is already sorted:

All duplicate elements appear next to each other

We use two pointers:

x → tracks the index of the last unique element

i → iterates through the array

Whenever a new unique value is found, we move it forward.

💻 Code (JavaScript)
/**
 * Remove duplicates from a sorted array in-place
 * @param {number[]} nums
 * @return {number} k - number of unique elements
 */
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

// Example usage
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const uniqueCount = removeDuplicates(nums);

console.log(uniqueCount);              // 5
console.log(nums.slice(0, uniqueCount)); // [0, 1, 2, 3, 4]

🔍 Dry Run Example

Input:

nums = [0,0,1,1,1,2,2,3,3,4]

i	nums[i]	nums[x]	Action	x	Array (partial)
0	0	0	—	0	[0,0,1,1,1,2,2,3,3,4]
2	1	0	New unique → move	1	[0,1,1,1,1,2,2,3,3,4]
5	2	1	New unique → move	2	[0,1,2,1,1,2,2,3,3,4]
7	3	2	New unique → move	3	[0,1,2,3,1,2,2,3,3,4]
9	4	3	New unique → move	4	[0,1,2,3,4,2,2,3,3,4]
✅ Final Output

Unique Count: 5

Modified Array (first k elements):

[0, 1, 2, 3, 4]

⏱️ Complexity Analysis
Time Complexity

O(n) — single pass through the array

Space Complexity

O(1) — no extra space used

🎯 Key Takeaways

Works only because the array is sorted

Uses two-pointer technique

Efficient and interview-friendly solution

Commonly asked in LeetCode / FAANG interviews