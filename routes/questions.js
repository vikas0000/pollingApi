
//import
const express = require("express");
//import
const router = express.Router();
//import
const questionController = require("../controllers/questionController");

//routes
router.post("/create", questionController.create_ques);

router.get("/:id", questionController.listQues);

router.post("/:id/options/create", questionController.createOpt);

router.delete("/:id/delete", questionController.deleteQues);

//export
module.exports = router;