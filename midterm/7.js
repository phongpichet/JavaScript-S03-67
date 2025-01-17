function sumTwoSmallestNums(arr) {
    // Filter out negative numbers
    const positiveNumbers = arr.filter(num => num > 0);
    
    // Sort the positive numbers in ascending order
    positiveNumbers.sort((a, b) => a - b);
    
    // Return the sum of the two smallest numbers
    return positiveNumbers[0] + positiveNumbers[1];
  }
  
  // Examples
  console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); // Output: 7
  console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); // Output: 3453455
  console.log(sumTwoSmallestNums([2, 9, 6, -1])); // Output: 8
  console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])); // Output: 563
  console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); // Output: 4519
  