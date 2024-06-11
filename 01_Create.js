//use use function to select database
//use is function name check commend.js

//this query insert only one person data
db.student.insertOne({
  Name: "Pratik Rathod",
  Course: "BCA",
  RollNo: 45,
  Class: "B",
});

//this query insert many person data
db.student.insertMany([
  {
    Name: "Pratik Rathod",
    Course: "BCA",
    RollNo: 45,
    Class: "B",
  },
  {
    Name: "Mohit",
    Course: "BCA",
    RollNo: 28,
    Class: "A",
  },
  {
    Name: "Anish",
    Course: "BCA",
    RollNo: 46,
    Class: "B",
  }
]);
