//importing mongoose
const mongoose = require("mongoose");

//make the connection with mongoose
mongoose.connect("mongodb://localhost/polling_api");

const dataBase = mongoose.connection;

//check error in connection and display message
dataBase.on("error", console.error.bind(console, "Error connecting to DB"));

// if connected then display message 
dataBase.once("open", function(){
    console.log("Database connection successfull!!");
});