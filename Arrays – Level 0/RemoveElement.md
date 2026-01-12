🧪 Remove Element from Array (In-Place) — Dry Run & Explanation
📌 Problem Statement

Given an integer array nums and an integer value val, remove all occurrences of val in-place and return the new length of the array.

The relative order of remaining elements may be changed

Elements beyond the returned length do not matter

🧠 Approach (Two Pointer Technique)

We solve this problem using an in-place two-pointer approach that avoids using extra memory.

💻 JavaScript Implementation
var removeElement = function (nums, val) {
    let x = 0; // pointer for next valid element

    for (let i = 0; i < nums.length; i++) {
        // Copy only elements not equal to val
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x++;
        }
    }

    return x; // new length
};

// Example
let result = [3, 2, 1, 5, 3, 4, 8, 3];
let newLength = removeElement(result, 3);

console.log(`Removed elements count: ${result.length - newLength}`);
console.log(`Updated array: ${result.slice(0, newLength)}`);

🔍 Explanation (Step-by-Step)
🔧 How the Algorithm Works

x → Tracks the index where the next valid element should be placed

i → Iterates through the array

🔁 Process

Traverse each element in nums

If nums[i] !== val:

Copy it to nums[x]

Increment x

Skip elements equal to val

After traversal:

x = new length

First x elements contain valid values

🧪 Example Dry Run
🔧 Input
nums = [3, 2, 1, 5, 3, 4, 8, 3]
val = 3

🔁 Iteration Table
i	nums[i]	nums[i] ≠ val	Action	Updated Array	x
0	3	❌	Skip	[3,2,1,5,3,4,8,3]	0
1	2	✅	nums[0]=2	[2,2,1,5,3,4,8,3]	1
2	1	✅	nums[1]=1	[2,1,1,5,3,4,8,3]	2
3	5	✅	nums[2]=5	[2,1,5,5,3,4,8,3]	3
4	3	❌	Skip	No change	3
5	4	✅	nums[3]=4	[2,1,5,4,3,4,8,3]	4
6	8	✅	nums[4]=8	[2,1,5,4,8,4,8,3]	5
7	3	❌	Skip	No change	5
✅ Final Result

New Length: 5

Modified Array (first k elements):

[2, 1, 5, 4, 8]


Elements beyond index k are ignored.

⏱️ Complexity Analysis

Time Complexity: O(n)
(Single traversal of the array)

Space Complexity: O(1)
(In-place modification, no extra memory)