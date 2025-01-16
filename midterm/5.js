function getBudgets(people) {
    return people.reduce((sum, person) => sum + person.budget, 0);
  }
  
  // Example usage:
  console.log(getBudgets([
    {name: "john", age: 21, budget: 23000},
    {name: "Steave", age: 32, budget: 40000},
    {name: "Martin", age: 16, budget: 2700}
  ])); // Output: 65700
  
  console.log(getBudgets([
    {name: "john", age: 21, budget: 29000},
    {name: "Steave", age: 32, budget: 32000},
    {name: "Martin", age: 16, budget: 1600}
  ])); // Output: 62600
  