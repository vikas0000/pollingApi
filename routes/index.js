
//import
const express = require("express");
const router = express.Router();

//making router
router.use("/questions", require("./questions"));

router.use("/options", require("./options"));

//export
module.exports = router;