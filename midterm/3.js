function capToFront(str) {
    const upperCase = str.split('').filter(char => char === char.toUpperCase());
    const lowerCase = str.split('').filter(char => char === char.toLowerCase());
    return upperCase.join('') + lowerCase.join('');
  }
  
  // Examples
  console.log(capToFront("hApPy")); // Output: "APhpy"
  console.log(capToFront("moveMENT")); // Output: "MENTmove"
  console.log(capToFront("shOrtCAKE")); // Output: "OCAKEshrt"