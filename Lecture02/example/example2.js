function equation(equationString) {
    try {

        const result = eval(equationString);

        if (typeof result === "number" && !isNaN(result)) {
            return result;
        } else {
            throw new Error("Invalid calculation.");
        }
    } catch (error) {
        console.error("Error evaluating the equation:", error.message);
        return null;
    }
}


console.log(equation("1+1"));       
console.log(equation("7*4-2"));     
console.log(equation("1+1+1+1+1")); 
