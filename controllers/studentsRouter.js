const express = require("express");

const {
  getAllstudents,
  getAstudent,
  createStudents,
  deleteAstudent,
  updateAstudent,
} = require("./controllers/studentscontrollers");

const router = express.Router();

router.route("/restapi/v1/students").get(getAllstudents).post(createStudents);
router
  .route("/restapi/v1/students/:age")
  .get(getAstudent)
  .delete(deleteAstudent)
  .put(updateAstudent);

module.exports = router; 
