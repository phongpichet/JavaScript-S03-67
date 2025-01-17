function simplePair(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] * arr[j] === n) {
          return [arr[i], arr[j]];
        }
      }
    }
    return null;
  }
  
  // Examples
  console.log(simplePair([1, 2, 3], 3)); // Output: [1, 3]
  console.log(simplePair([1, 2, 3], 6)); // Output: [2, 3]
  console.log(simplePair([1, 2, 3], 9)); // Output: null
  