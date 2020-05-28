//import
const mongoose = require("mongoose");

//ceate the schema
const optionSchema = new mongoose.Schema({

    QUESTION:{
        type: mongoose.Schema.ObjectId,
        ref: "Question"
    },
    TEXT:{
        type: String
    },
    VOTE:{
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