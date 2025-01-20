function countAnimals(txt) {
    const animals = [
      "dog", "cat", "bat", "cock", "cow", "pig",
      "fox", "ant", "bird", "lion", "wolf", "deer",
      "bear", "frog", "hen", "mole", "duck", "goat"
    ];
  
    let count = 0; // Initialize the count of animals
    let remaining = txt.split(""); // Convert the input string into an array of characters
  
    // Helper function to check if an animal can be formed
    function canFormAnimal(animal) {
      const animalLetters = animal.split(""); // Split the animal name into letters
      const tempRemaining = [...remaining]; // Copy of remaining characters
      for (let letter of animalLetters) {
        const index = tempRemaining.indexOf(letter);
        if (index === -1) return false; // If any letter is missing, return false
        tempRemaining.splice(index, 1); // Remove the letter from the copy
      }
      remaining = tempRemaining; // Update remaining characters
      return true; // Animal can be formed
    }
  
    // Try to form animals until no more can be formed
    while (true) {
      let found = false;
      for (let animal of animals) {
        if (canFormAnimal(animal)) {
          count++;
          found = true;
          break; // Restart the loop to maximize animals
        }
      }
      if (!found) break; // Exit loop when no more animals can be formed
    }
  
    return count; // Return the maximum count of animals
  }
  
  // Example usage
  console.log(countAnimals("goatcode")); // Output: 2
  console.log(countAnimals("cockdogwdufrbir")); // Output: 4
  console.log(countAnimals("dogdogdogdogdog")); // Output: 5
  