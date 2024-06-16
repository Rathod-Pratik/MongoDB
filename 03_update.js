//update only one person data base
db.student.updateOne({Name:'Pratik Rathod'},{$set : {Class:'C'}})

//update all person data
db.student.updateMany({Course:'BCA'},{$set : {Course:'BBA'}})