const express = require("express");
const { REGISTER_USER, LOGIN_USER } = require("../controllers/user-controller");
const upload = require("../middleware/multer-middleware");

const router = express.Router();
// POST || REGISTER USER
router.post("/register-user", upload.single("userImage"), REGISTER_USER);
// POST || LOGIN USER
router.post("/login-user", LOGIN_USER);

module.exports = router;
