function removeDups(arr) {
    let uniqueArray = [];
    arr.forEach(item => {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    });
    return uniqueArray;
  }
  
  // Test cases
  console.log(removeDups([1, 0, 1, 0])); // [1, 0]
  console.log(removeDups(["The", "big", "cat"])); // ["The", "big", "cat"]
  console.log(removeDups(["John", "Taylor", "John"])); // ["John", "Taylor"]
  