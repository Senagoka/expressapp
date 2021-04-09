
const students = require("../studentsname");

// get All students
const getAllstudents = (req, res) => {
    res.json(students);
};

// get a single students
const getAstudent = (req, res) => {
    const age = req.params.age;
    const students = students.some((p) => p.age === age);

    if (students) {
        res.json(students.filter((student) => student.age === age));
    } else {
        res.ststus(404).filter({ message: "not found" });
    }
};

// delete a single student

const deleteAstudent = (req, res) => {
    const age = req.params.age;
    const students = students.some((p) => p.age === age);
    
    if (students) {
      res.json({
        msg: `student deleted ${age}`,
        students: students.filter((p) => p.age !== age),
      });
    }

}

// create a new students

const createStudents = (req, res) => {
    const news = {
        name: req.body.name,
        age: req.body.age,
        
    };
    students.push(news);
    res.json(students);
};


// update students

const updateStudents = (req, res) => {
    const name = req.params.name;
    const students = students.some((p) => p.name === name);

    if (students) {
        students.forEach((p) => {
            if (p.name === name) {
                (p.name = req.body.name ? req.body.name : p.name)
                    (p.age = req.body.age ? req.body.age : p.age)
            }
        });
        res.json(students);
    } else {
        res.status(404).json({ message: "not found" })
    }
};


module.exports = {
  getAllstudents,
  getAstudent,
  deleteAstudent,
  createStudents,
  updateStudents,
};