// Write a function to find the second largest number in an array.

let newArray = [100, 200, 500, 600, 1000, 900, 1200, 1200, 500];

function secondLargest(arr) {
    // If the array has fewer than 2 elements, a second largest can't exist
    if (arr.length < 2) {
        return null;
    }

    // Initialize two variables to hold the largest and second largest values
    let firstLargest = -Infinity;     // Holds the largest number
    let secondLargest = -Infinity;    // Holds the second largest number

    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {

        // If the current element is greater than the largest number found so far
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest; // Update second largest before replacing first
            firstLargest = arr[i];        // Update the largest number
        }

        // If current element is not equal to the largest but greater than second largest
        else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];       // Update second largest
        }
    }

    // Return the second largest number found
    return secondLargest;
}

// Calling the function and logging the result
let result = secondLargest(newArray);
console.log(result);  // Output: 1000