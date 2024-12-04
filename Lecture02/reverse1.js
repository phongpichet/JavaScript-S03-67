function reverseString(value){
    let reverseString="";

    value.split("").forEach((char) => {
        reversedValue = char + reverseString;
    });

    return reversedValue;
}

console.log(reverseString("Reverse Me"));
