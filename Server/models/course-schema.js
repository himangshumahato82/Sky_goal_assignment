const mongoose = require("mongoose");
const course_schema = new mongoose.Schema({
  title: String,
  icon: {
    type: String,
    unique: true,
  },
});
const CourseModel = mongoose.model("course", course_schema);
module.exports = CourseModel;
