// ------------------------------------------------------------
// 1. Function that searches for an element in an array 
//    and returns its index. If not found, returns -1.
// ------------------------------------------------------------

// Sample array
let arr = [2, 4, 5, 0, 8, 30, 10, 25, 9];

function searchElement(arr, target) {

    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
        
        // Check if the current element matches the target
        if (arr[i] === target) {
            return i;  // Return the index where element is found
        }
    }

    // If loop finishes without finding the element
    return -1;
}

console.log(searchElement(arr, 5));  // Output: 2
console.log(searchElement(arr, 90)); // Output: -1



// ------------------------------------------------------------
// 2. Function that returns the number of negative numbers 
//    in an array
// ------------------------------------------------------------

// Mixed array containing both positive and negative numbers
let mixedArray = [2, 9, -7, -10, 20, 50, -200, 36, -55, -90, 65];

function checkNegativeNumber(arr) {

    let count = 0; // counter for negative numbers

    // Loop through each array element
    for (let i = 0; i < arr.length; i++) {
        
        // Check if number is negative
        if (arr[i] < 0) {
            count++; // increase count
        }
    }

    return count; // return how many negative numbers were found
}

let negativeResult = checkNegativeNumber(mixedArray);
console.log(negativeResult); // Output: 5



// ------------------------------------------------------------
// 3. Function that returns the largest number in an array
// ------------------------------------------------------------

let largestArray = [5, 10, 200, 500, 20, 29, 50];

function checkLargestNumInArray(arr) {

    let max = arr[0]; // assume first element is the largest

    // Loop through all elements
    for (let i = 0; i < arr.length; i++) {
        
        // If current element is greater than max, update max
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max; // return the largest number
}

let resultLargest = checkLargestNumInArray(largestArray);
console.log(resultLargest); 



// ------------------------------------------------------------
// 4. Function that returns the smallest number in an array
// ------------------------------------------------------------

let smallestArray = [5, 10, 200, 500, 20, 29, 50];

function checkSmallNumInArray(arr) {

    let min = arr[0]; // assume first element is the smallest

    // Loop through each element
    for (let i = 0; i < arr.length; i++) {

        // If current element is smaller than min, update min
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min; // return the smallest number found
}

let resultSmallest = checkSmallNumInArray(smallestArray);
console.log(resultSmallest); // Output: 5