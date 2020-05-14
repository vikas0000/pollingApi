//import
const mongoose = require("mongoose");
//create the schema
const questionSchema = new mongoose.Schema({
    //create the structure
    question:{
        type: String,
        required: true
    }

});

const Question = mongoose.model("Question", questionSchema);
//export
module.exports = Question;