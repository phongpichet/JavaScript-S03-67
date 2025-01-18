function jumpingFrog(n, stones) {
    // Array to track the minimum number of jumps to each stone
    let jumps = Array(n).fill(Infinity);
    jumps[0] = 1;  // Starting point: frog is on stone 0

    for (let i = 0; i < n; i++) {
        if (jumps[i] === Infinity) continue;  // Skip if this stone is unreachable

        let jumpLength = stones[i];

        // Try jumping forward
        let forwardJump = i + jumpLength;
        if (forwardJump < n && jumps[i] + 1 < jumps[forwardJump]) {
            jumps[forwardJump] = jumps[i] + 1;
        }

        // Try jumping backward
        let backwardJump = i - jumpLength;
        if (backwardJump >= 0 && jumps[i] + 1 < jumps[backwardJump]) {
            jumps[backwardJump] = jumps[i] + 1;
        }
    }

    // Check if it's possible to reach the far bank
    for (let i = 0; i < n; i++) {
        if (i + stones[i] >= n) {
            return jumps[i] + 1;  // Return number of jumps plus one for the final jump to the far bank
        }
    }

    return "no chance :-(";  // If no valid path exists to the far bank
}

// Test cases
console.log(jumpingFrog(5, [1, 1, 1, 1, 1])); // Expected output: 6
console.log(jumpingFrog(5, [1, 3, 1, 1, 1])); // Expected output: 4
console.log(jumpingFrog(5, [1, 1, 0, 1, 1])); // Expected output: "no chance :-("
