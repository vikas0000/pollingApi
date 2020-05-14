
//import
const express = require("express");
const router = express.Router();

//making router
router.use("/questions", require("./questions"));
//export
module.exports = router;