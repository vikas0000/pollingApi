//import
const mongoose = require("mongoose");

//ceate the schema
const optionSchema = new mongoose.Schema({

    question:{
        type: mongoose.Schema.ObjectId,
        ref: "Question"
    },
    text:{
        type: String,
        unique: true
    },
    votes:{
        type: Number,
        default: 0
    },
    link_Vote:{
        type: String
    }
});


//create the model
const Option = mongoose.model("Option", optionSchema);

//export
module.exports = Option;