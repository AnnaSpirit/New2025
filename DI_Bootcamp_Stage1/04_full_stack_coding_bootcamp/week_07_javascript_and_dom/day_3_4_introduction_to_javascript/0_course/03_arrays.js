// ARRAYS 

let student1 = 'Harry'
let student2 = 'Hermione'
let student3 = 'Ron'

let students = [student1,student2,student3]

console.log(students)
console.log(typeof(students));
console.log(students[1])
console.log(students.length)

students[2] = 'Luna'
console.log(students)

// ARRAY METHODS
students.push('Chon')
console.log(students)

students.pop()
console.log(students)

students.shift()
console.log(students)

students.unshift('Draco')
console.log(students)

students.splice(0,1, 'Gini', 'Jorge')
console.log(students)

let sliced_students = students.slice(1, 4)
console.log(sliced_students)
