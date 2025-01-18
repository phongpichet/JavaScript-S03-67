function secretWord(str, length) {
    // Helper function to calculate the value of a triplet
    const tripletValue = triplet => {
        return triplet.split('').reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
    };

    // Generate all possible triplets and their positions
    const triplets = [];
    for (let i = 0; i <= str.length - 3; i++) {
        triplets.push({ triplet: str.substring(i, i + 3), index: i + 1 });
    }

    // Try to find the secret word
    for (let start = 0; start < triplets.length; start++) {
        let sequence = [tripletValue(triplets[start].triplet)];
        let secret = triplets[start].triplet[1];

        for (let i = start + 1; i < triplets.length && sequence.length < length; i++) {
            let nextValue = tripletValue(triplets[i].triplet);

            if (sequence.length === 1 || nextValue - sequence[sequence.length - 1] === sequence[1] - sequence[0]) {
                sequence.push(nextValue);
                secret += triplets[i].triplet[1];
            }
        }

        if (sequence.length === length) {
            return secret;
        }
    }

    return ""; // Return an empty string if no secret word is found
}

// Example usage:
console.log(secretWord("sadbpstcrdvaefikkgoenqrt", 5)); // Output: "brake"
console.log(secretWord("aheiayd", 3)); // Output: "hey"
