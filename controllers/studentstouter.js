const express = require("express");

const {
    getAllstudents,
    getAstudent,
    createStudents,
    deletestudent,
    updateAstudent,
} = require("../controllers/studentscontrollers");

const router = express.router();

router.route("/students/api").get(getAllstudents).post(createstudents);
router.route("/students/api").get(getAstudent).delete(deleteAstudent);


module.exports = router;