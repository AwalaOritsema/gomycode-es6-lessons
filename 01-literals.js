// Literals are syntactic ways to declare/define variables of various types

// String literal -> used to define strings: use single quotes or double quotes

// string literal ES6+
const firstName = "John"

// string constructor ES5-
const lastName = new String("Doe")

// console.log(firstName)
// console.log(lastName.toString())

// types
// string
// number
// boolean
// array
// object

// array literal ES6+
const people = ["Dan", "Joe", "Ana", "John", "Doe", "Finn"]

// array constructor ES5-
const persons = new Array("Dan", "Joe", "Ana", "John", "Doe", "Finn")

// console.log(people)
// console.log(persons)

// number literal
const myNumber = 100

// number constructor
const otherNumber = new Number(89)

// console.log(myNumber)
// console.log(otherNumber.toString())

const wrongNumber = "100"
const rightNumber = Number(wrongNumber)

// console.log(typeof wrongNumber)
// console.log(typeof rightNumber)

// string interpolation -> insertion of different values (strings or other data types in a string)
const month = "May"
const date = 31

const message = `Hello there, today is ${month} ${date}. It's always hot in ${month}, except in ${month} ${date}. This day, ${month} ${date}, is known as the cold day.`

console.log(message)
