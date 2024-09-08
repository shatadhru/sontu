// main.route.js

const express = require("express");
const router = express.Router();
const {about,signup,login,contact,userdata} = require("../controllers/main.controller.js");

router.get("/about", about);
router.get("/contact", contact);
router.get("/login", login);
router.get("/signup", signup);

router.post("/signup",userdata)


module.exports = router;
