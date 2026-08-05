const students = [
  {
    id: 1,
    name: "Piyas",
    age: 22,
    marks: 85,
    city: "Dhaka",
    isPassed: true,
  },
  {
    id: 2,
    name: "Rahim",
    age: 20,
    marks: 45,
    city: "Khulna",
    isPassed: false,
  },
  {
    id: 3,
    name: "Karim",
    age: 24,
    marks: 72,
    city: "Rajshahi",
    isPassed: true,
  },
  {
    id: 4,
    name: "Sakib",
    age: 21,
    marks: 60,
    city: "Dhaka",
    isPassed: true,
  },
  {
    id: 5,
    name: "Nadia",
    age: 23,
    marks: 35,
    city: "Chattogram",
    isPassed: false,
  },
];

console.log("===============================");
// task 1
//সব student-এর নাম console-এ print করো।
for (const student of students) {
  console.log(student.name);
}

console.log("===============================");
// task 2
// সব student-এর age print করো।
for (const age of students) {
  console.log(age.age);
}

console.log("===============================");
// task 3
// যাদের isPassed true তাদের নাম print করো।
for (const pass of students) {
  if (pass.isPassed === true) {
    console.log(pass.name);
  }
}

console.log("===============================");
// task 4
// সব student-এর marks print করো।
for (const student of students) {
  console.log(student.marks);
}

console.log("===============================");
// task 5
//Dhaka-এর student-দের নাম print করো।
for (const student of students) {
  if (student.city === "Dhaka") {
    console.log(student.name);
  }
}

console.log("===============================");
// task 6
// সব student-এর সংখ্যা বের করো।
console.log(`Total Student : ${students.length}`);

console.log("===============================");
// Task 7
// প্রথম student-এর নাম print করো।
let firstStudent = students[0].name;
console.log(firstStudent);

console.log("===============================");
// task 8
//শেষ student-এর city print করো।
let cityOfLastStudent = students[students.length - 1].city;
console.log(cityOfLastStudent);

console.log("===============================");
// Task 9
// যাদের marks 50-এর কম তাদের নাম print করো।

for (const student of students) {
  if (student.marks < 50) {
    console.log(student.name);
  }
}
console.log("===============================");

// Task 10
// যাদের age 22 বা তার বেশি তাদের print করো।
for (const student of students) {
  if (student.age > 22) {
    console.log(student.name);
  }
}

console.log("===============================");

// Task 11
// সব passed student-এর মোট সংখ্যা বের করো।

let passedStudent = students.filter((students) => {
  if (students.isPassed === true) {
    return students;
  }
});
console.log("Passed Student :", passedStudent.length);
console.log("===============================");

// Task 12
// সব failed student-এর মোট সংখ্যা বের করো।
let failedStudent = students.filter((student) => {
  if (student.isPassed === false) {
    return student;
  }
});
console.log("Failed Student :", failedStudent.length);
console.log("===============================");

// Task 13
// সব student-এর marks-এর যোগফল বের করো।
let totalMarkAllStudents = students.reduce((acc, student) => {
  return acc + student.marks;
}, 0);
console.log("Total Mark :", totalMarkAllStudents);
console.log("===============================");

// Task 14
// Average marks বের করো।

let averageMark = totalMarkAllStudents / students.length;
console.log("Average Mark :", averageMark);
console.log("===============================");

// Task 15
// সবচেয়ে বেশি marks কার সেটা বের করো।

function hightMark(obj) {
  let hMark = obj[0].marks;
  for (const student of obj) {
    if (hMark < student.marks) {
      hMark = student.marks;
    }
  }
  return `Hight Mark : ${hMark}`;
}
console.log(hightMark(students));
console.log("===============================");

// Task 16
// সবচেয়ে কম marks কার সেটা বের করো।

function lowestMark(obj) {
  let lowMark = obj[0].marks;
  for (const student of students) {
    if (lowMark > student.marks) {
      lowMark = student.marks;
    }
  }
  return `Lowest Mark : ${lowMark}`;
}

console.log(lowestMark(students));
console.log("===============================");

// Task 17
// শুধু student-দের name নিয়ে নতুন array তৈরি করো (map() ব্যবহার করে)।

function studentNameArray(obj) {
  let studentName = obj.map((name) => name.name);
  return studentName;
}
console.log(studentNameArray(students));
console.log("===============================");

// Task 18
// শুধু passed student নিয়ে নতুন array তৈরি করো (filter())।

function passedStudentArray(obj) {
  let passedStudent = obj.filter((student) => {
    if (student.isPassed === true) {
      return student;
    }
  });
  return passedStudent;
}

console.log(passedStudentArray(students));
console.log("===============================");

// Task 19
// Dhaka-এর student-দের নিয়ে নতুন array তৈরি করো।

function dhakaStudents(obj) {
  let dhaka = obj.filter((student) => {
    if (student.city === "Dhaka") {
      return student;
    }
  });
  return dhaka;
}

console.log(dhakaStudents(students));
console.log("===============================");

function totalMarkStudents(obj) {
  let totalMark = obj.reduce((acc, student) => {
    return acc + student.marks;
  }, 0);
  return totalMark;
}
console.log(totalMarkStudents(students));
