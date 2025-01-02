function countString(input, type) {
    if (typeof input !== "string" || !["w", "c", "v"].includes(type)) {
        throw new Error("Invalid parameter");
    }

    switch (type) {
        case "w": // นับจำนวนคำ
            return input.trim().split(/\s+/).filter(word => word).length;
        case "c": // นับจำนวนตัวอักษร (ไม่รวมช่องว่าง)
            return input.replace(/\s+/g, "").length;
        case "v": // นับจำนวนสระ
            return (input.match(/[aeiouAEIOU]/g) || []).length;
        default:
            throw new Error("Invalid type");
    }
}

// ตัวอย่างการใช้งาน
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8

module.exports = countString;
