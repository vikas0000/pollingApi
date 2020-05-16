//Import model
const express = require("express");

const router = express.Router();

//Import controllers
const optionController = require("../controllers/optionController");

//create routes
router.delete("/:id/delete", optionController.deleteOption);

router.post("/:id/add_vote", optionController.addVote);
console.log("option route");
//export
module.exports = router;