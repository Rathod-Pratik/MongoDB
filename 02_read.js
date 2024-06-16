// use to fatch all data
db.student.find();

//use to find spacific data
db.student.find({"course":"BCA"})

db.student.find({Class:'B'})

db.student.find({RollNo:45,Course:'BCA'})

//use to find only one document
db.student.findOne({Class:'B'});