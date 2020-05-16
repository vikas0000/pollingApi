//initialize port
const port = 8000;

//import 
const express = require("express");
const dataBase = require("./config/mongoose");

const app = express();

app.use("/", require("./routes/index"));

//check for error
app.listen(port, function(err){
    if(err){console.log("Error in running server"); return;}
    console.log("Server is up and running at port", port);
});
