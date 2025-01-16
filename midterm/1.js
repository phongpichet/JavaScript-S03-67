function numberSplit(number) {
    const half1 = Math.floor(number / 2);
    const half2 = number - half1;
    return [half1, half2];
}

// Examples
console.log(numberSplit(4));  // Output: [2, 2]
console.log(numberSplit(10)); // Output: [5, 5]
console.log(numberSplit(11)); // Output: [5, 6]
console.log(numberSplit(-9)); // Output: [-5, -4]
