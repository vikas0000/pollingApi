//import
const mongoose = require("mongoose");
//create the schema
const questionSchema = new mongoose.Schema({
    //create the structure
    question:{
        type: String,
        required: true
    },
    options:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Option"
        }
    ]

});
console.log("question model");
//create the model
const Question = mongoose.model("Question", questionSchema);
//export
module.exports = Question;