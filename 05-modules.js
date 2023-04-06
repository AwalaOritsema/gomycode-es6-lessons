// Modularization in JavaScript (and other languages) simply means division of labor between multiple files

// Modules: modules are simply JavaScript files that are imported into other JavaScript files

// HOW TO CREATE MODULES

// Import/Export

// If you wish to create a module (a file which content is available to other files), you need to export the conntent (data) that should be accessible from the file

// Types of exports

// 1. Named exports

export const randomNumber = 78

export const students = [
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

// 2. Default exports

const moreData = { name: "John Doe" }

export const anotherData = { name: "Mary Jane" }

// module.exports = {
//   randomNumber: randomNumber,
//   students: students,
//   anotherData: anotherData,
// }

// module.exports = moreData

export default moreData

// {
//   randomNumber: randomNumber,
//   students: students
// }

// export default function callMe(name) {
//   console.log(`Calling ${name}!`)
// }
