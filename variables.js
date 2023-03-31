// Declaring variables in JavaScript version 6 (es6/es2015)

// Always use the const keyword to declare variables
const firstName = "John"
// firstName = "Dan" // this will cause an error: you should not assign a new value to a constant variable

// ...except if you really need to change the value. In that case, you can use the let keyword
let lastName = "Doe"
lastName = "Finn" // This is acceptable because the variable is NOT constant
// console.log(lastName)

// Before ES6, the var keyword was used
var otherName = "Alex"
otherName = "Dan" // This is acceptable because the variable is NOT constant
// console.log(otherName)

// Difference between let/const and var
const people = ["Dan", "Joe", "Alex", "John", "Finn"]

for (const person of people) {
  // This variable exists only inside this for-loop
  let personGreeting = person + ", hey!"
  // console.log(personGreeting)
}

// Trying to use the for-loop variable outside of the loop won't work
// console.log(personGreeting)

// However, if the variable inside the loop was declared with the var keyword, it would be accessible outside its scope
for (const person of people) {
  // This variable exists in its scope (the for-loop) as well as outside the for-loop
  var personGreeting = person + ", hi!"
  // console.log(personGreeting)
}

// Trying to use the for-loop variable outside of the loop will work
// console.log(personGreeting, "outside")

// const variables cannot be redeclared (raises an error) but can be modified if they are objects
// const personName = "Michael"
// personName = "Peter"
// console.log(personName)

const fruits = ["Apple", "Orange", "Pear", "Strawberries", "Pineapple"]
fruits.push("Mango")
// console.log(fruits)
