//import
const mongoose = require("mongoose");

//create the schema
const questSchema = new mongoose.Schema({
    //create the structure
    QUESTION:{
        type: String,
        required: true
    },
    OPTIONS:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Option"
        }
    ]

});

//create the model
const Question = mongoose.model("Question", questSchema);
//export
module.exports = Question;