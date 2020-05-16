
//import
const express = require("express");
//import
const router = express.Router();
//import
const questionController = require("../controllers/questionController");

//routes
router.post("/create", questionController.create_question);

router.get("/:id", questionController.listQuestion);

router.post("/:id/options/create", questionController.createOption);

router.delete("/:id/delete", questionController.deleteQuestion);

//export
module.exports = router;