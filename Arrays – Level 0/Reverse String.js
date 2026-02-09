// Reverse String — Two Pointer Approach
// 👉 Logic
// Keep two pointers:
// left → start of array
// right → end of array
// Swap elements at left and right.
// Move:
// left++
// right--
// Continue until left < right.
var reverseString = function(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};
