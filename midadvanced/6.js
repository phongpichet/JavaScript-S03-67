function longestValidParentheses(s) {
    let stack = [-1]; // Initialize the stack with -1 to help calculate lengths easily
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // Push the index of '(' to the stack
            stack.push(i);
        } else {
            // Pop the top index when encountering ')'
            stack.pop();

            if (stack.length > 0) {
                // Calculate the length of valid parentheses
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            } else {
                // If the stack is empty, push the current index as the base
                stack.push(i);
            }
        }
    }

    return maxLength;
}

// Test cases
console.log(longestValidParentheses("(()")); // Output: 2
console.log(longestValidParentheses(")()())")); // Output: 4
console.log(longestValidParentheses("()))))(()())(")); // Output: 6
