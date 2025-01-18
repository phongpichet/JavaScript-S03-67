function frequencySort(str) {
    // Create a frequency map for the characters in the string
    const freqMap = {};
    for (const char of str) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    // Convert the map to an array of characters and sort it
    return Object.keys(freqMap)
        .sort((a, b) => {
            // Sort by frequency (descending)
            if (freqMap[b] !== freqMap[a]) {
                return freqMap[b] - freqMap[a];
            }
            // Sort by case (uppercase first)
            if (a.toLowerCase() === b.toLowerCase()) {
                return a < b ? -1 : 1;
            }
            return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
        })
        // Repeat characters by frequency and join them into a string
        .map(char => char.repeat(freqMap[char]))
        .join('');
}

// Test cases
console.log(frequencySort("tree"));    // "eert"
console.log(frequencySort("cccaaa")); // "aaaccc"
console.log(frequencySort("Aabb"));   // "bbAa"
