const express = require("express");
const userControllers = require("../controller/user");

const router = express.Router();

router.post("/sign-up",userControllers.signup);
//router.post("/login" , userControllers.login);


module.exports = router;