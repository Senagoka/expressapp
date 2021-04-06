const student = require("");
const students = require("../demydata");

// get All students
const getAllstudents = (req, res) => {
    res.json(students);
};

// get a single products
const getAproduct = (req, res) => {
    const age = req.params.age;
    const students = students.some((p) => p.age === age);

    if (students) {
        res.json(students.filter((student) => products.age === age));
    } else {
        res.ststus(404).filter({ message: "not found" });
    }
};

// delete a single products

const deleteStudents = (req, res) => {
    const age = req.params.age;
    const students = students.some((p) => p.age === age);
    
    if (students) {
      res.json({
        msg: `students delete ${age}`,
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

const updateproducts = (req, res) => {
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
  getAstudents,
  deleteAstudent,
  createStudents,
  updateAstudents,
};