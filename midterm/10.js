function isValidIP(ip) {
    // Split the string by the dots
    const segments = ip.split(".");

    // Valid IPv4 address must have exactly 4 segments
    if (segments.length !== 4) {
        return false;
    }

    // Check each segment
    for (const segment of segments) {
        // Segment must not be empty, have leading zeros, or contain non-numeric characters
        if (!/^[1-9]\d*$|^0$/.test(segment)) {
            return false;
        }

        const num = Number(segment);

        // Segment must be between 1 and 255 (inclusive)
        if (num < 1 || num > 255) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log(isValidIP("1.2.3.4"));         // true
console.log(isValidIP("1.2.3"));           // false
console.log(isValidIP("1.2.3.4.5"));       // false
console.log(isValidIP("123.45.67.89"));    // true
console.log(isValidIP("123.456.78.90"));   // false
console.log(isValidIP("123.045.067.089")); // false
