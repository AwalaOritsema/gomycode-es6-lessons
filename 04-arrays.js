// An array is a sequence of values stored in contiguous memory locations
const people = ["Dan", "Joe", "Finn", "John", "Alex", "Jacob", "Dave"]

// Array operations
// 1. Information => access of array length, indices of elements, etc.

// Getting the length of an array
// console.log(people.length)

// Get the index (or position) of an element
// console.log(people.indexOf("Finn"))

// In case an element appears multiple times, you can also get the index of the last occurrence
// console.log(people.lastIndexOf("Finn"))

// 2. Mutation => addition, removal, modification of array elements

// adding to an array
// console.log(people.push("Michael"))
// console.log(people)

// removing an element from an array
// console.log(people.pop())
// console.log(people)

// modifying an existing element
// people[people.indexOf("Dave")] = "David"
// console.log(people)

// 3. Iterative operations => filter, modify

// Iterate over all elements of an array
// people.forEach((item) => console.log(`Hey, ${item}!`))

// Iterate and filter elements of an array
// const filteredPeople = people.filter((item) => item.includes("J"))

// filteredPeople.forEach((item) => console.log(item))

// console.log("=====================================")

// people.forEach((item) => console.log(item))

const students = [
  { id: 1, name: "John Doe", score: 76 },
  { id: 2, name: "Alex Smith", score: 89 },
  { id: 12, name: "Peter Pan", score: 81 },
  { id: 21, name: "Finn Jacobs", score: 62 },
  { id: 18, name: "Joe Woods", score: 70 },
  { id: 204, name: "Sarah Williams", score: 64 },
  { id: 13, name: "Dave Russel", score: 54 },
  { id: 3, name: "Dan Peters", score: 91 },
  { id: 3, name: "Jane Peters", score: 91 },
  { id: 25, name: "Michael Adam", score: 81 },
  { id: 37, name: "Elvis Bradford", score: 83 },
  { id: 5, name: "James Tyson", score: 71 },
  { id: 4, name: "Grace Adlet", score: 66 },
  { id: 29, name: "Mary Johnson", score: 80 },
]

// students.forEach((student) => console.log(student.name))

// Filter students with scores less than 70
// const filteredStudents = students.filter((student) => student.score > 80)
// filteredStudents.forEach((student) => console.log(student.name, student.score))

// array map
// allows you to create a new array by using an existing array as precedent
// const newStudents = students.map((student) => {
//   const newStudent = student
//   newStudent.score = student.score - 10

//   return newStudent
// })

// console.log(newStudents)

// find an element in an array
// const foundStudent = students.find((student) => student.id === 3)
// console.log(foundStudent)

// const foundStudents = students.filter((student) => student.id === 3)
// console.log(foundStudents)

// array reduce method
// const totalScore = students.reduce(
//   (currentScore, student) => currentScore + student.score,
//   0
// )

// console.log(totalScore)

let totalScore = 0
students.forEach((student) => {
  totalScore += student.score
})
console.log(totalScore)
