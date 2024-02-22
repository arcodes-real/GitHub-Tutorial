
// return only names of students in caps

let students = [
    {name: "Piyush", roll: 31, marks: 80},
    {name: "Jenny", roll: 15, marks: 69},
    {name: "Kaushal", roll: 16, marks: 35},
    {name: "Dilpreet", roll: 7, marks: 55},
    
]

// using .map()

const names = students.map((student) => {return (student.name.toUpperCase())});
console.log(names);

// using for loop

// const names = [];
// for(let i = 0; i<students.length; i++){
//     names.push(students[i].name.toUpperCase());
// }
// console.log(names);
