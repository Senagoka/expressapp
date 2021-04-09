const express = require("express");

const students = require("./studentsname");

const app = express();

// home route
app.get("/", (req, res) => {
  res.send("welcome to our students api");
});

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
