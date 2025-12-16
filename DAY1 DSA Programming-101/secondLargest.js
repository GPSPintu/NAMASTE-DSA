// Write a function to find the second largest number in an array.

let newArray = [100, 200, 500, 600, 1000, 900, 1200, 1200, 500];

function secondLargest(arr) {

    // If the array has fewer than 2 elements, second largest doesn't exist
    if (arr.length < 2) {
        return null;
    }

    // Variables to store the largest and second largest numbers
    let firstLargest = -Infinity;      // Stores the largest number found so far
    let secondLargest = -Infinity;     // Stores the second largest number found so far

    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {

        // If the current element is greater than the largest number
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;  // Old largest becomes second largest
            firstLargest = arr[i];         // Update largest to current element
        }

        // If the element is smaller than the largest but greater than second largest
        else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];        // Update second largest
        }
    }

    // Return the second largest number
    return secondLargest;
}

// Calling the function and logging the result
let result = secondLargest(newArray);
console.log(result);  // : 1000
