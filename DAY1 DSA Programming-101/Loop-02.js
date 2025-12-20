// ------------------------------------------------------------
// 1. Function to search for an element in an array 
//    Returns the index if found, otherwise returns -1.
// ------------------------------------------------------------

// Sample array to test the function
let arr = [2, 4, 5, 0, 8, 30, 10, 25, 9];

function searchElement(arr, target) {

    // Loop through each index of the array
    for (let i = 0; i < arr.length; i++) {

        // Check if the current element matches the target value
        if (arr[i] === target) {

            // If match found, return the index immediately
            return i;
        }
    }

    // If loop finishes without finding the target, return -1
    return -1;
}

// Testing the function
console.log(searchElement(arr, 5));   // Output: 2
console.log(searchElement(arr, 90));  // Output: -1



// ------------------------------------------------------------
// 2. Function to count how many negative numbers are present
//    in an array.
// ------------------------------------------------------------

// Mixed array containing positive and negative numbers
let mixedArray = [2, 9, -7, -10, 20, 50, -200, 36, -55, -90, 65];

function countNegativeNumbers(arr) {

    let count = 0;  // Variable to count negative numbers

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {

        // If an element is negative
        if (arr[i] < 0) {
            count++;  // Increase the counter
        }
    }

    // Return total negative count
    return count;
}

// Storing result and printing it
let negativeCount = countNegativeNumbers(mixedArray);
console.log(negativeCount);  // Output: 5



// ------------------------------------------------------------
// 3. Function to find the largest number in an array
// ------------------------------------------------------------

let largestArray = [5, 10, 200, 500, 20, 29, 50];

function findLargest(arr) {

    let max = arr[0];  // Assume the first element is the largest

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {

        // If current element is greater than max
        if (arr[i] > max) {

            // Update max to the new largest number
            max = arr[i];
        }
    }

    // Return the largest number found
    return max;
}

// Testing the function
let largestValue = findLargest(largestArray);
console.log(largestValue);   // Output: 500



// ------------------------------------------------------------
// 4. Function to find the smallest number in an array
// ------------------------------------------------------------

let smallestArray = [5, 10, 200, 500, 20, 29, 50];

function findSmallest(arr) {

    let min = arr[0];  // Assume the first element is the smallest

    // Loop through each array element
    for (let i = 0; i < arr.length; i++) {

        // If current element is smaller than 'min'
        if (arr[i] < min) {

            // Update min to new smallest number
            min = arr[i];
        }
    }

    // Return the smallest number found
    return min;
}

// Testing the function
let smallestValue = findSmallest(smallestArray);
console.log(smallestValue);  // Output : 5
