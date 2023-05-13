
let students = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 }
];


const PrintStudentbyMap = () => {
  const studentsWithMarksOver50 = students
    .filter(student => student.marks > 50)
    .map(student => student.name);
  console.log(studentsWithMarksOver50);
};


const PrintStudentbyForEach = () => {
  students.forEach(student => {
    if (student.marks > 50) {
      console.log(student.name);
    }
  });
};


const addData = () => {
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  students.push(newStudent);
  console.log(newStudent);
};


const removeFailedStudent = () => {
  students = students.filter(student => student.marks >= 50);
  console.log(students);
};


const ConcatenateArray = () => {
  const newStudents = [
    { id: 5, name: "alice", age: "21", marks: 90 },
    { id: 6, name: "bob", age: "22", marks: 70 },
    { id: 7, name: "charlie", age: "23", marks: 60 }
  ];
  students = students.concat(newStudents);
  console.log(students);
};
