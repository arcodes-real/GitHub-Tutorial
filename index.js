
// return only names of students in caps

let students = [
    {name: "Piyush", roll: 31, marks: 80},
    {name: "Jenny", roll: 15, marks: 69},
    {name: "Kaushal", roll: 16, marks: 35},
    {name: "Dilpreet", roll: 7, marks: 55},
    
]

const student = students.map((stud) => {return (stud.name)});
const studentNameInCaps = student.map((item)=>{return item.toUpperCase()});
console.log(studentNameInCaps);