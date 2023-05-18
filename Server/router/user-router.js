const express = require("express");
const { REGISTER_USER, LOGIN_USER } = require("../controllers/user-controller");
const upload = require("../middleware/multer-middleware");
const Authorization = require("../middleware/Authorization-middleware");
const {
  Course_Controller,
  FIND_ALL_COURSES,
} = require("../controllers/course-controller");
const router = express.Router();
// POST || REGISTER USER
router.post("/register-user", upload.single("userImage"), REGISTER_USER);
// POST || LOGIN USER
router.post("/login-user", LOGIN_USER);
// GET || GET COURSE
router.get("/course", Authorization, Course_Controller);
router.get("/all-course", FIND_ALL_COURSES);
module.exports = router;
