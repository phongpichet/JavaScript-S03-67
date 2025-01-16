function highestDigit(number) {
    return Math.max(...number.toString().split('').map(Number));
  }
  
  // Examples
  console.log(highestDigit(379));   // Output: 9
  console.log(highestDigit(2));     // Output: 2
  console.log(highestDigit(377401)); // Output: 7
  