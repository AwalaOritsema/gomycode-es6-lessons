// Array spreading and object destructuring

// Array spreading
const people = ["Dan", "Joe", "Finn", "John"]
const morePeople = ["Israel", "Johan", "Donalds"]
// const peopleCopy = people.map((item) => item)
const peopleCopy = ["Michael", ...people, ...morePeople] // destructure people array to get all its elements

// console.log(people)
// console.log(peopleCopy)

// Object destructuring
const student = { id: 1, name: "John Doe", score: 76 }
const studentCopy = { name: "Michael Peter", ...student, hobby: "anime" }

// console.log(student)
// console.log(studentCopy)
