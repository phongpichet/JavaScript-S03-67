function isAdditive(s) {
    // Helper function to check if a number has leading zeros
    const hasLeadingZeros = num => num.length > 1 && num[0] === '0';
  
    // Try all possible ways to split the string into at least 3 numbers
    for (let i = 1; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
        // Split the string into three parts based on the current indices
        let num1 = s.slice(0, i);
        let num2 = s.slice(i, j);
        let num3 = s.slice(j);
  
        // Skip if any part has leading zeros
        if (hasLeadingZeros(num1) || hasLeadingZeros(num2) || hasLeadingZeros(num3)) {
          continue;
        }
  
        let n1 = BigInt(num1);
        let n2 = BigInt(num2);
  
        // Start checking the sequence after the initial split
        while (num3.length > 0) {
          let nextNum = (n1 + n2).toString();
          
          // Check if the next number in the sequence matches the next part of the string
          if (!num3.startsWith(nextNum)) {
            break;
          }
  
          // Update the variables for the next iteration
          num3 = num3.slice(nextNum.length);
          n1 = n2;
          n2 = BigInt(nextNum);
        }
  
        // If the remaining part of the string is empty, we've found a valid sequence
        if (num3.length === 0) {
          return true;
        }
      }
    }
    
    return false; // Return false if no additive sequence is found
  }
  
  // Test cases
  console.log(isAdditive("112358"));    // true
  console.log(isAdditive("129881000")); // true
  console.log(isAdditive("123456789")); // false
  console.log(isAdditive("300045007500")); // true
  