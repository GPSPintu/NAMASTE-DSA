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
    let len = s.length;
    let halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = temp;
    }
};
  
